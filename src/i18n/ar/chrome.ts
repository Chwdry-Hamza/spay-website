/**
 * Arabic chrome — the header, mobile bottom nav and footer shown on every
 * Arabic page. Typed as the full shape, so tsc fails if an English field is
 * added and left untranslated.
 *
 * Links point at the Arabic page where one exists and at the English page
 * where it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const AR_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "الرئيسية", href: "/ar/" },
      { label: "من نحن", href: "/ar/about/" },
      { label: "البطاقة", href: "/ar/card/" },
      { label: "كيف تعمل", href: "/ar/how-it-works/" },
    ],
    contact: { label: "تواصل معنا", href: "/ar/contact/" },
    appLabel: "حمّل التطبيق",
  },

  bottomNav: {
    items: [
      { label: "الرئيسية", href: "/ar/" },
      { label: "من نحن", href: "/ar/about/" },
      { label: "البطاقة", href: "/ar/card/" },
      { label: "كيف تعمل", href: "/ar/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "تطبيق المال",
    blurb:
      "محفظة للعملات الرقمية وبطاقة Visa بالدولار في تطبيق واحد. تُدار بواسطة NOVARA TECH L.L.C S.O.C.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "المنتج",
        links: [
          { label: "بطاقة Visa بالدولار", href: "/ar/card/" },
          { label: "محفظة العملات الرقمية", href: "/ar/#wallet" },
          { label: "الباقات والأسعار", href: "/ar/#plans" },
          { label: "التحويلات الفورية", href: "/ar/#send" },
          { label: "المكافآت والإحالة", href: "/ar/#rewards" },
        ],
      },
      {
        heading: "تعلّم",
        links: [
          { label: "المدونة", href: "/ar/blog/" },
          { label: "أدلة بطاقات العملات الرقمية", href: "/ar/blog/category/crypto-visa-card/" },
          { label: "أدلة محافظ العملات الرقمية", href: "/ar/blog/category/crypto-wallet/" },
          { label: "محفظة مع بطاقة", href: "/ar/blog/crypto-wallet-with-card/" },
          { label: "الدفع بالعملات الرقمية في الإمارات", href: "/ar/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "الشركة",
        links: [
          { label: "عن SPay", href: "/ar/about/" },
          { label: "الأمان", href: "/ar/about/#security" },
          { label: "تواصل معنا", href: "/ar/contact/" },
        ],
      },
      {
        heading: "قانوني",
        links: [
          { label: "شروط البطاقة", href: "/card-terms/" },
          { label: "سياسة الخصوصية", href: "/privacy-policy/" },
          { label: "الموافقة على التوقيع الإلكتروني", href: ESIGN_URL },
          { label: "الأنشطة المحظورة", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "حمّل من", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "احصل عليه من", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay. جميع الحقوق محفوظة.",
    disclaimer:
      "البطاقة صادرة عن Third National بترخيص من Visa. Visa علامة تجارية مسجلة لشركة Visa International Service Association.",
  },
};
