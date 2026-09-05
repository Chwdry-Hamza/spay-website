/**
 * Portuguese Contact page copy.
 *
 * The email address and phone number are contact details, not copy — they stay
 * exactly as they are, and so do their `mailto:` / `tel:` targets.
 */
import type { ContactContent } from "@/lib/site/contact";

export const PT_CONTACT: ContactContent = {
  hero: {
    title: "Respondemos depressa",
    lede: "Fale com o nosso assistente de IA assim que surgir uma dúvida, peça um agente humano quando quiser, ou contacte a equipa por e-mail e telefone. Questões de cartão e fraude têm sempre prioridade.",
    ctaLabel: "Iniciar chat em direto",
    ctaHref: "#channels",
    chat: {
      title: "Assistente SPay",
      status: "Online",
      messages: [
        { from: "customer", text: "O meu cartão foi recusado no pagamento. Porquê?" },
        {
          from: "assistant",
          text: "O seu saldo cobre o valor, mas o comerciante pertence a uma categoria bloqueada. Experimente outro cartão aí — não foi cobrado nada.",
        },
        { from: "customer", text: "Posso falar com alguém?" },
        {
          from: "assistant",
          text: "Vou ligá-lo agora a um agente humano. Tempo médio de espera: menos de 3 minutos.",
        },
      ],
      placeholder: "Escreva a sua mensagem…",
    },
  },

  details: {
    title: "Contacte a equipa diretamente",
    cards: [
      {
        eyebrow: "Apoio por e-mail",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "Para questões de conta, cartão e transações. Resposta em 24 horas nos dias úteis.",
      },
      {
        eyebrow: "Apoio telefónico",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Fale com um agente para questões urgentes de cartão ou fraude. Disponível durante o horário de apoio.",
      },
      {
        eyebrow: "Horário de apoio",
        value: "Seg – Sex",
        href: "",
        body: "Das 9:00 às 18:00 (GST). Encerrado nos feriados dos EAU.",
      },
    ],
  },

  marquee: { label: "Peça já o seu." },

  channels: {
    title: "Apoio dentro da app",
    intro:
      "O chat em direto está no canto inferior de todos os ecrãs da app SPay. Comece pelo assistente e passe para uma pessoa sempre que precisar.",
    items: [
      {
        title: "Assistente de IA",
        meta: "Imediato, 24/7",
        body: "Pergunte sobre saldos, limites, comissões ou um pagamento recusado. O assistente responde dentro da app e pode guiá-lo passo a passo até à solução.",
      },
      {
        title: "Falar com uma pessoa",
        meta: "Seg – Sex, horário de apoio",
        body: "O assistente não resolveu? Peça um agente na mesma janela de chat. O seu histórico transita, por isso não precisa de repetir nada.",
      },
      {
        title: "Questões urgentes de cartão",
        meta: "Bloqueie primeiro, depois ligue",
        body: "Bloqueie o cartão na app de imediato e depois ligue para +971 55 947 6972 para revermos as transações consigo.",
      },
    ],
  },
};
