import type { Metadata } from 'next';
import BlogTagView, { buildTagMetadata, parsePage } from '@/components/site/blog/BlogTagView';

/** The French tag listing. Tags are URL keys and stay English in every language. */
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const [{ tag }, { page }] = await Promise.all([params, searchParams]);
  return buildTagMetadata(tag, 'fr', parsePage(page));
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const [{ tag }, { page }] = await Promise.all([params, searchParams]);
  return <BlogTagView tag={tag} locale="fr" page={parsePage(page)} />;
}
