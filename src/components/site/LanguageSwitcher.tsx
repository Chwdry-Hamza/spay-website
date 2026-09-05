"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { LOCALES, localeDef, splitLocale, switchHref } from "@/i18n/locales";

/**
 * The header's language dropdown.
 *
 * Each option is a real `<a>`, so a language is a normal navigation: it works
 * without JavaScript, can be opened in a new tab, and is a crawlable link to
 * the other language. JavaScript only opens and closes the menu.
 *
 * `switchHref` decides each target: the same page when that language has it,
 * otherwise that language's homepage — the menu can never offer a 404.
 *
 * Both the current language and the target URLs come from the pathname, so no
 * page has to pass anything and the two can never disagree — an earlier version
 * took them as props and every route that forgot to pass its own path sent
 * "English" to the homepage instead of leaving the reader where they were.
 *
 * `data-r="hdr-lang"` is the hook app/spay-site.css uses to shrink the button
 * on phones, where the header row is already tight.
 */

const BUTTON: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "7px",
  flex: "none",
  background: "transparent",
  border: "1.5px solid #0b3c44",
  color: "#0b3c44",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.6px",
  textTransform: "uppercase",
  padding: "11px 16px",
  borderRadius: "999px",
  cursor: "pointer",
  fontFamily: "inherit",
  lineHeight: 1,
  whiteSpace: "nowrap",
};

const MENU: CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  zIndex: 80,
  minWidth: "150px",
  background: "#ffffff",
  border: "1px solid #e3e8ec",
  borderRadius: "14px",
  boxShadow: "0 14px 34px rgba(11,60,68,0.16)",
  padding: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const ITEM: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "10px 12px",
  borderRadius: "9px",
  fontSize: "15px",
  lineHeight: 1.2,
  color: "#0b1620",
  whiteSpace: "nowrap",
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();
  // `rest` is the route with its language prefix stripped: /tr/card/ → /card/.
  const { locale, rest } = splitLocale(usePathname() || "/");
  const current = localeDef(locale);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div data-r="hdr-lang" ref={root} style={{ position: "relative", flex: "none" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Language: ${current.label}`}
        style={BUTTON}
      >
        <svg
          width={17}
          height={17}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx={12} cy={12} r={9} />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
        </svg>
        <span data-r="hdr-lang-code">{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <div id={menuId} role="menu" style={MENU}>
          {LOCALES.map((l) => {
            const isCurrent = l.code === locale;
            return (
              <a
                key={l.code}
                role="menuitem"
                href={switchHref(l.code, rest)}
                hrefLang={l.htmlLang}
                lang={l.htmlLang}
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => setOpen(false)}
                style={{
                  ...ITEM,
                  background: isCurrent ? "#f3fbfa" : "transparent",
                  fontWeight: isCurrent ? 700 : 400,
                  color: isCurrent ? "#118EA3" : "#0b1620",
                }}
              >
                {l.label}
                {isCurrent && (
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
