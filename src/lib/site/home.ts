/**
 * Homepage content.
 *
 * Copy and images only — layout, icons and animation are code under
 * components/site/home. Merges with the home document's `sections.home`.
 *
 * The Blogs band is NOT here: it renders live posts from the CMS, so only its
 * heading and "all articles" link are content (see `blogs` below).
 */
import { mergeContent, type SiteImage } from "./merge";
import { APP_STORE_URL } from "@/lib/appStore";

/** A numbered item — the design pairs a two-digit ordinal with a label. */
export type NumberedItem = { n: string; title: string; body: string };

export type HomeContent = {
  hero: {
    title: string;
    lede: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    image: SiteImage;
  };

  features: {
    image: SiteImage;
    title: string;
    steps: NumberedItem[];
  };

  wallet: {
    title: string;
    lede: string;
    tokens: string[];
    image: SiteImage;
    tiles: { n: string; title: string }[];
  };

  virtualCard: {
    title: string;
    lede: string;
    image: SiteImage;
  };

  plans: {
    title: string;
    /** Three by design; the middle one carries the badge. */
    tiers: {
      name: string;
      price: string;
      priceNote: string;
      badge: string;
      features: string[];
      ctaLabel: string;
      ctaHref: string;
    }[];
  };

  send: {
    title: string;
    lede: string;
    image: SiteImage;
    steps: NumberedItem[];
  };

  rewards: {
    title: string;
    lede: string;
    points: { n: string; body: string }[];
    image: SiteImage;
  };

  personalise: {
    image: SiteImage;
    title: string;
    lede: string;
    /** The first entry renders as the selected pill; `note` shows as a tag. */
    languages: { label: string; note: string }[];
    tiles: { title: string; body: string }[];
  };

  faqs: {
    title: string;
    /** `linkLabel` + `linkHref` + `textAfter` add an inline link to an answer. */
    items: { q: string; a: string; linkLabel: string; linkHref: string; textAfter: string }[];
  };

  blogs: {
    title: string;
    allLabel: string;
    allHref: string;
    readMoreLabel: string;
  };
};

const TICKS = {
  platinum: [
    "Virtual Visa card • Apple & Google Pay",
    "Purchase Protection up to $10,000",
    "Extended Warranty up to $10,000",
    "Price Protection up to $2,000",
    "Auto Rental Insurance (worldwide)",
    "Exclusive 24/7 support & Visa Benefits Portal",
  ],
  signature: [
    "Everything in Platinum",
    "Visa Concierge service",
    "Visa Luxury Hotel Collection",
    "Airport lounge access (Visa Airport Companion)",
    "Higher spending limits",
  ],
  infinite: [
    "Everything in Signature",
    "Travel Accident Insurance up to $1,500,000",
    "Baggage Delay & Lost Luggage cover",
    "Priority 24/7 concierge",
    "Highest protection limits (Purchase $20k • Warranty $25k)",
    "Exclusive Infinite privileges",
  ],
};

