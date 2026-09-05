import type { Metadata } from 'next';
import BlogPostView, { buildPostMetadata } from '@/components/site/blog/BlogPostView';

/**
 * The English post. Every translated locale has the same two lines under its
 * own folder — see src/app/ur/blog/[slug]/page.tsx and its siblings — because
 * app/[slug]/ already owns the root dynamic segment, so `app/[lang]/` is not
 * available without moving every route on the site.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPostMetadata(slug, 'en');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostView slug={slug} locale="en" />;
}
