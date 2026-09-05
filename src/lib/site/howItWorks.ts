/**
 * "How it works" page content.
 *
 * Layout, icons and the connector rail are code
 * (components/site/HowItWorksPage); the copy lives here and merges with the
 * page's `sections.howItWorks` from the CMS.
 */
import { mergeContent, type SiteImage } from "./merge";

export type HowItWorksContent = {
  hero: {
    title: string;
    lede: string;
    image: SiteImage;
    /** Stacked cards; they alternate indent and rounded corner by position. */
    steps: { title: string; body: string }[];
  };

  journey: {
    title: string;
    /** Six by design — the connector rail is laid out 6-up on desktop. */
    steps: { n: string; title: string; duration: string; body: string }[];
  };

  marquee: { label: string };

  verification: {
    title: string;
    /** Icons pair with these by position: person, ID card, card-with-tick. */
    cards: { title: string; body: string }[];
    image: SiteImage;
  };
};

export const HOW_IT_WORKS_DEFAULTS: HowItWorksContent = {
  hero: {
    title: "How the SPay card works",
    lede: "Signup to first payment, end to end, in about five minutes. Here is every step — from creating the account to the moment a purchase shows up in your history.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "Hand holding a phone showing the SPay app",
    },
    steps: [
      {
        title: "Create your account",
        body: "Enter an email address, choose a password and confirm the email. That is the account — no branch visit, no paperwork.",
      },
      {
        title: "Fund with crypto",
        body: "Open Deposit, choose USDT, USDC, ETH or TRX and pick Tron or Ethereum to see your address. Send from any wallet or exchange and the balance lands in minutes.",
      },
      {
        title: "Buy your virtual card",
        body: "Choose Platinum, Signature or Infinite and pay the one-time fee. The card number, expiry date and CVV then appear in the app, ready for Apple Pay or Google Pay.",
      },
      {
        title: "Spend, manage, transfer",
        body: "Tap to pay in stores, pay online and cover subscriptions in US dollars. Every authorisation shows the merchant, the local amount and the exact cost after conversion.",
      },
    ],
  },

  journey: {
    title: "From signup to first payment",
    steps: [
      { n: "01", title: "Account created", duration: "30 sec", body: "Email, password, confirm" },
      { n: "02", title: "Identity verified", duration: "2–5 min", body: "In-app KYC with your ID" },
      { n: "03", title: "Balance funded", duration: "1–10 min", body: "Send crypto from your wallet" },
      { n: "04", title: "Card purchased", duration: "1 min", body: "Pick a plan and pay the one-time fee" },
      { n: "05", title: "Added to wallet", duration: "30 sec", body: "Apple Pay or Google Pay" },
      { n: "06", title: "First payment", duration: "Instant", body: "Tap, or paste at checkout" },
    ],
  },

  marquee: { label: "Get yours today." },

  verification: {
    title: "Verification made simple",
    cards: [
      {
        title: "Basic information",
        body: "Just the basics — your name, email, and phone number. No bank account, no proof of address, no paperwork. You’re in within a minute.",
      },
      {
        title: "Quick identity check",
        body: "Snap your passport or national ID and take a selfie. Verification is automated and usually clears in minutes, not days.",
      },
      {
        title: "Your card is ready!",
        body: "Once approved, your virtual card appears instantly — top it up from your balance and start spending right away. Order a physical card whenever you want it.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "SPay KYC verification screen on a phone",
    },
  },
};

export function resolveHowItWorks(raw: unknown): HowItWorksContent {
  const sections = raw as Record<string, unknown> | null | undefined;
  return mergeContent(HOW_IT_WORKS_DEFAULTS, sections?.howItWorks);
}
