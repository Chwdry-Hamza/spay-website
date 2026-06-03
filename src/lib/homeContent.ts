/**
 * Homepage content model.
 *
 * The landing page is hand-coded React (layout + animation lives in the
 * components), but its TEXT and IMAGES are CMS-editable. The CMS stores only
 * the overrides under the home Page's `sections` field; here we keep the
 * canonical DEFAULTS (the current design copy) and merge any overrides on top.
 *
 * IMPORTANT: keep `HOME_CONTENT_DEFAULTS` in sync with the CMS copy at
 * spay-cms/src/lib/homeContent.ts (same shape + values). The website copy is
 * the render-time fallback so the landing page never breaks if the CMS is
 * empty or unreachable.
 */

export type TitlePart = { text: string; color: string };

export type HomeContent = {
  hero: {
    titleParts: TitlePart[];
    subtitle: string;
    mobileSubtitle: string;
    ctaLabel: string;
    ctaMobileLabel: string;
    ctaUrl: string;
    heroImage: string;
    logoSrc: string;
    gradientStart: string;
    gradientEnd: string;
  };
  features: {
    eyebrow: string;
    titleParts: TitlePart[];
    cards: { title: string; desc: string; image: string; bgStart: string; bgEnd: string }[];
  };
  currencies: {
    tickers: { pair: string; price: string; change: string }[];
  };
  payment: {
    eyebrow: string;
    titleParts: TitlePart[];
    subtitle: string;
    cardFront: string;
    cardBack: string;
    cardFrontAlt: string;
    cardBackAlt: string;
  };
  transfer: {
    eyebrow: string;
    titleParts: TitlePart[];
    subtitle: string;
    mockupImage: string;
  };
  crypto: {
    eyebrow: string;
    titleParts: TitlePart[];
    subtitle: string;
    mockupImage: string;
  };
  featureGrid: {
    eyebrow: string;
    titleParts: TitlePart[];
    send: { label: string; title: string; body: string; badgeText: string };
    grow: { label: string; statValue: string; statUnit: string; body: string };
    spend: { label: string; title: string; cardImage: string };
    split: { title: string; body: string; amountText: string };
    business: { title: string; body: string; pills: string[] };
    protect: { label: string; title: string; body: string; pills: string[] };
  };
  joinUs: {
    eyebrow: string;
    titleParts: TitlePart[];
    subtitle: string;
    ctaLabel: string;
    ctaUrl: string;
    photoGrid: string[];
  };
  collaborations: {
    headingBefore: string;
    headingHighlight: string;
    partners: string[];
  };
  footer: {
    logo: string;
    tagline: string;
    links: { label: string; href: string }[];
    copyright: string;
    appStoreUrl: string;
    playStoreUrl: string;
  };
};

