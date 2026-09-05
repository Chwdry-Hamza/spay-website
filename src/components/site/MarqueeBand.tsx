import type { CSSProperties } from "react";

/**
 * The scrolling "Get yours today." band, shared by About, Card, How it works
 * and Contact.
 *
 * The track is duplicated: `spay-marquee` (app/spay-site.css) translates it by
 * -50%, so the second copy is what makes the loop seamless, and it is
 * `aria-hidden`. `data-r="marquee"` is the hook the responsive layer uses to
 * give this band its own tighter mobile padding — the export selected on the
 * aria-label instead, which would have broken the moment an editor reworded it.
 */

const TRACK: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "56px",
  paddingRight: "56px",
  fontSize: "clamp(52px, 7vw, 104px)",
  lineHeight: "1.05",
  fontWeight: "800",
  letterSpacing: "-2px",
  textTransform: "uppercase",
  color: "#000000",
  whiteSpace: "nowrap",
};

export default function MarqueeBand({
  label,
  repeat = 4,
  cmsPath,
}: {
  label: string;
  /** Copies per track. Four fills a desktop viewport at the design's size. */
  repeat?: number;
  /** Content path of `label`. Only the first copy is tagged — the others are
   *  duplicates of the same string and re-render with it. */
  cmsPath?: string;
}) {
  const buildTrack = (tagged: boolean) =>
    Array.from({ length: repeat }, (_, i) => (
      <span key={i} data-cms-field={tagged && i === 0 ? cmsPath : undefined}>
        {label}
      </span>
    ));

  return (
    <section
      data-r="marquee"
      aria-label={label.replace(/\.$/, "")}
      style={{ background: "#a2d9d4", overflow: "hidden", padding: "26px 0" }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "spay-marquee 26s linear infinite",
          willChange: "transform",
        }}
      >
        <span style={TRACK}>{buildTrack(true)}</span>
        <span aria-hidden="true" style={TRACK}>
          {buildTrack(false)}
        </span>
      </div>
    </section>
  );
}
