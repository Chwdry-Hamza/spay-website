/**
 * About page content.
 *
 * Layout, colour and animation are code (components/site/AboutPage); every
 * piece of copy and every image lives here and is merged with whatever the CMS
 * has saved under the About page's `sections.about`. These defaults are the
 * canonical copy, so the page renders correctly with an empty CMS.
 */
import { mergeContent, type SiteImage } from "./merge";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export type AboutContent = {
  hero: {
    title: string;
    lede: string;
    appStore: { eyebrow: string; name: string; href: string };
    playStore: { eyebrow: string; name: string; href: string };
    image: SiteImage;
  };
  borderless: {
    image: SiteImage;
    title: string;
    paragraphs: string[];
  };
  stablecoin: {
    title: string;
    paragraphs: string[];
    image: SiteImage;
  };
  marquee: { label: string };
  security: {
    title: string;
    intro: string;
    image: SiteImage;
  };
};

export const ABOUT_DEFAULTS: AboutContent = {
  hero: {
    title: "Digital money should be as easy to use as cash",
    lede: "SPay was built on a simple idea: digital money should be as easy to use as cash — and safer. We’re a secure, user-friendly crypto wallet that makes stablecoin payments simple and accessible for everyone, whether you’re sending money to family, paying online, or spending at your favorite store.",
    appStore: { eyebrow: "Download on the", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Get it on", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "Woman holding an SPay Visa card while using the SPay app",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Globe with orbiting payment paths",
    },
    title: "A New Standard in Borderless Banking",
    paragraphs: [
      "Traditional cards are tied to a bank, and a bank is tied to a country. That works until you move, travel, or get paid by someone in a different jurisdiction — and then the paperwork starts.",
      "The SPay Card isn’t tied to any of that. Your balance lives as stablecoins. Your funding comes from your own wallet, on-chain. Your card works the same in every country that takes Visa and Mastercard. There is no branch to visit, no local account to open, and no address to prove.",
      "It is deliberately simple: hold value in USDT or USDC, spend it in whatever currency the terminal in front of you asks for, and see every transaction in the app the moment it happens.",
    ],
  },

  stablecoin: {
    title: "Why your balance is a stablecoin",
    paragraphs: [
      "Your SPay balance is held in USDT and USDC — stablecoins that are pegged to the US dollar, so 1 USDT or 1 USDC always aims to stay worth 1 dollar. That means you get the best of both worlds: the speed, low cost, and borderless reach of blockchain payments, without the wild price swings of coins like Bitcoin.",
      "Your money is worth the same when you spend it as when you received it. No watching charts, no timing the market — just digital dollars that move in seconds, work across borders, and are ready to spend on your SPay card anytime.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Gold stablecoin discs" },
  },

  marquee: { label: "Get yours today." },

  security: {
    title: "Layered Security, In Your Control",
    intro:
      "Protection runs from the moment you unlock the app to the alert you get when a new device signs in.",
    image: {
      src: "/site/layered-security.png",
      alt: "Shield and padlock representing layered account security",
    },
  },
};

export function resolveAbout(raw: unknown): AboutContent {
  const sections = raw as Record<string, unknown> | null | undefined;
  return mergeContent(ABOUT_DEFAULTS, sections?.about);
}
