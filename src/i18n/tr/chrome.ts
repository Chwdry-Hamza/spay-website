/**
 * Turkish chrome — the header, mobile bottom nav and footer shown on every
 * Turkish page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the Turkish page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const TR_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "Ana sayfa", href: "/tr/" },
      { label: "Hakkımızda", href: "/tr/about/" },
      { label: "Kart", href: "/tr/card/" },
      { label: "Nasıl çalışır", href: "/tr/how-it-works/" },
    ],
    contact: { label: "Bize ulaşın", href: "/tr/contact/" },
    appLabel: "Uygulamayı indir",
  },

  bottomNav: {
    items: [
      { label: "Ana sayfa", href: "/tr/" },
      { label: "Hakkımızda", href: "/tr/about/" },
      { label: "Kart", href: "/tr/card/" },
      { label: "Nasıl çalışır", href: "/tr/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "Para uygulaması",
    blurb:
      "Tek uygulamada kripto cüzdanı ve USD Visa kartı. NOVARA TECH L.L.C S.O.C tarafından işletilmektedir.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "Ürün",
        links: [
          { label: "USD Visa kartı", href: "/tr/card/" },
          { label: "Kripto cüzdanı", href: "/tr/#wallet" },
          { label: "Planlar ve fiyatlar", href: "/tr/#plans" },
          { label: "Anında transfer", href: "/tr/#send" },
          { label: "Ödüller ve referans", href: "/tr/#rewards" },
        ],
      },
      {
        heading: "Öğren",
        links: [
          { label: "Blog", href: "/tr/blog/" },
          { label: "Kripto kart rehberleri", href: "/tr/blog/category/crypto-visa-card/" },
          { label: "Kripto cüzdan rehberleri", href: "/tr/blog/category/crypto-wallet/" },
          { label: "Kartlı cüzdan", href: "/tr/blog/crypto-wallet-with-card/" },
          { label: "BAE'de kripto harcamak", href: "/tr/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "Şirket",
        links: [
          { label: "SPay hakkında", href: "/tr/about/" },
          { label: "Güvenlik", href: "/tr/about/#security" },
          { label: "İletişim", href: "/tr/contact/" },
        ],
      },
      {
        heading: "Yasal",
        links: [
          { label: "Kart Koşulları", href: "/card-terms/" },
          { label: "Gizlilik Politikası", href: "/privacy-policy/" },
          { label: "E-İmza Onayı", href: ESIGN_URL },
          { label: "Yasaklı Faaliyetler", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "İndirin", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Edinin", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. Tüm hakları saklıdır.",
    disclaimer:
      "Kart, Visa lisansı altında Third National tarafından ihraç edilmiştir. Visa, Visa International Service Association'ın tescilli ticari markasıdır.",
  },
};
