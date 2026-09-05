/**
 * Blog list as a responsive grid of cards.
 *
 * The card itself is components/site/PostCard — the same one the homepage
 * Blogs band uses — so a post looks identical wherever it is listed. Listings
 * turn the excerpt on and link the category pill to its landing page.
 */
import PostCard from '@/components/site/PostCard';
import type { CmsPost } from '@/lib/cms';
import type { Locale } from '@/i18n/locales';
import { blogStrings } from '@/i18n/blog';
import { SITE } from '@/lib/site/palette';

/** Reveal direction by column, matching the homepage's Blogs band. */
const REVEALS = ['left', 'up', 'right'];

export default function PostGrid({
  posts,
  locale,
  prefix = '',
}: {
  posts: CmsPost[];
  /** The reader's language — the cards date themselves in it. */
  locale: Locale;
  /** Locale URL prefix for the card links. */
  prefix?: string;
}) {
  if (!posts.length) {
    return (
      <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: SITE.body }}>
        No posts yet. Check back soon.
      </p>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        // 280px, not the homepage band's 340px: at 620px of tablet width 340px
        // only ever fits one column, which left one enormous card per row.
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '32px',
      }}
    >
      {posts.map((post, i) => (
        <PostCard
          locale={locale}
          // Without this the card falls back to the hardcoded English "Read
          // more" — the homepage band passes the CMS's translated label, so
          // only the listings were showing it.
          readMoreLabel={blogStrings(locale).index.readMore}
          prefix={prefix}
          key={post._id}
          post={post}
          reveal={REVEALS[i % REVEALS.length]}
          showExcerpt
          linkCategory
        />
      ))}
    </div>
  );
}
