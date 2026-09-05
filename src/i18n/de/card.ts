/**
 * German Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/de/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "Virtuelle SPay Visa Platinum Karte",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "Virtuelle SPay Visa Signature Karte",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "Virtuelle SPay Visa Infinite Karte",
};

export const DE_CARD: CardContent = {
  hero: {
    title: "Drei virtuelle Visa-Karten, in Minuten ausgestellt",
    lede: "Jede SPay-Karte ist virtuell, wird aus Ihrem USDC-Guthaben aufgeladen und ist ab dem Moment der Erstellung bereit für Apple Pay und Google Pay. Wählen Sie die Stufe, die zu Ihrem Ausgabeverhalten passt — Platinum, Signature oder Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9,99 $",
      priceNote: "Einmalige Gebühr",
      blurb: "Die virtuelle Karte für jeden Tag — in Minuten ausgestellt, zahlt in US-Dollar.",
      features: [
        "Virtuelle Visa-Karte • Apple Pay und Google Pay",
        "Kaufschutz bis zu 10.000 $",
        "Garantieverlängerung bis zu 10.000 $",
        "Preisschutz bis zu 2.000 $",
        "Mietwagenversicherung (weltweit)",
        "Exklusiver 24/7-Support und Visa Benefits Portal",
      ],
      cta: { label: "Platinum holen", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19,99 $",
      priceNote: "Einmalige Gebühr",
      blurb: "Reise- und Lifestyle-Vorteile zusätzlich zu allem, was Platinum abdeckt.",
      features: [
        "Alles aus Platinum",
        "Visa Concierge Service",
        "Visa Luxury Hotel Collection",
        "Zugang zu Flughafen-Lounges (Visa Airport Companion)",
        "Höhere Ausgabenlimits",
      ],
      cta: { label: "Signature holen", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49,99 $",
      priceNote: "Einmalige Gebühr",
      blurb: "Die höchsten Schutzlimits und der bevorzugte Service, den SPay bietet.",
      features: [
        "Alles aus Signature",
        "Reiseunfallversicherung bis zu 1.500.000 $",
        "Schutz bei Gepäckverspätung und -verlust",
        "Bevorzugter 24/7-Concierge",
        "Höchste Schutzlimits (Kauf 20.000 $ • Garantie 25.000 $)",
        "Exklusive Infinite-Vorteile",
      ],
      cta: { label: "Infinite holen", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Hol dir deine noch heute." },

  physical: {
    id: "physical",
    name: "Physische Karte",
    price: "99 $",
    priceNote: "Einmalige Gebühr",
    blurb:
      "Dasselbe SPay-Guthaben in Kunststoff — kontaktlos im Geschäft zahlen, am Geldautomaten abheben und eine Karte dabeihaben, wenn Ihr Handy leer ist.",
    features: [
      "Türkisfarbene Visa-Karte aus Kunststoff",
      "Kontaktloses Zahlen im Geschäft und Abhebungen am Geldautomaten",
      "Weltweit akzeptiert",
      "An Ihre Adresse geliefert — bei Ankunft aktivieren",
    ],
    cta: { label: "Demnächst", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "Türkisfarbene physische SPay Visa-Karte" },
  },
};
