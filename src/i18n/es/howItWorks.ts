/**
 * Spanish "How it works" copy. The journey step numbers ("01"…"06") are the
 * design's own numerals and stay as they are.
 */
import type { HowItWorksContent } from "@/lib/site/howItWorks";

export const ES_HOW_IT_WORKS: HowItWorksContent = {
  hero: {
    title: "Cómo funciona la tarjeta SPay",
    lede: "Del registro al primer pago, de principio a fin, en unos cinco minutos. Aquí tienes cada paso: desde crear la cuenta hasta el momento en que una compra aparece en tu historial.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "Mano sosteniendo un móvil con la app de SPay",
    },
    steps: [
      {
        title: "Crea tu cuenta",
        body: "Introduce un correo electrónico, elige una contraseña y confirma el correo. Esa es la cuenta: sin visitas a una sucursal y sin papeleo.",
      },
      {
        title: "Recarga con cripto",
        body: "Abre Depositar, elige USDT, USDC, ETH o TRX y selecciona Tron o Ethereum para ver tu dirección. Envía desde cualquier monedero o exchange y el saldo llega en minutos.",
      },
      {
        title: "Compra tu tarjeta virtual",
        body: "Elige Platinum, Signature o Infinite y paga la tarifa única. El número de tarjeta, la fecha de caducidad y el CVV aparecen en la app, listos para Apple Pay o Google Pay.",
      },
      {
        title: "Gasta, gestiona y transfiere",
        body: "Paga sin contacto en tiendas, compra en línea y cubre tus suscripciones en dólares. Cada autorización muestra el comercio, el importe local y el coste exacto tras la conversión.",
      },
    ],
  },

  journey: {
    title: "Del registro al primer pago",
    steps: [
      { n: "01", title: "Cuenta creada", duration: "30 s", body: "Correo, contraseña y confirmación" },
      { n: "02", title: "Identidad verificada", duration: "2–5 min", body: "KYC en la app con tu documento" },
      { n: "03", title: "Saldo recargado", duration: "1–10 min", body: "Envía cripto desde tu monedero" },
      { n: "04", title: "Tarjeta comprada", duration: "1 min", body: "Elige un plan y paga la tarifa única" },
      { n: "05", title: "Añadida al monedero", duration: "30 s", body: "Apple Pay o Google Pay" },
      { n: "06", title: "Primer pago", duration: "Al instante", body: "Paga sin contacto o pégala al finalizar la compra" },
    ],
  },

  marquee: { label: "Consigue la tuya hoy." },

  verification: {
    title: "Verificación sin complicaciones",
    cards: [
      {
        title: "Datos básicos",
        body: "Solo lo esencial: tu nombre, tu correo y tu teléfono. Sin cuenta bancaria, sin justificante de domicilio y sin papeleo. Entras en menos de un minuto.",
      },
      {
        title: "Comprobación rápida de identidad",
        body: "Fotografía tu pasaporte o documento de identidad y hazte un selfie. La verificación es automática y suele resolverse en minutos, no en días.",
      },
      {
        title: "¡Tu tarjeta está lista!",
        body: "Una vez aprobada, tu tarjeta virtual aparece al instante: recárgala desde tu saldo y empieza a gastar de inmediato. Puedes pedir la tarjeta física cuando quieras.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "Pantalla de verificación KYC de SPay en un móvil",
    },
  },
};
