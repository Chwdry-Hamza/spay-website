"use client";
import Link from "next/link";

import * as React from "react";
import { linkTarget } from "@/lib/linkTarget";
import { usePreviewSlice } from "@/hooks/usePreview";
import { HOME_CONTENT_DEFAULTS, type HomeContent } from "@/lib/homeContent";
import FallbackImg from "./FallbackImg";
import GetAppLink from './GetAppLink';

export default function BottomNav({
  content,
}: {
  content?: HomeContent["bottomNav"];
}) {
  const [activeSection, setActiveSection] = React.useState<string>("");
  // Live in preview; server-resolved value (or defaults) everywhere else.
  const data = usePreviewSlice("bottomNav", content ?? HOME_CONTENT_DEFAULTS.bottomNav);
  const t = {
    tileLabel: "#d4d4d8",
    tileIcon: "#04babf",
    ctaText: "#0a2a23",
    ctaBg: "#04babf",
  };

  // Watch the in-page sections referenced by each item so the active label
  // bolds while that section is in view. Works for both "#payment" and
  // "/payment" hrefs — see anchorTargetFor() below.
  React.useEffect(() => {
    const anchorIds = data.items
      .map((it) => anchorTargetFor(it.href))
      .filter((id): id is string => id !== null && id !== "");
    if (anchorIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" },
    );
    anchorIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [data.items]);

  const renderCta = (label: string, mobile = false) => (
    <GetAppLink
      appleHref={data.ctaUrl}
      data-cms-field={mobile ? "bottomNav.ctaMobileLabel" : "bottomNav.ctaLabel"}
      data-cms-href="bottomNav.ctaUrl"
      data-cms-href-below
      className={
        mobile
          ? "font-semibold px-5 py-2.5 rounded-lg text-xs transition-all hover:opacity-90"
          : "shrink-0 font-semibold px-4 py-2.5 text-xs lg:px-7 lg:py-3 lg:text-sm xl:px-10 xl:py-4 xl:text-base rounded-xl transition-all hover:opacity-90 whitespace-nowrap mr-2 lg:mr-2 xl:mr-[34px] lg:ml-8 xl:ml-12"
      }
      style={{ background: t.ctaBg, color: t.ctaText }}
    >
      {label}
    </GetAppLink>
  );

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav
        className="mobile-bottom-nav"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2147483647,
          backgroundColor: "transparent",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "16px",
          border: "1px solid rgba(63, 63, 70, 0.5)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          display: "flex",
          width: "calc(100% - 32px)",
          maxWidth: "340px",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3 w-full">
          <span data-cms-field="bottomNav.logoSrc" data-cms-type="image" style={{ display: "inline-block" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <FallbackImg src={data.logoSrc} fallbackSrc={HOME_CONTENT_DEFAULTS.bottomNav.logoSrc} alt={data.logoAlt} style={{ height: "3rem", width: "auto" }} />
          </span>
          {renderCta(data.ctaMobileLabel || data.ctaLabel, true)}
        </div>
      </nav>

      {/* Desktop Bottom Nav */}
      <div className="hidden md:flex fixed bottom-5 lg:bottom-6 xl:bottom-8 left-0 right-0 items-center justify-center gap-4 px-4 lg:px-6 z-50">
        <nav className="w-full max-w-[900px] lg:max-w-[1100px] xl:max-w-[1300px] bg-transparent backdrop-blur-md rounded-2xl px-4 py-3.5 lg:px-8 lg:py-5 xl:px-10 xl:py-6 flex items-center justify-between gap-3 lg:gap-4">
          <div className="shrink-0 ml-3 lg:ml-6 xl:ml-9">
            <Link href="/">
              <span data-cms-field="bottomNav.logoSrc" data-cms-type="image" style={{ display: "inline-block" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <FallbackImg
                  src={data.logoSrc}
                  fallbackSrc={HOME_CONTENT_DEFAULTS.bottomNav.logoSrc}
                  alt={data.logoAlt}
                  className="h-8 lg:h-9 xl:h-11 w-auto"
                  style={{ transform: "scale(1.0)", transformOrigin: "left center" }}
                />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-6 lg:gap-8 xl:gap-14">
            {data.items.map((item, i) => {
              const sectionId = anchorTargetFor(item.href) ?? "";
              return (
                <NavItem
                  key={`${item.href}-${i}`}
                  iconName={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={!!sectionId && activeSection === sectionId}
                  iconColor={t.tileIcon}
                  labelColor={t.tileLabel}
                  fieldPath={`bottomNav.items.${i}.label`}
                  hrefPath={`bottomNav.items.${i}.href`}
                />
              );
            })}
          </div>

          {renderCta(data.ctaLabel)}
        </nav>
      </div>
    </>
  );
}

// Extracts the candidate section id from a nav href.
//   "#foo"    → "foo"   (in-page anchor)
//   "/foo"    → "foo"   (treated as in-page if a #foo exists on this page)
//   "/foo/bar"→ null    (multi-segment path → real route)
//   "/" / "#" → ""      (means "scroll to top")
//   "https…"  → null    (external)
function anchorTargetFor(href: string): string | null {
  if (href === "/" || href === "#") return "";
  if (href.startsWith("#")) return href.slice(1).split(/[?#/]/)[0] || "";
  if (href.startsWith("/")) {
    const rest = href.slice(1);
    if (!rest || rest.includes("/") || rest.includes("?")) return null;
    return rest;
  }
  return null;
}

function NavItem({
  iconName,
  label,
  href,
  isActive,
  iconColor,
  labelColor,
  fieldPath,
  hrefPath,
}: {
  iconName: string;
  label: string;
  href: string;
  isActive: boolean;
  iconColor?: string;
  labelColor?: string;
  fieldPath?: string;
  hrefPath?: string;
}) {
  const Icon = NAV_ICONS[iconName] ?? NAV_ICONS.card;
  const tg = linkTarget(href);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the editor explicitly asked for a new tab (or the URL is external),
    // bypass the in-page anchor scroll handler — the browser's default
    // `target="_blank"` opens a new tab cleanly, no scroll needed.
    if (tg.target === "_blank") return;
    const target = anchorTargetFor(href);
    if (target === null) return; // External / multi-segment path — let browser navigate.
    if (target === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(target);
    if (!el) return; // No matching section — let the browser navigate (may 404).
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={href}
      target={tg.target}
      rel={tg.rel}
      onClick={handleClick}
      data-cms-href={hrefPath}
      data-cms-href-below
      className="flex flex-col items-center gap-1.5 lg:gap-2 transition-colors cursor-pointer hover:opacity-90"
      style={{ color: labelColor }}
    >
      <span className="w-7 h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8" style={{ color: iconColor }}>
        <Icon />
      </span>
      <span
        data-cms-field={fieldPath}
        className={`text-sm lg:text-sm xl:text-base whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`}
      >
        {label}
      </span>
    </a>
  );
}

// Icon registry — keys match the strings the CMS BottomNav inspector offers.
// Adding new icons: add an entry here AND in the inspector's NAV_ICON_OPTIONS.
const SVG_DEFAULT_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const NAV_ICONS: Record<string, React.FC> = {
  card: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  "arrow-right": () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  ),
  branch: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  ),
  "trend-up": () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <rect x="3" y="8" width="7" height="12" rx="1" />
      <rect x="14" y="4" width="7" height="16" rx="1" />
    </svg>
  ),
  dashboard: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <rect x="3" y="3" width="7" height="9" rx="2" />
      <rect x="14" y="3" width="7" height="5" rx="2" />
      <rect x="14" y="12" width="7" height="9" rx="2" />
      <rect x="3" y="16" width="7" height="5" rx="2" />
    </svg>
  ),
  globe: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  sparkles: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <path d="M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4z" />
      <path d="M18 15l.9 2.3L21 18l-2.1.7L18 21l-.9-2.3L15 18l2.1-.7z" />
    </svg>
  ),
  rocket: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <path d="M5 19l3-3M14 15l3-3 3-3a8 8 0 0 0-8 8l-3 3z" />
      <path d="M14 4l6 6" />
      <circle cx="14" cy="10" r="1.5" />
    </svg>
  ),
  link: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
    </svg>
  ),
  mobile: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  ),
  grid: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  wand: () => (
    <svg {...SVG_DEFAULT_PROPS}>
      <path d="M15 4l5 5L8 21l-5 1 1-5z" />
      <path d="M19 5l1-1M14 8l2 2" />
    </svg>
  ),
};
