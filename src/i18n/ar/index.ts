/**
 * Arabic (العربية) copy — the site's first right-to-left language.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside an Arabic
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * The layout mirroring is NOT here: `dir="rtl"` comes from the locale registry
 * via the root layout, and the design's hard-coded physical offsets are flipped
 * by the `[dir="rtl"]` block in app/spay-site.css.
 */
export { AR_CHROME } from "./chrome";
export { AR_HOME } from "./home";
export { AR_ABOUT } from "./about";
export { AR_CARD } from "./card";
export { AR_HOW_IT_WORKS } from "./howItWorks";
export { AR_CONTACT } from "./contact";
