/**
 * The languages this site is published in.
 *
 * English is the source language and stays at the ROOT (`/card/`, not
 * `/en/card/`) so every URL already indexed by Google keeps working untouched —
 * adding a language must never move an existing page. Every other language
 * lives under its own prefix (`/tr/`).
 *
 * Adding a language is three steps: add an entry here, add its message file
 * next to `tr.ts`, and add the route folder that renders it.
 */

export type Locale = "en" | "tr" | "de" | "es" | "pl" | "pt" | "fr" | "ar" | "ur";

export type LocaleDef = {
  code: Locale;
  /** Shown in the language switcher, written in the language itself. */
  label: string;
  /** `<html lang>`. */
  htmlLang: string;
  /** `<html dir>` — Arabic and Urdu are "rtl". */
  dir: "ltr" | "rtl";
  /**
   * `og:locale`. Open Graph wants `language_TERRITORY` with an underscore —
   * `ur_PK`, not the `ur` that `htmlLang` carries — and Facebook, LinkedIn and
   * WhatsApp match it against a fixed list, so a bare language code is simply
   * ignored. These are the entries from that list.
   */
  ogLocale: string;
  /** URL prefix, "" for the source language at the root. */
  prefix: string;
};

export const LOCALES: readonly LocaleDef[] = [
  { code: "en", label: "English", htmlLang: "en", dir: "ltr", ogLocale: "en_US", prefix: "" },
  { code: "tr", label: "Türkçe", htmlLang: "tr", dir: "ltr", ogLocale: "tr_TR", prefix: "/tr" },
  { code: "de", label: "Deutsch", htmlLang: "de", dir: "ltr", ogLocale: "de_DE", prefix: "/de" },
  { code: "es", label: "Español", htmlLang: "es", dir: "ltr", ogLocale: "es_ES", prefix: "/es" },
  { code: "pl", label: "Polski", htmlLang: "pl", dir: "ltr", ogLocale: "pl_PL", prefix: "/pl" },
  // European Portuguese. Switch `htmlLang` to "pt-BR" and revise the copy if
  // the target market becomes Brazil — the two differ in more than spelling.
  { code: "pt", label: "Português", htmlLang: "pt", dir: "ltr", ogLocale: "pt_PT", prefix: "/pt" },
  { code: "fr", label: "Français", htmlLang: "fr", dir: "ltr", ogLocale: "fr_FR", prefix: "/fr" },
  // The first right-to-left language. `dir` reaches <html> through the root
  // layout, which flips flex/grid automatically; the physical offsets the
  // design hard-codes are mirrored by the [dir="rtl"] block in spay-site.css.
  { code: "ar", label: "العربية", htmlLang: "ar", dir: "rtl", ogLocale: "ar_AR", prefix: "/ar" },
  // Urdu is written in the Arabic script, so it needs no mirroring rules of its
  // own — the [dir="rtl"] block covers it. It is set in Naskh (Noto Sans
  // Arabic, which carries Urdu's extra letters) rather than Nastaliq: Nastaliq
  // needs roughly 2.3x the line height and would break the design's 1.02
  // headings everywhere.
  { code: "ur", label: "اردو", htmlLang: "ur", dir: "rtl", ogLocale: "ur_PK", prefix: "/ur" },
] as const;

export const DEFAULT_LOCALE: Locale = "en";

