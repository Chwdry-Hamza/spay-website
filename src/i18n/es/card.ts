/**
 * Spanish Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/es/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "Tarjeta virtual SPay Visa Platinum",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "Tarjeta virtual SPay Visa Signature",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "Tarjeta virtual SPay Visa Infinite",
};

export const ES_CARD: CardContent = {
  hero: {
    title: "Tres tarjetas Visa virtuales, emitidas en minutos",
    lede: "Todas las tarjetas de SPay son virtuales, se recargan desde tu saldo en USDC y están listas para Apple Pay y Google Pay en cuanto se crean. Elige el nivel que encaja con tu forma de gastar: Platinum, Signature o Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9,99 $",
      priceNote: "Pago único",
      blurb: "La tarjeta virtual del día a día: emitida en minutos y con pagos en dólares.",
      features: [
        "Tarjeta Visa virtual • Apple Pay y Google Pay",
        "Protección de compra hasta 10.000 $",
        "Garantía extendida hasta 10.000 $",
        "Protección de precio hasta 2.000 $",
        "Seguro de alquiler de coches (en todo el mundo)",
        "Soporte exclusivo 24/7 y Portal de Beneficios Visa",
      ],
      cta: { label: "Obtener Platinum", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19,99 $",
      priceNote: "Pago único",
      blurb: "Ventajas de viaje y estilo de vida, además de todo lo que cubre Platinum.",
      features: [
        "Todo lo de Platinum",
        "Servicio Visa Concierge",
        "Visa Luxury Hotel Collection",
        "Acceso a salas VIP de aeropuerto (Visa Airport Companion)",
        "Límites de gasto más altos",
      ],
      cta: { label: "Obtener Signature", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49,99 $",
      priceNote: "Pago único",
      blurb: "Los límites de protección más altos y el servicio prioritario que ofrece SPay.",
      features: [
        "Todo lo de Signature",
        "Seguro de accidentes de viaje hasta 1.500.000 $",
        "Cobertura por retraso y pérdida de equipaje",
        "Concierge prioritario 24/7",
        "Los límites de protección más altos (Compra 20 mil $ • Garantía 25 mil $)",
        "Privilegios exclusivos de Infinite",
      ],
      cta: { label: "Obtener Infinite", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Consigue la tuya hoy." },

  physical: {
    id: "physical",
    name: "Tarjeta física",
    price: "99 $",
    priceNote: "Pago único",
    blurb:
      "El mismo saldo de SPay, ahora en plástico: paga sin contacto en tiendas, retira en cajeros y lleva una tarjeta encima cuando el móvil se quede sin batería.",
    features: [
      "Tarjeta Visa de plástico en color turquesa",
      "Pago sin contacto en tiendas y retiros en cajeros",
      "Aceptada en todo el mundo",
      "Enviada a tu domicilio: actívala al recibirla",
    ],
    cta: { label: "Muy pronto", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "Tarjeta Visa física de SPay en color turquesa" },
  },
};
