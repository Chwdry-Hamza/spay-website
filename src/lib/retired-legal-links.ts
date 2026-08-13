/**
 * Legal pages that used to live on this site and now live on the issuer's
 * legal site.
 *
 * The footer's link list is CMS-editable (`sections.footer.links`), so a stale
 * saved value there would keep pointing visitors at a retired local route no
 * matter what the code defaults say. These URLs are compliance-relevant, so
 * they are owned by the code: any footer link still aimed at one of the old
 * paths is rewritten to its external home.
 *
 * Prohibited Activities is already hard-coded this way in `SupportSections`
 * and in the Card Terms copy; this keeps the footer consistent with that.
 */
const RETIRED_LEGAL_LINKS: Record<string, string> = {
  '/e-sign-consent': 'https://legal.raincards.xyz/legal/electronic-communications-notice',
  '/prohibited-activities': 'https://legal.raincards.xyz/legal/prohibitions',
};

/** Normalises `/foo/`, `/foo` and `foo` to the `/foo` key form used above. */
function normalise(href: string): string {
  const trimmed = href.trim();
  if (!trimmed.startsWith('/')) return trimmed;
  return trimmed.length > 1 ? trimmed.replace(/\/+$/, '') : trimmed;
}

/**
 * Returns the external URL for a retired legal path, or the href unchanged.
 * External hrefs pass straight through, so `linkTarget()` still decides the
 * `target`/`rel` for whatever comes back.
 */
export function rewriteRetiredLegalHref(href: string): string {
  return RETIRED_LEGAL_LINKS[normalise(href)] ?? href;
}
