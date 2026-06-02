import { getSitemapCategories } from '@/lib/cms';
import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';

export const revalidate = 600;

export async function GET() {
  const cats = await getSitemapCategories();
  // Category landing URL is /blog/category/{slug}.
  const urls: UrlNode[] = cats
    .filter((c) => c.slug)
    .map((c) => ({ path: `/blog/category/${c.slug}`, lastmod: c.updatedAt }));
  return new Response(buildUrlset(urls), { headers: XML_HEADERS });
}
