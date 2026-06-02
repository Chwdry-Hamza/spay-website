/**
 * Edge middleware for the Spay website. Three jobs:
 *
 *  1. Redirects   — resolve CMS-managed redirects (/api/redirects/all.json)
 *                   and 308 the visitor to the target.
 *  2. Noindex     — apply an `X-Robots-Tag: noindex, follow` header to search,
 *                   tag, and filtered (query-string) URLs per the `crawl`
 *                   setting, so thin/duplicate URLs stay out of the index.
 *  3. 404 forward — set the `x-spay-original-path` request header on every
 *                   passthrough so the custom not-found page can read (and log)
 *                   the path the visitor actually requested.
 *
 * The redirect table + crawl setting are fetched from the CMS and held in a
 * short-lived module cache so we don't call the API on every request.
 */
import { NextResponse, type NextRequest } from 'next/server';

const CMS_API_URL =
  process.env.SPAY_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:4000';

const ORIGINAL_PATH_HEADER = 'x-spay-original-path';
const CACHE_TTL_MS = 60_000;

type CrawlSetting = {
  noindexSearch?: boolean;
  noindexTags?: boolean;
  noindexFiltered?: boolean;
};
type RedirectRow = { from: string; to: string };

type Cache = {
  redirects: Map<string, string>;
  crawl: CrawlSetting;
  expires: number;
};

// Module-scope cache persists across invocations within an edge worker.
let cache: Cache | null = null;

async function loadConfig(): Promise<Cache> {
  if (cache && cache.expires > Date.now()) return cache;

  // Defaults match the CMS (all noindex toggles on); kept if the CMS is down.
  const next: Cache = {
    redirects: cache?.redirects ?? new Map(),
    crawl: cache?.crawl ?? {
      noindexSearch: true,
      noindexTags: true,
      noindexFiltered: true,
    },
    expires: Date.now() + CACHE_TTL_MS,
  };

  try {
    const [rRes, cRes] = await Promise.all([
      fetch(`${CMS_API_URL}/api/redirects/all.json`),
      fetch(`${CMS_API_URL}/api/public/settings/crawl`),
    ]);
    if (rRes.ok) {
      const data = (await rRes.json()) as { items?: RedirectRow[] };
      const map = new Map<string, string>();
      for (const row of data.items ?? []) {
        if (row.from && row.to) map.set(normalize(row.from), row.to);
      }
      next.redirects = map;
    }
    if (cRes.ok) {
      const crawl = (await cRes.json()) as CrawlSetting | null;
      if (crawl) next.crawl = { ...next.crawl, ...crawl };
    }
  } catch {
    // Keep stale/default config; never block the request on a CMS hiccup.
  }

  cache = next;
  return next;
}

/** Strip a trailing slash (except root) so '/x' and '/x/' match the same row. */
function normalize(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function isNoindexPath(
  pathname: string,
  search: string,
  crawl: CrawlSetting,
): boolean {
  const p = normalize(pathname);
  const hasQuery = search.length > 1; // more than just "?"
  const params = new URLSearchParams(search);

  // Search results: /search or any URL carrying ?q=
  if (crawl.noindexSearch !== false) {
    if (p === '/search' || p.startsWith('/search/') || params.has('q')) {
      return true;
    }
  }
  // Tag archives: /tag/* and /blog/tag/*
  if (crawl.noindexTags !== false) {
    if (
      p.startsWith('/tag/') ||
      p.startsWith('/blog/tag/') ||
      p === '/tag' ||
      p === '/blog/tag'
    ) {
      return true;
    }
  }
  // Filtered / faceted URLs: anything with a query string.
  if (crawl.noindexFiltered !== false && hasQuery) {
    return true;
  }
  return false;
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const { redirects, crawl } = await loadConfig();

  // 1. Redirects (match with and without trailing slash).
  const target = redirects.get(normalize(pathname));
  if (target) {
    const dest = /^https?:\/\//i.test(target)
      ? target
      : new URL(target, req.url).toString();
    return NextResponse.redirect(dest, 308);
  }

  // 3. Forward the originally-requested path for the 404 page to read/log.
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(ORIGINAL_PATH_HEADER, pathname + search);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  // 2. Noindex policy for search / tag / filtered URLs.
  if (isNoindexPath(pathname, search, crawl)) {
    res.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return res;
}

export const config = {
  // Run on page navigations only — skip Next internals, the API, and any
  // request for a file with an extension (assets, images, etc.).
  matcher: ['/((?!_next/|api/|.*\\.[\\w]+$).*)'],
};
