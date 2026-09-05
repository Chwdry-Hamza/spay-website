/**
 * French Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/fr/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "Carte virtuelle SPay Visa Platinum",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "Carte virtuelle SPay Visa Signature",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "Carte virtuelle SPay Visa Infinite",
};

export const FR_CARD: CardContent = {
  hero: {
    title: "Trois cartes Visa virtuelles, émises en quelques minutes",
    lede: "Chaque carte SPay est virtuelle, rechargée depuis votre solde en USDC et prête pour Apple Pay et Google Pay dès sa création. Choisissez le niveau qui correspond à votre façon de dépenser — Platinum, Signature ou Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9,99 $",
      priceNote: "Frais uniques",
      blurb: "La carte virtuelle du quotidien — émise en quelques minutes et qui paie en dollars.",
      features: [
        "Carte Visa virtuelle • Apple Pay et Google Pay",
        "Protection des achats jusqu’à 10 000 $",
        "Garantie prolongée jusqu’à 10 000 $",
        "Protection du prix jusqu’à 2 000 $",
        "Assurance location de voiture (dans le monde entier)",
        "Assistance exclusive 24/7 et portail Avantages Visa",
      ],
      cta: { label: "Choisir Platinum", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19,99 $",
      priceNote: "Frais uniques",
      blurb: "Des avantages voyage et art de vivre en plus de tout ce que couvre Platinum.",
      features: [
        "Tout ce que comprend Platinum",
        "Service Visa Concierge",
        "Visa Luxury Hotel Collection",
        "Accès aux salons d’aéroport (Visa Airport Companion)",
        "Plafonds de dépenses plus élevés",
      ],
      cta: { label: "Choisir Signature", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49,99 $",
      priceNote: "Frais uniques",
      blurb: "Les plafonds de protection les plus élevés et le service prioritaire que propose SPay.",
      features: [
        "Tout ce que comprend Signature",
        "Assurance accidents de voyage jusqu’à 1 500 000 $",
        "Couverture retard et perte de bagages",
        "Conciergerie prioritaire 24/7",
        "Les plafonds de protection les plus élevés (Achats 20 k$ • Garantie 25 k$)",
        "Privilèges exclusifs Infinite",
      ],
      cta: { label: "Choisir Infinite", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Obtenez la vôtre dès aujourd’hui." },

  physical: {
    id: "physical",
    name: "Carte physique",
    price: "99 $",
    priceNote: "Frais uniques",
    blurb:
      "Le même solde SPay, cette fois en plastique — payez sans contact en magasin, retirez au distributeur et gardez une carte sur vous quand votre téléphone n’a plus de batterie.",
    features: [
      "Carte Visa en plastique turquoise",
      "Paiement sans contact en magasin et retraits au distributeur",
      "Acceptée dans le monde entier",
      "Livrée à votre adresse — activez-la à réception",
    ],
    cta: { label: "Bientôt disponible", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "Carte Visa physique SPay turquoise" },
  },
};
