import type { Metadata } from 'next';
import BlogIndexView, { buildBlogIndexMetadata, parsePage } from '@/components/site/blog/BlogIndexView';

/** The English blog index. Each locale has the same wrapper under its folder. */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  return buildBlogIndexMetadata('en', parsePage(page));
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page } = await searchParams;
  return <BlogIndexView locale="en" page={parsePage(page)} />;
}
