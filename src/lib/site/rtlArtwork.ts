import { localeDef, type Locale } from '@/i18n/locales';

/**
 * Swaps artwork that is drawn with a direction for its mirrored twin.
 *
 * `dir="rtl"` mirrors the LAYOUT — text, flow, the order of the columns — but
 * it cannot mirror a photograph. The homepage hero is a silver hand reaching in
 * from the edge holding a card; on the Arabic and Urdu pages the layout puts
 * that image on the other side, and the hand then reaches in from the wrong
 * one, out of the middle of the page instead of the margin.
 *
 * Nor can CSS do it. `transform: scaleX(-1)` would mirror the hand and the card
 * together, and the card carries the SPay logo and the word VISA — a backwards
 * Visa card on a payments site is worse than a hand facing the wrong way. So
 * the twin is a real second file, with the hand mirrored and the card left
 * upright.
 *
 * The mapping is written out rather than inferred from a `-rtl` suffix, so
 * adding a directional image is a deliberate act and a missing twin is a
 * failing test rather than a broken page. The self-test checks every file here
 * exists.
 *
 * (These lived in `src/i18n/{ar,ur}/home.ts` while each language had its own
 * copy of the content. Once the copy moved to the CMS — which stores one `src`
 * for all nine languages, correctly — the swap had to become a render-time
 * rule, the same way links did. See localiseHrefs.ts.)
 */
export const RTL_ARTWORK: Readonly<Record<string, string>> = {
  '/site/spay-hero-card.png': '/site/spay-hero-card-rtl.png',
};

/** Keys that hold an image path. */
const isSrcKey = (key: string) => key === 'src';

export function localiseArtwork<T>(content: T, locale: Locale): T {
  if (localeDef(locale).dir !== 'rtl') return content;
  return walk(content, '') as T;
}

function walk(node: unknown, key: string): unknown {
  if (typeof node === 'string') {
    return isSrcKey(key) ? RTL_ARTWORK[node] ?? node : node;
  }

  if (Array.isArray(node)) {
    let changed = false;
    const out = node.map((item) => {
      const next = walk(item, key);
      if (next !== item) changed = true;
      return next;
    });
    return changed ? out : node;
  }

  if (node && typeof node === 'object') {
    let changed = false;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      const next = walk(v, k);
      if (next !== v) changed = true;
      out[k] = next;
    }
    // Untouched branches stay shared rather than being rebuilt.
    return changed ? out : node;
  }

  return node;
}
