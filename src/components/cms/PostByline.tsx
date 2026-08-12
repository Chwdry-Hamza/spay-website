/**
 * Author / date / read-time strip under the article headline, with the share
 * controls pushed to the right. Everything except the share buttons is server
 * rendered.
 *
 * The author always renders — `resolveAuthor` substitutes the editorial byline
 * when the CMS stored an admin's email, so there is no "no author" case to
 * omit. Date and read time are dropped individually when unset.
 */
import ShareRow from './ShareRow';
import { authorInitials, resolveAuthor } from '@/lib/author';

function formatDate(iso?: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostByline({
  authorName,
  publishedAt,
  readTime,
  shareUrl,
  title,
}: {
  authorName?: string;
  publishedAt?: string | null;
  readTime?: number;
  shareUrl: string;
  title: string;
}) {
  const date = formatDate(publishedAt);
  const meta = [date, readTime ? `${readTime} min read` : ''].filter(Boolean);
  const author = resolveAuthor(authorName);

  return (
    <div
      className="flex flex-wrap items-center gap-4 py-4"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.09)',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
        fontFamily: 'var(--font-inter)',
      }}
    >
      <div
        className="grid size-[42px] shrink-0 place-items-center rounded-full text-[15px] font-bold"
        style={{
          background: 'linear-gradient(140deg,#0e5a63,#46F1C5)',
          color: '#04222a',
          fontFamily: 'var(--font-space-grotesk)',
        }}
        aria-hidden
      >
        {authorInitials(author.name)}
      </div>

      <div>
        <div className="text-[14.5px] font-semibold text-white">
          {author.name}
        </div>
        {meta.length > 0 && (
          <div className="text-[13px]" style={{ color: '#7A8194' }}>
            {date && <time dateTime={publishedAt ?? undefined}>{date}</time>}
            {meta.length > 1 && <span aria-hidden> · </span>}
            {readTime ? <span>{readTime} min read</span> : null}
          </div>
        )}
      </div>

      <div className="ml-auto max-sm:ml-0 max-sm:w-full">
        <ShareRow url={shareUrl} title={title} />
      </div>
    </div>
  );
}
