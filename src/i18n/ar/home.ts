/**
 * Arabic homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 *
 * Amounts keep Western Arabic numerals and the "$" sign, which is what UAE
 * financial sites use; the surrounding text is what carries the direction.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "بطاقة Visa افتراضية • Apple Pay وGoogle Pay",
    "حماية المشتريات حتى 10,000 $",
    "تمديد الضمان حتى 10,000 $",
    "حماية السعر حتى 2,000 $",
    "تأمين تأجير السيارات (حول العالم)",
    "دعم حصري على مدار الساعة وبوابة مزايا Visa",
  ],
  signature: [
    "كل ما في Platinum",
    "خدمة Visa Concierge",
    "Visa Luxury Hotel Collection",
    "دخول صالات المطارات (Visa Airport Companion)",
    "حدود إنفاق أعلى",
  ],
  infinite: [
    "كل ما في Signature",
    "تأمين حوادث السفر حتى 1,500,000 $",
    "تغطية تأخر الأمتعة وفقدانها",
    "خدمة كونسيرج ذات أولوية على مدار الساعة",
    "أعلى حدود للحماية (المشتريات 20 ألف $ • الضمان 25 ألف $)",
    "مزايا حصرية لعملاء Infinite",
  ],
};

export const AR_HOME: HomeContent = {
  hero: {
    title: "محفظة عملات رقمية وبطاقة Visa بالدولار",
    lede: "احتفظ بعملات USDT وUSDC وETH وTRX على شبكتَي Tron وEthereum. رصيدك الرقمي يموّل بطاقة Visa افتراضية بالدولار تُنشئها داخل التطبيق وتستخدمها في اليوم نفسه — في كل مكان تُقبل فيه Visa.",
    primary: { label: "حمّل تطبيق SPay", href: APP_STORE_URL },
    secondary: { label: "قارن باقات البطاقات", href: "#plans" },
    // The art is mirrored for right-to-left: in the original the arm enters
    // from the right, which points into the text once the layout flips. Only
    // the hand is mirrored — flipping the whole image would reverse "SPay"
    // and "VISA" on the card.
    image: { src: "/site/spay-hero-card-rtl.png", alt: "بطاقة Visa من SPay" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "شاشة الترحيب في تطبيق SPay" },
    title: "كيف يعمل SPay",
    steps: [
      {
        n: "01",
        title: "أنشئ محفظتك",
        body: "حمّل التطبيق، افتحه ببصمة الوجه أو برمز من ستة أرقام، ثم أكمل التحقق من هويتك.",
      },
      {
        n: "02",
        title: "أودِع عملات رقمية",
        body: "اختر العملة والشبكة، ثم امسح عنوانك أو انسخه. ندعم USDT وUSDC وETH وTRX.",
      },
      {
        n: "03",
        title: "أنشئ بطاقتك واشحنها",
        body: "أصدر بطاقة Visa افتراضية داخل التطبيق واشحنها من رصيدك بعملة USDC. يظهر الرصيد خلال دقائق.",
      },
      {
        n: "04",
        title: "ادفع بالدولار",
        body: "ادفع عبر الإنترنت أو في المتاجر أو عبر Apple Pay. تتم تسوية مدفوعات التجّار بالدولار تمامًا كأي بطاقة أخرى.",
      },
    ],
  },

  wallet: {
    title: "محفظة متعددة العملات، جاهزة من اليوم الأول",
    lede: "يبدأ كل حساب بمحافظ لأكثر العملات المستقرة والعملات الرقمية استخدامًا على شبكتين — لكل منها عنوانها ورصيدها وقيمتها بالدولار لحظة بلحظة.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "محفظة SPay متعددة العملات على شبكتَي Ethereum وTron",
    },
    tiles: [
      { n: "01", title: "رمز QR قابل للمسح" },
      { n: "02", title: "حافظة تمسح نفسها تلقائيًا" },
      { n: "03", title: "إرشادات حول الشبكة" },
      { n: "04", title: "سحب إلى محفظتك الخاصة" },
    ],
  },

  virtualCard: {
    title: "بطاقة Visa افتراضية في الحال",
    lede: "أنشئ بطاقة Visa افتراضية داخل التطبيق وابدأ الدفع فورًا. اشحنها من رصيدك بعملة USDC وادفع بالدولار في كل مكان تُقبل فيه Visa — عبر الإنترنت وفي المتاجر وفي محفظة هاتفك.",
    image: { src: "/site/spay-visa-cards.png", alt: "بطاقات Visa الافتراضية من SPay" },
  },

  plans: {
    title: "اختر البطاقة التي تناسبك",
    tiers: [
      {
        name: "Platinum",
        price: "9.99 $",
        priceNote: "رسوم لمرة واحدة",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "ابدأ الآن",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19.99 $",
        priceNote: "رسوم لمرة واحدة",
        badge: "الأكثر رواجًا",
        features: TICKS.signature,
        ctaLabel: "ابدأ الآن",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49.99 $",
        priceNote: "رسوم لمرة واحدة",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "ابدأ الآن",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "أرسل المال إلى أي مستخدم في SPay",
    lede: "حوّل الأموال إلى أصدقائك وعائلتك على SPay خلال ثوانٍ. تصل مباشرة إلى بطاقتهم وجاهزة للإنفاق.",
    image: { src: "/site/spay-send-money.png", alt: "إرسال الأموال إلى مستخدم آخر في SPay" },
    steps: [
      {
        n: "01",
        title: "ابحث عن الأشخاص بالمعرّف أو البريد",
        body: "يظهر لك تطابق موثّق قبل أن تؤكد التحويل.",
      },
      {
        n: "02",
        title: "المستلمون الأخيرون",
        body: "كرّر تحويلًا سابقًا بلمسة واحدة.",
      },
    ],
  },

  rewards: {
    title: "اربح مع كل عملية شراء واستبدلها نقدًا",
    lede: "تتراكم النقاط تلقائيًا أثناء استخدامك للتطبيق، ثم تتحول إلى USDC حقيقي يُضاف إلى رصيد بطاقتك.",
    points: [
      {
        n: "01",
        body: "كل عملية شراء بالبطاقة تكسبك نقاطًا — حتى 1.5% استرداد حسب فئتك.",
      },
      {
        n: "02",
        body: "مكافآت لمرة واحدة عند الانضمام برمز إحالة، وإكمال التحقق، والحصول على بطاقتك الأولى.",
      },
      {
        n: "03",
        body: "كل 200 نقطة تساوي 1 USDC، ويمكن استبدالها ابتداءً من 1,000 نقطة بخطوات مرنة.",
      },
      {
        n: "04",
        body: "ادعُ صديقًا واربح عند كل مرحلة يصل إليها، مع تتبّع واضح للتقدّم.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "شاشة نقاط المكافآت في تطبيق SPay" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "شاشة إعدادات تطبيق SPay على الهاتف" },
    title: "شخصية ومحلية وسهلة الاستخدام",
    lede: "يتكيّف SPay مع لغتك ومظهرك وعملتك — والمساعدة دائمًا على بُعد لمسة واحدة.",
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
        title: "131 عملة للعرض",
        body: "اطّلع على أرصدتك بالدرهم والدولار واليورو والجنيه الإسترليني والروبية والليرة وغيرها بأسعار الصرف اللحظية.",
      },
      {
        title: "السمات وألوان التمييز",
        body: "فاتح أو داكن أو حسب النظام، إضافة إلى خمسة ألوان تمييز تعيد تلوين التطبيق فورًا.",
      },
      {
        title: "الدعم داخل التطبيق",
        body: "يجيب مساعد الذكاء الاصطناعي فورًا ويحوّلك إلى موظف دعم عند الحاجة، مع إرفاق لقطات الشاشة داخل المحادثة نفسها.",
      },
      {
        title: "كشوفات إلكترونية",
        body: "أنشئ ملف PDF لأي فترة يوضّح الوارد والصادر والصافي، ثم نزّله أو أرسله بالبريد الإلكتروني.",
      },
    ],
  },

  faqs: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "كيف تُشحن بطاقة SPay؟",
        a: "تودِع عملات رقمية في محفظة SPay، ثم تشحن البطاقة من رصيدك بعملة USDC عبر مبالغ سريعة تتراوح بين 10 $ و500 $. يتحدّث الرصيد خلال دقائق، وتدفع البطاقة بالدولار الأمريكي.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "ما العملات الرقمية التي يمكنني الاحتفاظ بها في SPay؟",
        a: "USDT على شبكتَي Tron (TRC-20) وEthereum (ERC-20)، وUSDC على Ethereum (ERC-20)، إضافة إلى ETH وTRX الأصليتين. لكل مزيج من العملة والشبكة عنوان إيداع خاص به ورصيد وقيمة بالدولار لحظة بلحظة.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "هل توجد بطاقة SPay بلاستيكية؟",
        a: "بطاقة Visa بلاستيكية بلون فيروزي في الطريق، مع الدفع اللاتلامسي في المتاجر والسحب من الصرافات. أما اليوم فالبطاقة افتراضية: تُنشأ داخل التطبيق، وتُستخدم فورًا عبر الإنترنت وفي المتاجر، ويمكن إضافتها إلى Apple Wallet.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "هل يعمل SPay مع Apple Pay وGoogle Pay؟",
        a: "Apple Pay متاح الآن — أضف بطاقتك إلى Apple Wallet من شاشة البطاقة وادفع لاتلامسيًا. أما دعم Google Pay فهو قيد التطوير.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "كيف يعمل الاسترداد النقدي؟",
        a: "تكسب نقاطًا مع كل عملية شراء بالبطاقة، بنسبة تعتمد على فئتك. تتحول النقاط إلى استرداد نقدي بعملة USDC بواقع 200 نقطة لكل دولار، ويمكن استبدالها ابتداءً من 1,000 نقطة، وتُضاف مباشرة إلى رصيد بطاقتك.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "ما هي حدود الإنفاق؟",
        a: "لكل فئة سقف شهري ويومي وسقف للعملية الواحدة، وأنت تحدد سقفك الخاص في أي مستوى بين 0 $ وذلك الحد. تُعاد ضبط الحدود تلقائيًا. سقف Platinum هو 20,000 $ شهريًا، وSignature 50,000 $، وInfinite 100,000 $.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "كيف أسحب عملاتي الرقمية إلى محفظتي الخاصة؟",
        a: "تُرسل عمليات السحب بعملة USDC على شبكة Base إلى أي محفظة تملك مفاتيحها. تأكد من أن محفظة الاستلام تدعم شبكة Base قبل الإرسال، لأن الأموال المُرسلة على شبكة خاطئة لا يمكن استرجاعها.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "هل يمكنني استخدام SPay في الإمارات؟",
        a: "تسوّي البطاقة مدفوعات التجّار بالدولار الأمريكي عبر شبكة Visa، فلا يتقاضى التجّار عملات رقمية إطلاقًا. ويمكن عرض الأرصدة بالدرهم، والتطبيق معرّب بالكامل مع دعم الكتابة من اليمين إلى اليسار. تعتمد الأهلية على التحقق من الهوية — اطّلع على الدول المشمولة حاليًا في صفحة ",
        linkLabel: "تواصل معنا",
        linkHref: "/ar/contact/",
        textAfter: ".",
      },
    ],
  },

  blogs: {
    title: "المدونة",
    allLabel: "كل المقالات",
    allHref: "/ar/blog/",
    readMoreLabel: "اقرأ المزيد",
  },
};
