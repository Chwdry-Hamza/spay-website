/**
 * Polish Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/pl/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "Wirtualna karta SPay Visa Platinum",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "Wirtualna karta SPay Visa Signature",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "Wirtualna karta SPay Visa Infinite",
};

export const PL_CARD: CardContent = {
  hero: {
    title: "Trzy wirtualne karty Visa, wydane w kilka minut",
    lede: "Każda karta SPay jest wirtualna, zasilana z Twojego salda USDC i gotowa do Apple Pay oraz Google Pay już w chwili utworzenia. Wybierz poziom dopasowany do tego, jak wydajesz — Platinum, Signature albo Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9,99 $",
      priceNote: "Opłata jednorazowa",
      blurb: "Wirtualna karta na co dzień — wydana w kilka minut, płaci w dolarach amerykańskich.",
      features: [
        "Wirtualna karta Visa • Apple Pay i Google Pay",
        "Ochrona zakupów do 10 000 $",
        "Przedłużona gwarancja do 10 000 $",
        "Ochrona ceny do 2 000 $",
        "Ubezpieczenie wynajmu samochodu (na całym świecie)",
        "Wyłączne wsparcie 24/7 i Portal Korzyści Visa",
      ],
      cta: { label: "Wybierz Platinum", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19,99 $",
      priceNote: "Opłata jednorazowa",
      blurb: "Korzyści podróżne i lifestyle'owe ponad wszystko, co obejmuje Platinum.",
      features: [
        "Wszystko z Platinum",
        "Usługa Visa Concierge",
        "Visa Luxury Hotel Collection",
        "Dostęp do saloników lotniskowych (Visa Airport Companion)",
        "Wyższe limity wydatków",
      ],
      cta: { label: "Wybierz Signature", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49,99 $",
      priceNote: "Opłata jednorazowa",
      blurb: "Najwyższe limity ochrony i priorytetowa obsługa, jaką oferuje SPay.",
      features: [
        "Wszystko z Signature",
        "Ubezpieczenie następstw nieszczęśliwych wypadków w podróży do 1 500 000 $",
        "Ochrona przy opóźnieniu i zagubieniu bagażu",
        "Priorytetowy concierge 24/7",
        "Najwyższe limity ochrony (Zakupy 20 tys. $ • Gwarancja 25 tys. $)",
        "Wyłączne przywileje Infinite",
      ],
      cta: { label: "Wybierz Infinite", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Odbierz swoją już dziś." },

  physical: {
    id: "physical",
    name: "Karta fizyczna",
    price: "99 $",
    priceNote: "Opłata jednorazowa",
    blurb:
      "To samo saldo SPay, tylko w plastiku — płać zbliżeniowo w sklepach, wypłacaj z bankomatów i miej kartę przy sobie, gdy telefon się rozładuje.",
    features: [
      "Turkusowa plastikowa karta Visa",
      "Płatności zbliżeniowe w sklepach i wypłaty z bankomatów",
      "Akceptowana na całym świecie",
      "Dostarczana pod Twój adres — aktywuj po odbiorze",
    ],
    cta: { label: "Już wkrótce", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "Turkusowa fizyczna karta Visa SPay" },
  },
};
