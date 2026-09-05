/**
 * Urdu Card-page copy. Typed as the full `CardContent`, so a new English field
 * cannot ship untranslated.
 *
 * Tier names and Visa programme names stay in Latin script — they are the
 * names printed on the card and used inside the app.
 */
import type { CardContent, CardTier } from "@/lib/site/card";
import type { SiteImage } from "@/lib/site/merge";
import { APP_STORE_URL } from "@/lib/appStore";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "SPay Visa Platinum ورچوئل کارڈ",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "SPay Visa Signature ورچوئل کارڈ",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "SPay Visa Infinite ورچوئل کارڈ",
};

const TIERS: CardTier[] = [
  {
    id: "platinum",
    name: "Platinum",
    price: "$9.99",
    priceNote: "ایک بار کی فیس",
    blurb: "روزمرہ کا ورچوئل کارڈ — چند منٹوں میں جاری، امریکی ڈالر میں خرچ۔",
    features: [
      "ورچوئل Visa کارڈ • Apple اور Google Pay",
      "خریداری کا تحفظ 10,000 ڈالر تک",
      "توسیعی وارنٹی 10,000 ڈالر تک",
      "قیمت کا تحفظ 2,000 ڈالر تک",
      "کرائے کی گاڑی کی انشورنس (دنیا بھر میں)",
      "خصوصی 24/7 سپورٹ اور Visa Benefits Portal",
    ],
    cta: { label: "Platinum لیں", href: APP_STORE_URL },
    image: PLATINUM,
  },
  {
    id: "signature",
    name: "Signature",
    price: "$19.99",
    priceNote: "ایک بار کی فیس",
    blurb: "Platinum کی تمام سہولیات کے ساتھ سفر اور طرزِ زندگی کے اضافی فوائد۔",
    features: [
      "Platinum کی تمام سہولیات",
      "Visa Concierge سروس",
      "Visa Luxury Hotel Collection",
      "ایئرپورٹ لاؤنج تک رسائی (Visa Airport Companion)",
      "زیادہ خرچ کی حدود",
    ],
    cta: { label: "Signature لیں", href: APP_STORE_URL },
    image: SIGNATURE,
  },
  {
    id: "infinite",
    name: "Infinite",
    price: "$49.99",
    priceNote: "ایک بار کی فیس",
    blurb: "SPay کی پیش کردہ سب سے زیادہ تحفظ کی حدود اور ترجیحی سروس۔",
    features: [
      "Signature کی تمام سہولیات",
      "سفری حادثاتی انشورنس 1,500,000 ڈالر تک",
      "سامان کی تاخیر اور گمشدگی کا تحفظ",
      "ترجیحی 24/7 کنسیئرج",
      "سب سے زیادہ تحفظ کی حدود (خریداری 20 ہزار ڈالر • وارنٹی 25 ہزار ڈالر)",
      "خصوصی Infinite مراعات",
    ],
    cta: { label: "Infinite لیں", href: APP_STORE_URL },
    image: INFINITE,
  },
];

export const UR_CARD: CardContent = {
  hero: {
    title: "تین ورچوئل Visa کارڈ، چند منٹوں میں جاری",
    lede: "SPay کا ہر کارڈ ورچوئل ہے، آپ کے USDC بیلنس سے فنڈ ہوتا ہے اور بنتے ہی Apple Pay اور Google Pay کے لیے تیار ہوتا ہے۔ وہ درجہ منتخب کریں جو آپ کے خرچ کے انداز سے میل کھائے — Platinum، Signature یا Infinite۔",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: TIERS,

  marquee: { label: "آج ہی اپنا کارڈ لیں۔" },

  physical: {
    id: "physical",
    name: "فزیکل کارڈ",
    price: "$99",
    priceNote: "ایک بار کی فیس",
    blurb:
      "وہی SPay بیلنس پلاسٹک میں — دکانوں میں ٹیپ کریں، ATM سے رقم نکالیں، اور فون کی بیٹری ختم ہونے پر بھی کارڈ آپ کے پاس رہے۔",
    features: [
      "فیروزی پلاسٹک Visa کارڈ",
      "دکانوں میں ٹیپ ادائیگی اور ATM سے رقم نکالنا",
      "دنیا بھر میں قابلِ قبول",
      "آپ کے پتے پر پہنچایا جاتا ہے — پہنچنے پر فعال کریں",
    ],
    // Not orderable yet, so the CTA is a label rather than a link.
    cta: { label: "جلد آ رہا ہے", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "SPay کا فیروزی فزیکل Visa کارڈ" },
  },
};
