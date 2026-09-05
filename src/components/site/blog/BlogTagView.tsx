import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { PageHero, PageBody } from '@/components/site/PageBands';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import PostGrid from '@/components/cms/PostGrid';
import Pagination from '@/components/cms/Pagination';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getPosts, getSeoSetting, getCrawlSetting } from '@/lib/cms';
import { buildListingMetadata } from '@/lib/cms-meta';
import type { Crumb } from '@/lib/structured-data';
import { blogStrings } from '@/i18n/blog';
import type { Locale } from '@/i18n/locales';
import { getLocaleChrome, localePrefix } from '@/lib/site/localeChrome';

const PAGE_SIZE = 6;

export function parsePage(v: string | string[] | undefined): number {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return Number.isFinite(n) && n > 1 ? Math.floor(n) : 1;
}

/**
 * Tags stay in English in every language.
 *
 * A tag is a URL key, not prose: `/blog/tag/stablecoins/` has to resolve to the
 * same set of posts whatever language the reader is in, and translating the tag
 * would fork it into nine incompatible keys. The furniture around it — the
 * heading, the count, the breadcrumbs — is translated.
 */
export async function buildTagMetadata(
  tag: string,
  locale: Locale,
  page: number,
): Promise<Metadata> {
  const [site, crawl] = await Promise.all([getSeoSetting(), getCrawlSetting()]);
  const t = blogStrings(locale);
  const prefix = localePrefix(locale);
  const label = decodeURIComponent(tag);

  return buildListingMetadata({
    basePath: `${prefix}/blog/tag/${tag}`,
    page,
    title: t.listing.taggedTitle.replace('{tag}', label),
    exactTitle: true,
    description: t.listing.taggedTitle.replace('{tag}', label),
    site,
    // Respects the "Noindex tag pages" SEO setting, which defaults to noindex.
    // No hreflang is emitted for the same reason: an unindexed page has no
    // alternates worth declaring.
    noindex: crawl?.noindexTags !== false,
  });
}

export default async function BlogTagView({
  tag,
  locale,
  page,
}: {
  tag: string;
  locale: Locale;
  page: number;
}) {
  const t = blogStrings(locale);
  const prefix = localePrefix(locale);
  const label = decodeURIComponent(tag);

  const [data, chrome] = await Promise.all([
    getPosts({
      tag,
      page,
      limit: PAGE_SIZE,
      locale: locale === 'en' ? undefined : locale,
    }),
    getLocaleChrome(locale),
  ]);

  const basePath = `${prefix}/blog/tag/${tag}`;
  const crumbs: Crumb[] = [
    { name: t.index.home, url: `${prefix}/` },
    { name: t.index.blog, url: `${prefix}/blog` },
    { name: `#${label}`, url: basePath },
  ];

  return (
    <SiteShell
      chrome={chrome}
      active={`${prefix}/blog/`}
      footerMarginTop="0"
      footerWatermarkLeft="48px"
    >
      <PageHero
        title={t.listing.taggedTitle.replace('{tag}', `#${label}`)}
        intro={t.listing.articleCount.replace('{n}', String(data.total))}
        above={<Breadcrumbs crumbs={crumbs} />}
      />

      <PageBody>
        <PostGrid posts={data.items} locale={locale} prefix={prefix} />
        <Pagination
          basePath={basePath}
          page={data.page}
          totalPages={data.totalPages}
          strings={t.pagination}
        />
      </PageBody>

      <PerformanceScripts perf={undefined} />
    </SiteShell>
  );
}
