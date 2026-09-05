/**
 * Urdu homepage copy. Typed as the full `HomeContent`, so a new English field
 * cannot ship untranslated — the build fails instead.
 *
 * Brand and programme names (Visa, Apple Pay, USDC, "Visa Luxury Hotel
 * Collection", the tier names) stay in Latin script: they are proper nouns that
 * appear that way on the card and in the app.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "ورچوئل Visa کارڈ • Apple اور Google Pay",
    "خریداری کا تحفظ 10,000 ڈالر تک",
    "توسیعی وارنٹی 10,000 ڈالر تک",
    "قیمت کا تحفظ 2,000 ڈالر تک",
    "کرائے کی گاڑی کی انشورنس (دنیا بھر میں)",
    "خصوصی 24/7 سپورٹ اور Visa Benefits Portal",
  ],
  signature: [
    "Platinum کی تمام سہولیات",
    "Visa Concierge سروس",
    "Visa Luxury Hotel Collection",
    "ایئرپورٹ لاؤنج تک رسائی (Visa Airport Companion)",
    "زیادہ خرچ کی حدود",
  ],
  infinite: [
    "Signature کی تمام سہولیات",
    "سفری حادثاتی انشورنس 1,500,000 ڈالر تک",
    "سامان کی تاخیر اور گمشدگی کا تحفظ",
    "ترجیحی 24/7 کنسیئرج",
    "سب سے زیادہ تحفظ کی حدود (خریداری 20 ہزار ڈالر • وارنٹی 25 ہزار ڈالر)",
    "خصوصی Infinite مراعات",
  ],
};

export const UR_HOME: HomeContent = {
  hero: {
    title: "کرپٹو والٹ اور ڈالر والا Visa کارڈ",
    lede: "Tron اور Ethereum پر USDT، USDC، ETH اور TRX رکھیں۔ آپ کی کرپٹو ایک ورچوئل ڈالر Visa کارڈ کو فنڈ کرتی ہے جو آپ ایپ میں بنا کر اسی دن استعمال کر سکتے ہیں — جہاں کہیں بھی Visa قبول کی جاتی ہے۔",
    primary: { label: "SPay ایپ حاصل کریں", href: APP_STORE_URL },
    secondary: { label: "کارڈ پلانز کا موازنہ کریں", href: "#plans" },
    // The art is mirrored for right-to-left: in the original the arm enters
    // from the right, which points into the text once the layout flips. Only
    // the hand is mirrored — flipping the whole image would reverse "SPay"
    // and "VISA" on the card.
    image: { src: "/site/spay-hero-card-rtl.png", alt: "SPay کا Visa کارڈ" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "SPay ایپ کی خوش آمدید اسکرین" },
    title: "SPay کیسے کام کرتا ہے",
    steps: [
      {
        n: "01",
        title: "اپنا والٹ بنائیں",
        body: "ایپ ڈاؤن لوڈ کریں، Face ID یا 6 ہندسوں کے پاس کوڈ سے کھولیں، اور تصدیق مکمل کریں۔",
      },
      {
        n: "02",
        title: "کرپٹو جمع کریں",
        body: "ٹوکن اور نیٹ ورک منتخب کریں، پھر اپنا ایڈریس اسکین یا کاپی کریں۔ USDT، USDC، ETH اور TRX دستیاب ہیں۔",
      },
      {
        n: "03",
        title: "کارڈ بنائیں اور فنڈ کریں",
        body: "ایپ میں ورچوئل Visa کارڈ جاری کریں اور اپنے USDC بیلنس سے رقم شامل کریں۔ بیلنس چند منٹوں میں دستیاب ہو جاتا ہے۔",
      },
      {
        n: "04",
        title: "ڈالر میں ادائیگی کریں",
        body: "آن لائن، دکانوں میں یا Apple Pay کے ذریعے ادائیگی کریں۔ دکانداروں کو دیگر کارڈز کی طرح ڈالر میں ادائیگی ہوتی ہے۔",
      },
    ],
  },

  wallet: {
    title: "کئی کرنسیوں والا والٹ، پہلے دن سے تیار",
    lede: "ہر اکاؤنٹ دو نیٹ ورکس پر سب سے زیادہ استعمال ہونے والے اسٹیبل کوائنز اور کوائنز کے والٹس کے ساتھ کھلتا ہے — ہر ایک کا اپنا ایڈریس، بیلنس اور لائیو ڈالر ویلیو۔",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "Ethereum اور Tron پر SPay کا کئی کرنسیوں والا والٹ",
    },
    tiles: [
      { n: "01", title: "اسکین کے قابل QR" },
      { n: "02", title: "خودکار صاف ہونے والا کلپ بورڈ" },
      { n: "03", title: "نیٹ ورک کی رہنمائی" },
      { n: "04", title: "اپنی تحویل میں رقم نکالنا" },
    ],
  },

  virtualCard: {
    title: "فوری ورچوئل Visa کارڈ",
    lede: "ایپ کے اندر ورچوئل Visa کارڈ بنائیں اور فوراً خرچ کرنا شروع کریں۔ اسے اپنے USDC بیلنس سے ٹاپ اپ کریں اور جہاں کہیں Visa قبول ہو وہاں ڈالر میں ادائیگی کریں — آن لائن، دکانوں میں اور اپنے موبائل والٹ میں۔",
    image: { src: "/site/spay-visa-cards.png", alt: "SPay کے ورچوئل Visa کارڈز" },
  },

  plans: {
    title: "اپنے لیے موزوں کارڈ منتخب کریں",
    tiers: [
      {
        name: "Platinum",
        price: "$9.99",
        priceNote: "ایک بار کی فیس",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "شروع کریں",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "$19.99",
        priceNote: "ایک بار کی فیس",
        badge: "مقبول",
        features: TICKS.signature,
        ctaLabel: "شروع کریں",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "$49.99",
        priceNote: "ایک بار کی فیس",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "شروع کریں",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "کسی بھی SPay صارف کو رقم بھیجیں",
    lede: "SPay پر دوستوں اور اہلِ خانہ کو سیکنڈوں میں رقم بھیجیں۔ رقم سیدھی ان کے کارڈ پر پہنچتی ہے، خرچ کے لیے تیار۔",
    image: { src: "/site/spay-send-money.png", alt: "کسی دوسرے SPay صارف کو رقم بھیجنا" },
    steps: [
      {
        n: "01",
        title: "UID یا ای میل سے لوگ تلاش کریں",
        body: "تصدیق سے پہلے تصدیق شدہ نام دکھایا جاتا ہے۔",
      },
      {
        n: "02",
        title: "حالیہ وصول کنندگان",
        body: "پچھلی ٹرانسفر ایک ٹیپ میں دہرائیں۔",
      },
    ],
  },

  rewards: {
    title: "خرچ کریں، کمائیں اور کیش بیک حاصل کریں",
    lede: "ایپ استعمال کرتے ہوئے پوائنٹس خودبخود جمع ہوتے ہیں، پھر اصل USDC میں بدل کر آپ کے کارڈ بیلنس میں شامل ہو جاتے ہیں۔",
    points: [
      { n: "01", body: "ہر کارڈ خریداری پر پوائنٹس ملتے ہیں — آپ کے درجے کے مطابق 1.5% تک واپسی۔" },
      {
        n: "02",
        body: "ریفرل کوڈ کے ساتھ شامل ہونے، تصدیق مکمل کرنے اور پہلا کارڈ لینے پر ایک بار کے بونس۔",
      },
      { n: "03", body: "200 پوائنٹس 1 USDC کے برابر ہیں، جو 1,000 پوائنٹس سے لچکدار مراحل میں کیش کیے جا سکتے ہیں۔" },
      { n: "04", body: "دوست کو ریفر کریں اور اس کے ہر مرحلے پر کمائیں، پیش رفت آپ خود دیکھ سکتے ہیں۔" },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "SPay ایپ کی انعامی پوائنٹس اسکرین" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "فون پر SPay ایپ کی سیٹنگز اسکرین" },
    title: "ذاتی، مقامی اور استعمال میں آسان",
    lede: "SPay آپ کی زبان، آپ کے انداز اور آپ کی کرنسی کے مطابق ڈھل جاتی ہے — اور مدد ہمیشہ ایک ٹیپ کی دوری پر۔",
    languages: [
      { label: "English", note: "" },
      { label: "العربية", note: "RTL" },
      { label: "اردو", note: "RTL" },
      { label: "Türkçe", note: "" },
      { label: "Deutsch", note: "" },
      { label: "Español", note: "" },
      { label: "Polski", note: "" },
      { label: "Português", note: "" },
      { label: "Français", note: "" },
    ],
    tiles: [
      {
        title: "131 ڈسپلے کرنسیاں",
        body: "AED، USD، EUR، GBP، PKR، TRY اور مزید میں لائیو ریٹ پر اپنے بیلنس دیکھیں۔",
      },
      {
        title: "تھیمز اور ایکسنٹ رنگ",
        body: "لائٹ، ڈارک یا سسٹم، اور پانچ ایکسنٹ رنگ جو ایپ کا رنگ فوراً بدل دیتے ہیں۔",
      },
      {
        title: "ایپ کے اندر سپورٹ",
        body: "AI اسسٹنٹ فوراً جواب دیتا ہے اور ضرورت پڑنے پر انسانی ایجنٹ کو منتقل کر دیتا ہے، اسکرین شاٹس اسی چیٹ میں منسلک ہوتے ہیں۔",
      },
      {
        title: "ای اسٹیٹمنٹس",
        body: "کسی بھی مدت کی PDF بنائیں جس میں آنے والی، جانے والی اور خالص رقم شامل ہو، پھر ڈاؤن لوڈ کریں یا ای میل کریں۔",
      },
    ],
  },

  faqs: {
    title: "اکثر پوچھے جانے والے سوالات",
    items: [
      {
        q: "SPay کارڈ میں رقم کیسے ڈالی جاتی ہے؟",
        a: "آپ اپنے SPay والٹ میں کرپٹو جمع کرتے ہیں، پھر اپنے USDC بیلنس سے 10 سے 500 ڈالر کی فوری رقوم استعمال کرتے ہوئے کارڈ میں رقم شامل کرتے ہیں۔ بیلنس چند منٹوں میں دستیاب ہو جاتا ہے اور کارڈ امریکی ڈالر میں خرچ کرتا ہے۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "SPay میں کون سی کرپٹو رکھ سکتا ہوں؟",
        a: "Tron (TRC-20) اور Ethereum (ERC-20) پر USDT، Ethereum (ERC-20) پر USDC، اور مقامی ETH اور TRX۔ ٹوکن اور نیٹ ورک کے ہر جوڑے کا اپنا ڈپازٹ ایڈریس، بیلنس اور لائیو ڈالر ویلیو ہوتی ہے۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "کیا SPay کا فزیکل کارڈ بھی ہے؟",
        a: "فیروزی رنگ کا پلاسٹک Visa کارڈ جلد آ رہا ہے، جس سے دکانوں میں ٹیپ کر کے ادائیگی اور ATM سے رقم نکالی جا سکے گی۔ فی الحال کارڈ ورچوئل ہے: ایپ میں بنتا ہے، آن لائن اور دکانوں میں فوراً استعمال ہوتا ہے، اور Apple Wallet میں شامل کیا جا سکتا ہے۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "کیا SPay، Apple Pay اور Google Pay کے ساتھ کام کرتا ہے؟",
        a: "Apple Pay دستیاب ہے — کارڈ اسکرین سے اپنا کارڈ Apple Wallet میں شامل کریں اور ٹیپ کر کے ادائیگی کریں۔ Google Pay کی سہولت زیرِ تکمیل ہے۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "کیش بیک کیسے کام کرتا ہے؟",
        a: "آپ ہر کارڈ خریداری پر پوائنٹس کماتے ہیں، جن کی شرح آپ کے درجے پر منحصر ہے۔ پوائنٹس 200 پوائنٹس فی ڈالر کے حساب سے USDC کیش بیک میں بدلتے ہیں، 1,000 پوائنٹس سے کیش کیے جا سکتے ہیں، اور سیدھے آپ کے کارڈ بیلنس میں شامل ہوتے ہیں۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "خرچ کی حدود کیا ہیں؟",
        a: "ہر درجے کی ماہانہ، روزانہ اور فی ٹرانزیکشن حد مقرر ہے، اور آپ اپنی حد 0 ڈالر سے اس حد تک خود طے کرتے ہیں۔ حدیں خودبخود دوبارہ بحال ہو جاتی ہیں۔ Platinum کی حد 20,000 ڈالر ماہانہ، Signature کی 50,000 ڈالر اور Infinite کی 100,000 ڈالر ہے۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "اپنے والٹ میں کرپٹو کیسے نکالوں؟",
        a: "رقم Base نیٹ ورک پر USDC کے طور پر کسی بھی ایسے والٹ میں بھیجی جاتی ہے جو آپ کی اپنی تحویل میں ہو۔ بھیجنے سے پہلے تصدیق کر لیں کہ وصول کرنے والا والٹ Base کو سپورٹ کرتا ہے، کیونکہ غلط نیٹ ورک پر بھیجی گئی رقم واپس نہیں مل سکتی۔",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "کیا میں SPay متحدہ عرب امارات میں استعمال کر سکتا ہوں؟",
        a: "کارڈ Visa نیٹ ورک کے ذریعے دکانداروں کو امریکی ڈالر میں ادائیگی کرتا ہے، اس لیے دکانداروں کو کبھی کرپٹو نہیں ملتی۔ بیلنس درہم میں دکھایا جا سکتا ہے، اور ایپ مکمل طور پر عربی میں دائیں سے بائیں سپورٹ کے ساتھ دستیاب ہے۔ اہلیت تصدیق پر منحصر ہے — موجودہ ممالک کی فہرست دیکھنے کے لیے ",
        linkLabel: "رابطہ",
        linkHref: "/ur/contact/",
        textAfter: " کا صفحہ دیکھیں۔",
      },
    ],
  },

  blogs: {
    title: "بلاگ",
    allLabel: "تمام مضامین",
    allHref: "/ur/blog/",
    readMoreLabel: "مزید پڑھیں",
  },
};