export const HOME_DEFAULTS: HomeContent = {
  hero: {
    title: "Crypto wallet and a USD Visa card",
    lede: "Hold USDT, USDC, ETH and TRX across Tron and Ethereum. Your crypto funds a virtual USD Visa card you can create in-app and spend the same day — anywhere Visa is accepted.",
    primary: { label: "Get the SPay app", href: APP_STORE_URL },
    // The export pointed this at #wallet; the label names the plans band.
    secondary: { label: "Compare card plans", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "SPay Visa card" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "SPay app welcome screen" },
    title: "How SPay works",
    steps: [
      {
        n: "01",
        title: "Create your wallet",
        body: "Download the app, unlock with Face ID or a 6-digit passcode, and complete verification.",
      },
      {
        n: "02",
        title: "Deposit crypto",
        body: "Pick a token and network, then scan or copy your address. USDT, USDC, ETH and TRX are supported.",
      },
      {
        n: "03",
        title: "Create and fund your card",
        body: "Issue a virtual Visa card in-app and add funds from your USDC balance. Credit updates in minutes.",
      },
      {
        n: "04",
        title: "Spend in USD",
        body: "Pay online, in stores, or through Apple Pay. Merchants are settled in dollars like any other card.",
      },
    ],
  },

  wallet: {
    title: "A multi-currency wallet, ready on day one",
    lede: "Every account opens with wallets for the most widely used stablecoins and coins across two networks — each with its own address, balance and live USD value.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "SPay multi-currency wallet across Ethereum and Tron",
    },
    tiles: [
      { n: "01", title: "Scannable QR" },
      { n: "02", title: "Self-clearing clipboard" },
      { n: "03", title: "Network guidance" },
      { n: "04", title: "Self-custody withdrawals" },
    ],
  },

  virtualCard: {
    title: "An instant virtual Visa card",
    lede: "Create a virtual Visa card inside the app and start spending right away. Top it up from your USDC balance and pay in dollars anywhere Visa is accepted — online, in stores, and in your mobile wallet.",
    image: { src: "/site/spay-visa-cards.png", alt: "SPay virtual Visa cards" },
  },

  plans: {
    title: "Choose the card that fits you",
    tiers: [
      {
        name: "Platinum",
        price: "$9.99",
        priceNote: "One-time fee",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Get Started",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "$19.99",
        priceNote: "One-time fee",
        badge: "POPULAR",
        features: TICKS.signature,
        ctaLabel: "Get Started",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "$49.99",
        priceNote: "One-time fee",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Get Started",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Send Money To Any SPay User",
    lede: "Move funds to friends and family on SPay in seconds. The money lands straight on their card, ready to spend.",
    image: { src: "/site/spay-send-money.png", alt: "Sending money to another SPay user" },
    steps: [
      {
        n: "01",
        title: "Find people by UID or email",
        body: "A verified match is shown before you confirm.",
      },
      {
        n: "02",
        title: "Recent recipients",
        body: "Repeat a previous transfer in one tap.",
      },
    ],
  },

  rewards: {
    title: "Earn As You Spend, Redeem For Cashback",
    lede: "Points build up automatically as you use the app, then convert into real USDC credited to your card balance.",
    points: [
      { n: "01", body: "Every card purchase earns points — up to 1.5% back depending on your tier." },
      {
        n: "02",
        body: "One-off bonuses for joining with a referral code, completing verification and getting your first card.",
      },
      { n: "03", body: "200 points converts to $1 USDC, redeemable from 1,000 points in flexible steps." },
      { n: "04", body: "Refer a friend and earn at each milestone they reach, with progress you can track." },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "SPay app reward points screen" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "SPay app settings screen on a phone" },
    title: "Personal, Localised, Easy To Use",
    lede: "SPay adapts to your language, your look and your currency — with help a tap away.",
    languages: [
      { label: "English", note: "" },
      { label: "العربية", note: "RTL" },
      { label: "اردو", note: "RTL" },
      { label: "Türkçe", note: "" },
      { label: "Deutsch", note: "" },
      { label: "Español", note: "" },
      { label: "Polski", note: "" },
      { label: "Português", note: "" },
      { label: "Français", note: "" },
    ],
    tiles: [
      {
        title: "131 display currencies",
        body: "See balances in AED, USD, EUR, GBP, PKR, TRY and more at live rates.",
      },
      {
        title: "Themes and accent colours",
        body: "Light, dark or system, plus five accents that recolour the app live.",
      },
      {
        title: "In-app support",
        body: "An AI assistant answers instantly and hands off to a human agent, with screenshots attached in-chat.",
      },
      {
        title: "E-statements",
        body: "Generate a PDF for any period with money in, out and net, then download or email it.",
      },
    ],
  },

  faqs: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How does the SPay card get funded?",
        a: "You deposit crypto into your SPay wallet, then add funds to your card from your USDC balance using quick amounts between $10 and $500. The credit updates in minutes, and the card spends in US dollars.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Which crypto can I hold in SPay?",
        a: "USDT on Tron (TRC-20) and Ethereum (ERC-20), USDC on Ethereum (ERC-20), native ETH and native TRX. Each token and network combination gets its own deposit address, balance and live USD value.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Is there a physical SPay card?",
        a: "A teal plastic Visa card is on the way, with in-store taps and ATM withdrawals. Today the card is virtual: created in-app, spendable immediately online and in stores, and addable to Apple Wallet.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Does SPay work with Apple Pay and Google Pay?",
        a: "Apple Pay is live — add your card to Apple Wallet from the card screen and tap to pay. Google Pay support is in development.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "How does cashback work?",
        a: "You earn points on every card purchase, at a rate that depends on your tier. Points convert to USDC cashback at 200 points per dollar and can be redeemed from 1,000 points, credited straight to your card balance.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "What are the spending limits?",
        a: "Each tier has a cap for monthly, daily and single-transaction spending, and you set your own limit anywhere from $0 up to that cap. Limits reset automatically. Platinum caps at $20,000 a month, Signature at $50,000 and Infinite at $100,000.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "How do I withdraw crypto to my own wallet?",
        a: "Withdrawals are sent as USDC on the Base network to any self-custody wallet. Confirm your receiving wallet supports Base before sending, because funds sent on the wrong network cannot be recovered.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Can I use SPay in the UAE?",
        a: "The card settles merchants in US dollars over the Visa network, so merchants are never paid in crypto. Balances can be displayed in dirhams, and the app is fully localised in Arabic with right-to-left support. Eligibility depends on verification — see ",
        // The export pointed this at "#features"; Support has since been
        // retired, so the answer sends people to Contact instead.
        linkLabel: "Contact",
        linkHref: "/contact/",
        textAfter: " for current country coverage.",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    allLabel: "All articles",
    allHref: "/blog/",
    readMoreLabel: "Read more",
  },
};

export function resolveHome(raw: unknown): HomeContent {
  const sections = raw as Record<string, unknown> | null | undefined;
  return mergeContent(HOME_DEFAULTS, sections?.home);
}
