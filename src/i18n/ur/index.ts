/**
 * Urdu (اردو) copy — the site's second right-to-left language.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside an Urdu
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * The layout mirroring is NOT here: `dir="rtl"` comes from the locale registry
 * via the root layout, and the design's hard-coded physical offsets are flipped
 * by the `[dir="rtl"]` block in app/spay-site.css — the same block Arabic uses,
 * since Urdu is written in the same script.
 */
export { UR_CHROME } from "./chrome";
export { UR_HOME } from "./home";
export { UR_ABOUT } from "./about";
export { UR_CARD } from "./card";
export { UR_HOW_IT_WORKS } from "./howItWorks";
export { UR_CONTACT } from "./contact";
