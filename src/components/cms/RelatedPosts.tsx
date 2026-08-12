/**
 * "Keep reading" cards at the foot of a post.
 *
 * Related posts are the other published posts in the same category. Posts with
 * no category get no section rather than a random-latest fill — an unrelated
 * suggestion is worse for the reader than none, and it dilutes the internal
 * linking signal the section exists to create.
 */
import Link from 'next/link';
import { getCategoryBySlug, type CmsPost } from '@/lib/cms';

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

/** Same-category posts, current one excluded, newest first. */
export async function getRelatedPosts(
  categorySlug: string | undefined,
  currentSlug: string,
  limit = 3,
): Promise<CmsPost[]> {
  if (!categorySlug) return [];
  // Fetch one extra so removing the current post still leaves a full row.
  const result = await getCategoryBySlug(categorySlug, { limit: limit + 1 });
  return (result?.items ?? [])
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}

export default function RelatedPosts({
  posts,
  categoryName,
}: {
  posts: CmsPost[];
  categoryName?: string;
}) {
  if (!posts.length) return null;

  return (
    <section className="mt-11" style={{ fontFamily: 'var(--font-inter)' }}>
      <h2
        className="mb-4 text-xl font-bold text-white"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        Keep reading
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const date = formatDate(p.publishedAt);
          const cat = p.categoryName || categoryName;
          return (
            <Link
              key={p._id}
              href={`/blog/${p.slug}`}
              // flex column + mt-auto pins the meta line to the bottom, so cards
              // in a row stay aligned however long their titles run.
              className="flex min-h-[10.5rem] flex-col rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
              style={{
                background: '#0e2e2e',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              {cat && (
                <span
                  className="block text-[11px] uppercase tracking-[0.13em]"
                  style={{ color: '#46F1C5', fontFamily: 'var(--font-geist-mono)' }}
                >
                  {cat}
                </span>
              )}
              <span
                className="mb-3 mt-2.5 block text-lg font-semibold leading-snug text-white"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {p.title}
              </span>
              {(date || p.readTime) && (
                <span className="mt-auto block text-[13px]" style={{ color: '#7A8194' }}>
                  {date}
                  {date && p.readTime ? ' · ' : ''}
                  {p.readTime ? `${p.readTime} min read` : ''}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
