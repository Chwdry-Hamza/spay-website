import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import { PageHero, PageBody } from '@/components/site/PageBands';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import PostGrid from '@/components/cms/PostGrid';
import Pagination from '@/components/cms/Pagination';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getCategoryBySlug, getSeoSetting } from '@/lib/cms';
import { buildListingMetadata } from '@/lib/cms-meta';
import { abs } from '@/lib/structured-data';
import type { Crumb } from '@/lib/structured-data';
import { blogStrings } from '@/i18n/blog';
import { LOCALES, type Locale } from '@/i18n/locales';
import { getLocaleChrome, localePrefix } from '@/lib/site/localeChrome';

export function parsePage(v: string | string[] | undefined): number {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return Number.isFinite(n) && n > 1 ? Math.floor(n) : 1;
}

export async function buildCategoryMetadata(
  slug: string,
  locale: Locale,
  page: number,
): Promise<Metadata> {
  const data = await getCategoryBySlug(slug, {
    page: 1,
    limit: 1,
    locale: locale === 'en' ? undefined : locale,
  });
  if (!data) return { title: 'Not found', robots: { index: false, follow: true } };

  const site = await getSeoSetting();
  const prefix = localePrefix(locale);
  const cat = data.category;
  const name = cat.name;

  const base = buildListingMetadata({
    basePath: `${prefix}/blog/category/${slug}`,
    page,
    title: cat.seo?.title || name,
    exactTitle: Boolean(cat.seo?.title?.trim()),
    description: cat.seo?.description || cat.description,
    site,
  });

  if (page > 1) return base;

  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l.code] = abs(`${l.prefix}/blog/category/${slug}/`);
  languages['x-default'] = abs(`/blog/category/${slug}/`);

  return { ...base, alternates: { ...base.alternates, languages } };
}

export default async function BlogCategoryView({
  slug,
  locale,
  page,
}: {
  slug: string;
  locale: Locale;
  page: number;
}) {
  const t = blogStrings(locale);
  const prefix = localePrefix(locale);

  const [data, chrome] = await Promise.all([
    getCategoryBySlug(slug, { page, locale: locale === 'en' ? undefined : locale }),
    getLocaleChrome(locale),
  ]);
  if (!data) notFound();

  const { category, items, totalPages } = data;
  const name = category.name;
  const basePath = `${prefix}/blog/category/${slug}`;

  const crumbs: Crumb[] = [
    { name: t.index.home, url: `${prefix}/` },
    { name: t.index.blog, url: `${prefix}/blog` },
    { name, url: basePath },
  ];

  return (
    <SiteShell
      chrome={chrome}
      active={`${prefix}/blog/`}
      footerMarginTop="0"
      footerWatermarkLeft="48px"
    >
      <PageHero
        title={name}
        intro={category.content || category.description}
        above={<Breadcrumbs crumbs={crumbs} />}
      />

      <PageBody>
        <PostGrid posts={items} locale={locale} prefix={prefix} />
        <Pagination
          basePath={basePath}
          page={data.page}
          totalPages={totalPages}
          strings={t.pagination}
        />
      </PageBody>

      <PerformanceScripts perf={undefined} />
    </SiteShell>
  );
}
