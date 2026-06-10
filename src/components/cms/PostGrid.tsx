/**
 * Blog list as a responsive grid of cards.
 *
 * Each card is a flex column with the meta footer pinned to the bottom via
 * `mt-auto`, so cards in a row stay the same height regardless of title /
 * excerpt length. Styling follows the site palette (dark teal surface, mint
 * accent, muted body text).
 */
import Link from 'next/link';
import {
  categoryDisplayName,
  categorySlugOf,
  type CmsPost,
} from '@/lib/cms';

function formatDate(iso?: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function PostCard({ post }: { post: CmsPost }) {
  const catName = categoryDisplayName(post);
  const catSlug = categorySlugOf(post);
  const date = formatDate(post.publishedAt);

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
      style={{
        background: '#0e2e2e',
        border: '1px solid rgba(70,241,197,0.18)',
      }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {post.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt={post.coverMedia?.alt || post.title}
            className="aspect-[16/9] w-full object-cover"
            style={{ background: '#0a2a23' }}
            loading="lazy"
          />
        ) : (
          <div
            className="aspect-[16/9] w-full"
            style={{
              background:
                'radial-gradient(ellipse at 50% 40%, #0a2a23 0%, #090e1c 80%)',
            }}
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {catName && (
          <span
            className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide"
            style={{ color: '#46F1C5', fontFamily: 'var(--font-geist-mono)' }}
          >
            {catSlug ? (
              <Link href={`/blog/category/${catSlug}`} className="hover:underline">
                {catName}
              </Link>
            ) : (
              catName
            )}
          </span>
        )}

        <h3
          className="mb-2 text-lg font-bold leading-snug text-white"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
          >
            {post.excerpt}
          </p>
        )}

        {/* Footer pinned to bottom for equal-height cards */}
        <div
          className="mt-auto flex items-center gap-2 pt-4 text-xs"
          style={{ color: '#7A8194' }}
        >
          {date && <time dateTime={post.publishedAt ?? undefined}>{date}</time>}
          {date && post.readTime ? <span aria-hidden>·</span> : null}
          {post.readTime ? <span>{post.readTime} min read</span> : null}
        </div>
      </div>
    </article>
  );
}

export default function PostGrid({ posts }: { posts: CmsPost[] }) {
  if (!posts.length) {
    return (
      <p style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}>
        No posts yet. Check back soon.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
