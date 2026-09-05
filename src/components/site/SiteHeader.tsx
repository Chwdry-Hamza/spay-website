import type { CSSProperties } from "react";
import GetAppLink from "@/components/GetAppLink";
import type { SiteChromeContent } from "@/lib/site/chrome";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * The site header, ported from the design export.
 *
 * `data-r="hdr-nav" | "hdr-cta" | "hdr-contact" | "hdr-app" | "hdr-toggle" |
 * "hdr-panel"` and `data-hdr-line` are behaviour hooks, not decoration:
 * app/spay-site.css swaps the desktop nav for the two pills below 1081px, and
 * SiteMotion drives the hamburger panel and the hairline. Renaming one silently
 * breaks the mobile header.
 *
 * The desktop nav and the hamburger panel render the same links, so both map
 * the same array — the styles are shared rather than duplicated.
 *
 * The language switcher follows the export's own pattern for the CTAs: a full
 * one inside `hdr-cta` for desktop and a compact `hdr-lang-pill` beside the two
 * mobile pills, with the responsive layer showing exactly one of them. Adding a
 * fourth child to the header row instead would have redistributed its
 * `space-between` spacing and moved the design's nav.
 */

const NAV_LINK: CSSProperties = {
  fontSize: "16px",
  fontWeight: "400",
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  color: "#000000",
};

/** The current page's entry: a filled pill that scrolls back to the top. */
const NAV_LINK_ACTIVE: CSSProperties = {
  fontSize: "17px",
  fontWeight: "700",
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  color: "#ffffff",
  background: "#118EA3",
  borderRadius: "999px",
  padding: "11px 24px",
};

const CTA: CSSProperties = {
  background: "#118EA3",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  padding: "16px 32px",
  borderRadius: "999px",
  transition: "all .22s ease",
};

const PILL: CSSProperties = {
  display: "none",
  alignItems: "center",
  flex: "none",
  background: "#118EA3",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  padding: "12px 18px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
};

export default function SiteHeader({
  content,
  active,
}: {
  content: SiteChromeContent["header"];
  /** Route of the page being rendered, e.g. "/about/". */
  active: string;
}) {
  const navLinks = content.nav.map((item) => {
    const isActive = item.href === active;
    return (
      <a
        key={item.href}
        className={isActive ? undefined : "dc-h1"}
        href={isActive ? "#top" : item.href}
        style={isActive ? NAV_LINK_ACTIVE : NAV_LINK}
      >
        {item.label}
      </a>
    );
  });

  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "60",
        background: "rgba(162,217,212,0.96)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "26px 72px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={content.logo.src}
              alt={content.logo.alt}
              // Smaller than the export's 62px, on request — and it also buys
              // back some sharpness: the logo asset is only 412px wide, so the
              // smaller it renders the more source pixels each device pixel
              // gets on a high-DPI screen. The responsive layer still overrides
              // this to 48px between 1081–1400px and 42px on phones.
              style={{ height: "46px", width: "auto", display: "block" }}
            />
          </a>
          <nav
            data-r="hdr-nav"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px 34px",
            }}
          >
            {navLinks}
          </nav>
          <div
            data-r="hdr-cta"
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "14px" }}
          >
            <LanguageSwitcher />
            <a className="dc-h2" href={content.contact.href} style={CTA}>
              {content.contact.label}
            </a>
            <GetAppLink className="dc-h2" style={CTA}>
              {content.appLabel}
            </GetAppLink>
          </div>
          <div data-r="hdr-lang-pill" style={{ display: "none", flex: "none" }}>
            <LanguageSwitcher />
          </div>
          <a data-r="hdr-contact" href={content.contact.href} style={PILL}>
            {content.contact.label}
          </a>
          <GetAppLink data-r="hdr-app" style={{ ...PILL, gap: "8px" }}>
            {content.appLabel}
          </GetAppLink>
          <button
            data-r="hdr-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            style={{
              display: "none",
              flex: "none",
              width: "52px",
              height: "52px",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              background: "transparent",
              border: "1.5px solid #0b3c44",
              borderRadius: "999px",
              color: "#0b3c44",
              cursor: "pointer",
              padding: "0",
            }}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
            >
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          </button>
        </div>
        <div
          data-r="hdr-panel"
          style={{ display: "none", flexDirection: "column", gap: "22px", padding: "22px 0 24px" }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {navLinks}
          </nav>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "center" }}>
            <a className="dc-h2" href={content.contact.href} style={CTA}>
              {content.contact.label}
            </a>
            <GetAppLink className="dc-h2" style={CTA}>
              {content.appLabel}
            </GetAppLink>
          </div>
        </div>
        <div
          data-hdr-line=""
          style={{
            height: "1px",
            background: "#0b3c44",
            marginTop: "22px",
            transition: "opacity .2s ease",
          }}
        />
      </div>
    </header>
  );
}
