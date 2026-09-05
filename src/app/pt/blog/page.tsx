import type { Metadata } from 'next';
import BlogIndexView, { buildBlogIndexMetadata, parsePage } from '@/components/site/blog/BlogIndexView';

/** The Portuguese blog index. Content comes from the CMS, already translated. */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  return buildBlogIndexMetadata('pt', parsePage(page));
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page } = await searchParams;
  return <BlogIndexView locale="pt" page={parsePage(page)} />;
}
