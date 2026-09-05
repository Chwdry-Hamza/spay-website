import type { CSSProperties, ReactNode } from "react";
import { linkTarget } from "@/lib/linkTarget";
import StorePair from "./StoreButtons";
import type { SiteChromeContent } from "@/lib/site/chrome";

/**
 * The site footer, ported from the design export.
 *
 * The DOM shape is load-bearing: app/spay-site.css reflows the link columns
 * with `footer > div:first-of-type`, so the columns grid has to stay the
 * footer's FIRST child element and the brand block its first child in turn.
 *
 * Social icons pair with `content.social` by position (Instagram, Facebook, X,
 * TikTok) and cycle past the fourth.
 */

const SOCIAL_ICONS: ReactNode[] = [
  <svg
    viewBox="0 0 24 24"
    width={21}
    height={21}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="instagram"
  >
    <rect x={3} y={3} width={18} height={18} rx={5} />
    <circle cx={12} cy={12} r={4.1} />
    <circle cx={17.2} cy={6.8} r={1.05} fill="currentColor" stroke="none" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={21}
    height={21}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="facebook"
  >
    <path d="M14.6 21v-8h2.7l.5-3.2h-3.2V7.7c0-.9.3-1.6 1.7-1.6h1.7V3.2A22 22 0 0 0 15.5 3c-2.5 0-4.2 1.5-4.2 4.3v2.5H8.5V13h2.8v8" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={21}
    height={21}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="x"
  >
    <path d="M4.2 3.6h3.6l4.4 5.8 4.9-5.8h2.7l-6.3 7.4 6.7 9h-3.6l-4.7-6.3-5.3 6.3H3.9l6.8-8z" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={21}
    height={21}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="tiktok"
  >
    <path d="M13.2 3.4v11.9a3.4 3.4 0 1 1-3.4-3.4c.35 0 .7.05 1 .15" />
    <path d="M13.2 3.4a5.5 5.5 0 0 0 5.5 5.5v2.7a8 8 0 0 1-4.1-1.1" />
  </svg>,
];

const SOCIAL_BUTTON: CSSProperties = {
  width: "52px",
  height: "52px",
  border: "1.5px solid #2c7d80",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0b3c44",
  transition: "all .22s ease",
};

const COLUMN: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  minWidth: "0",
};

const COLUMN_HEADING: CSSProperties = {
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#000000",
  marginBottom: "12px",
};

const COLUMN_LINK: CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.35",
  color: "#0d3b42",
  fontWeight: "400",
  transition: "color .2s ease",
};

export default function SiteFooter({
  content,
  marginTop = "24px",
  watermarkLeft = "72px",
}: {
  content: SiteChromeContent["footer"];
  /** Gap above the footer. The design uses 24px, or 0 where the page's last
   *  band already ends flush (How it works, Contact). */
  marginTop?: string;
  /** Left offset of the oversized "SPay" watermark: 72px on the homepage,
   *  48px on the inner pages. */
  watermarkLeft?: string;
}) {
  return (
    <footer
      style={{ position: "relative", marginTop, background: "#a2d9d4", overflow: "hidden" }}
    >
      <div
        style={{
          position: "relative",
          zIndex: "2",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "96px 72px 0",
          display: "grid",
          gridTemplateColumns: "minmax(280px, 1.5fr) repeat(auto-fit, minmax(150px, 1fr))",
          gap: "56px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "0" }}>
          <img
            src={content.logo.src}
            alt={content.logo.alt}
            // Matched to the header logo (46px): the asset is only 412px
            // wide, so rendering it smaller keeps it sharp on high-DPI
            // screens. The export drew this one at 58px.
            style={{ height: "46px", width: "auto", display: "block", alignSelf: "flex-start" }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2.4px",
              textTransform: "uppercase",
              color: "#0d6470",
            }}
          >
            {content.tag}
          </span>
          <p
            style={{
              margin: "0",
              maxWidth: "34ch",
              fontSize: "15px",
              lineHeight: "1.72",
              color: "#1a5b65",
              textWrap: "pretty",
            }}
          >
            {content.blurb}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "6px" }}>
            {content.social.map((item, i) => (
              <a
                key={item.label}
                className="dc-h10"
                href={item.href}
                aria-label={item.label}
                style={SOCIAL_BUTTON}
                {...linkTarget(item.href)}
              >
                {SOCIAL_ICONS[i % SOCIAL_ICONS.length]}
              </a>
            ))}
          </div>
        </div>

        {content.columns.map((column) => (
          <nav key={column.heading} style={COLUMN}>
            <span style={COLUMN_HEADING}>{column.heading}</span>
            {column.links.map((link) => (
              <a
                key={link.label}
                className="dc-h11"
                href={link.href}
                style={COLUMN_LINK}
                {...linkTarget(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: "2",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 72px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #7cc4bf",
            marginTop: "64px",
            paddingTop: "44px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <StorePair appStore={content.appStore} playStore={content.playStore} size="lg" />
        </div>
        <div
          style={{
            borderTop: "1px solid #7cc4bf",
            marginTop: "44px",
            padding: "26px 0 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 48px",
            justifyContent: "space-between",
            fontSize: "12.5px",
            lineHeight: "1.8",
            letterSpacing: "0.2px",
            color: "#155a63",
          }}
        >
          <span>{content.copyright}</span>
          <span style={{ maxWidth: "70ch" }}>{content.disclaimer}</span>
        </div>
      </div>

      <span
        data-r="watermark"
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: "1",
          left: watermarkLeft,
          right: "0",
          bottom: "-3.2vw",
          fontSize: "19vw",
          lineHeight: ".72",
          fontWeight: "700",
          letterSpacing: "-0.6vw",
          textTransform: "none",
          color: "#0d3b42",
          opacity: ".07",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        SPay
      </span>
    </footer>
  );
}
