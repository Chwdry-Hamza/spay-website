/**
 * Urdu Contact-page copy. Typed as the full `ContactContent`, so a new English
 * field cannot ship untranslated.
 *
 * The email address, phone number and support hours are the same everywhere —
 * they are contact details, not copy, so they are not translated.
 */
import type { ContactContent } from "@/lib/site/contact";

export const UR_CONTACT: ContactContent = {
  hero: {
    title: "ہم جلد جواب دیتے ہیں",
    lede: "سوال آتے ہی ہمارے AI اسسٹنٹ سے بات کریں، جب چاہیں انسانی ایجنٹ طلب کریں، یا ای میل اور فون پر ٹیم سے رابطہ کریں۔ کارڈ اور فراڈ کے معاملات ہمیشہ پہلے دیکھے جاتے ہیں۔",
    ctaLabel: "لائیو چیٹ شروع کریں",
    ctaHref: "#channels",
    chat: {
      title: "SPay اسسٹنٹ",
      status: "آن لائن",
      messages: [
        { from: "customer", text: "چیک آؤٹ پر میرا کارڈ مسترد ہو گیا۔ کیوں؟" },
        {
          from: "assistant",
          text: "آپ کے بیلنس میں رقم موجود ہے، لیکن یہ دکاندار ایک ممنوعہ زمرے میں ہے۔ وہاں کوئی دوسرا کارڈ آزمائیں — کوئی رقم نہیں کٹی۔",
        },
        { from: "customer", text: "کیا میں کسی سے بات کر سکتا ہوں؟" },
        {
          from: "assistant",
          text: "آپ کو ابھی انسانی ایجنٹ سے ملایا جا رہا ہے۔ اوسط انتظار: 3 منٹ سے کم۔",
        },
      ],
      placeholder: "اپنا پیغام لکھیں…",
    },
  },

  details: {
    title: "ٹیم سے براہِ راست رابطہ کریں",
    cards: [
      {
        eyebrow: "ای میل سپورٹ",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "اکاؤنٹ، کارڈ اور ٹرانزیکشن کے مسائل کے لیے۔ کاروباری دنوں میں 24 گھنٹے کے اندر جواب۔",
      },
      {
        eyebrow: "فون سپورٹ",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "کارڈ یا فراڈ کے فوری مسائل کے لیے ایجنٹ سے براہِ راست بات کریں۔ سپورٹ کے اوقات میں دستیاب۔",
      },
      {
        eyebrow: "سپورٹ کے اوقات",
        value: "پیر – جمعہ",
        href: "",
        body: "صبح 9:00 – شام 6:00 (GST)۔ متحدہ عرب امارات کی سرکاری تعطیلات پر بند۔",
      },
    ],
  },

  marquee: { label: "آج ہی اپنا کارڈ لیں۔" },

  channels: {
    title: "ایپ میں سپورٹ",
    intro:
      "لائیو چیٹ SPay ایپ کی ہر اسکرین کے نچلے کونے میں موجود ہے۔ اسسٹنٹ سے شروع کریں، اور جب ضرورت ہو کسی انسان کے حوالے کر دیں۔",
    items: [
      {
        title: "AI اسسٹنٹ",
        meta: "فوری، 24/7",
        body: "بیلنس، حدود، فیس یا مسترد شدہ ادائیگی کے بارے میں پوچھیں۔ اسسٹنٹ ایپ کے اندر جواب دیتا ہے اور قدم بہ قدم حل بھی بتا سکتا ہے۔",
      },
      {
        title: "کسی انسان سے بات کریں",
        meta: "پیر – جمعہ، سپورٹ کے اوقات",
        body: "اسسٹنٹ سے مسئلہ حل نہ ہوا؟ اُسی چیٹ ونڈو میں ایجنٹ طلب کریں۔ آپ کی ہسٹری ساتھ منتقل ہو جاتی ہے، اس لیے کچھ دہرانے کی ضرورت نہیں۔",
      },
      {
        title: "کارڈ کے فوری مسائل",
        meta: "پہلے فریز کریں، پھر کال کریں",
        body: "فوراً ایپ میں کارڈ فریز کریں، پھر +971 55 947 6972 پر کال کریں تاکہ ہم آپ کے ساتھ مل کر ٹرانزیکشنز کا جائزہ لے سکیں۔",
      },
    ],
  },
};
