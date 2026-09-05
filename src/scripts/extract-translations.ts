/**
 * Pairs every English string on the five design pages with its translation.
 *
 * The translations for these pages were written as TypeScript modules under
 * src/i18n before the CMS could hold them. This reads those modules alongside
 * the English defaults they were made from and emits, per locale, a plain
 * `{ english: translated }` map — the input the CMS seed needs.
 *
 * Nothing is written to any database and nothing is sent to a model. The output
 * is a JSON file, on purpose: it can be read and checked before a single row is
 * written anywhere.
 *
 *   npm run i18n:extract -- <out.json>
 *
 * The pairing walks the two objects IN STEP rather than matching by text, so a
 * translation can only ever be attached to the English string that sits at the
 * same place in the same shape. If the shapes disagree the script says so and
 * writes nothing — a silent mispairing would be far worse than no seed at all.
 */
import { writeFileSync } from 'node:fs';

import { HOME_DEFAULTS } from '../lib/site/home';
import { ABOUT_DEFAULTS } from '../lib/site/about';
import { CARD_DEFAULTS } from '../lib/site/card';
import { CONTACT_DEFAULTS } from '../lib/site/contact';
import { HOW_IT_WORKS_DEFAULTS } from '../lib/site/howItWorks';
import { SITE_CHROME_DEFAULTS } from '../lib/site/chrome';

import { TR_HOME, TR_ABOUT, TR_CARD, TR_CONTACT, TR_HOW_IT_WORKS, TR_CHROME } from '../i18n/tr';
import { DE_HOME, DE_ABOUT, DE_CARD, DE_CONTACT, DE_HOW_IT_WORKS, DE_CHROME } from '../i18n/de';
import { ES_HOME, ES_ABOUT, ES_CARD, ES_CONTACT, ES_HOW_IT_WORKS, ES_CHROME } from '../i18n/es';
import { PL_HOME, PL_ABOUT, PL_CARD, PL_CONTACT, PL_HOW_IT_WORKS, PL_CHROME } from '../i18n/pl';
import { PT_HOME, PT_ABOUT, PT_CARD, PT_CONTACT, PT_HOW_IT_WORKS, PT_CHROME } from '../i18n/pt';
import { FR_HOME, FR_ABOUT, FR_CARD, FR_CONTACT, FR_HOW_IT_WORKS, FR_CHROME } from '../i18n/fr';
import { AR_HOME, AR_ABOUT, AR_CARD, AR_CONTACT, AR_HOW_IT_WORKS, AR_CHROME } from '../i18n/ar';
import { UR_HOME, UR_ABOUT, UR_CARD, UR_CONTACT, UR_HOW_IT_WORKS, UR_CHROME } from '../i18n/ur';

/**
 * Keys whose value is never prose. Must match PAGE_SKIP_KEYS in the backend's
 * services/translation/segments.ts — a key skipped there but paired here would
 * seed a translation the CMS can never look up.
 */
const SKIP_KEYS = new Set(['href', 'src', 'id', 'from', 'slug', 'type', 'color']);
const isSkipped = (key: string) => SKIP_KEYS.has(key) || key.endsWith('Href');

/** Same test the backend applies: a leaf that is only an address is not prose. */
const ADDRESS_ONLY =
  /^\s*(?:https?:\/\/\S+|mailto:\S+|tel:\S+|[^\s@]+@[^\s@]+\.[^\s@]+)\s*$/i;

function isProse(value: unknown): value is string {
  return typeof value === 'string' && /\p{L}/u.test(value) && !ADDRESS_ONLY.test(value);
}

type Pairs = Record<string, string>;
type Problem = { path: string; detail: string };
type Conflict = { path: string; english: string; kept: string; dropped: string };

/** Filled by `pair` — one English string that was given two translations. */
let conflicts: Conflict[] = [];

