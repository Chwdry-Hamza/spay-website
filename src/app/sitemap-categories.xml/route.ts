import { getSitemapCategories } from '@/lib/cms';
import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';
import { LOCALES } from '@/i18n/locales';

export const revalidate = 600;

/**
 * Category landing pages, in every language.
 *
 * Unlike a post, a category listing exists in all nine languages regardless of
 * what the CMS holds: the page is this repo's own, its furniture is translated
 * here, and the posts it lists fall back per post. So every locale is listed
 * unconditionally rather than gated on a translation being ready.
 *
 * Tag pages are absent on purpose — they default to noindex.
 */
export async function GET() {
  const cats = await getSitemapCategories();

  const urls: UrlNode[] = [];
  for (const c of cats) {
    if (!c.slug) continue;
    for (const l of LOCALES) {
      urls.push({ path: `${l.prefix}/blog/category/${c.slug}`, lastmod: c.updatedAt });
    }
  }

  return new Response(buildUrlset(urls), { headers: XML_HEADERS });
}
