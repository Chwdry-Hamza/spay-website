import { getSitemapPages } from '@/lib/cms';
import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';

// CMS Pages that collide with hand-built static routes are served by those
// static routes (and are already in sitemap-static.xml), so we skip them here
// to keep every URL in exactly one sub-sitemap.
const STATIC_SLUGS = new Set([
  'about',
  'card',
  'how-it-works',
  'contact',
  'card-terms',
  'privacy-policy',
  'blog',
  'search',
]);

export const revalidate = 600;

export async function GET() {
  const pages = await getSitemapPages();
  const urls: UrlNode[] = pages
    .filter((p) => p.slug && p.slug !== '/' && !STATIC_SLUGS.has(p.slug.replace(/^\//, '')))
    .map((p) => ({ path: p.slug, lastmod: p.updatedAt ?? p.publishedAt }));
  return new Response(buildUrlset(urls), { headers: XML_HEADERS });
}
