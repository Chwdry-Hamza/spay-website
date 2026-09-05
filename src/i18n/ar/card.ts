/**
 * Arabic Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/ar/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "بطاقة SPay Visa Platinum الافتراضية",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "بطاقة SPay Visa Signature الافتراضية",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "بطاقة SPay Visa Infinite الافتراضية",
};

export const AR_CARD: CardContent = {
  hero: {
    title: "ثلاث بطاقات Visa افتراضية تصدر خلال دقائق",
    lede: "كل بطاقة من SPay افتراضية، تُشحن من رصيدك بعملة USDC وتصبح جاهزة لـ Apple Pay وGoogle Pay لحظة إنشائها. اختر الفئة التي تناسب طريقة إنفاقك — Platinum أو Signature أو Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9.99 $",
      priceNote: "رسوم لمرة واحدة",
      blurb: "البطاقة الافتراضية للاستخدام اليومي — تصدر خلال دقائق وتدفع بالدولار الأمريكي.",
      features: [
        "بطاقة Visa افتراضية • Apple Pay وGoogle Pay",
        "حماية المشتريات حتى 10,000 $",
        "تمديد الضمان حتى 10,000 $",
        "حماية السعر حتى 2,000 $",
        "تأمين تأجير السيارات (حول العالم)",
        "دعم حصري على مدار الساعة وبوابة مزايا Visa",
      ],
      cta: { label: "احصل على Platinum", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19.99 $",
      priceNote: "رسوم لمرة واحدة",
      blurb: "مزايا للسفر ونمط الحياة إضافة إلى كل ما تشمله فئة Platinum.",
      features: [
        "كل ما في Platinum",
        "خدمة Visa Concierge",
        "Visa Luxury Hotel Collection",
        "دخول صالات المطارات (Visa Airport Companion)",
        "حدود إنفاق أعلى",
      ],
      cta: { label: "احصل على Signature", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49.99 $",
      priceNote: "رسوم لمرة واحدة",
      blurb: "أعلى حدود للحماية وخدمة ذات أولوية يقدّمها SPay.",
      features: [
        "كل ما في Signature",
        "تأمين حوادث السفر حتى 1,500,000 $",
        "تغطية تأخر الأمتعة وفقدانها",
        "خدمة كونسيرج ذات أولوية على مدار الساعة",
        "أعلى حدود للحماية (المشتريات 20 ألف $ • الضمان 25 ألف $)",
        "مزايا حصرية لعملاء Infinite",
      ],
      cta: { label: "احصل على Infinite", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "احصل على بطاقتك اليوم." },

  physical: {
    id: "physical",
    name: "البطاقة البلاستيكية",
    price: "99 $",
    priceNote: "رسوم لمرة واحدة",
    blurb:
      "الرصيد نفسه في SPay ولكن على بطاقة بلاستيكية — ادفع لاتلامسيًا في المتاجر، واسحب من الصرافات، واحمل بطاقة معك حين ينفد شحن هاتفك.",
    features: [
      "بطاقة Visa بلاستيكية بلون فيروزي",
      "دفع لاتلامسي في المتاجر وسحب من الصرافات",
      "مقبولة حول العالم",
      "تُشحن إلى عنوانك — فعّلها عند الاستلام",
    ],
    cta: { label: "قريبًا", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "بطاقة Visa البلاستيكية الفيروزية من SPay" },
  },
};
