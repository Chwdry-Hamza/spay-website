import type { Metadata } from 'next';
import BlogIndexView, { buildBlogIndexMetadata, parsePage } from '@/components/site/blog/BlogIndexView';

/** The German blog index. Content comes from the CMS, already translated. */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  return buildBlogIndexMetadata('de', parsePage(page));
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page } = await searchParams;
  return <BlogIndexView locale="de" page={parsePage(page)} />;
}
