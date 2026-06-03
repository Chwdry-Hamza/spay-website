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
  skipCustomScripts?: boolean;
  disableCache?: boolean;
  lazyLoadImages?: boolean;
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
  readTime?: number;
  category?: CmsCategoryRef | string | null;
  categoryName?: string;
  tags?: string[];
  seo?: CmsSeo;
  schema?: CmsStructuredData;
  performance?: CmsPerformance;
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
  excerpt?: string;
  seo?: CmsSeo;
  schema?: CmsStructuredData;
  performance?: CmsPerformance;
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
  headerScript?: string;
  bodyScript?: string;
  footerScript?: string;
};

// ─── Sitemap / search / redirect shapes ────────────────────────────

export type SitemapEntry = {
  slug: string;
  title?: string;
  updatedAt?: string;
  publishedAt?: string | null;
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

export function getHomePage() {
  return cmsFetchOrNull<CmsPage | null>('/api/public/home', { revalidate: 60 });
}

export function getPageBySlug(slug: string) {
  return cmsFetchOrNull<CmsPage>(`/api/public/pages/by-slug/${enc(slug)}`, {
    revalidate: 60,
  });
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
} = {}) {
  const qs = new URLSearchParams();
  if (params.page) qs.set('page', String(params.page));
  if (params.limit) qs.set('limit', String(params.limit));
  if (params.category) qs.set('category', params.category);
  if (params.tag) qs.set('tag', params.tag);
  const q = qs.toString();
  return cmsFetch<Paginated<CmsPost>>(
    `/api/public/posts${q ? `?${q}` : ''}`,
    { revalidate: 60 },
  );
}

export function getPostBySlug(slug: string) {
  return cmsFetchOrNull<CmsPost>(`/api/public/posts/by-slug/${enc(slug)}`, {
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
  params: { page?: number; limit?: number } = {},
) {
  const qs = new URLSearchParams();
  if (params.page) qs.set('page', String(params.page));
  if (params.limit) qs.set('limit', String(params.limit));
  const q = qs.toString();
  return cmsFetchOrNull<CategoryWithPosts>(
    `/api/public/categories/by-slug/${enc(slug)}${q ? `?${q}` : ''}`,
    { revalidate: 60 },
  );
}

// ─── Settings ──────────────────────────────────────────────────────

export function getSetting<T>(key: string) {
  return cmsFetchOrNull<T | null>(`/api/public/settings/${key}`, {
    revalidate: 300,
  });
}

export const getSeoSetting = () => getSetting<SiteSeoSetting>('seo');
export const getCrawlSetting = () => getSetting<CrawlSetting>('crawl');
export const getOrganizationSetting = () =>
  getSetting<OrganizationSetting>('organization');
export const getAnalyticsSetting = () => getSetting<AnalyticsSetting>('analytics');
export const getRobotsSetting = () => getSetting<string>('robots');

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
export async function ensurePageRegistered(
  slug: string,
  title: string,
  template?: string,
): Promise<void> {
  try {
    await fetch(`${CMS_API_URL}/api/public/pages/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(REGISTER_SECRET ? { 'x-register-secret': REGISTER_SECRET } : {}),
      },
      body: JSON.stringify({ slug, title, template }),
      cache: 'no-store',
      signal: AbortSignal.timeout(2500),
    });
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
): Promise<CmsPage | null> {
  await ensurePageRegistered(slug, title, template);
  return slug === '/' ? getHomePage() : getPageBySlug(slug);
}

// ─── Helpers ───────────────────────────────────────────────────────

/** Normalize a CMS category ref (may be a populated object or a string id). */
export function categorySlugOf(post: CmsPost): string | undefined {
  const c = post.category;
  if (c && typeof c === 'object') return c.slug;
  return undefined;
}

export function categoryDisplayName(post: CmsPost): string {
  const c = post.category;
  if (c && typeof c === 'object') return c.name;
  return post.categoryName ?? '';
}
