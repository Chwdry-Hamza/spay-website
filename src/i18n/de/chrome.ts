/**
 * German chrome — the header, mobile bottom nav and footer shown on every
 * German page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the German page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const DE_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Startseite", href: "/de/" },
      { label: "Über uns", href: "/de/about/" },
      { label: "Karte", href: "/de/card/" },
      { label: "So funktioniert's", href: "/de/how-it-works/" },
    ],
    contact: { label: "Kontakt", href: "/de/contact/" },
    appLabel: "App holen",
  },

  bottomNav: {
    items: [
      { label: "Startseite", href: "/de/" },
      { label: "Über uns", href: "/de/about/" },
      { label: "Karte", href: "/de/card/" },
      { label: "So funktioniert's", href: "/de/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "Die Geld-App",
    blurb:
      "Krypto-Wallet und USD-Visa-Karte in einer App. Betrieben von NOVARA TECH L.L.C S.O.C.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "Produkt",
        links: [
          { label: "USD-Visa-Karte", href: "/de/card/" },
          { label: "Krypto-Wallet", href: "/de/#wallet" },
          { label: "Tarife und Preise", href: "/de/#plans" },
          { label: "Sofortüberweisungen", href: "/de/#send" },
          { label: "Prämien und Empfehlungen", href: "/de/#rewards" },
        ],
      },
      {
        heading: "Wissen",
        links: [
          { label: "Blog", href: "/de/blog/" },
          { label: "Ratgeber zu Kryptokarten", href: "/de/blog/category/crypto-visa-card/" },
          { label: "Ratgeber zu Krypto-Wallets", href: "/de/blog/category/crypto-wallet/" },
          { label: "Wallet mit Karte", href: "/de/blog/crypto-wallet-with-card/" },
          { label: "Krypto ausgeben in den VAE", href: "/de/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Unternehmen",
        links: [
          { label: "Über SPay", href: "/de/about/" },
          { label: "Sicherheit", href: "/de/about/#security" },
          { label: "Kontakt", href: "/de/contact/" },
        ],
      },
      {
        heading: "Rechtliches",
        links: [
          { label: "Kartenbedingungen", href: "/card-terms/" },
          { label: "Datenschutzerklärung", href: "/privacy-policy/" },
          { label: "E-Sign-Einwilligung", href: ESIGN_URL },
          { label: "Verbotene Aktivitäten", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "Laden im", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Jetzt bei", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. Alle Rechte vorbehalten.",
    disclaimer:
      "Die Karte wird von Third National unter Lizenz von Visa ausgegeben. Visa ist eine eingetragene Marke der Visa International Service Association.",
  },
};
