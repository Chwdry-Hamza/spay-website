/**
 * Typed client for the Spay CMS public API (Express, port 4000).
 *
 * All fetchers are server-side only (RSC / route handlers / middleware) and
 * read SPAY_API_URL. Endpoints under /api/public/* return only PUBLISHED
 * content; redirects + 404 logging live under /api/redirects + /api/logs-404.
 *
 * These types mirror the backend Mongoose models (Page / Post / Category /
 * Setting). They are intentionally read-only shapes — the website never writes.
 */

export const CMS_API_URL =
  process.env.SPAY_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:4000';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://spay.finance'
).replace(/\/$/, '');

// ─── Shared SEO / schema / performance sub-shapes ──────────────────

export type CmsSeo = {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  og?: { title?: string; description?: string; image?: string };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
};

export type CmsFaqItem = { q: string; a: string };

export type CmsStructuredData = {
  type?: 'none' | 'article' | 'faq' | 'service' | 'custom';
  faq?: CmsFaqItem[];
  service?: {
    name?: string;
    description?: string;
    serviceType?: string;
    areaServed?: string;
    priceRange?: string;
  };
  customJsonLd?: string;
};

export type CmsPerformance = {
  skipAnalytics?: boolean;
};

/** Per-page/post raw HTML/JS snippets injected on the public site. */
export type CmsCodeInjection = {
  header?: string;
  body?: string;
  footer?: string;
};

/** A Tiptap ProseMirror document node (loosely typed — see TiptapRenderer). */
export type TiptapNode = {
  type?: string;
  attrs?: Record<string, unknown>;
  content?: TiptapNode[];
  marks?: { type: string; attrs?: Record<string, unknown> }[];
  text?: string;
};
export type TiptapDoc = { type: 'doc'; content?: TiptapNode[] };

// ─── Documents ─────────────────────────────────────────────────────

export type CmsCategoryRef = {
  _id: string;
  name: string;
  slug: string;
  color?: string;
};

export type CmsPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  status: 'draft' | 'published' | 'scheduled';
  content?: TiptapDoc;
  cover?: string;
  /** Cover image's CMS alt text (populated from the linked Media). */
  coverMedia?: { alt?: string } | null;
  readTime?: number;
  category?: CmsCategoryRef | string | null;
  categoryName?: string;
  tags?: string[];
  seo?: CmsSeo;
  /**
   * JSON-LD. The CMS renamed this from `schema` — a Mongoose document already
   * owns that property name and the collision broke saving. `schema` stays
   * declared so a response from a backend that has not been redeployed still
   * type-checks; read both through `structuredDataOf()`.
   */
  structuredData?: CmsStructuredData;
  /** @deprecated Retired name. Read via `structuredDataOf()`. */
  schema?: CmsStructuredData;
  performance?: CmsPerformance;
  codeInjection?: CmsCodeInjection;

  /**
   * Which language this copy is actually in. The CMS falls back to English
   * when a translation is missing or too thin to serve, so this is not always
   * the locale that was asked for — check it before claiming a translation.
   */
  locale?: string;
  /** False when `locale` is a fallback rather than a real translation. */
  translated?: boolean;
  /** How much of the post the translation covers, 0–1. */
  coverage?: number;
  /** The locales this post is genuinely published in — what hreflang needs. */
  alternates?: string[];

  authorName?: string;
  publishedAt?: string | null;
  updatedAt?: string;
  createdAt?: string;
};

export type CmsPage = {
  _id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published' | 'scheduled';
  template?: string;
  content?: TiptapDoc;
  /** Structured section overrides for code-driven pages (e.g. the homepage). */
  sections?: Record<string, unknown> | null;
  /**
   * The language this response was asked for. `'en'` unless `?locale=` was sent.
   */
  locale?: string;
  /** Whether `translation` actually carries anything for that language. */
  translated?: boolean;
  /**
   * This page's translation for `locale`: one entry per English string, keyed
   * by a hash of it. Applied by `localiseSections` AFTER the defaults and the
   * CMS overrides have been merged — see the note there for why it cannot be
   * applied in the CMS.
   */
  translation?: Record<string, string>;
  excerpt?: string;
  seo?: CmsSeo;
  /**
   * JSON-LD. The CMS renamed this from `schema` — a Mongoose document already
   * owns that property name and the collision broke saving. `schema` stays
   * declared so a response from a backend that has not been redeployed still
   * type-checks; read both through `structuredDataOf()`.
   */
  structuredData?: CmsStructuredData;
  /** @deprecated Retired name. Read via `structuredDataOf()`. */
  schema?: CmsStructuredData;
  performance?: CmsPerformance;
  codeInjection?: CmsCodeInjection;
  featuredImage?: {
    url?: string;
    alt?: string;
    variants?: unknown;
    width?: number;
    height?: number;
  } | null;
  authorName?: string;
  publishedAt?: string | null;
  updatedAt?: string;
};

