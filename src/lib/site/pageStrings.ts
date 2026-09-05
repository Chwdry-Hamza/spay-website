/**
 * Every English string a design page renders, in document order.
 *
 * This is what the CMS translates. It has to come from here because it cannot
 * be worked out there: the CMS stores only the leaves an editor overrode, while
 * the rest of the page comes from the defaults in this repo. Sending the
 * resolved content — defaults with the overrides merged in — is the only way
 * the translator sees the whole page.
 *
 * The rules below mirror `segments.ts` in the CMS exactly. They have to: a
 * string sent from here but skipped there would never be translated, and one
 * skipped here but expected there would read as a gap in the coverage report.
 */

/** Keys whose value is never prose. Mirrors PAGE_SKIP_KEYS in segments.ts. */
const SKIP_KEYS = new Set(['href', 'src', 'id', 'from', 'slug', 'type', 'color']);

const isSkipped = (key: string) => SKIP_KEYS.has(key) || key.endsWith('Href');

/** Mirrors ADDRESS_ONLY: a leaf that is nothing but an address is not prose. */
const ADDRESS_ONLY =
  /^\s*(?:https?:\/\/\S+|mailto:\S+|tel:\S+|[^\s@]+@[^\s@]+\.[^\s@]+)\s*$/i;

const isProse = (value: unknown): value is string =>
  typeof value === 'string' && /\p{L}/u.test(value) && !ADDRESS_ONLY.test(value);

/**
 * De-duplicated, in the order the page reads.
 *
 * De-duplicated because a translation is keyed by the hash of its English, so
 * the same sentence twice is one segment either way; sending it once keeps the
 * list honest about how much there is to translate.
 */
export function pageStrings(content: unknown): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  const walk = (node: unknown, key: string): void => {
    if (Array.isArray(node)) {
      // An array of strings inherits its parent\'s key, so `features: [...]`
      // is prose while a hypothetical `sameAs: [...]` would not be.
      for (const item of node) walk(item, key);
      return;
    }
    if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node as Record<string, unknown>)) walk(v, k);
      return;
    }
    if (!isProse(node) || isSkipped(key)) return;
    if (seen.has(node)) return;
    seen.add(node);
    out.push(node);
  };

  walk(content, '');
  return out;
}
