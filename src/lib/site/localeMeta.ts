import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/cms-meta";
import type { CmsPage } from "@/lib/cms";
import { DEFAULT_LOCALE, localeDef, localeHref, translatedLocales, type Locale } from "@/i18n/locales";
import type { SiteSeoSetting } from "@/lib/cms";

/**
 * `hreflang` alternates for one route.
 *
 * Only the languages that actually publish this route are listed —
 * `translatedLocales` is the source of truth. Declaring an alternate that is
 * really a different page (say, pointing `/card/` at the Turkish homepage) is
 * an SEO error, so the switcher's "fall back to the homepage" behaviour
 * deliberately does NOT apply here.
 *
 * `x-default` points at the source language, which is what a visitor gets when
 * none of the declared languages match their browser.
 */
export function localeAlternates(path: string): NonNullable<Metadata["alternates"]>["languages"] {
  const locales = translatedLocales(path);
  if (locales.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l.htmlLang] = canonicalUrl(localeHref(l.code, path));
  }
  languages["x-default"] = canonicalUrl(localeHref(DEFAULT_LOCALE, path));
  return languages;
}

/**
 * `og:locale` and `og:locale:alternate` for one route.
 *
 * Open Graph has its own spelling — `en_US`, not the `en` that hreflang uses —
 * and platforms match it against a fixed list, so a bare language code is
 * dropped. Declaring it lets a link pasted into WhatsApp or LinkedIn open in
 * the reader's own language instead of whichever one was shared.
 *
 * English needs this as much as the others: without it the source page is the
 * only one on the site that does not say what language it is in.
 */
export function localeOpenGraph(locale: Locale, path: string): {
  locale: string;
  alternateLocale?: string[];
} {
  const alternates = translatedLocales(path)
    .filter((l) => l.code !== locale)
    .map((l) => l.ogLocale);
  return {
    locale: localeDef(locale).ogLocale,
    alternateLocale: alternates.length ? alternates : undefined,
  };
}

/**
 * Metadata for one of the five design pages in a language other than English.
 *
 * Two sources, in this order:
 *
 *   1. the CMS page, already translated into `locale` — an editor's own title
 *      and description, so rewriting the English reaches all nine languages;
 *   2. the `title`/`description` passed in, which are the hand-written
 *      translations these routes have always carried.
 *
 * The fallback is not a leftover. The CMS's `seo` for these pages can be blank
 * — it is today on every one of them — and a blank CMS must not replace a good
 * Urdu title with the word "Card". So the CMS only ever wins by having
 * something to say.
 *
 * Every language is indexable. There is no per-language "hide this one"
 * switch any more: a translated page is the page, and hiding it from search is
 * the same as not having translated it. Only the editor's own `seo.noindex`,
 * which applies to the page in every language at once, is honoured.
 */
export function buildLocaleMetadata({
  locale,
  path,
  title,
  description,
  page,
  site,
}: {
  locale: Locale;
  /** Route without its language prefix, e.g. "/". */
  path: string;
  /** Hand-written translated title, used when the CMS has none. */
  title: string;
  /** Hand-written translated description, used when the CMS has none. */
  description: string;
  /**
   * This page from the CMS, with `title`, `excerpt` and `seo` already
   * translated — what `getLocalePageContent` returns.
   */
  page?: CmsPage | null;
  /**
   * Site-wide SEO settings. Without these a translated page shared to
   * WhatsApp, LinkedIn or Slack arrived with no preview image at all, while the
   * English page — which reads them through `buildMetadataFromCMS` — arrived
   * with one. The link is the same product either way.
   */
  site?: SiteSeoSetting | null;
}): Metadata {
  const url = canonicalUrl(localeHref(locale, path));

  const cmsTitle = page?.seo?.title?.trim() || undefined;
  const cmsDescription = page?.seo?.description?.trim() || page?.excerpt?.trim() || undefined;

  const metaTitle = cmsTitle || title;
  const metaDescription = cmsDescription || description;

  // Per-page first, then the site default — the same order the English route
  // uses, so a page looks the same when shared in any language.
  const image = page?.seo?.og?.image || site?.defaultOgImage || undefined;
  const twitterImage = page?.seo?.twitter?.image || image;

  return {
    // Absolute, so the layout's site-wide title template never wraps it.
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: {
      canonical: url,
      languages: localeAlternates(path),
    },
    robots: {
      index: !page?.seo?.noindex,
      follow: !page?.seo?.nofollow,
    },
    openGraph: {
      title: page?.seo?.og?.title?.trim() || metaTitle,
      description: page?.seo?.og?.description?.trim() || metaDescription,
      url,
      type: "website",
      siteName: site?.siteName || undefined,
      ...localeOpenGraph(locale, path),
      ...(image ? { images: [{ url: image, alt: metaTitle }] } : {}),
    },
    twitter: {
      // A card with a picture is only honoured if a picture is declared.
      card: twitterImage ? "summary_large_image" : "summary",
      title: page?.seo?.twitter?.title?.trim() || metaTitle,
      description: page?.seo?.twitter?.description?.trim() || metaDescription,
      ...(twitterImage ? { images: [twitterImage] } : {}),
    },
  };
}