export type CmsCategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  postCount?: number;
  content?: string;
  seo?: { title?: string; description?: string };
  pageSize?: number;
  updatedAt?: string;
};

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

// ─── Settings ──────────────────────────────────────────────────────

export type SiteSeoSetting = {
  siteName?: string;
  titleTemplate?: string;
  defaultDescription?: string;
  defaultOgImage?: string;
  twitterHandle?: string;
  searchConsoleVerification?: string;
  organizationName?: string;
  sameAs?: string;
};

export type CrawlSetting = {
  noindexSearch?: boolean;
  noindexTags?: boolean;
  noindexFiltered?: boolean;
};

export type OrganizationSetting = {
  name?: string;
  legalName?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
};

export type AnalyticsSetting = {
  ga4Id?: string;
  gtmId?: string;
};

// ─── Sitemap / search / redirect shapes ────────────────────────────

export type SitemapEntry = {
  slug: string;
  title?: string;
  updatedAt?: string;
  publishedAt?: string | null;
  /**
   * Non-English locales this post is genuinely published and indexable in.
   * Each one is a separate URL in the sitemap; a locale that is really serving
   * the English text is deliberately absent.
   */
  locales?: string[];
};

export type SitemapCategoryEntry = { slug: string; updatedAt?: string };

export type SearchHit = {
  kind: 'page' | 'post';
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  score: number;
  categoryName?: string;
};

export type CmsRedirect = { _id: string; from: string; to: string };

// ─── Low-level fetch helper ────────────────────────────────────────

type FetchOpts = {
  /** ISR revalidate window in seconds. Default 60. */
  revalidate?: number;
  /** Pass-through to fetch cache (e.g. 'no-store' for dynamic routes). */
  cache?: RequestCache;
};

async function cmsFetch<T>(path: string, opts: FetchOpts = {}): Promise<T> {
  const url = `${CMS_API_URL}${path}`;
  const init: RequestInit & { next?: { revalidate: number } } = {};
  if (opts.cache) {
    init.cache = opts.cache;
  } else if (process.env.NODE_ENV !== 'production') {
    // Dev: never serve stale CMS content. Every render fetches fresh so edits
    // made in the CMS appear on the very next reload — no ISR window, no
    // dependency on the revalidate webhook. Production keeps ISR caching below
    // (fast pages) and relies on the backend's on-demand /api/revalidate calls
    // to purge instantly on save.
    init.cache = 'no-store';
  } else {
    init.next = { revalidate: opts.revalidate ?? 60 };
  }
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(`CMS ${res.status} for ${path}`);
  }
  return (await res.json()) as T;
}

/** Like cmsFetch but returns null on any error / 404 (for optional content). */
async function cmsFetchOrNull<T>(
  path: string,
  opts: FetchOpts = {},
): Promise<T | null> {
  try {
    return await cmsFetch<T>(path, opts);
  } catch {
    return null;
  }
}

const enc = (slug: string) => encodeURIComponent(slug);

// ─── Pages ─────────────────────────────────────────────────────────

/**
 * `?locale=xx`, or nothing at all for English.
 *
 * Omitted rather than sent as `en` on purpose: the two produce different cache
 * entries for the same bytes, and every existing caller asks for English.
 */
const localeQuery = (locale?: string) =>
  locale && locale !== 'en' ? `?locale=${encodeURIComponent(locale)}` : '';

export function getHomePage(locale?: string) {
  return cmsFetchOrNull<CmsPage | null>(`/api/public/home${localeQuery(locale)}`, {
    revalidate: 60,
  });
}

export function getPageBySlug(slug: string, locale?: string) {
  return cmsFetchOrNull<CmsPage>(
    `/api/public/pages/by-slug/${enc(slug)}${localeQuery(locale)}`,
    { revalidate: 60 },
  );
}

export async function getPages() {
  const data = await cmsFetchOrNull<{ items: CmsPage[] }>('/api/public/pages', {
    revalidate: 120,
  });
  return data?.items ?? [];
}

// ─── Posts ─────────────────────────────────────────────────────────

