import { buildSitemapIndex, XML_HEADERS } from '@/lib/sitemap';

// Sitemap index — points at each sub-sitemap. Search engines fetch these.
export const revalidate = 600;

export function GET() {
  const xml = buildSitemapIndex([
    'sitemap-static.xml',
    'sitemap-pages.xml',
    'sitemap-posts.xml',
    'sitemap-categories.xml',
  ]);
  return new Response(xml, { headers: XML_HEADERS });
}
