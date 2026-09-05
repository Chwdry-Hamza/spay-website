/**
 * The design's colour tokens.
 *
 * The ported pages (components/site/**) spell their colours inline, exactly as
 * the design export did, so that app/spay-site.css can keep matching on the
 * style text. This module is for everything AROUND those pages — the blog,
 * search and legal templates — which carry the same design but were not part
 * of the export, so they have no literal markup to stay faithful to.
 */
export const SITE = {
  /** Headings and high-contrast text. */
  ink: "#0b1620",
  /** Body copy. */
  body: "#4a5560",
  /** Body copy on a mint band, where more contrast is available. */
  bodyStrong: "#16202a",
  /** Dates, counters, captions. */
  muted: "#8a949d",

  /** Brand teal — links, accents, primary buttons. */
  brand: "#118EA3",
  /** Brand teal, hovered. */
  brandDark: "#0d7385",
  /** The deep teal used for text on mint. */
  brandDeep: "#0b3c44",
  /** Small caps labels on mint. */
  brandMuted: "#0f6b78",

  /** The mint band behind the header, footer and alternating sections. */
  band: "#a2d9d4",
  /** A hairline that reads on the mint band. */
  bandLine: "#7cc4bf",

  /** Page background. */
  surface: "#ffffff",
  /** Tinted card fill. */
  surfaceSoft: "#f3fbfa",
  /** Image placeholder / inset fill. */
  surfaceInset: "#f6fafb",

  /** Card and divider hairline. */
  line: "#e3e8ec",
  /** The lighter hairline inside a card. */
  lineSoft: "#eef2f4",
} as const;
