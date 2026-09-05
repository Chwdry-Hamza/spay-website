/**
 * Polish chrome — the header, mobile bottom nav and footer shown on every
 * Polish page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the Polish page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const PL_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Strona główna", href: "/pl/" },
      { label: "O nas", href: "/pl/about/" },
      { label: "Karta", href: "/pl/card/" },
      { label: "Jak to działa", href: "/pl/how-it-works/" },
    ],
    contact: { label: "Kontakt", href: "/pl/contact/" },
    appLabel: "Pobierz aplikację",
  },

  bottomNav: {
    items: [
      { label: "Strona główna", href: "/pl/" },
      { label: "O nas", href: "/pl/about/" },
      { label: "Karta", href: "/pl/card/" },
      { label: "Jak to działa", href: "/pl/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "Aplikacja do pieniędzy",
    blurb:
      "Portfel kryptowalutowy i karta Visa w dolarach w jednej aplikacji. Operatorem jest NOVARA TECH L.L.C S.O.C.",
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
          { label: "Karta Visa w USD", href: "/pl/card/" },
          { label: "Portfel kryptowalutowy", href: "/pl/#wallet" },
          { label: "Plany i ceny", href: "/pl/#plans" },
          { label: "Przelewy natychmiastowe", href: "/pl/#send" },
          { label: "Nagrody i polecenia", href: "/pl/#rewards" },
        ],
      },
      {
        heading: "Wiedza",
        links: [
          { label: "Blog", href: "/pl/blog/" },
          { label: "Poradniki o kartach krypto", href: "/pl/blog/category/crypto-visa-card/" },
          { label: "Poradniki o portfelach krypto", href: "/pl/blog/category/crypto-wallet/" },
          { label: "Portfel z kartą", href: "/pl/blog/crypto-wallet-with-card/" },
          { label: "Płatności krypto w ZEA", href: "/pl/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Firma",
        links: [
          { label: "O SPay", href: "/pl/about/" },
          { label: "Bezpieczeństwo", href: "/pl/about/#security" },
          { label: "Kontakt", href: "/pl/contact/" },
        ],
      },
      {
        heading: "Informacje prawne",
        links: [
          { label: "Regulamin karty", href: "/card-terms/" },
          { label: "Polityka prywatności", href: "/privacy-policy/" },
          { label: "Zgoda na podpis elektroniczny", href: ESIGN_URL },
          { label: "Działalność zabroniona", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "Pobierz z", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Pobierz z", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. Wszelkie prawa zastrzeżone.",
    disclaimer:
      "Karta wydawana przez Third National na licencji Visa. Visa jest zastrzeżonym znakiem towarowym Visa International Service Association.",
  },
};
