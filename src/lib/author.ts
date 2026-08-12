/**
 * Resolves the author name shown on a post.
 *
 * The CMS does not have an author field — the backend stamps `authorName` with
 * the login email of whoever created the post (`req.user?.email ?? 'system'`).
 * That was harmless while nothing rendered it, but the blog byline and the
 * Article JSON-LD both publish it now, so an admin's email address would end up
 * on the public site. Anything that isn't a real personal name falls back to
 * the editorial byline instead.
 *
 * Use this everywhere `post.authorName` would otherwise be shown or emitted.
 */

/** Shown when the stored author is an email, `system`, or missing. */
export const EDITORIAL_AUTHOR = 'SPay Editorial';

export type ResolvedAuthor = {
  name: string;
  /** False when we fell back — the byline is the publication, not a person. */
  isPerson: boolean;
};

export function resolveAuthor(authorName?: string | null): ResolvedAuthor {
  const raw = (authorName ?? '').trim();
  const looksLikeEmail = raw.includes('@');
  const isPlaceholder = raw.toLowerCase() === 'system';

  if (!raw || looksLikeEmail || isPlaceholder) {
    return { name: EDITORIAL_AUTHOR, isPerson: false };
  }
  // A post that stores the editorial byline verbatim is still the publication
  // writing, not a person — otherwise the same displayed name would be typed
  // Person here and Organization on the post next to it.
  if (raw.toLowerCase() === EDITORIAL_AUTHOR.toLowerCase()) {
    return { name: EDITORIAL_AUTHOR, isPerson: false };
  }
  return { name: raw, isPerson: true };
}

/** First letters of the first and last word, for the byline avatar disc. */
export function authorInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  const first = parts[0][0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? '' : '';
  return (first + last).toUpperCase();
}
