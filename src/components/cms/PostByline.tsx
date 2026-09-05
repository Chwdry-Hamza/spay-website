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
import { readTimeLabel, type BlogStrings } from '@/i18n/blog';

/**
 * The publication date in the page's language.
 *
 * Rendered on the server, so the locale has to be passed in explicitly — the
 * server's own locale is irrelevant to the reader. Arabic and Urdu deliberately
 * use the `-u-nu-latn` extension so the digits stay Western: the rest of the
 * page's numbers (prices, limits) come from the CMS in Western digits, and
 * mixing the two in one article reads as a mistake.
 */
function formatDate(iso?: string | null, locale = 'en-US'): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(locale, {
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
  strings,
  dateLocale,
}: {
  authorName?: string;
  publishedAt?: string | null;
  readTime?: number;
  shareUrl: string;
  title: string;
  strings: BlogStrings['post'];
  /** BCP-47 tag for the date. Defaults to English so nothing regresses. */
  dateLocale?: string;
}) {
  const date = formatDate(publishedAt, dateLocale);
  const meta = [date, readTime ? readTimeLabel(strings, readTime) : ''].filter(Boolean);
  const author = resolveAuthor(authorName);

  return (
    <div
      className="flex flex-wrap items-center gap-4 py-4"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.09)',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
              }}
    >
      <div
        className="grid size-[42px] shrink-0 place-items-center rounded-full text-[15px] font-bold"
        style={{
          background: '#118EA3',
          color: '#ffffff',
                  }}
        aria-hidden
      >
        {authorInitials(author.name)}
      </div>

      <div>
        <div className="text-[14.5px] font-semibold text-[#0b1620]">
          {author.name}
        </div>
        {meta.length > 0 && (
          <div className="text-[13px]" style={{ color: '#8a949d' }}>
            {date && <time dateTime={publishedAt ?? undefined}>{date}</time>}
            {meta.length > 1 && <span aria-hidden> · </span>}
            {readTime ? <span>{readTimeLabel(strings, readTime)}</span> : null}
          </div>
        )}
      </div>

      {/* `ms-auto`, not `ml-auto`: the share buttons belong at the END of the
          byline row, and in Urdu or Arabic that is the left. A physical
          margin-left pushes them toward the right whichever way the text runs,
          which in RTL parked them against the author's name. */}
      <div className="ms-auto max-sm:ms-0 max-sm:w-full">
        <ShareRow url={shareUrl} title={title} strings={strings} />
      </div>
    </div>
  );
}