export function localeDef(code: Locale): LocaleDef {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

/**
 * The locale a pathname belongs to, plus the path with its prefix removed.
 * `/tr/card/` → `{ locale: "tr", rest: "/card/" }`; `/card/` → `{ "en", "/card/" }`.
 */
export function splitLocale(pathname: string): { locale: Locale; rest: string } {
  for (const l of LOCALES) {
    if (!l.prefix) continue;
    if (pathname === l.prefix || pathname.startsWith(`${l.prefix}/`)) {
      return { locale: l.code, rest: pathname.slice(l.prefix.length) || "/" };
    }
  }
  return { locale: DEFAULT_LOCALE, rest: pathname };
}

/** The URL of `rest` in `locale`. Keeps the site's trailing-slash form. */
export function localeHref(locale: Locale, rest: string): string {
  const path = rest.startsWith("/") ? rest : `/${rest}`;
  const href = `${localeDef(locale).prefix}${path}`;
  return href.endsWith("/") ? href : `${href}/`;
}

/**
 * Which routes actually exist in each language.
 *
 * English has every page; the others are translated one at a time, so each
 * lists only what is genuinely done. Two things read this, and both would be
 * wrong without it: the switcher (never offer a page that does not exist) and
 * the hreflang tags (declaring an alternate that is really a different page is
 * an SEO error, not a nicety).
 */
const TRANSLATED_PATHS: Record<Locale, readonly string[]> = {
  en: ["*"],
  tr: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  de: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  es: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  pl: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  pt: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  fr: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  ar: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
  ur: ["/", "/about/", "/card/", "/how-it-works/", "/contact/", "/blog/"],
};

export function hasTranslation(locale: Locale, rest: string): boolean {
  const paths = TRANSLATED_PATHS[locale];
  return paths.includes("*") || paths.includes(rest);
}

/** The locales this route is published in — what hreflang should declare. */
export function translatedLocales(rest: string): LocaleDef[] {
  return LOCALES.filter((l) => hasTranslation(l.code, rest));
}

/**
 * Where the language switcher sends someone: the same page in that language
 * when it exists, otherwise that language's homepage — never a 404.
 */
export function switchHref(locale: Locale, rest: string): string {
  const reachable = hasTranslation(locale, rest) || isBlogPostPath(rest);
  return reachable ? localeHref(locale, rest) : localeHref(locale, "/");
}

/**
 * A single blog post — `/blog/<slug>/`, but not `/blog/`, `/blog/category/…`
 * or `/blog/tag/…`.
 *
 * The switcher may send a reader to one of these in ANY language: the route
 * exists for every locale, and the CMS serves English there when no translation
 * is ready, so the link can never 404. Keeping someone on the article they were
 * reading beats bouncing them to that language's homepage.
 *
 * This is deliberately NOT folded into `hasTranslation`, which answers a
 * stricter question — "is this a genuine translation?" — and drives hreflang.
 * Claiming an alternate that is really the English page is an SEO error; a
 * switcher link that lands on an English fallback is not.
 */
export function isBlogPostPath(rest: string): boolean {
  if (!rest.startsWith("/blog/")) return false;
  const tail = rest.slice("/blog/".length).replace(/\/$/, "");
  if (!tail) return false;
  // Category and tag listings live under /blog/ too and are equally reachable
  // in every language, so they take the same route: one extra segment after
  // "category" or "tag", nothing deeper.
  const parts = tail.split("/");
  if (parts.length === 1) return true;
  return parts.length === 2 && (parts[0] === "category" || parts[0] === "tag");
}

/**
 * Whether this language publishes `rest` at its own prefixed URL.
 *
 * The looser of the two questions: a genuine translation, OR a blog route that
 * exists in every language and falls back to English content. It is what a link
 * should ask before it prefixes itself — `hasTranslation` alone would send a
 * reader browsing in Urdu back into the English blog.
 */
export function hasLocalisedRoute(locale: Locale, rest: string): boolean {
  return hasTranslation(locale, rest) || isBlogPostPath(rest);
}

/** Whether `code` is one of the non-English locales this site publishes. */
export function isTargetLocaleCode(code: string): boolean {
  return LOCALES.some((l) => l.code === code && l.prefix !== '');
}

/** The URL prefix for a locale code — `''` for English or anything unknown. */
export function localePrefixOf(code: string): string {
  return LOCALES.find((l) => l.code === code)?.prefix ?? '';
}
