/**
 * Spanish chrome — the header, mobile bottom nav and footer shown on every
 * Spanish page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the Spanish page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const ES_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Inicio", href: "/es/" },
      { label: "Sobre nosotros", href: "/es/about/" },
      { label: "Tarjeta", href: "/es/card/" },
      { label: "Cómo funciona", href: "/es/how-it-works/" },
    ],
    contact: { label: "Contacto", href: "/es/contact/" },
    appLabel: "Descargar la app",
  },

  bottomNav: {
    items: [
      { label: "Inicio", href: "/es/" },
      { label: "Sobre nosotros", href: "/es/about/" },
      { label: "Tarjeta", href: "/es/card/" },
      { label: "Cómo funciona", href: "/es/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "La app del dinero",
    blurb:
      "Un monedero cripto y una tarjeta Visa en dólares, en una sola app. Operada por NOVARA TECH L.L.C S.O.C.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "Producto",
        links: [
          { label: "Tarjeta Visa en USD", href: "/es/card/" },
          { label: "Monedero cripto", href: "/es/#wallet" },
          { label: "Planes y precios", href: "/es/#plans" },
          { label: "Transferencias instantáneas", href: "/es/#send" },
          { label: "Recompensas y referidos", href: "/es/#rewards" },
        ],
      },
      {
        heading: "Aprender",
        links: [
          { label: "Blog", href: "/es/blog/" },
          { label: "Guías de tarjetas cripto", href: "/es/blog/category/crypto-visa-card/" },
          { label: "Guías de monederos cripto", href: "/es/blog/category/crypto-wallet/" },
          { label: "Monedero con tarjeta", href: "/es/blog/crypto-wallet-with-card/" },
          { label: "Gastar cripto en los EAU", href: "/es/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Empresa",
        links: [
          { label: "Sobre SPay", href: "/es/about/" },
          { label: "Seguridad", href: "/es/about/#security" },
          { label: "Contacto", href: "/es/contact/" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Condiciones de la tarjeta", href: "/card-terms/" },
          { label: "Política de privacidad", href: "/privacy-policy/" },
          { label: "Consentimiento de firma electrónica", href: ESIGN_URL },
          { label: "Actividades prohibidas", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "Descárgalo en", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Disponible en", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. Todos los derechos reservados.",
    disclaimer:
      "Tarjeta emitida por Third National bajo licencia de Visa. Visa es una marca registrada de Visa International Service Association.",
  },
};
