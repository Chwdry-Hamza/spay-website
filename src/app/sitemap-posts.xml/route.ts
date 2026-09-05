import { getSitemapPosts } from '@/lib/cms';
import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';
import { isTargetLocaleCode, localePrefixOf } from '@/i18n/locales';

export const revalidate = 600;

/**
 * Every indexable post URL, in every language it is genuinely published in.
 *
 * A translated post is a separate page at a separate address, so it gets its
 * own <url> rather than being folded into the English one. The CMS decides
 * which locales qualify: a language whose translation is missing, too thin to
 * serve, or hidden by an editor is not listed, because that URL serves the
 * English article and listing it would submit a duplicate.
 */
export async function GET() {
  const posts = await getSitemapPosts();

  const urls: UrlNode[] = [];
  for (const p of posts) {
    if (!p.slug) continue;
    const lastmod = p.updatedAt ?? p.publishedAt;

    urls.push({ path: `/blog/${p.slug}`, lastmod });

    for (const code of p.locales ?? []) {
      if (!isTargetLocaleCode(code)) continue;
      urls.push({ path: `${localePrefixOf(code)}/blog/${p.slug}`, lastmod });
    }
  }

  return new Response(buildUrlset(urls), { headers: XML_HEADERS });
}
