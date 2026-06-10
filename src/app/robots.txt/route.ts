import { getRobotsSetting, SITE_URL } from '@/lib/cms';

export const revalidate = 600;

const HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'public, max-age=600, s-maxage=600',
};

/**
 * robots.txt resolution:
 *   1. If the CMS `robots` setting holds a manual override, serve it verbatim
 *      (only appending a Sitemap line if the editor forgot one).
 *   2. Otherwise serve an allow-all default (+ sitemap).
 *
 * We deliberately do NOT Disallow /search or /tag/ here. Those thin sections
 * are kept out of the index via `noindex, follow` (middleware + page metadata),
 * which Google can only honor if it is ALLOWED to crawl them — a robots.txt
 * Disallow would block the crawl and defeat the noindex.
 *
 * We never block AI crawlers (GPTBot/CCBot/etc.) — that capability was removed
 * from the CMS and is intentionally absent.
 */
export async function GET() {
  const sitemapLine = `Sitemap: ${SITE_URL}/sitemap.xml`;

  const manual = (await getRobotsSetting())?.trim();
  if (manual) {
    const body = /sitemap:/i.test(manual) ? manual : `${manual}\n\n${sitemapLine}`;
    return new Response(`${body}\n`, { headers: HEADERS });
  }

  const lines = ['User-agent: *', 'Allow: /', '', sitemapLine];
  return new Response(`${lines.join('\n')}\n`, { headers: HEADERS });
}
