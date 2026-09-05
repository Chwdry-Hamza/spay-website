/**
 * Portuguese (Português) copy — European Portuguese.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside a Portuguese
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * Translated: the homepage and the four brand pages. The legal pages stay
 * English on purpose, and the blog cannot be translated at all — posts live
 * only in the CMS, which is English-only.
 */
export { PT_CHROME } from "./chrome";
export { PT_HOME } from "./home";
export { PT_ABOUT } from "./about";
export { PT_CARD } from "./card";
export { PT_HOW_IT_WORKS } from "./howItWorks";
export { PT_CONTACT } from "./contact";
