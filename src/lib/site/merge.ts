/**
 * Merge CMS `sections` overrides onto a page's built-in defaults.
 *
 * The defaults are the canonical copy — the page renders correctly with an
 * empty or unreachable CMS — and a saved value only ever replaces the leaf it
 * names.
 *
 * Arrays keep AT LEAST as many items as the defaults, and grow to the saved
 * length when that is longer. The reason is how an edit is recorded: the inline
 * editor writes one leaf by path, so changing the second of three cards saves
 * `[null, {title}]` — index 0 is a hole and index 2 was simply never touched.
 * Read as "the saved array is the whole array", that silently deletes the third
 * card, which is exactly what happened to the contact page. Nothing here offers
 * a way to REMOVE an item — these pages are edited in place, with no add/remove
 * UI — so a short saved array always means "only these indices were recorded".
 *
 * Each item is filled in from the matching default, or past the end of the
 * defaults from the first one used as a template, so an item added by a longer
 * saved array still arrives with every field.
 *
 * Shared by every page content model under lib/site.
 */
export function mergeContent<T>(def: T, raw: unknown): T {
  if (raw === undefined || raw === null) return def;

  if (Array.isArray(def)) {
    if (!Array.isArray(raw)) return def;
    const template = def[0];
    const length = Math.max(def.length, raw.length);
    // `raw[i]` is undefined past the saved end and null in a hole; both fall
    // back to the default for that position.
    return Array.from({ length }, (_, i) =>
      mergeContent(i < def.length ? def[i] : template, raw[i]),
    ) as unknown as T;
  }

  if (def && typeof def === "object") {
    if (typeof raw !== "object" || Array.isArray(raw)) return def;
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(def as Record<string, unknown>)) {
      out[key] = mergeContent(
        (def as Record<string, unknown>)[key],
        (raw as Record<string, unknown>)[key],
      );
    }
    return out as T;
  }

  // A saved value may replace a leaf, never change its SHAPE. Where the default
  // is a string the page renders it directly, so an object arriving here — a
  // malformed save, a hand-edited document, a future field written at the wrong
  // depth — would reach React as a child object and take the whole page down
  // with a 500. The point of these defaults is that the page survives whatever
  // the CMS holds, so a mismatched type falls back instead.
  if (typeof raw !== typeof def) return def;

  return raw as T;
}

/** A text link. Used by every nav, footer column and CTA in the design. */
export type SiteLink = { label: string; href: string };

/** An image slot: the design's `<img>` src + alt, both CMS-editable. */
export type SiteImage = { src: string; alt: string };
