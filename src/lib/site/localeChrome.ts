import type { Locale } from '@/i18n/locales';
import type { SiteChromeContent } from './chrome';
import { resolveSiteChrome } from './chrome';
import { getHomePage } from '@/lib/cms';
import { localiseSections } from './localiseSections';
import { localiseHrefs } from './localiseHrefs';
import { localiseArtwork } from './rtlArtwork';

/**
 * The header and footer for a language.
 *
 * These are not a page of their own: the design keeps the nav, the CTA and the
 * four footer columns in the homepage document, so this reads them off `/` and
 * translates them the same way a page is translated — defaults merged with the
 * CMS overrides first, segments applied to the result.
 *
 * They used to be eight TypeScript modules under src/i18n. That meant an editor
 * adding a footer link saw it in English and nowhere else, and every language
 * quietly kept the nav the site had on the day it was translated. Now one edit
 * in the CMS reaches all nine.
 *
 * This exists so the blog routes do not each have to know any of that.
 */
export async function getLocaleChrome(locale: Locale): Promise<SiteChromeContent> {
  const home = await getHomePage(locale);
  const english = resolveSiteChrome(home?.sections);
  const translated = localiseSections(english, home?.translation);
  // The nav, the footer columns and the bottom bar are the links a reader uses
  // to move around the site. If these are not localised, choosing a language
  // lasts exactly one click.
  return localiseArtwork(localiseHrefs(translated, locale), locale);
}

/**
 * The URL prefix for a locale — `''` for English, `/ur` for the rest.
 *
 * Kept here rather than derived from the locale registry at every call site so
 * a blog route reads `${prefix}/blog/${slug}` and nothing more.
 */
export function localePrefix(locale: Locale): string {
  return locale === 'en' ? '' : `/${locale}`;
}

/**
 * BCP-47 tag for formatting a date in this language.
 *
 * Arabic and Urdu carry `-u-nu-latn` so dates keep Western digits. Everything
 * else on the page — prices, limits, percentages — arrives from the CMS in
 * Western digits and the translation checks enforce that, so switching only the
 * date to Arabic-Indic numerals would look like a bug rather than a courtesy.
 */
export function dateLocaleFor(locale: Locale): string {
  switch (locale) {
    case 'en': return 'en-US';
    case 'pt': return 'pt-PT';
    case 'ar': return 'ar-u-nu-latn';
    case 'ur': return 'ur-PK-u-nu-latn';
    default: return locale;
  }
}
