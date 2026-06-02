/**
 * XML helpers for the sitemap index + sub-sitemap route handlers.
 * URLs are absolutized + trailing-slashed via canonicalUrl (trailingSlash:true).
 */
import { canonicalUrl } from './cms-meta';
import { SITE_URL } from './cms';

export function xmlEscape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export type UrlNode = {
  /** Path on this site (e.g. '/blog/foo'); absolutized + trailing-slashed. */
  path: string;
  lastmod?: string | null;
};

function isoDate(d?: string | null): string | null {
  if (!d) return null;
  const date = new Date(d);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

/** Build a <urlset> document from a list of URL nodes. */
export function buildUrlset(urls: UrlNode[]): string {
  const body = urls
    .map(({ path, lastmod }) => {
      const loc = xmlEscape(canonicalUrl(path));
      const lm = isoDate(lastmod);
      return `  <url>\n    <loc>${loc}</loc>${
        lm ? `\n    <lastmod>${lm}</lastmod>` : ''
      }\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
}

/** Build a <sitemapindex> document pointing at sub-sitemap filenames. */
export function buildSitemapIndex(filenames: string[]): string {
  const body = filenames
    .map((name) => {
      const loc = xmlEscape(`${SITE_URL}/${name}`);
      return `  <sitemap>\n    <loc>${loc}</loc>\n  </sitemap>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>`;
}

export const XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=600, s-maxage=600',
};
