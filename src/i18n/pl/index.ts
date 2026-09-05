/**
 * Polish (Polski) copy.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside a Polish
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * Translated: the homepage and the four brand pages. The legal pages stay
 * English on purpose, and the blog cannot be translated at all — posts live
 * only in the CMS, which is English-only.
 */
export { PL_CHROME } from "./chrome";
export { PL_HOME } from "./home";
export { PL_ABOUT } from "./about";
export { PL_CARD } from "./card";
export { PL_HOW_IT_WORKS } from "./howItWorks";
export { PL_CONTACT } from "./contact";
