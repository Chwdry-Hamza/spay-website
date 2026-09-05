/**
 * Turkish (Türkçe) copy.
 *
 * One file per page, each exporting the COMPLETE content object rather than a
 * partial override — there is no silent fallback to English inside a Turkish
 * page, and TypeScript fails the build if a field is added upstream and not
 * translated here.
 *
 * Translated so far: the homepage and the four brand pages. The legal pages
 * stay English on purpose, and the blog cannot be translated at all — posts
 * live only in the CMS, which is English-only.
 */
export { TR_CHROME } from "./chrome";
export { TR_HOME } from "./home";
export { TR_ABOUT } from "./about";
export { TR_CARD } from "./card";
export { TR_HOW_IT_WORKS } from "./howItWorks";
export { TR_CONTACT } from "./contact";
