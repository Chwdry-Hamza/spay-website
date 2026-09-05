import type { Metadata } from 'next';
import BlogCategoryView, { buildCategoryMetadata, parsePage } from '@/components/site/blog/BlogCategoryView';

/** The French category listing. Posts come translated; the slug stays English. */
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const [{ slug }, { page }] = await Promise.all([params, searchParams]);
  return buildCategoryMetadata(slug, 'fr', parsePage(page));
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const [{ slug }, { page }] = await Promise.all([params, searchParams]);
  return <BlogCategoryView slug={slug} locale="fr" page={parsePage(page)} />;
}
