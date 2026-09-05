import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { PageHero, PageBody } from '@/components/site/PageBands';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import PostGrid from '@/components/cms/PostGrid';
import Pagination from '@/components/cms/Pagination';
import BlogSearchBar from '@/components/cms/BlogSearchBar';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getPosts, getSeoSetting } from '@/lib/cms';
import { buildListingMetadata } from '@/lib/cms-meta';
import { abs } from '@/lib/structured-data';
import { blogStrings } from '@/i18n/blog';
import { LOCALES, type Locale } from '@/i18n/locales';
import { getLocaleChrome, localePrefix } from '@/lib/site/localeChrome';

const PAGE_SIZE = 6;

/** `?page=` as a positive integer; anything else is page 1. */
export function parsePage(v: string | string[] | undefined): number {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return Number.isFinite(n) && n > 1 ? Math.floor(n) : 1;
}

/**
 * Metadata for the blog index in one language.
 *
 * Unlike a post, the index exists in every language whatever the CMS holds —
 * it is this repo's own page, and its furniture is translated here — so every
 * locale is listed in hreflang unconditionally.
 */
export async function buildBlogIndexMetadata(
  locale: Locale,
  page: number,
): Promise<Metadata> {
  const site = await getSeoSetting();
  const t = blogStrings(locale);
  const prefix = localePrefix(locale);

  // `exactTitle` bypasses the site-wide title template. The CMS template is a
  // literal rather than a pattern, so without this every listing would render
  // the same <title> — which is what the English blog index did before these
  // pages existed. Each language names itself instead.
  const base = buildListingMetadata({
    basePath: `${prefix}/blog`,
    page,
    title: `${t.index.title} — SPay`,
    description: t.index.intro,
    site,
    exactTitle: true,
  });

  // Paged views are not translated alternates of each other; only page 1 is a
  // stable address worth pointing another language at.
  if (page > 1) return base;

  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l.code] = abs(`${l.prefix}/blog/`);
  languages['x-default'] = abs('/blog/');

  return { ...base, alternates: { ...base.alternates, languages } };
}

/**
 * The blog index, in one language.
 *
 * Cards come from the CMS in the requested language, falling back per post to
 * English where no translation is ready — a mixed list is more useful than a
 * short one, and each card links to a page that says the same thing.
 */
export default async function BlogIndexView({
  locale,
  page,
}: {
  locale: Locale;
  page: number;
}) {
  const t = blogStrings(locale);
  const prefix = localePrefix(locale);

  const [data, chrome] = await Promise.all([
    getPosts({
      page,
      limit: PAGE_SIZE,
      locale: locale === 'en' ? undefined : locale,
    }),
    getLocaleChrome(locale),
  ]);

  return (
    <SiteShell
      chrome={chrome}
      active={`${prefix}/blog/`}
      footerMarginTop="0"
      footerWatermarkLeft="48px"
    >
      <PageHero
        title={t.index.title}
        intro={t.index.intro}
        above={
          <Breadcrumbs
            crumbs={[
              { name: t.index.home, url: `${prefix}/` },
              { name: t.index.blog, url: `${prefix}/blog` },
            ]}
          />
        }
      >
        {/* Search covers English content only, so it is offered on the English
            index alone rather than returning English results to a reader who
            asked in Urdu. */}
        {locale === 'en' && <BlogSearchBar />}
      </PageHero>

      <PageBody>
        <PostGrid posts={data.items} locale={locale} prefix={prefix} />
        <Pagination
          basePath={`${prefix}/blog`}
          page={data.page}
          totalPages={data.totalPages}
          strings={t.pagination}
        />
      </PageBody>

      <PerformanceScripts perf={undefined} />
    </SiteShell>
  );
}
