import type { CSSProperties, ReactNode } from "react";
import type { SiteChromeContent } from "@/lib/site/chrome";

/**
 * The floating mobile nav bar. Hidden above 1080px by app/spay-site.css, which
 * also switches it to a grid — hence `display: none` in the inline baseline and
 * the `data-r="botnav"` hook it selects on.
 *
 * Icons pair with the entries by position and cycle past the fourth, so an
 * editor who renames or adds an entry never gets a gap.
 */

const ICONS: ReactNode[] = [
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="home"
  >
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5.5 9.5V21h13V9.5" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="about"
  >
    <circle cx={12} cy={12} r={9} />
    <path d="M12 11v6" />
    <path d="M12 7.6v.4" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="card"
  >
    <rect x={2.5} y={5} width={19} height={14} rx={2.5} />
    <path d="M2.5 10h19" />
    <path d="M6.5 15h4" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="how"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
    <circle cx={8} cy={6} r={1.6} fill="currentColor" stroke="none" />
    <circle cx={15} cy={12} r={1.6} fill="currentColor" stroke="none" />
    <circle cx={10} cy={18} r={1.6} fill="currentColor" stroke="none" />
  </svg>,
];

const ITEM: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  padding: "6px 2px",
  minHeight: "54px",
  textDecoration: "none",
  WebkitTapHighlightColor: "transparent",
};

const PUCK: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "30px",
  borderRadius: "999px",
  transition: "background .2s ease",
};

const LABEL: CSSProperties = {
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "0.4px",
  lineHeight: "1",
  whiteSpace: "nowrap",
};

export default function SiteBottomNav({
  content,
  active,
}: {
  content: SiteChromeContent["bottomNav"];
  /** Route of the page being rendered, e.g. "/about/". */
  active: string;
}) {
  return (
    <nav
      data-r="botnav"
      aria-label="Mobile"
      style={{
        display: "none",
        position: "fixed",
        left: "12px",
        right: "12px",
        bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        zIndex: "70",
        background: "rgba(255,255,255,0.28)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.5)",
        borderRadius: "26px",
        boxShadow: "0 10px 28px rgba(11,60,68,0.12)",
        padding: "8px 6px",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      }}
    >
      {content.items.map((item, i) => {
        const isActive = item.href === active;
        return (
          <a
            key={item.href}
            href={isActive ? "#top" : item.href}
            aria-current={isActive ? "page" : undefined}
            style={{ ...ITEM, color: isActive ? "#0d7385" : "#000000" }}
          >
            <span
              style={{
                ...PUCK,
                background: isActive ? "#118EA3" : "transparent",
                color: isActive ? "#ffffff" : "inherit",
              }}
            >
              {ICONS[i % ICONS.length]}
            </span>
            <span style={LABEL}>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
