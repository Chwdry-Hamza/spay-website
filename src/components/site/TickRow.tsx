import type { CSSProperties } from "react";

/**
 * A ticked feature line: a filled circle with a check, then the text.
 *
 * Used by the Card page's tier bands and the homepage's plan cards, which
 * differ only in the two sizes below.
 */

type Size = "md" | "lg";

const SIZES: Record<Size, { markTop: string; text: CSSProperties }> = {
  // Homepage plan cards
  md: { markTop: "2px", text: { fontSize: "16px", lineHeight: "1.5" } },
  // Card page tier bands
  lg: { markTop: "3px", text: { fontSize: "17px", lineHeight: "1.55" } },
};

const MARK: CSSProperties = {
  flex: "0 0 22px",
  width: "22px",
  height: "22px",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TEXT: CSSProperties = { color: "#16202a", textWrap: "pretty" };

export default function TickRow({
  children,
  accent,
  size,
  cmsPath,
}: {
  children: string;
  /** Fill colour of the tick circle — the band's accent. */
  accent: string;
  size: Size;
  /** Content path of this line, for CMS inline editing. */
  cmsPath?: string;
}) {
  const s = SIZES[size];
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <span style={{ ...MARK, marginTop: s.markTop, background: accent }}>
        <svg
          width={12}
          height={12}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span style={{ ...TEXT, ...s.text }} data-cms-field={cmsPath}>
        {children}
      </span>
    </div>
  );
}
