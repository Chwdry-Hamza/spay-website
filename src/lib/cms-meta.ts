/**
 * Next.js Metadata builders that translate CMS SEO fields into the
 * `Metadata` object expected by App Router `generateMetadata`.
 *
 *  - buildMetadataFromCMS:  for a single Page or Post (seo.* fields).
 *  - buildListingMetadata:  for paginated lists (blog index, category) where
 *                           ?page=N pages must canonicalize to page 1 and
 *                           page>1 should be noindex,follow.
 *
 * The site's root layout already defines a title template ("%s · SPay") and
 * metadataBase, so these builders return relative-ish values and let the
 * layout template apply. Absolute canonicals are emitted explicitly.
 */
import type { Metadata } from 'next';
import {
  SITE_URL,
  type CmsSeo,
  type SiteSeoSetting,
} from './cms';

/** Join SITE_URL + path, honoring trailingSlash: true. */
export function canonicalUrl(path: string): string {
  let p = path.startsWith('/') ? path : `/${path}`;
  // Respect trailingSlash: true (but never add a slash to a query string).
  const [pathname, query] = p.split('?');
  let clean = pathname;
  if (clean !== '/' && !clean.endsWith('/')) clean = `${clean}/`;
  p = query ? `${clean}?${query}` : clean;
  return `${SITE_URL}${p}`;
}

type RobotsBlock = NonNullable<Metadata['robots']>;

function robotsFrom(seo: CmsSeo | undefined): RobotsBlock {
  return {
    index: !seo?.noindex,
    follow: !seo?.nofollow,
  };
}

export type CmsMetaInput = {
  /** The document's SEO sub-object. */
  seo?: CmsSeo;
  /** Fallback title when seo.title is empty. */
  title: string;
  /** Fallback description when seo.description is empty. */
  description?: string;
  /** Path of this document on the website (e.g. '/blog/why-spay'). */
  path: string;
  /** Site-wide defaults from the `seo` setting. */
  site?: SiteSeoSetting | null;
  /** Fallback OG/Twitter image (e.g. post cover). */
  fallbackImage?: string;
};

export function buildMetadataFromCMS(input: CmsMetaInput): Metadata {
  const { seo, title, description, path, site, fallbackImage } = input;

  const metaTitle = seo?.title || title;
  // An explicit per-page SEO title is rendered EXACTLY (title.absolute), so it
  // bypasses the site-wide title template. Without a custom title we return the
  // fallback as a plain string and let the layout template append the brand.
  const hasCustomTitle = Boolean(seo?.title?.trim());
  const metaDescription =
    seo?.description || description || site?.defaultDescription || undefined;

  const ogImage =
    seo?.og?.image || fallbackImage || site?.defaultOgImage || undefined;
  const twitterImage = seo?.twitter?.image || ogImage;

  // Explicit canonical wins; otherwise canonicalize the page's own path.
  const canonical = seo?.canonical
    ? seo.canonical
    : canonicalUrl(path);

  const meta: Metadata = {
    title: hasCustomTitle ? { absolute: metaTitle } : metaTitle,
    description: metaDescription,
    alternates: { canonical },
    robots: robotsFrom(seo),
    openGraph: {
      title: seo?.og?.title || metaTitle,
      description: seo?.og?.description || metaDescription,
      url: canonical,
      siteName: site?.siteName || 'Spay',
      type: 'website',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: (seo?.twitter?.card as 'summary_large_image') || 'summary_large_image',
      title: seo?.twitter?.title || metaTitle,
      description: seo?.twitter?.description || metaDescription,
      ...(site?.twitterHandle ? { site: site.twitterHandle } : {}),
      ...(twitterImage ? { images: [twitterImage] } : {}),
    },
  };
  return meta;
}

export type ListingMetaInput = {
  /** Base path of the listing (no ?page), e.g. '/blog' or '/blog/category/news'. */
  basePath: string;
  /** Current page number (1-based). */
  page: number;
  title: string;
  description?: string;
  site?: SiteSeoSetting | null;
  /** Per-listing noindex override (rare). */
  noindex?: boolean;
  /**
   * When true, `title` is a per-listing custom SEO title and is rendered
   * exactly (title.absolute), bypassing the site-wide title template. When
   * false/omitted the title is a fallback and the layout template appends the
   * brand.
   */
  exactTitle?: boolean;
};

/**
 * Listing metadata with paginated-canonical logic:
 *  - canonical always points at the clean base path (page 1), so paginated
 *    pages consolidate to the listing root.
 *  - page > 1 is noindex,follow (thin/duplicate), page 1 is index,follow.
 */
export function buildListingMetadata(input: ListingMetaInput): Metadata {
  const { basePath, page, title, description, site, noindex, exactTitle } = input;
  const canonical = canonicalUrl(basePath);
  const isPaged = page > 1;
  const pageTitle = isPaged ? `${title} – Page ${page}` : title;

  return {
    title: exactTitle ? { absolute: pageTitle } : pageTitle,
    description: description || site?.defaultDescription || undefined,
    alternates: { canonical },
    robots: {
      index: !noindex && !isPaged,
      follow: true,
    },
    openGraph: {
      title: pageTitle,
      description: description || site?.defaultDescription || undefined,
      url: canonical,
      siteName: site?.siteName || 'Spay',
      type: 'website',
    },
  };
}

/** Metadata for noindex,follow utility pages (e.g. /search). */
export function buildNoindexMetadata(title: string): Metadata {
  return {
    title,
    robots: { index: false, follow: true },
  };
}
