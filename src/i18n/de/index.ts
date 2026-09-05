/**
 * German (Deutsch) copy.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside a German
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * Translated: the homepage and the four brand pages. The legal pages stay
 * English on purpose, and the blog cannot be translated at all — posts live
 * only in the CMS, which is English-only.
 */
export { DE_CHROME } from "./chrome";
export { DE_HOME } from "./home";
export { DE_ABOUT } from "./about";
export { DE_CARD } from "./card";
export { DE_HOW_IT_WORKS } from "./howItWorks";
export { DE_CONTACT } from "./contact";