/** Walks the English and translated trees together, collecting leaf pairs. */
function pair(
  english: unknown,
  translated: unknown,
  out: Pairs,
  problems: Problem[],
  path = '',
  key = '',
): void {
  if (Array.isArray(english)) {
    if (!Array.isArray(translated)) {
      problems.push({ path, detail: `English is an array, translation is ${typeof translated}` });
      return;
    }
    if (english.length !== translated.length) {
      problems.push({
        path,
        detail: `array length ${english.length} vs ${translated.length}`,
      });
      return;
    }
    english.forEach((v, i) => pair(v, translated[i], out, problems, `${path}[${i}]`, key));
    return;
  }

  if (english && typeof english === 'object') {
    if (!translated || typeof translated !== 'object' || Array.isArray(translated)) {
      problems.push({ path, detail: `English is an object, translation is ${typeof translated}` });
      return;
    }
    const e = english as Record<string, unknown>;
    const t = translated as Record<string, unknown>;
    for (const k of Object.keys(e)) {
      if (!(k in t)) {
        problems.push({ path: `${path}.${k}`, detail: 'missing in the translation' });
        continue;
      }
      pair(e[k], t[k], out, problems, `${path}.${k}`, k);
    }
    return;
  }

  if (!isProse(english) || isSkipped(key)) return;

  // The translation only has to be a non-empty string — it does NOT have to
  // look like prose. `faqs.items[7].textAfter` is " for current country
  // coverage." in English and just "." in German, Spanish, French and the rest,
  // because those languages put the link at the end of the sentence. That is a
  // correct translation, and rejecting it would leave the English tail showing
  // on six translated homepages.
  if (typeof translated !== 'string' || translated.trim() === '') {
    problems.push({ path, detail: `translation is empty or not a string: ${JSON.stringify(translated)}` });
    return;
  }

  // Identical text is not a translation — it is a string the translator left
  // alone (a brand name, "Blog", "Platinum"). Seeding it would be harmless but
  // pointless, and it would hide a genuinely untranslated string later.
  if (translated === english) return;

  const existing = out[english];
  if (existing !== undefined && existing !== translated) {
    // Within ONE page, an English string can only carry one translation:
    // segments are keyed by a hash of the English, so the same sentence twice
    // on the same page cannot say two different things. The first occurrence
    // wins — page content is walked before the header and footer, so the
    // wording chosen for the visible copy beats an incidental nav label — and
    // the clash is reported so a human can settle it in the CMS review view.
    conflicts.push({
      path,
      english,
      kept: existing,
      dropped: translated,
    });
    return;
  }
  out[english] = translated;
}

const LOCALES = {
  tr: { home: TR_HOME, about: TR_ABOUT, card: TR_CARD, contact: TR_CONTACT, howItWorks: TR_HOW_IT_WORKS, siteChrome: TR_CHROME },
  de: { home: DE_HOME, about: DE_ABOUT, card: DE_CARD, contact: DE_CONTACT, howItWorks: DE_HOW_IT_WORKS, siteChrome: DE_CHROME },
  es: { home: ES_HOME, about: ES_ABOUT, card: ES_CARD, contact: ES_CONTACT, howItWorks: ES_HOW_IT_WORKS, siteChrome: ES_CHROME },
  pl: { home: PL_HOME, about: PL_ABOUT, card: PL_CARD, contact: PL_CONTACT, howItWorks: PL_HOW_IT_WORKS, siteChrome: PL_CHROME },
  pt: { home: PT_HOME, about: PT_ABOUT, card: PT_CARD, contact: PT_CONTACT, howItWorks: PT_HOW_IT_WORKS, siteChrome: PT_CHROME },
  fr: { home: FR_HOME, about: FR_ABOUT, card: FR_CARD, contact: FR_CONTACT, howItWorks: FR_HOW_IT_WORKS, siteChrome: FR_CHROME },
  ar: { home: AR_HOME, about: AR_ABOUT, card: AR_CARD, contact: AR_CONTACT, howItWorks: AR_HOW_IT_WORKS, siteChrome: AR_CHROME },
  ur: { home: UR_HOME, about: UR_ABOUT, card: UR_CARD, contact: UR_CONTACT, howItWorks: UR_HOW_IT_WORKS, siteChrome: UR_CHROME },
} as const;

