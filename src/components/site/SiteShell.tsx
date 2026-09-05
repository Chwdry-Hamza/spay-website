import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteBottomNav from "./SiteBottomNav";
import SiteFooter from "./SiteFooter";
import SiteMotion from "./SiteMotion";
import type { SiteChromeContent } from "@/lib/site/chrome";

/**
 * The wrapper every page renders: the design export's root element, the shared
 * chrome around the page body, and the motion runtime.
 *
 * `.spay-site` is what scopes app/spay-site.css, so nothing on the site may
 * render outside this shell — a page body mounted elsewhere would lose the
 * whole responsive layer.
 *
 * Child order matches the export: header, bottom nav, page body, footer.
 */
export default function SiteShell({
  chrome,
  active,
  footerMarginTop,
  footerWatermarkLeft,
  children,
}: {
  chrome: SiteChromeContent;
  /** Route of the page being rendered, e.g. "/about/" — drives the nav's
   *  active state in both the header and the bottom nav. */
  active: string;
  footerMarginTop?: string;
  footerWatermarkLeft?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="spay-site"
      style={{
        background: "#ffffff",
        color: "#4a5560",
        fontFamily: "var(--font-sans, Inter, sans-serif)",
        fontWeight: "400",
      }}
    >
      <SiteHeader content={chrome.header} active={active} />
      <SiteBottomNav content={chrome.bottomNav} active={active} />
      {children}
      <SiteFooter
        content={chrome.footer}
        marginTop={footerMarginTop}
        watermarkLeft={footerWatermarkLeft}
      />
      <SiteMotion />
    </div>
  );
}
