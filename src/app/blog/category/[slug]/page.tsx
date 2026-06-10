import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import PostGrid from '@/components/cms/PostGrid';
import Pagination from '@/components/cms/Pagination';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getCategoryBySlug, getSeoSetting } from '@/lib/cms';
import { buildListingMetadata } from '@/lib/cms-meta';
import type { Crumb } from '@/lib/structured-data';

function parsePage(v: string | string[] | undefined): number {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return Number.isFinite(n) && n > 1 ? Math.floor(n) : 1;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { page } = await searchParams;
  const data = await getCategoryBySlug(slug, { page: 1, limit: 1 });
  if (!data) return { title: 'Not found', robots: { index: false, follow: true } };
  const site = await getSeoSetting();
  const cat = data.category;
  return buildListingMetadata({
    basePath: `/blog/category/${slug}`,
    page: parsePage(page),
    title: cat.seo?.title || `${cat.name}`,
    exactTitle: Boolean(cat.seo?.title?.trim()),
    description: cat.seo?.description || cat.description,
    site,
  });
}

export default async function CategoryLandingPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parsePage(pageParam);

  const data = await getCategoryBySlug(slug, { page });
  if (!data) notFound();

  const { category, items, totalPages } = data;
  const basePath = `/blog/category/${slug}`;
  const crumbs: Crumb[] = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: category.name, url: basePath },
  ];

  return (
    <main style={{ background: '#090e1c', minHeight: '100vh' }}>
      <AppHeader />
      <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-8 lg:px-16">
        <Breadcrumbs crumbs={crumbs} />

        <h1
          className="mt-6 mb-3 text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {category.name}
        </h1>

        {(category.content || category.description) && (
          <p
            className="mb-10 max-w-3xl text-lg leading-relaxed"
            style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
          >
            {category.content || category.description}
          </p>
        )}

        <PostGrid posts={items} />
        <Pagination basePath={basePath} page={data.page} totalPages={totalPages} />
      </section>
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
