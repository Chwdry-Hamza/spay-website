import { getRobotsSetting, getCrawlSetting, SITE_URL } from '@/lib/cms';

export const revalidate = 600;

const HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'public, max-age=600, s-maxage=600',
};

/**
 * robots.txt resolution:
 *   1. If the CMS `robots` setting holds a manual override, serve it verbatim
 *      (only appending a Sitemap line if the editor forgot one).
 *   2. Otherwise generate a safe default from the `crawl` setting.
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

  const crawl = (await getCrawlSetting()) ?? {};
  const lines = ['User-agent: *', 'Allow: /'];

  // Keep thin/duplicate sections out of crawl budget (mirrors middleware).
  if (crawl.noindexSearch !== false) lines.push('Disallow: /search');
  if (crawl.noindexTags !== false) {
    lines.push('Disallow: /tag/');
    lines.push('Disallow: /blog/tag/');
  }

  lines.push('', sitemapLine);
  return new Response(`${lines.join('\n')}\n`, { headers: HEADERS });
}
