/**
 * French Contact page copy.
 *
 * The email address and phone number are contact details, not copy — they stay
 * exactly as they are, and so do their `mailto:` / `tel:` targets.
 */
import type { ContactContent } from "@/lib/site/contact";

export const FR_CONTACT: ContactContent = {
  hero: {
    title: "Nous répondons vite",
    lede: "Discutez avec notre assistant IA dès qu’une question surgit, demandez un conseiller humain quand vous le souhaitez, ou contactez l’équipe par e-mail et par téléphone. Les sujets liés à la carte et à la fraude sont toujours prioritaires.",
    ctaLabel: "Démarrer le chat en direct",
    ctaHref: "#channels",
    chat: {
      title: "Assistant SPay",
      status: "En ligne",
      messages: [
        { from: "customer", text: "Ma carte a été refusée au paiement. Pourquoi ?" },
        {
          from: "assistant",
          text: "Votre solde couvre le montant, mais le commerçant appartient à une catégorie bloquée. Essayez une autre carte sur place — rien n’a été débité.",
        },
        { from: "customer", text: "Puis-je parler à quelqu’un ?" },
        {
          from: "assistant",
          text: "Je vous mets en relation avec un conseiller. Temps d’attente moyen : moins de 3 minutes.",
        },
      ],
      placeholder: "Écrivez votre message…",
    },
  },

  details: {
    title: "Contactez l’équipe directement",
    cards: [
      {
        eyebrow: "Assistance par e-mail",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "Pour les questions de compte, de carte et de transactions. Réponse sous 24 heures les jours ouvrés.",
      },
      {
        eyebrow: "Assistance téléphonique",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Parlez à un conseiller pour les urgences liées à la carte ou à la fraude. Disponible pendant les heures d’assistance.",
      },
      {
        eyebrow: "Heures d’assistance",
        value: "Lun – Ven",
        href: "",
        body: "De 9h00 à 18h00 (GST). Fermé les jours fériés aux Émirats arabes unis.",
      },
    ],
  },

  marquee: { label: "Obtenez la vôtre dès aujourd’hui." },

  channels: {
    title: "L’assistance dans l’app",
    intro:
      "Le chat en direct se trouve dans le coin inférieur de chaque écran de l’app SPay. Commencez avec l’assistant et passez à une personne quand vous en avez besoin.",
    items: [
      {
        title: "Assistant IA",
        meta: "Immédiat, 24/7",
        body: "Posez vos questions sur les soldes, les plafonds, les frais ou un paiement refusé. L’assistant répond dans l’app et peut vous guider pas à pas jusqu’à la solution.",
      },
      {
        title: "Parler à une personne",
        meta: "Lun – Ven, heures d’assistance",
        body: "L’assistant n’a pas résolu votre problème ? Demandez un conseiller dans la même fenêtre de chat. Votre historique est conservé, vous n’avez rien à répéter.",
      },
      {
        title: "Urgences liées à la carte",
        meta: "Bloquez d’abord, appelez ensuite",
        body: "Bloquez immédiatement la carte dans l’app, puis appelez le +971 55 947 6972 pour que nous examinions les opérations avec vous.",
      },
    ],
  },
};
