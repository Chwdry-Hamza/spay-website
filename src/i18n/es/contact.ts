/**
 * Spanish Contact page copy.
 *
 * The email address and phone number are contact details, not copy — they stay
 * exactly as they are, and so do their `mailto:` / `tel:` targets.
 */
import type { ContactContent } from "@/lib/site/contact";

export const ES_CONTACT: ContactContent = {
  hero: {
    title: "Respondemos rápido",
    lede: "Chatea con nuestro asistente de IA en cuanto te surja una duda, pide hablar con una persona cuando quieras o contacta con el equipo por correo y teléfono. Los casos de tarjeta y fraude tienen siempre prioridad.",
    ctaLabel: "Iniciar chat en vivo",
    ctaHref: "#channels",
    chat: {
      title: "Asistente de SPay",
      status: "En línea",
      messages: [
        { from: "customer", text: "Me han rechazado la tarjeta al pagar. ¿Por qué?" },
        {
          from: "assistant",
          text: "Tu saldo cubre el importe, pero el comercio pertenece a una categoría bloqueada. Prueba con otra tarjeta ahí: no se ha cobrado nada.",
        },
        { from: "customer", text: "¿Puedo hablar con alguien?" },
        {
          from: "assistant",
          text: "Te paso con una persona del equipo. Espera media: menos de 3 minutos.",
        },
      ],
      placeholder: "Escribe tu mensaje…",
    },
  },

  details: {
    title: "Contacta directamente con el equipo",
    cards: [
      {
        eyebrow: "Soporte por correo",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "Para temas de cuenta, tarjeta y transacciones. Respuesta en 24 horas en días laborables.",
      },
      {
        eyebrow: "Soporte telefónico",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Habla con una persona del equipo para casos urgentes de tarjeta o fraude. Disponible en horario de soporte.",
      },
      {
        eyebrow: "Horario de soporte",
        value: "Lun – Vie",
        href: "",
        body: "De 9:00 a 18:00 (GST). Cerrado los festivos de los EAU.",
      },
    ],
  },

  marquee: { label: "Consigue la tuya hoy." },

  channels: {
    title: "Soporte dentro de la app",
    intro:
      "El chat en vivo está en la esquina inferior de cada pantalla de la app de SPay. Empieza con el asistente y pasa a una persona cuando lo necesites.",
    items: [
      {
        title: "Asistente de IA",
        meta: "Al instante, 24/7",
        body: "Pregunta por saldos, límites, comisiones o un pago rechazado. El asistente responde dentro de la app y puede guiarte paso a paso hasta la solución.",
      },
      {
        title: "Habla con una persona",
        meta: "Lun – Vie, horario de soporte",
        body: "¿El asistente no lo resolvió? Pide un agente en la misma ventana de chat. Tu historial se mantiene, así que no hace falta repetir nada.",
      },
      {
        title: "Casos urgentes de tarjeta",
        meta: "Primero bloquea, después llama",
        body: "Bloquea la tarjeta en la app de inmediato y después llama al +971 55 947 6972 para revisar las transacciones contigo.",
      },
    ],
  },
};
