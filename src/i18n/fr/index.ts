/**
 * French (Français) copy.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside a French
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * Translated: the homepage and the four brand pages. The legal pages stay
 * English on purpose, and the blog cannot be translated at all — posts live
 * only in the CMS, which is English-only.
 */
export { FR_CHROME } from "./chrome";
export { FR_HOME } from "./home";
export { FR_ABOUT } from "./about";
export { FR_CARD } from "./card";
export { FR_HOW_IT_WORKS } from "./howItWorks";
export { FR_CONTACT } from "./contact";
