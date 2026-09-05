import type { Locale } from '@/i18n/locales';

/**
 * Writes a price the way the reader's language writes one.
 *
 * `$9.99` is English typography: symbol first, dot for the decimal. Most of
 * Europe puts the symbol last and uses a comma — `9,99 $` — and Arabic puts the
 * symbol last while keeping the dot. The hand-written translations made exactly
 * those choices, price by price, and this reproduces them.
 *
 * It is a presentation rule, not a translation, and it has to be: `$9.99`
 * contains no letter, so the CMS correctly refuses to send it to a model, and
 * the translation checks would reject a reply that moved the currency symbol
 * anyway. The CMS stores one price; how it reads is decided here.
 *
 * Digits stay Western in every language, including Arabic and Urdu, for the
 * reason given on `dateLocaleFor`: every other number on the page is Western,
 * so switching only prices would look like a bug rather than a courtesy.
 *
 * `Intl.NumberFormat` is deliberately not used. With `style: 'currency'` it
 * pads to two decimals, turning the design's "$99" into "99,00 $", and for
 * Arabic it reaches for Arabic-Indic digits. The rule below is smaller than the
 * exceptions would be, and `npm run i18n:audit` proves it reproduces all 49
 * prices the translators wrote.
 */
type Style = { decimal: '.' | ','; symbolAfter: boolean };

const STYLES: Record<Locale, Style> = {
  en: { decimal: '.', symbolAfter: false },
  ur: { decimal: '.', symbolAfter: false },
  ar: { decimal: '.', symbolAfter: true },
  tr: { decimal: ',', symbolAfter: true },
  de: { decimal: ',', symbolAfter: true },
  es: { decimal: ',', symbolAfter: true },
  pl: { decimal: ',', symbolAfter: true },
  pt: { decimal: ',', symbolAfter: true },
  fr: { decimal: ',', symbolAfter: true },
};

/** Keys that hold a price. */
const isPriceKey = (key: string) => key === 'price';

/** `$9.99`, `$99`, `$1,299.50` — a US-dollar amount as the design writes one. */
const PRICE = /^\$(\d{1,3}(?:,\d{3})*|\d+)(?:\.(\d+))?$/;

export function localisePrices<T>(content: T, locale: Locale): T {
  const style = STYLES[locale];
  if (!style || (style.decimal === '.' && !style.symbolAfter)) return content;
  return walk(content, '', style) as T;
}

function walk(node: unknown, key: string, style: Style): unknown {
  if (typeof node === 'string') {
    return isPriceKey(key) ? format(node, style) : node;
  }

  if (Array.isArray(node)) {
    let changed = false;
    const out = node.map((item) => {
      const next = walk(item, key, style);
      if (next !== item) changed = true;
      return next;
    });
    return changed ? out : node;
  }

  if (node && typeof node === 'object') {
    let changed = false;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      const next = walk(v, k, style);
      if (next !== v) changed = true;
      out[k] = next;
    }
    // Untouched branches stay shared rather than being rebuilt.
    return changed ? out : node;
  }

  return node;
}

/** One price. Anything that is not a plain dollar amount is left alone. */
export function format(price: string, style: Style): string {
  const m = PRICE.exec(price.trim());
  if (!m) return price;

  const [, whole, fraction] = m;
  // No decimals in, none out: the design writes the plastic card as "$99" and
  // padding it to "99,00" would be a different design.
  const amount = fraction === undefined ? whole : `${whole}${style.decimal}${fraction}`;
  return style.symbolAfter ? `${amount} $` : `$${amount}`;
}

/** The rule for one locale, for callers that format a single price. */
export function priceFor(price: string, locale: Locale): string {
  const style = STYLES[locale];
  return style ? format(price, style) : price;
}
