/**
 * Urdu chrome — the header, mobile bottom nav and footer shown on every Urdu
 * page. Typed as the full shape, so tsc fails if an English field is added and
 * left untranslated.
 *
 * Links point at the Urdu page where one exists and at the English page where
 * it does not (the legal pages and the blog stay English).
 */
import type { SiteChromeContent } from "@/lib/site/chrome";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

/** Card issuer-hosted legal documents — not pages on this site. */
const ESIGN_URL = "https://legal.raincards.xyz/legal/electronic-communications-notice";
const PROHIBITED_URL = "https://legal.raincards.xyz/legal/prohibitions";

export const UR_CHROME: SiteChromeContent = {
  header: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    nav: [
      { label: "ہوم", href: "/ur/" },
      { label: "ہمارے بارے میں", href: "/ur/about/" },
      { label: "کارڈ", href: "/ur/card/" },
      { label: "طریقۂ کار", href: "/ur/how-it-works/" },
    ],
    contact: { label: "رابطہ کریں", href: "/ur/contact/" },
    appLabel: "ایپ حاصل کریں",
  },

  bottomNav: {
    items: [
      { label: "ہوم", href: "/ur/" },
      { label: "ہمارے بارے میں", href: "/ur/about/" },
      { label: "کارڈ", href: "/ur/card/" },
      { label: "طریقۂ کار", href: "/ur/how-it-works/" },
    ],
  },

  footer: {
    logo: { src: "/site/spay-logo.png", alt: "SPay" },
    tag: "پیسوں کی ایپ",
    blurb:
      "ایک ہی ایپ میں کرپٹو والٹ اور ڈالر والا Visa کارڈ۔ NOVARA TECH L.L.C S.O.C کے زیرِ انتظام۔",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/spay.card/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590269537086" },
      { label: "X", href: "https://x.com/Spay_card" },
      { label: "TikTok", href: "https://www.tiktok.com/@spaycard" },
    ],
    columns: [
      {
        heading: "پروڈکٹ",
        links: [
          { label: "ڈالر والا Visa کارڈ", href: "/ur/card/" },
          { label: "کرپٹو والٹ", href: "/ur/#wallet" },
          { label: "پلانز اور قیمتیں", href: "/ur/#plans" },
          { label: "فوری رقم بھیجیں", href: "/ur/#send" },
          { label: "انعامات اور ریفرل", href: "/ur/#rewards" },
        ],
      },
      {
        heading: "سیکھیں",
        links: [
          { label: "بلاگ", href: "/ur/blog/" },
          { label: "کرپٹو کارڈ گائیڈز", href: "/ur/blog/category/crypto-visa-card/" },
          { label: "کرپٹو والٹ گائیڈز", href: "/ur/blog/category/crypto-wallet/" },
          { label: "کارڈ کے ساتھ والٹ", href: "/ur/blog/crypto-wallet-with-card/" },
          { label: "متحدہ عرب امارات میں کرپٹو خرچ کرنا", href: "/ur/blog/spend-crypto-uae-beginners-guide/" },
        ],
      },
      {
        heading: "کمپنی",
        links: [
          { label: "SPay کے بارے میں", href: "/ur/about/" },
          { label: "سیکیورٹی", href: "/ur/about/#security" },
          { label: "رابطہ کریں", href: "/ur/contact/" },
        ],
      },
      {
        heading: "قانونی",
        links: [
          { label: "کارڈ کی شرائط", href: "/card-terms/" },
          { label: "پرائیویسی پالیسی", href: "/privacy-policy/" },
          { label: "الیکٹرانک دستخط کی رضامندی", href: ESIGN_URL },
          { label: "ممنوعہ سرگرمیاں", href: PROHIBITED_URL },
        ],
      },
    ],
    appStore: { eyebrow: "ڈاؤن لوڈ کریں", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "حاصل کریں", name: "Google Play", href: PLAY_STORE_URL },
    copyright: "© 2026 SPay۔ جملہ حقوق محفوظ ہیں۔",
    disclaimer:
      "کارڈ Third National کی جانب سے Visa کے لائسنس کے تحت جاری کیا جاتا ہے۔ Visa، Visa International Service Association کا رجسٹرڈ ٹریڈ مارک ہے۔",
  },
};
