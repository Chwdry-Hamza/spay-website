import type { Locale } from '@/i18n/locales';
import {
  ensurePageRegistered,
  getRouteSeoPage,
  getSeoSetting,
  type CmsPage,
  type SiteSeoSetting,
} from '@/lib/cms';
import { localiseSections } from './localiseSections';
import { localiseHrefs } from './localiseHrefs';
import { localiseArtwork } from './rtlArtwork';
import { localisePrices } from './localisePrices';
import { pageStrings } from './pageStrings';

/**
 * Tells the CMS what English this page actually renders.
 *
 * The CMS translates from this list and nothing else. It cannot build the list
 * itself: it stores only the leaves an editor overrode, so a translation run
 * driven by `sections` would account for those and prune every other stored
 * segment — which is what reduced /contact from 29 segments to 2 the first time
 * a page was translated.
 *
 * Cheap to call on every render: `ensurePageRegistered` remembers the last list
 * it sent for a slug and posts nothing when it has not moved, so this costs one
 * request per page per server process. A deploy that changes the defaults
 * starts a new process, so the CMS learns about new copy without a migration —
 * and translates it, because the register endpoint queues a run when the list
 * changes.
 *
 * Failures are swallowed inside `ensurePageRegistered`: a CMS that is down must
 * not take the page down with it.
 */
export async function syncPageSource(
  slug: string,
  title: string,
  template: string | undefined,
  english: unknown,
): Promise<void> {
  await ensurePageRegistered(slug, title, template, pageStrings(english));
}

/**
 * A design page's content in one language, straight from the CMS.
 *
 * Three things happen here, in this order, and the order is the whole point:
 *
 *   1. the CMS page is fetched for `locale`, which brings back the English
 *      `sections` overrides plus that language's segment map;
 *   2. `resolve` merges those overrides onto the defaults in this repo, which
 *      is the first moment the full English text of the page exists anywhere;
 *   3. the segments are substituted into it.
 *
 * Step 2 cannot be skipped and cannot happen in the CMS: the CMS stores only
 * what an editor changed, so translating there would reach a handful of strings
 * and miss the rest of the page.
 *
 * What this buys: an editor rewrites a heading in English, the machine
 * translation of that heading lands on all eight languages, and no locale route
 * has to be touched. What it costs when the CMS is unreachable: `resolve(null)`
 * returns the English defaults and the page still renders — in English, which
 * is the right failure. A missing translation degrades string by string for the
 * same reason: an untranslated hash is left alone rather than blanked.
 */
export async function getLocalePageContent<T>(options: {
  /** CMS slug, e.g. `/card`. `/` is the homepage. */
  slug: string;
  /** Title used if the page has to be registered in the CMS on first sight. */
  title: string;
  template?: string;
  locale: Locale;
  /** The page's own `resolveX` — defaults merged with CMS overrides. */
  resolve: (raw: unknown) => T;
  /**
   * More English stored on the same page document, to be translated with it but
   * not returned here.
   *
   * Only the homepage uses it, and it has to: the header and footer live in the
   * homepage's `sections`, so their segments are stored on the homepage too. A
   * source list built from the homepage's own copy alone would leave them
   * unaccounted for, and the next translation run would prune all 32 of them.
   */
  alsoInSource?: (rawSections: unknown) => unknown;
}): Promise<{ content: T; page: CmsPage | null; site: SiteSeoSetting | null }> {
  const { slug, title, template, locale, resolve, alsoInSource } = options;
  // The site-wide SEO defaults travel with the page: `buildLocaleMetadata`
  // needs them for the social preview image, and fetching them here keeps every
  // locale route to a single call.
  const [page, site] = await Promise.all([
    getRouteSeoPage(slug, title, template, locale),
    getSeoSetting(locale),
  ]);
  const english = resolve(page?.sections);
  await syncPageSource(slug, title, template, [english, alsoInSource?.(page?.sections)]);
  // Text, then links, then artwork, then prices. Each pass owns one kind of
  // leaf — prose, hrefs, image paths, amounts — so the order is not
  // load-bearing, but reading it in this order says what a page in another
  // language actually is. Only the first is a translation; the rest are things
  // a translation cannot carry, which is why they are rules and not content.
  const translated = localiseSections(english, page?.translation);
  const linked = localiseHrefs(translated, locale);
  const drawn = localiseArtwork(linked, locale);
  return {
    content: localisePrices(drawn, locale),
    page: localisePageMeta(page, locale),
    site,
  };
}

/**
 * The same substitution, applied to the page's OWN fields.
 *
 * `sections` is the page's body, but its tab title, its search-result snippet
 * and its social card come from `title`, `excerpt` and `seo` — separate fields,
 * carried on the document rather than inside `sections`. The CMS translates
 * them (they are in TEXT_FIELDS.page), and this is what was missing: the
 * translations were stored and never read, so an editor who set an SEO title
 * saw it in English on all eight translated pages while the Urdu for it sat in
 * the database.
 *
 * Only those three branches are touched. Everything else on the page —
 * `_id`, `slug`, `codeInjection`, `featuredImage` — is passed through by
 * reference: none of it is prose, and a slug in particular must stay English.
 */
function localisePageMeta(page: CmsPage | null, locale: Locale): CmsPage | null {
  const segments = page?.translation;
  if (!page || !segments) return page;
  return {
    ...page,
    title: localiseSections(page.title, segments),
    excerpt: localiseSections(page.excerpt, segments),
    seo: localiseSections(page.seo, segments),
  };
}
