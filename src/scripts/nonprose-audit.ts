/**
 * Everything the per-language content files carried that a TRANSLATION cannot.
 *
 * The five design pages used to exist as eight hand-written copies under
 * src/i18n. Moving them into the CMS moved the PROSE correctly — the CMS stores
 * one English string and a translation per language — but those files also held
 * things that are not prose and so travel with no translation: prefixed links,
 * and artwork drawn facing a direction. Each of those had to become a rule
 * applied at render time instead, and each one missed came back as a bug a
 * reader found: the footer dropping people into English, the hero's hand
 * reaching in from the wrong side.
 *
 * So this asks the question directly. It walks every English default against
 * every translated copy and lists the leaves that differ but are NOT prose —
 * `href`, `*Href`, `src`. Everything it prints must be covered by
 * `localiseHrefs` or `localiseArtwork`; anything else is a gap.
 *
 *   npm run i18n:audit
 *
 * This retires with src/i18n/{tr,de,…}: once production is seeded and those
 * files are deleted, `link-check.py` and the artwork self-test are what remain.
 */
import { HOME_DEFAULTS } from '../lib/site/home';
import { ABOUT_DEFAULTS } from '../lib/site/about';
import { CARD_DEFAULTS } from '../lib/site/card';
import { CONTACT_DEFAULTS } from '../lib/site/contact';
import { HOW_IT_WORKS_DEFAULTS } from '../lib/site/howItWorks';
import { SITE_CHROME_DEFAULTS } from '../lib/site/chrome';
import { localiseHref } from '../lib/site/localiseHrefs';
import { RTL_ARTWORK } from '../lib/site/rtlArtwork';
import { priceFor } from '../lib/site/localisePrices';
import type { Locale } from '../i18n/locales';

import * as tr from '../i18n/tr';
import * as de from '../i18n/de';
import * as es from '../i18n/es';
import * as pl from '../i18n/pl';
import * as pt from '../i18n/pt';
import * as fr from '../i18n/fr';
import * as ar from '../i18n/ar';
import * as ur from '../i18n/ur';

const MODULES: Record<string, Record<string, unknown>> = { tr, de, es, pl, pt, fr, ar, ur };
const SECTIONS: [unknown, string][] = [
  [HOME_DEFAULTS, 'HOME'], [ABOUT_DEFAULTS, 'ABOUT'], [CARD_DEFAULTS, 'CARD'],
  [CONTACT_DEFAULTS, 'CONTACT'], [HOW_IT_WORKS_DEFAULTS, 'HOW_IT_WORKS'],
  [SITE_CHROME_DEFAULTS, 'CHROME'],
];

const isLink = (k: string) => k === 'href' || k.endsWith('Href');

/**
 * The same test the CMS applies. A leaf that IS prose and differs is simply a
 * translation — the expected case, and the overwhelming majority — so it is not
 * reported. Only a leaf that differs WITHOUT being translatable needs a rule.
 */
const ADDRESS_ONLY =
  /^\s*(?:https?:\/\/\S+|mailto:\S+|tel:\S+|[^\s@]+@[^\s@]+\.[^\s@]+)\s*$/i;
const isProse = (v: string) => /\p{L}/u.test(v) && !ADDRESS_ONLY.test(v);

let uncovered = 0;

for (const [locale, mod] of Object.entries(MODULES)) {
  let links = 0, art = 0, prices = 0;
  const gaps: string[] = [];

  for (const [english, suffix] of SECTIONS) {
    const translated = mod[`${locale.toUpperCase()}_${suffix}`];
    (function walk(a: unknown, b: unknown, path: string, key: string): void {
      if (Array.isArray(a)) {
        if (Array.isArray(b)) a.forEach((v, i) => walk(v, b[i], `${path}[${i}]`, key));
        return;
      }
      if (a && typeof a === 'object') {
        if (b && typeof b === 'object') {
          for (const k of Object.keys(a as Record<string, unknown>)) {
            walk((a as any)[k], (b as any)[k], `${path}.${k}`, k);
          }
        }
        return;
      }
      if (typeof a !== 'string' || typeof b !== 'string' || a === b) return;

      if (isLink(key)) {
        // Covered only if the render-time rule reproduces what the file said.
        if (localiseHref(a, locale as Locale) === b) links++;
        else gaps.push(`${path}  ${a} → ${b}   (localiseHref gives ${localiseHref(a, locale as Locale)})`);
        return;
      }
      if (key === 'src') {
        if (RTL_ARTWORK[a] === b) art++;
        else gaps.push(`${path}  ${a} → ${b}   (no RTL_ARTWORK entry)`);
        return;
      }
      if (key === 'price') {
        if (priceFor(a, locale as Locale) === b) { prices++; return; }
        gaps.push(`${path}  ${a} → ${b}   (localisePrices gives ${priceFor(a, locale as Locale)})`);
        return;
      }
      // Prose that differs is a translation — the point of the exercise.
      if (isProse(a)) return;
      // Anything else that differs has no rule behind it.
      gaps.push(`${path}  [${key}]  ${a} → ${b}`);
    })(english, translated, suffix.toLowerCase(), '');
  }

  uncovered += gaps.length;
  const ok = gaps.length === 0;
  console.log(`  ${locale}  ${String(links).padStart(2)} link(s), ${art} image(s), ${prices} price(s)  ` +
    (ok ? '\x1b[32mall reproduced by the render-time rules\x1b[0m'
        : `\x1b[31m${gaps.length} NOT covered\x1b[0m`));
  for (const g of gaps) console.log(`      ${g}`);
}

console.log(uncovered === 0
  ? '\n  \x1b[32mNothing the old files carried is unaccounted for.\x1b[0m\n'
  : `\n  \x1b[31m${uncovered} difference(s) with no rule behind them.\x1b[0m\n`);
process.exit(uncovered === 0 ? 0 : 1);
