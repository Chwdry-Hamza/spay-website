/**
 * French chrome — the header, mobile bottom nav and footer shown on every
 * French page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the French page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const FR_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Accueil", href: "/fr/" },
      { label: "À propos", href: "/fr/about/" },
      { label: "Carte", href: "/fr/card/" },
      { label: "Comment ça marche", href: "/fr/how-it-works/" },
    ],
    contact: { label: "Contact", href: "/fr/contact/" },
    appLabel: "Télécharger l’app",
  },

  bottomNav: {
    items: [
      { label: "Accueil", href: "/fr/" },
      { label: "À propos", href: "/fr/about/" },
      { label: "Carte", href: "/fr/card/" },
      { label: "Comment ça marche", href: "/fr/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "L’app de votre argent",
    blurb:
      "Un portefeuille crypto et une carte Visa en dollars dans une seule app. Exploitée par NOVARA TECH L.L.C S.O.C.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "Produit",
        links: [
          { label: "Carte Visa en USD", href: "/fr/card/" },
          { label: "Portefeuille crypto", href: "/fr/#wallet" },
          { label: "Offres et tarifs", href: "/fr/#plans" },
          { label: "Virements instantanés", href: "/fr/#send" },
          { label: "Récompenses et parrainage", href: "/fr/#rewards" },
        ],
      },
      {
        heading: "Ressources",
        links: [
          { label: "Blog", href: "/fr/blog/" },
          { label: "Guides des cartes crypto", href: "/fr/blog/category/crypto-visa-card/" },
          { label: "Guides des portefeuilles crypto", href: "/fr/blog/category/crypto-wallet/" },
          { label: "Portefeuille avec carte", href: "/fr/blog/crypto-wallet-with-card/" },
          { label: "Payer en crypto aux Émirats", href: "/fr/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Entreprise",
        links: [
          { label: "À propos de SPay", href: "/fr/about/" },
          { label: "Sécurité", href: "/fr/about/#security" },
          { label: "Contact", href: "/fr/contact/" },
        ],
      },
      {
        heading: "Mentions légales",
        links: [
          { label: "Conditions de la carte", href: "/card-terms/" },
          { label: "Politique de confidentialité", href: "/privacy-policy/" },
          { label: "Consentement à la signature électronique", href: ESIGN_URL },
          { label: "Activités interdites", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "Télécharger dans l’", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Disponible sur", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. Tous droits réservés.",
    disclaimer:
      "Carte émise par Third National sous licence Visa. Visa est une marque déposée de Visa International Service Association.",
  },
};