export const HOME_CONTENT_DEFAULTS: HomeContent = {
  hero: {
    titleParts: [
      { text: 'THE ', color: '#ffffff' },
      { text: 'MONEY ', color: '#46F1C5' },
      { text: 'APP', color: '#ffffff' },
    ],
    subtitle:
      'Experience institutional-grade security with the agility of decentralized finance. Secure, fast, and rewarding crypto platform for the next generation.',
    mobileSubtitle: 'Secure, fast, and rewarding crypto platform.',
    ctaLabel: 'GET THE APP',
    ctaMobileLabel: 'GET APP',
    ctaUrl: 'https://apps.apple.com/app/sicash',
    heroImage: '/heroImageSpay.png',
    logoSrc: '/Spay.png',
    gradientStart: '#090e1c',
    gradientEnd: '#0e2e2e',
  },
  features: {
    eyebrow: 'A new era of digital banking',
    titleParts: [
      { text: 'TAKE ', color: '#ffffff' },
      { text: 'CONTROL', color: '#46F1C5' },
      { text: ' OF ALL\nYOUR ', color: '#ffffff' },
      { text: 'MONEY', color: '#46F1C5' },
    ],
    cards: [
      {
        title: 'TRANSACTION',
        desc: 'Manage all your finances with a single tap. Forget about banking hassles.',
        image: '/transactions.jpeg',
        bgStart: '#46F1C5',
        bgEnd: '#004132',
      },
      {
        title: 'CRYPTO',
        desc: 'Safely hold, effortlessly send, receive, and monitor your cryptocurrency holding.',
        image: '/crypto.jpeg',
        bgStart: '#46F1C5',
        bgEnd: '#004132',
      },
      {
        title: 'HISTORY',
        desc: 'Get a wide range of innovative financial tools for unlimited wealth-building opportunities.',
        image: '/notifications.jpeg',
        bgStart: '#46F1C5',
        bgEnd: '#004132',
      },
    ],
  },
  currencies: {
    tickers: [
      { pair: 'ETH/USD', price: '$3,452.12', change: '+1.4%' },
      { pair: 'TRX/USD', price: '$0.32', change: '+2.6%' },
      { pair: 'USDT (TRC20)', price: '$1.00', change: '+0.0%' },
      { pair: 'USDT (ERC20)', price: '$1.00', change: '+0.0%' },
      { pair: 'USDC (ERC20)', price: '$1.00', change: '+0.0%' },
    ],
  },
  payment: {
    eyebrow: 'Fiat and Crypto',
    titleParts: [
      { text: 'CHOOSE ', color: '#46F1C5' },
      { text: 'HOW TO PAY', color: '#ffffff' },
    ],
    subtitle: 'Switch between fiat and crypto in a Second',
    cardFront: '/spayFront.png',
    cardBack: '/spayBack.png',
    cardFrontAlt: 'SPAY Card Front',
    cardBackAlt: 'SPAY Card Back',
  },
  transfer: {
    eyebrow: 'TRANSFERS WITHOUT BARRIERS',
    titleParts: [
      { text: 'SEND ', color: '#ffffff' },
      { text: 'CRYPTO', color: '#46F1C5' },
      { text: ' EASILY,\nANYWHERE, TO ANYONE', color: '#ffffff' },
    ],
    subtitle:
      'Spend your crypto anywhere a card is accepted — our card and app make it as easy as using a regular bank card.',
    mockupImage: '/paymentMobile.png',
  },
  crypto: {
    eyebrow: 'MANAGE CRYPTO',
    titleParts: [
      { text: 'DEPOSIT AND INVEST WITH ', color: '#ffffff' },
      { text: 'SPAY', color: '#46F1C5' },
    ],
    subtitle:
      'Purchase, spend, sell, and hold cryptocurrencies, all from the convenience of your device. Delve into the world of digital currencies effortlessly.',
    mockupImage: '/tabletMobile.png',
  },
  featureGrid: {
    eyebrow: 'Your crypto, everyday spending',
    titleParts: [
      { text: 'PAY WITH ', color: '#FFFFFF' },
      { text: 'CRYPTO', color: '#46F1C5' },
      { text: ' ANYWHERE\nA CARD WORKS.', color: '#FFFFFF' },
    ],
    send: {
      label: 'Send',
      title: 'Send money in seconds, not days.',
      body: 'Move funds to friends, family, or any wallet — across the city or across the world. Every transfer settles instantly.',
      badgeText: '+ 50 USDC · 1.2s',
    },
    grow: {
      label: 'Grow',
      statValue: '5.0',
      statUnit: '% APY',
      body: 'Earn yield on your idle balance, paid out daily. No lockups, no minimums, withdraw anytime.',
    },
    spend: {
      label: 'Spend',
      title: 'Tap, swipe, or shop online — with crypto.',
      cardImage: '/spayFront.png',
    },
    split: {
      title: 'Spend crypto like cash, anywhere.',
      body: 'Tap your SPay card at any store or pay online — crypto converts to fiat at checkout, automatically.',
      amountText: '$37.42 each',
    },
    business: {
      title: 'For businesses, get paid in crypto.',
      body: 'Online checkouts, in-store payments, and crypto invoices — with same-day payouts to your wallet or bank.',
      pills: ['Online checkout', 'In-store POS', 'Crypto invoicing'],
    },
    protect: {
      label: 'Protect',
      title: 'Your funds, fully protected.',
      body: 'Multi-sig cold storage on every wallet. Biometric login on every device. 24/7 anomaly detection — your crypto stays yours, always.',
      pills: ['Multi-sig vault', 'Biometric login', 'SOC 2 Type II'],
    },
  },
  joinUs: {
    eyebrow: 'JOIN US',
    titleParts: [
      { text: 'TIME IS ', color: '#ffffff' },
      { text: 'MONEY', color: '#46F1C5' },
    ],
    subtitle:
      'Say goodbye to juggling multiple apps and tools for your financial transactions. SPay is your one-stop solution for all your money needs.',
    ctaLabel: 'GET SPAY APP',
    ctaUrl: 'https://apps.apple.com/app/sicash',
    photoGrid: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face',
    ],
  },
  collaborations: {
    headingBefore: 'OUR ',
    headingHighlight: 'COLLABORATIONS',
    partners: [
      'BitGo',
      'FENIGE',
      'INTERCOM',
      'PLAID',
      'QUICKO',
      'onfido',
      'Verestro',
      'YAPILY',
      'BINARYX',
    ],
  },
  footer: {
    logo: '/Spay.png',
    tagline: 'THE MONEY APP',
    links: [
      { label: 'About SPay', href: '/about' },
      { label: 'Support', href: '/support' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Card Terms', href: '/card-terms' },
      { label: 'E-Sign Consent', href: '/e-sign-consent' },
      { label: 'Prohibited Activities', href: '/prohibited-activities' },
    ],
    copyright: '© 2026 SPay. All rights reserved.',
    appStoreUrl: 'https://apps.apple.com/app/sicash',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sicash',
  },
};

/**
 * Deep-merge CMS overrides onto the defaults.
 *
 * - Objects merge key-by-key.
 * - Arrays merge BY INDEX against the default array (so partial edits keep the
 *   other items' defaults) and never grow/shrink past the default length — the
 *   layout is fixed by design.
 * - `undefined`/`null` overrides fall back to the default (this is what lets
 *   newly-added schema fields pick up their default even on old saved data).
 *   An explicit empty string is respected as an intentional clear.
 */
function mergeValue<T>(def: T, raw: unknown): T {
  if (raw === undefined || raw === null) return def;
  if (Array.isArray(def)) {
    const rawArr = Array.isArray(raw) ? raw : [];
    return def.map((d, i) => mergeValue(d, rawArr[i])) as unknown as T;
  }
  if (def && typeof def === 'object') {
    if (typeof raw !== 'object' || Array.isArray(raw)) return def;
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(def as Record<string, unknown>)) {
      out[k] = mergeValue((def as Record<string, unknown>)[k], (raw as Record<string, unknown>)[k]);
    }
    return out as T;
  }
  return raw as T;
}

export function resolveHomeContent(raw: unknown): HomeContent {
  return mergeValue(HOME_CONTENT_DEFAULTS, raw);
}
