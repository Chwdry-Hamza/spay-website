/**
 * Portuguese chrome — the header, mobile bottom nav and footer shown on every
 * Portuguese page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the Portuguese page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const PT_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Início", href: "/pt/" },
      { label: "Sobre nós", href: "/pt/about/" },
      { label: "Cartão", href: "/pt/card/" },
      { label: "Como funciona", href: "/pt/how-it-works/" },
    ],
    contact: { label: "Contacto", href: "/pt/contact/" },
    appLabel: "Obter a app",
  },

  bottomNav: {
    items: [
      { label: "Início", href: "/pt/" },
      { label: "Sobre nós", href: "/pt/about/" },
      { label: "Cartão", href: "/pt/card/" },
      { label: "Como funciona", href: "/pt/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "A app do dinheiro",
    blurb:
      "Uma carteira de criptomoedas e um cartão Visa em dólares numa só app. Operada pela NOVARA TECH L.L.C S.O.C.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "Produto",
        links: [
          { label: "Cartão Visa em USD", href: "/pt/card/" },
          { label: "Carteira de criptomoedas", href: "/pt/#wallet" },
          { label: "Planos e preços", href: "/pt/#plans" },
          { label: "Transferências imediatas", href: "/pt/#send" },
          { label: "Recompensas e referências", href: "/pt/#rewards" },
        ],
      },
      {
        heading: "Aprender",
        links: [
          { label: "Blog", href: "/pt/blog/" },
          { label: "Guias de cartões cripto", href: "/pt/blog/category/crypto-visa-card/" },
          { label: "Guias de carteiras cripto", href: "/pt/blog/category/crypto-wallet/" },
          { label: "Carteira com cartão", href: "/pt/blog/crypto-wallet-with-card/" },
          { label: "Gastar cripto nos EAU", href: "/pt/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Empresa",
        links: [
          { label: "Sobre a SPay", href: "/pt/about/" },
          { label: "Segurança", href: "/pt/about/#security" },
          { label: "Contacto", href: "/pt/contact/" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Termos do cartão", href: "/card-terms/" },
          { label: "Política de privacidade", href: "/privacy-policy/" },
          { label: "Consentimento de assinatura eletrónica", href: ESIGN_URL },
          { label: "Atividades proibidas", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "Descarregar na", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Disponível no", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. Todos os direitos reservados.",
    disclaimer:
      "Cartão emitido pela Third National sob licença da Visa. Visa é uma marca registada da Visa International Service Association.",
  },
};
