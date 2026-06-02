import { getSitemapPosts } from '@/lib/cms';
import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';

export const revalidate = 600;

export async function GET() {
  const posts = await getSitemapPosts();
  // Post slugs are bare; the public URL is /blog/{slug}.
  const urls: UrlNode[] = posts
    .filter((p) => p.slug)
    .map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.updatedAt ?? p.publishedAt }));
  return new Response(buildUrlset(urls), { headers: XML_HEADERS });
}
