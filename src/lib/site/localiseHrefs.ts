import { hasLocalisedRoute, localePrefixOf, type Locale } from '@/i18n/locales';

/**
 * Rewrites the links in CMS content so they stay in the reader's language.
 *
 * The CMS stores one href per link, in English — `/card/`, `/blog/`,
 * `/about/#security` — and that is right: an editor changing where "Products"
 * points should change it for all nine languages at once, not nine times. But
 * rendered verbatim on `/ur/`, every one of those links drops the reader back
 * into English. Someone who has chosen a language has chosen it for the site,
 * not for one page.
 *
 * (This was not a problem while the header and footer came from per-language
 * files that spelled out `/ur/card/`. Moving them into the CMS is what made a
 * render-time rule necessary — and it is the better place for it: a link added
 * to the CMS tomorrow is localised without anyone remembering to.)
 *
 * What is deliberately left alone:
 *
 *   - anything leaving the site, and `mailto:` / `tel:`;
 *   - a bare `#anchor`, which is this page wherever this page is;
 *   - a path this language does not publish. `/privacy-policy/` has no Urdu
 *     route, so prefixing it would 404. Sending the reader to the Urdu homepage
 *     instead — what the language switcher does — would be worse: they asked
 *     for the privacy policy. They get it, in English, which is honest.
 */

/** Keys that hold a link. Mirrors the href entries in PAGE_SKIP_KEYS. */
const isHrefKey = (key: string) => key === 'href' || key.endsWith('Href');

export function localiseHrefs<T>(content: T, locale: Locale): T {
  if (!localePrefixOf(locale)) return content;
  return walk(content, locale, '') as T;
}

function walk(node: unknown, locale: Locale, key: string): unknown {
  if (typeof node === 'string') {
    return isHrefKey(key) ? localiseHref(node, locale) : node;
  }

  if (Array.isArray(node)) {
    let changed = false;
    // An array inherits its parent's key, so `links: [{href}]` still reaches
    // the objects inside and a hypothetical `hrefs: ['/a']` would be rewritten.
    const out = node.map((item) => {
      const next = walk(item, locale, key);
      if (next !== item) changed = true;
      return next;
    });
    return changed ? out : node;
  }

  if (node && typeof node === 'object') {
    let changed = false;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      const next = walk(v, locale, k);
      if (next !== v) changed = true;
      out[k] = next;
    }
    // Untouched branches stay shared rather than being rebuilt.
    return changed ? out : node;
  }

  return node;
}

/** One href. Exported for the self-test. */
export function localiseHref(href: string, locale: Locale): string {
  const prefix = localePrefixOf(locale);
  if (!prefix) return href;

  const value = href.trim();
  if (!value) return href;
  // Off-site, or a handover to a mail client or dialer.
  if (/^[a-z][a-z0-9+.-]*:/i.test(value) || value.startsWith('//')) return href;
  // Same page, whichever page that is.
  if (value.startsWith('#')) return href;
  if (!value.startsWith('/')) return href;

  // Keep the anchor and query on the side: the registry is asked about the
  // path, and `/about/#security` has to come back as `/ur/about/#security`.
  const cut = value.search(/[?#]/);
  const path = cut === -1 ? value : value.slice(0, cut);
  const tail = cut === -1 ? '' : value.slice(cut);

  const normalised = path.endsWith('/') ? path : `${path}/`;
  if (!hasLocalisedRoute(locale, normalised)) return href;

  return `${prefix}${normalised}${tail}`;
}