const ENGLISH = {
  home: HOME_DEFAULTS,
  about: ABOUT_DEFAULTS,
  card: CARD_DEFAULTS,
  contact: CONTACT_DEFAULTS,
  howItWorks: HOW_IT_WORKS_DEFAULTS,
  siteChrome: SITE_CHROME_DEFAULTS,
} as const;

function main(): void {
  const out = process.argv[2];
  if (!out) {
    console.log('usage: npm run i18n:extract -- <out.json>');
    process.exit(1);
  }

  // Grouped by SECTION, because each section belongs to one page document.
  // `siteChrome` rides along with `home`: the header and footer are stored on
  // the homepage document.
  //
  // Each section gets its OWN complete set — nothing is deduplicated ACROSS
  // sections. A string that appears on both the homepage and the card page
  // must be seeded on both, because a page is translated from its own segment
  // map and nothing else. Sharing one map across sections is what left /card
  // with 19 of its 47 strings: the other 28 also appear on the homepage, were
  // recorded there first, and so were attributed to a page the card route
  // never reads.
  const result: Record<string, Record<string, Pairs>> = {};
  const allProblems: { locale: string; path: string; detail: string }[] = [];
  const allConflicts: (Conflict & { locale: string })[] = [];

  for (const [locale, sections] of Object.entries(LOCALES)) {
    const bySection: Record<string, Pairs> = {};
    const problems: Problem[] = [];
    conflicts = [];
    for (const [section, english] of Object.entries(ENGLISH)) {
      const pairs: Pairs = {};
      pair(english, (sections as Record<string, unknown>)[section], pairs, problems, section);
      bySection[section] = pairs;
    }
    // The homepage document holds both, so they share one map and a clash
    // between them is a real clash — one hash, one translation.
    for (const [english, translated] of Object.entries(bySection.siteChrome)) {
      const home = bySection.home[english];
      if (home !== undefined && home !== translated) {
        conflicts.push({ path: 'siteChrome', english, kept: home, dropped: translated });
      }
    }
    const distinct = new Set(
      Object.values(bySection).flatMap((p) => Object.keys(p)),
    );
    result[locale] = bySection;
    for (const p of problems) allProblems.push({ locale, ...p });
    for (const c of conflicts) allConflicts.push({ locale, ...c });
    const counts = Object.entries(bySection).map(([k, v]) => `${k}:${Object.keys(v).length}`).join(' ');
    console.log(`  ${locale}  ${String(distinct.size).padStart(4)} distinct   ${counts}` +
      (conflicts.length ? `   ${conflicts.length} clash(es)` : '') +
      (problems.length ? `   \x1b[31m${problems.length} problem(s)\x1b[0m` : ''));
  }

  if (allProblems.length) {
    console.log('\n  \x1b[31mProblems — nothing written:\x1b[0m');
    for (const p of allProblems.slice(0, 30)) {
      console.log(`    ${p.locale}  ${p.path}\n        ${p.detail}`);
    }
    if (allProblems.length > 30) console.log(`    … and ${allProblems.length - 30} more`);
    process.exit(1);
  }

  if (allConflicts.length) {
    console.log('\n  One English string, two translations — the first was kept:');
    for (const c of allConflicts) {
      console.log(`    ${c.locale}  "${c.english}"`);
      console.log(`        kept    ${c.kept}`);
      console.log(`        dropped ${c.dropped}   (${c.path})`);
    }
  }

  writeFileSync(out, JSON.stringify(result, null, 2));
  const total = Object.values(result)
    .reduce((n, byS) => n + Object.values(byS).reduce((m, p) => m + Object.keys(p).length, 0), 0);
  console.log(`\n  \x1b[32m${total} pairs across ${Object.keys(result).length} languages\x1b[0m → ${out}\n`);
}

main();
