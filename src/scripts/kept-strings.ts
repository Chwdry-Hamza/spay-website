/**
 * The strings each language deliberately keeps in English.
 *
 * A translated page is checked by comparing it against the English one: any
 * text node that comes back identical is suspect. Most are real gaps, but some
 * are not — "Blog" is Turkish for blog, "1 min" is Spanish for 1 min, and the
 * language switcher lists "Deutsch" in every language on purpose. Without a way
 * to tell them apart the check reports forty failures and gets ignored.
 *
 * So this derives the allowlist instead of guessing it: it walks the English
 * defaults against each translated module and records the leaves a translator
 * left identical. Those are decisions someone made, which is exactly what an
 * allowlist should contain.
 *
 *   npm run i18n:kept -- /tmp/kept.json
 *   python3 src/scripts/leak-check.py
 */
import { writeFileSync } from 'node:fs';

import { HOME_DEFAULTS } from '../lib/site/home';
import { ABOUT_DEFAULTS } from '../lib/site/about';
import { CARD_DEFAULTS } from '../lib/site/card';
import { CONTACT_DEFAULTS } from '../lib/site/contact';
import { HOW_IT_WORKS_DEFAULTS } from '../lib/site/howItWorks';
import { SITE_CHROME_DEFAULTS } from '../lib/site/chrome';
import { blogStrings } from '../i18n/blog';
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

/** English default ↔ the suffix of its per-locale export (`UR_CARD` → `CARD`). */
const SECTIONS: [unknown, string][] = [
  [HOME_DEFAULTS, 'HOME'],
  [ABOUT_DEFAULTS, 'ABOUT'],
  [CARD_DEFAULTS, 'CARD'],
  [CONTACT_DEFAULTS, 'CONTACT'],
  [HOW_IT_WORKS_DEFAULTS, 'HOW_IT_WORKS'],
  [SITE_CHROME_DEFAULTS, 'CHROME'],
];

// The same rules the CMS applies — see services/translation/segments.ts.
const SKIP_KEYS = new Set(['href', 'src', 'id', 'from', 'slug', 'type', 'color']);
const isSkipped = (key: string) => SKIP_KEYS.has(key) || key.endsWith('Href');
const ADDRESS_ONLY =
  /^\s*(?:https?:\/\/\S+|mailto:\S+|tel:\S+|[^\s@]+@[^\s@]+\.[^\s@]+)\s*$/i;

function collectIdentical(english: unknown, translated: unknown, into: Set<string>): void {
  const walk = (a: unknown, b: unknown, key: string): void => {
    if (Array.isArray(a)) {
      if (Array.isArray(b)) a.forEach((v, i) => walk(v, b[i], key));
      return;
    }
    if (a && typeof a === 'object') {
      if (b && typeof b === 'object') {
        for (const [k, v] of Object.entries(a as Record<string, unknown>)) {
          walk(v, (b as Record<string, unknown>)[k], k);
        }
      }
      return;
    }
    if (typeof a !== 'string' || isSkipped(key)) return;
    if (!/\p{L}/u.test(a) || ADDRESS_ONLY.test(a)) return;
    if (a === b) into.add(a);
  };
  walk(english, translated, '');
}

function main(): void {
  const out = process.argv[2];
  if (!out) {
    console.log('usage: npm run i18n:kept -- <out.json>');
    process.exit(1);
  }

  const result: Record<string, string[]> = {};
  for (const [locale, mod] of Object.entries(MODULES)) {
    const kept = new Set<string>();
    for (const [english, suffix] of SECTIONS) {
      collectIdentical(english, mod[`${locale.toUpperCase()}_${suffix}`], kept);
    }
    // The blog furniture is translated in i18n/blog.ts; identical entries there
    // are keeps for the same reason.
    collectIdentical(blogStrings('en'), blogStrings(locale as Locale), kept);
    result[locale] = [...kept].sort();
    console.log(`  ${locale}  ${String(kept.size).padStart(3)} kept in English`);
  }

  writeFileSync(out, JSON.stringify(result, null, 1));
  console.log(`\n  → ${out}\n`);
}

main();