export function getPosts(params: {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
  /**
   * Serve the cards in this language. The CMS falls back to English per post,
   * so a locale with no translation yet returns a readable English list rather
   * than an empty one.
   */
  locale?: string;
} = {}) {
  const qs = new URLSearchParams();
  if (params.page) qs.set('page', String(params.page));
  if (params.limit) qs.set('limit', String(params.limit));
  if (params.category) qs.set('category', params.category);
  if (params.tag) qs.set('tag', params.tag);
  if (params.locale) qs.set('locale', params.locale);
  const q = qs.toString();
  return cmsFetch<Paginated<CmsPost>>(
    `/api/public/posts${q ? `?${q}` : ''}`,
    { revalidate: 60 },
  );
}

export function getPostBySlug(slug: string, locale?: string) {
  const q = locale ? `?locale=${encodeURIComponent(locale)}` : '';
  return cmsFetchOrNull<CmsPost>(`/api/public/posts/by-slug/${enc(slug)}${q}`, {
    revalidate: 60,
  });
}

// ─── Categories ────────────────────────────────────────────────────

export async function getCategories() {
  const data = await cmsFetchOrNull<{ items: CmsCategory[] }>(
    '/api/public/categories',
    { revalidate: 300 },
  );
  return data?.items ?? [];
}

export type CategoryWithPosts = Paginated<CmsPost> & { category: CmsCategory };

export function getCategoryBySlug(
  slug: string,
  params: { page?: number; limit?: number; locale?: string } = {},
) {
  const qs = new URLSearchParams();
  if (params.page) qs.set('page', String(params.page));
  if (params.limit) qs.set('limit', String(params.limit));
  if (params.locale) qs.set('locale', params.locale);
  const q = qs.toString();
  return cmsFetchOrNull<CategoryWithPosts>(
    `/api/public/categories/by-slug/${enc(slug)}${q ? `?${q}` : ''}`,
    { revalidate: 60 },
  );
}

// ─── Settings ──────────────────────────────────────────────────────

/**
 * `locale` is honoured only by the settings that carry prose — `seo` and
 * `organization`. For the rest the CMS ignores it and returns the same object,
 * so passing it is harmless; not passing it is simply the English form.
 */
export function getSetting<T>(key: string, locale?: string) {
  return cmsFetchOrNull<T | null>(
    `/api/public/settings/${key}${localeQuery(locale)}`,
    { revalidate: 300 },
  );
}

export const getSeoSetting = (locale?: string) =>
  getSetting<SiteSeoSetting>('seo', locale);
export const getCrawlSetting = () => getSetting<CrawlSetting>('crawl');
export const getOrganizationSetting = (locale?: string) =>
  getSetting<OrganizationSetting>('organization', locale);
export const getAnalyticsSetting = () => getSetting<AnalyticsSetting>('analytics');
export const getRobotsSetting = () => getSetting<string>('robots');
/** Site-wide default header/body/footer snippets applied to every page. */
export const getCodeInjectionSetting = () =>
  getSetting<CmsCodeInjection>('codeInjection');

/**
 * Resolve the PER-PAGE header code injection for a given URL pathname, so the
 * root layout can render it inside <head> (a page component, mounted in <body>,
 * cannot inject a <script> into <head>). Fetches are deduplicated by Next with
 * the page's own fetch, so this adds no extra round-trip. Returns '' for routes
 * with no per-page document (blog index, category/tag listings, search).
 */
