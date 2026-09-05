import type { Metadata } from 'next';
import BlogTagView, { buildTagMetadata, parsePage } from '@/components/site/blog/BlogTagView';

/** The Turkish tag listing. Tags are URL keys and stay English in every language. */
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const [{ tag }, { page }] = await Promise.all([params, searchParams]);
  return buildTagMetadata(tag, 'tr', parsePage(page));
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const [{ tag }, { page }] = await Promise.all([params, searchParams]);
  return <BlogTagView tag={tag} locale="tr" page={parsePage(page)} />;
}
