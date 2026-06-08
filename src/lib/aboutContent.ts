/**
 * About page content model — website (canonical defaults = the live design
 * copy). The CMS mirrors these in spay-cms/src/lib/aboutContent.ts. The About
 * layout stays in code; the CMS `sections` only override this text.
 */

export type AboutContent = {
  hero: { headingWhite: string; headingAccent: string; intro: string };
  mission: { heading: string; body: string };
  vision: { heading: string; body: string };
  collaborations: { headingBefore: string; headingHighlight: string; partners: string[] };
};

export const ABOUT_CONTENT_DEFAULTS: AboutContent = {
  hero: {
    headingWhite: 'ABOUT',
    headingAccent: 'SPAY',
    intro:
      "SPAY is a global innovative platform for unified financial management of fiat and cryptocurrencies. Using cutting-edge technologies it seamlessly integrates with other financial service providers allowing users to easily manage all their cards and accounts in one user-friendly mobile app. It also offers fiat accounts, a crypto wallet and the world's first card for both fiat and crypto with an easy switch. SPAY meets the highest standards of regulatory compliance and ensures advanced security measures to protect users' funds.",
  },
  mission: {
    heading: 'MISSION',
    body:
      'Our mission is to make crypto spendable in everyday life. With the SPay card, your USDT, USDC, TRX, or ETH converts to fiat the moment you check out — tap at any store, swipe at a terminal, or pay online. No exchanges, no waiting, no friction between your crypto and the real world.',
  },
  vision: {
    heading: 'VISION',
    body:
      "A world where holding crypto doesn't mean choosing between saving and spending. We're building the bridge that lets your digital assets work like cash — accepted anywhere a card is, settled instantly, and always under your control.",
  },
  collaborations: {
    headingBefore: 'OUR ',
    headingHighlight: 'COLLABORATIONS',
    partners: ['BitGo', 'FENIGE', 'INTERCOM', 'PLAID', 'QUICKO', 'onfido', 'Verestro', 'YAPILY', 'BINARYX'],
  },
};

function mergeValue(def: any, raw: any): any {
  if (raw === undefined || raw === null) return def;
  if (Array.isArray(def)) {
    const rawArr = Array.isArray(raw) ? raw : [];
    return def.map((d, i) => mergeValue(d, rawArr[i]));
  }
  if (def && typeof def === 'object') {
    if (typeof raw !== 'object' || Array.isArray(raw)) return def;
    const out: Record<string, any> = {};
    for (const k of Object.keys(def)) out[k] = mergeValue(def[k], raw[k]);
    return out;
  }
  return raw;
}

export function resolveAboutContent(raw: any): AboutContent {
  return mergeValue(ABOUT_CONTENT_DEFAULTS, raw ?? {}) as AboutContent;
}
