import type { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import PostGrid from '@/components/cms/PostGrid';
import Pagination from '@/components/cms/Pagination';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getPosts, getSeoSetting, getCrawlSetting } from '@/lib/cms';
import { buildListingMetadata } from '@/lib/cms-meta';
import type { Crumb } from '@/lib/structured-data';

const PAGE_SIZE = 12;

function parsePage(v: string | string[] | undefined): number {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return Number.isFinite(n) && n > 1 ? Math.floor(n) : 1;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const { page } = await searchParams;
  const [site, crawl] = await Promise.all([getSeoSetting(), getCrawlSetting()]);
  const label = decodeURIComponent(tag);
  return buildListingMetadata({
    basePath: `/blog/tag/${tag}`,
    page: parsePage(page),
    title: `Posts tagged “${label}”`,
    description: `All Spay articles tagged ${label}.`,
    site,
    // Respect the "Noindex tag pages" SEO setting (defaults to noindex).
    noindex: crawl?.noindexTags !== false,
  });
}

export default async function TagPage({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { tag } = await params;
  const { page: pageParam } = await searchParams;
  const page = parsePage(pageParam);
  const label = decodeURIComponent(tag);

  const data = await getPosts({ tag, page, limit: PAGE_SIZE });
  const basePath = `/blog/tag/${tag}`;
  const crumbs: Crumb[] = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: `#${label}`, url: basePath },
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
          Posts tagged{' '}
          <span style={{ color: '#46F1C5' }}>#{label}</span>
        </h1>

        <p
          className="mb-10 text-lg"
          style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
        >
          {data.total} {data.total === 1 ? 'article' : 'articles'}
        </p>

        <PostGrid posts={data.items} />
        <Pagination basePath={basePath} page={data.page} totalPages={data.totalPages} />
      </section>
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
