/**
 * Anchor props for a link whose destination is editable.
 *
 * A CTA on these pages points wherever the CMS says — usually an app store,
 * sometimes an anchor on the same page, and after a future edit possibly
 * anything. So the decision cannot be baked into the markup: it is made from
 * the href each time it renders.
 *
 * A link that leaves the site opens in a new tab. Someone halfway through
 * reading a page and tapping "Get the app" should come back to where they were,
 * not have to find it again — which is what happened before this existed: the
 * plan CTAs on the homepage and the card page replaced the page.
 *
 * `rel="noopener noreferrer"` always travels with `target="_blank"`: without
 * `noopener` the opened page can reach back through `window.opener`.
 */
export type ExternalLinkProps = {
  target?: '_blank';
  rel?: 'noopener noreferrer';
};

/**
 * Whether `href` leaves this site.
 *
 * Protocol-relative URLs (`//example.com`) count as external. Anchors, relative
 * paths, `mailto:` and `tel:` do not — a mail client or dialer is a handover,
 * not a page the reader needs to come back from.
 */
export function isExternalHref(href: string | undefined | null): boolean {
  if (!href) return false;
  const value = href.trim();
  if (value.startsWith('//')) return true;
  return /^https?:\/\//i.test(value);
}

/** Spread onto an `<a>`: opens external destinations in a new tab, nothing else. */
export function externalLinkProps(href: string | undefined | null): ExternalLinkProps {
  return isExternalHref(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
}
