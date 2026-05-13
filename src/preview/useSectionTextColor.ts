/**
 * Helper to read CMS-driven text colour overrides from a section's data.
 * Pair with `useSectionData` so the component picks up the merged
 * (defaults → published → live preview) value.
 *
 * Usage in a section component:
 *
 *   const data = useSectionData<MyData>("payment", DEFAULTS);
 *   const t = pickTextColors(data, { eyebrow: "#A6AABE", subtitle: "#A6AABE" });
 *   <p style={{ color: t.eyebrow }}>…</p>
 */

export type TextColorMap = Record<string, string | undefined>;

/**
 * Merges `data.style.text` (CMS overrides) with caller-supplied fallbacks.
 * Returns an object where every key in `fallbacks` is guaranteed to be a
 * non-empty string — the override if set, otherwise the fallback.
 *
 * The `data` argument is typed as `unknown` because each section component
 * has its own typed `SectionData` shape that doesn't formally declare the
 * optional `style.text` field. We grab it defensively at runtime.
 */
export function pickTextColors<K extends string>(
  data: unknown,
  fallbacks: Record<K, string>,
): Record<K, string> {
  let overrides: TextColorMap = {};
  if (data && typeof data === "object" && "style" in data) {
    const maybe = (data as { style?: { text?: TextColorMap } }).style?.text;
    if (maybe && typeof maybe === "object") overrides = maybe;
  }

  const out = { ...fallbacks } as Record<K, string>;
  for (const k of Object.keys(fallbacks) as K[]) {
    const v = overrides[k];
    if (typeof v === "string" && v.length > 0) out[k] = v;
  }
  return out;
}
