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
import { readTimeLabel, type BlogStrings } from '@/i18n/blog';
import type { Locale } from '@/i18n/locales';
import { dateLocaleFor } from '@/lib/site/localeChrome';

function formatDate(iso: string | null | undefined, locale: Locale): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  // `dateLocaleFor` keeps Western digits in Arabic and Urdu, matching every
  // other number on the page.
  return d.toLocaleDateString(dateLocaleFor(locale), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Same-category posts, current one excluded, newest first. */
export async function getRelatedPosts(
  categorySlug: string | undefined,
  currentSlug: string,
  /**
   * The reader's language. Not optional: these cards sit at the foot of an
   * article the reader is already reading in their own language, and fetching
   * them without it served three English headlines under an Urdu heading.
   */
  locale: Locale,
  limit = 3,
): Promise<CmsPost[]> {
  if (!categorySlug) return [];
  // Fetch one extra so removing the current post still leaves a full row.
  const result = await getCategoryBySlug(categorySlug, {
    limit: limit + 1,
    locale: locale === 'en' ? undefined : locale,
  });
  return (result?.items ?? [])
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}

export default function RelatedPosts({
  posts,
  categoryName,
  strings,
  locale,
  prefix = '',
}: {
  posts: CmsPost[];
  categoryName?: string;
  /** The reader's language — the cards date themselves in it. */
  locale: Locale;
  strings: BlogStrings['post'];
  /** Locale URL prefix, so a reader stays in their language. */
  prefix?: string;
}) {
  if (!posts.length) return null;

  return (
    <section className="mt-11" style={{ fontFamily: 'var(--font-inter)' }}>
      <h2
        className="mb-4 text-xl font-bold text-[#0b1620]"
       
      >
        {strings.related}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const date = formatDate(p.publishedAt, locale);
          const cat = p.categoryName || categoryName;
          return (
            <Link
              key={p._id}
              href={`${prefix}/blog/${p.slug}`}
              // flex column + mt-auto pins the meta line to the bottom, so cards
              // in a row stay aligned however long their titles run.
              className="flex min-h-[10.5rem] flex-col rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
              style={{
                background: '#f3fbfa',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              {cat && (
                <span
                  className="block text-[11px] uppercase tracking-[0.13em]"
                  style={{ color: '#118EA3' }}
                >
                  {cat}
                </span>
              )}
              <span
                className="mb-3 mt-2.5 block text-lg font-semibold leading-snug text-[#0b1620]"
               
              >
                {p.title}
              </span>
              {(date || p.readTime) && (
                <span className="mt-auto block text-[13px]" style={{ color: '#8a949d' }}>
                  {date}
                  {date && p.readTime ? ' · ' : ''}
                  {p.readTime ? readTimeLabel(strings, p.readTime) : ''}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
