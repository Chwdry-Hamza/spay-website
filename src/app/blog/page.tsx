import type { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import PostGrid from '@/components/cms/PostGrid';
import Pagination from '@/components/cms/Pagination';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getPosts, getSeoSetting } from '@/lib/cms';
import { buildListingMetadata } from '@/lib/cms-meta';

const PAGE_SIZE = 12;

function parsePage(v: string | string[] | undefined): number {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return Number.isFinite(n) && n > 1 ? Math.floor(n) : 1;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  const site = await getSeoSetting();
  return buildListingMetadata({
    basePath: '/blog',
    page: parsePage(page),
    title: 'Blog',
    description: site?.defaultDescription || 'News, guides, and updates from Spay.',
    site,
  });
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parsePage(pageParam);
  const data = await getPosts({ page, limit: PAGE_SIZE });

  return (
    <main style={{ background: '#090e1c', minHeight: '100vh' }}>
      <AppHeader />
      <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-8 lg:px-16">
        <Breadcrumbs crumbs={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />

        <h1
          className="mt-6 mb-10 text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Blog
        </h1>

        <PostGrid posts={data.items} />
        <Pagination basePath="/blog" page={data.page} totalPages={data.totalPages} />
      </section>
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
