/**
 * Site chrome content — the header, the mobile bottom nav and the footer.
 *
 * These three appear on every page, so their copy lives in one record rather
 * than being repeated per page: it is resolved from the HOME page's
 * `sections.siteChrome`, which every route already fetches (the root layout
 * reads the same home document, so Next dedupes the request).
 *
 * Icons are NOT here. They pair with the entries by position and are drawn in
 * code (SiteBottomNav, SiteFooter) because they are design, not copy — an
 * editor renaming a link keeps its icon, and adding one past the last icon
 * cycles rather than leaving a gap.
 */
import { mergeContent, type SiteImage, type SiteLink } from "./merge";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";
import { getHomePage } from "@/lib/cms";

export type SiteChromeContent = {
  header: {
    logo: SiteImage;
    /** Main nav. The entry whose href matches the current route renders as the
     *  active pill and links to `#top` instead — see SiteHeader. */
    nav: SiteLink[];
    contact: SiteLink;
    appLabel: string;
  };

  /** Tablet/mobile only (`data-r="botnav"`), four entries wide by design. */
  bottomNav: {
    items: SiteLink[];
  };

  footer: {
    logo: SiteImage;
    tag: string;
    blurb: string;
    /** Order fixes the icon: Instagram, Facebook, X, TikTok. */
    social: SiteLink[];
    columns: { heading: string; links: SiteLink[] }[];
    appStore: { eyebrow: string; name: string; href: string };
    playStore: { eyebrow: string; name: string; href: string };
    copyright: string;
    disclaimer: string;
  };
};

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const SITE_CHROME_DEFAULTS: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Card", href: "/card/" },
      { label: "How it works", href: "/how-it-works/" },
    ],
    contact: { label: "Contact us", href: "/contact/" },
    appLabel: "Get app",
  },

  bottomNav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Card", href: "/card/" },
      { label: "How it works", href: "/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "The money app",
    blurb:
      "A crypto wallet and USD Visa card in one app. Operated by NOVARA TECH L.L.C S.O.C.",
    // Order fixes the icon (see SiteFooter's SOCIAL_ICONS), so keep these four
    // in place; the design export shipped them as dead "#" links.
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "Product",
        links: [
          { label: "USD Visa card", href: "/card/" },
          { label: "Crypto wallet", href: "/#wallet" },
          { label: "Plans & pricing", href: "/#plans" },
          { label: "Instant transfers", href: "/#send" },
          { label: "Rewards & referral", href: "/#rewards" },
        ],
      },
      {
        heading: "Learn",
        links: [
          { label: "Blog", href: "/blog/" },
          { label: "Crypto card guides", href: "/blog/category/crypto-visa-card/" },
          { label: "Crypto wallet guides", href: "/blog/category/crypto-wallet/" },
          { label: "Wallet with a card", href: "/blog/crypto-wallet-with-card/" },
          // The design's last two labels (TRC-20 vs ERC-20, USDT vs USDC) have
          // no post behind them; these two published guides take those slots.
          { label: "Spending crypto in the UAE", href: "/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About SPay", href: "/about/" },
          { label: "Security", href: "/about/#security" },
          { label: "Contact", href: "/contact/" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Card Terms", href: "/card-terms/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
          { label: "E-Sign Consent", href: ESIGN_URL },
          { label: "Prohibited Activities", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "Download on the", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Get it on", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. All rights reserved.",
    disclaimer:
      "Card issued by Third National under licence from Visa. Visa is a registered trademark of Visa International Service Association.",
  },
};

export function resolveSiteChrome(raw: unknown): SiteChromeContent {
  const sections = raw as Record<string, unknown> | null | undefined;
  return mergeContent(SITE_CHROME_DEFAULTS, sections?.siteChrome);
}

/**
 * The chrome for the current request.
 *
 * Reads the home document because the chrome is site-wide: the root layout
 * already fetches it, so Next dedupes this into the same request.
 */
export async function getSiteChrome(): Promise<SiteChromeContent> {
  return resolveSiteChrome((await getHomePage())?.sections);
}
