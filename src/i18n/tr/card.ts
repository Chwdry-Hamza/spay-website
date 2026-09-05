/**
 * Turkish Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "SPay Visa Platinum sanal kartı",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "SPay Visa Signature sanal kartı",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "SPay Visa Infinite sanal kartı",
};

export const TR_CARD: CardContent = {
  hero: {
    title: "Dakikalar içinde verilen üç sanal Visa kartı",
    lede: "Her SPay kartı sanaldır, USDC bakiyenizden yüklenir ve oluşturulduğu anda Apple Pay ile Google Pay için hazırdır. Harcama alışkanlığınıza uyan seviyeyi seçin — Platinum, Signature veya Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9,99 $",
      priceNote: "Tek seferlik ücret",
      blurb: "Günlük kullanım için sanal kart — dakikalar içinde verilir, ABD doları ile harcar.",
      features: [
        "Sanal Visa kartı • Apple Pay ve Google Pay",
        "10.000 $'a kadar Satın Alma Koruması",
        "10.000 $'a kadar Uzatılmış Garanti",
        "2.000 $'a kadar Fiyat Koruması",
        "Araç Kiralama Sigortası (dünya geneli)",
        "7/24 özel destek ve Visa Avantajlar Portalı",
      ],
      cta: { label: "Platinum al", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19,99 $",
      priceNote: "Tek seferlik ücret",
      blurb: "Platinum'un kapsadığı her şeyin üstüne seyahat ve yaşam tarzı avantajları.",
      features: [
        "Platinum'daki her şey",
        "Visa Concierge hizmeti",
        "Visa Luxury Hotel Collection",
        "Havalimanı lounge erişimi (Visa Airport Companion)",
        "Daha yüksek harcama limitleri",
      ],
      cta: { label: "Signature al", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49,99 $",
      priceNote: "Tek seferlik ücret",
      blurb: "SPay'in sunduğu en yüksek koruma limitleri ve öncelikli hizmet.",
      features: [
        "Signature'daki her şey",
        "1.500.000 $'a kadar Seyahat Kaza Sigortası",
        "Bagaj Gecikmesi ve Kayıp Bagaj teminatı",
        "Öncelikli 7/24 concierge",
        "En yüksek koruma limitleri (Satın alma 20 bin $ • Garanti 25 bin $)",
        "Infinite'e özel ayrıcalıklar",
      ],
      cta: { label: "Infinite al", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Sen de hemen al." },

  physical: {
    id: "physical",
    name: "Fiziksel kart",
    price: "99 $",
    priceNote: "Tek seferlik ücret",
    blurb:
      "Aynı SPay bakiyesi, bu kez plastikte — mağazalarda temassız ödeyin, ATM'den nakit çekin ve telefonunuzun şarjı bittiğinde yanınızda bir kart bulundurun.",
    features: [
      "Turkuaz plastik Visa kartı",
      "Mağazalarda temassız ödeme ve ATM'den nakit çekme",
      "Dünya genelinde geçerli",
      "Adresinize teslim — geldiğinde aktifleştirin",
    ],
    cta: { label: "Çok yakında", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "SPay turkuaz fiziksel Visa kartı" },
  },
};