export async function getPathHeaderInjection(pathname: string): Promise<string> {
  const p = (pathname.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  if (p === '/') return (await getHomePage())?.codeInjection?.header ?? '';
  if (p === '/blog' || p === '/search') return '';
  if (p.startsWith('/blog/')) {
    const rest = p.slice('/blog/'.length);
    if (!rest || rest.startsWith('category/') || rest.startsWith('tag/')) return '';
    return (await getPostBySlug(rest))?.codeInjection?.header ?? '';
  }
  // Any other top-level path is a CMS Page whose slug carries a leading slash.
  return (await getPageBySlug(p))?.codeInjection?.header ?? '';
}

// ─── Search ────────────────────────────────────────────────────────

export function search(q: string, limit = 20) {
  const qs = new URLSearchParams({ q, limit: String(limit) });
  // Search pages are dynamic + noindex — never cache server-side.
  return cmsFetch<{ q: string; items: SearchHit[]; total: number }>(
    `/api/public/search?${qs.toString()}`,
    { cache: 'no-store' },
  );
}

// ─── Sitemap data ──────────────────────────────────────────────────

export async function getSitemapPages() {
  const data = await cmsFetchOrNull<{ items: SitemapEntry[] }>(
    '/api/public/sitemap/pages',
    { revalidate: 600 },
  );
  return data?.items ?? [];
}

export async function getSitemapPosts() {
  const data = await cmsFetchOrNull<{ items: SitemapEntry[] }>(
    '/api/public/sitemap/posts',
    { revalidate: 600 },
  );
  return data?.items ?? [];
}

export async function getSitemapCategories() {
  const data = await cmsFetchOrNull<{ items: SitemapCategoryEntry[] }>(
    '/api/public/sitemap/categories',
    { revalidate: 600 },
  );
  return data?.items ?? [];
}

// ─── Redirects (used by middleware) ────────────────────────────────

export async function getRedirects() {
  const data = await cmsFetchOrNull<{ items: CmsRedirect[] }>(
    '/api/redirects/all.json',
    { revalidate: 60 },
  );
  return data?.items ?? [];
}

// ─── Static-route auto-registration ────────────────────────────────

const REGISTER_SECRET = process.env.SPAY_REGISTER_SECRET || '';

/**
 * Ensure a CMS Page record exists for a website route so it shows up in the
 * CMS and becomes SEO-editable. Idempotent on the server (uses $setOnInsert) —
 * it never overwrites SEO an editor has set. Fire-and-forget: failures (CMS
 * down, registration disabled) never block rendering.
 */
/**
 * Slug → the string list this process has already posted.
 *
 * Registration runs on every render, and the string list is a few hundred
 * entries; posting it each time would be pure waste, since it only changes when
 * the design's copy does. Holding the last one sent makes it one post per page
 * per server process, and a deploy — which is the only thing that can change
 * the defaults — starts a new process and so re-posts on its own.
 */
const sentStrings = new Map<string, string>();

export async function ensurePageRegistered(
  slug: string,
  title: string,
  template?: string,
  /**
   * The page's full rendered English. The CMS translates from this: it holds
   * only the leaves an editor overrode and cannot see the defaults in this
   * repo, so without it a re-translation prunes every segment it cannot
   * account for. See `translationSource` in the CMS's Page model.
   */
  strings?: readonly string[],
): Promise<void> {
  const fingerprint = strings?.join('\u0000');
  const changed = fingerprint !== undefined && sentStrings.get(slug) !== fingerprint;

  try {
    await fetch(`${CMS_API_URL}/api/public/pages/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(REGISTER_SECRET ? { 'x-register-secret': REGISTER_SECRET } : {}),
      },
      body: JSON.stringify({ slug, title, template, ...(changed ? { strings } : {}) }),
      cache: 'no-store',
      signal: AbortSignal.timeout(2500),
    });
    // Only after it lands, so a failed post is retried on the next render.
    if (changed) sentStrings.set(slug, fingerprint!);
  } catch {
    // Registration is best-effort — the page still renders without it.
  }
}

/**
 * For a static website route: make sure it's registered in the CMS, then
 * return its CMS Page (for SEO). Home ('/') uses the dedicated /home endpoint
 * since its slug can't be path-encoded cleanly.
 */
export async function getRouteSeoPage(
  slug: string,
  title: string,
  template?: string,
  locale?: string,
  strings?: readonly string[],
): Promise<CmsPage | null> {
  await ensurePageRegistered(slug, title, template, strings);
  return slug === '/' ? getHomePage(locale) : getPageBySlug(slug, locale);
}

// ─── Helpers ───────────────────────────────────────────────────────

/** Normalize a CMS category ref (may be a populated object or a string id). */
export function categorySlugOf(post: CmsPost): string | undefined {
  const c = post.category;
  if (c && typeof c === 'object') return c.slug;
  return undefined;
}

/**
 * The category name to show on a post.
 *
 * Always the populated Category record, never the post's denormalised
 * `categoryName`. The record is the single source of truth: it is current when
 * a category is renamed, and the CMS now translates it there — once per
 * category rather than once per post. While the copy on each post was being
 * translated instead, the same category came back as "Crypto" in one article
 * and "العملات المشفرة" in another.
 *
 * `categoryName` remains only as a fallback for a post whose category ref was
 * not populated.
 */
export function categoryDisplayName(post: CmsPost): string {
  const c = post.category;
  if (c && typeof c === 'object' && c.name?.trim()) return c.name.trim();
  return post.categoryName ?? '';
}

/**
 * A post's or page's JSON-LD, from whichever key the CMS sent.
 *
 * The field was renamed `schema` → `structuredData`; this reads the new name
 * first and falls back to the old one, so the website and the CMS can be
 * deployed in either order without a page silently losing its structured data.
 */
export function structuredDataOf(
  doc: { structuredData?: CmsStructuredData; schema?: CmsStructuredData } | null | undefined,
): CmsStructuredData | undefined {
  return doc?.structuredData ?? doc?.schema;
}
