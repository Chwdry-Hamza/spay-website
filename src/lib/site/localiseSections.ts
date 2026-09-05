import { createHash } from 'node:crypto';

/**
 * Applies a page's stored translation to its resolved English content.
 *
 * The CMS keeps a translation as SEGMENTS: one entry per English string, keyed
 * by a hash of that string. It cannot apply them itself, because a page's
 * English does not live in the CMS — `sections` holds only what an editor
 * overrode, and the rest comes from the defaults in this repo. Only here, after
 * `resolveHome()` and friends have merged the two, does the full English text
 * that a reader would see actually exist.
 *
 * So the substitution happens here, against that merged object.
 *
 * Note what this deliberately does NOT need: a list of keys to skip. The
 * backend decides what is prose when it collects segments, so a URL, an image
 * path or an anchor id never has one — its hash is simply absent from the map
 * and the string is left exactly as it was. One rule, applied in one place.
 */

/**
 * Must produce the same value as `segmentHash` in the CMS
 * (spay-backend/src/services/translation/segments.ts). A mismatch would not
 * throw — every lookup would just miss and the page would render in English —
 * so the two are kept identical on purpose: 16 hex chars of SHA-256, utf8.
 */
export function segmentHash(text: string): string {
  return createHash('sha256').update(text, 'utf8').digest('hex').slice(0, 16);
}

export type SegmentMap = Readonly<Record<string, string>>;

/**
 * A translated copy of `content`.
 *
 * Deep-copies as it goes and never mutates the input — the English defaults are
 * module-level constants shared by every request, and writing into them would
 * leak one reader's language into the next reader's page.
 *
 * Returns the input unchanged when there is nothing to apply, so a page with no
 * translation costs nothing.
 */
export function localiseSections<T>(content: T, segments: SegmentMap | undefined): T {
  if (!segments || Object.keys(segments).length === 0) return content;
  return walk(content, segments) as T;
}

function walk(node: unknown, segments: SegmentMap): unknown {
  if (typeof node === 'string') {
    return segments[segmentHash(node)] ?? node;
  }

  if (Array.isArray(node)) {
    let changed = false;
    const out = node.map((item) => {
      const next = walk(item, segments);
      if (next !== item) changed = true;
      return next;
    });
    return changed ? out : node;
  }

  if (node && typeof node === 'object') {
    let changed = false;
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      const next = walk(value, segments);
      if (next !== value) changed = true;
      out[key] = next;
    }
    // Returning the original when nothing changed keeps the untranslated
    // branches shared rather than rebuilt, which matters on the homepage.
    return changed ? out : node;
  }

  return node;
}
