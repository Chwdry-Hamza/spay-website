/**
 * Card page content.
 *
 * Copy and images only. The per-tier accent colour and band background are
 * design, so they live in code (components/site/CardPage) and pair with these
 * tiers by position.
 */
import { mergeContent, type SiteImage } from "./merge";
import { APP_STORE_URL } from "@/lib/appStore";

export type CardTier = {
  /** Anchor id for the band — the header and footer link to these. */
  id: string;
  name: string;
  price: string;
  priceNote: string;
  blurb: string;
  features: string[];
  /** An empty `href` renders the label as a muted, non-clickable pill. */
  cta: { label: string; href: string };
  image: SiteImage;
};

export type CardContent = {
  hero: {
    title: string;
    lede: string;
    /** The three fanned cards: left, right, then the one in front. */
    fan: { left: SiteImage; right: SiteImage; front: SiteImage };
  };
  /** The virtual tiers, in the order they appear above the marquee. */
  tiers: CardTier[];
  marquee: { label: string };
  /** The plastic card band below the marquee. */
  physical: CardTier;
};

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "SPay Visa Platinum virtual card",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "SPay Visa Signature virtual card",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "SPay Visa Infinite virtual card",
};

export const CARD_DEFAULTS: CardContent = {
  hero: {
    title: "Three virtual Visa cards, issued in minutes",
    lede: "Every SPay card is virtual, funded from your USDC balance and ready for Apple Pay and Google Pay the moment it is created. Pick the tier that matches how you spend — Platinum, Signature or Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "$9.99",
      priceNote: "One-time fee",
      blurb: "The everyday virtual card — issued in minutes, spends in US dollars.",
      features: [
        "Virtual Visa card • Apple & Google Pay",
        "Purchase Protection up to $10,000",
        "Extended Warranty up to $10,000",
        "Price Protection up to $2,000",
        "Auto Rental Insurance (worldwide)",
        "Exclusive 24/7 support & Visa Benefits Portal",
      ],
      cta: { label: "Get Platinum", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "$19.99",
      priceNote: "One-time fee",
      blurb: "Travel and lifestyle benefits on top of everything Platinum covers.",
      features: [
        "Everything in Platinum",
        "Visa Concierge service",
        "Visa Luxury Hotel Collection",
        "Airport lounge access (Visa Airport Companion)",
        "Higher spending limits",
      ],
      cta: { label: "Get Signature", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "$49.99",
      priceNote: "One-time fee",
      blurb: "The highest protection limits and priority service SPay offers.",
      features: [
        "Everything in Signature",
        "Travel Accident Insurance up to $1,500,000",
        "Baggage Delay & Lost Luggage cover",
        "Priority 24/7 concierge",
        "Highest protection limits (Purchase $20k • Warranty $25k)",
        "Exclusive Infinite privileges",
      ],
      cta: { label: "Get Infinite", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Get yours today." },

  physical: {
    id: "physical",
    name: "Physical card",
    price: "$99",
    priceNote: "One-time fee",
    blurb:
      "The same SPay balance in plastic — tap in stores, withdraw at ATMs and keep a card on you when your phone runs flat.",
    features: [
      "Teal plastic Visa card",
      "Tap to pay in stores & ATM withdrawals",
      "Accepted worldwide",
      "Delivered to your address — activate on arrival",
    ],
    // Not orderable yet, so the CTA is a label rather than a link.
    cta: { label: "Coming soon", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "SPay teal physical Visa card" },
  },
};

export function resolveCard(raw: unknown): CardContent {
  const sections = raw as Record<string, unknown> | null | undefined;
  return mergeContent(CARD_DEFAULTS, sections?.card);
}
