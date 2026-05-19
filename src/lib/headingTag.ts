import type { CSSProperties, ElementType } from "react";

export type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const VALID_TAGS: ReadonlySet<TextTag> = new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
]);

/**
 * Resolve a CMS-driven per-slot tag override (stored at
 * `data.style.headings[slot]`) to a concrete element type. `fallback` is the
 * tag the section historically rendered for this text element, so a page
 * with no override keeps its existing markup.
 *
 * Accepts unknown / invalid values (e.g. from stale or hand-edited records)
 * and falls back instead of throwing — the renderer never crashes on bad
 * CMS data.
 */
export function resolveTextTag(
  override: unknown,
  fallback: TextTag,
): ElementType {
  if (typeof override === "string" && VALID_TAGS.has(override as TextTag)) {
    return override as ElementType;
  }
  return fallback as ElementType;
}

/**
 * Convenience: pull the override for `slot` out of a section's `style.headings`
 * map and resolve it. Lets section components call
 *   const Eyebrow = slotTag(data.style, "eyebrow", "p");
 * without each one re-implementing the lookup.
 */
export function slotTag(
  style: { headings?: Record<string, unknown> } | null | undefined,
  slot: string,
  fallback: TextTag,
): ElementType {
  return resolveTextTag(style?.headings?.[slot], fallback);
}

/**
 * Inline style hint applied when the editor *explicitly overrides* a slot's
 * tag in the CMS Style panel. The hardcoded Tailwind size classes on each
 * section element would otherwise mask the change — every tag would look
 * the same size. With this hint mixed in via `style={{ ...x, ...override }}`
 * the heading visibly scales to its semantic level so the live preview
 * reflects what the editor picked.
 *
 * Returns `null` when there is no override → the section keeps its
 * design-locked Tailwind class untouched.
 */
const TAG_SIZE_PX: Record<TextTag, { fontSize: string; lineHeight: number }> = {
  p:  { fontSize: "1rem",    lineHeight: 1.55 },
  h6: { fontSize: "0.95rem", lineHeight: 1.4 },
  h5: { fontSize: "1.15rem", lineHeight: 1.35 },
  h4: { fontSize: "1.45rem", lineHeight: 1.3 },
  h3: { fontSize: "1.85rem", lineHeight: 1.25 },
  h2: { fontSize: "2.5rem",  lineHeight: 1.15 },
  h1: { fontSize: "3.5rem",  lineHeight: 1.1 },
};

export function slotSizeOverride(
  style: { headings?: Record<string, unknown> } | null | undefined,
  slot: string,
): CSSProperties | null {
  const override = style?.headings?.[slot];
  if (typeof override === "string" && VALID_TAGS.has(override as TextTag)) {
    return TAG_SIZE_PX[override as TextTag];
  }
  return null;
}

/**
 * Legacy: the previous shape stored a numeric `titleLevel` directly on the
 * section data. The new shape stores tag overrides under `style.headings`.
 * Existing call sites still pass `data.titleLevel` (which no longer exists,
 * so it's always `undefined`); they then read the fallback. Migrate them to
 * `slotTag` to make the override actually work.
 *
 * @deprecated Use `slotTag(data.style, slot, fallback)`.
 */
export function resolveHeadingTag(
  level: number | undefined | null,
  fallback: 1 | 2 | 3 | 4 | 5 | 6,
): ElementType {
  const lv = level ?? fallback;
  if (lv === 1 || lv === 2 || lv === 3 || lv === 4 || lv === 5 || lv === 6) {
    return `h${lv}` as ElementType;
  }
  return `h${fallback}` as ElementType;
}
