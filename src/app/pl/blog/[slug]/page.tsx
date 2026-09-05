import type { Metadata } from 'next';
import BlogPostView, { buildPostMetadata } from '@/components/site/blog/BlogPostView';

/**
 * A blog post in Polish.
 *
 * The slug stays English in every language — one post, one address per locale.
 * When the CMS has no Polish translation ready the English text is served here
 * and the page is marked noindex, so a duplicate never competes with the
 * original.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPostMetadata(slug, 'pl');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostView slug={slug} locale="pl" />;
}
