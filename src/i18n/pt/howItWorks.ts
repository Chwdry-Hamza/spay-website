/**
 * Portuguese "How it works" copy. The journey step numbers ("01"…"06") are the
 * design's own numerals and stay as they are.
 */
import type { HowItWorksContent } from "@/lib/site/howItWorks";

export const PT_HOW_IT_WORKS: HowItWorksContent = {
  hero: {
    title: "Como funciona o cartão SPay",
    lede: "Do registo ao primeiro pagamento, de início ao fim, em cerca de cinco minutos. Eis cada passo — desde criar a conta até ao momento em que uma compra aparece no seu histórico.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "Mão a segurar um telemóvel com a app SPay aberta",
    },
    steps: [
      {
        title: "Crie a sua conta",
        body: "Introduza um endereço de e-mail, escolha uma palavra-passe e confirme o e-mail. A conta é isto — sem ir a um balcão e sem papelada.",
      },
      {
        title: "Carregue com criptomoedas",
        body: "Abra Depositar, escolha USDT, USDC, ETH ou TRX e selecione Tron ou Ethereum para ver o seu endereço. Envie a partir de qualquer carteira ou exchange e o saldo chega em minutos.",
      },
      {
        title: "Compre o seu cartão virtual",
        body: "Escolha Platinum, Signature ou Infinite e pague a taxa única. O número do cartão, a data de validade e o CVV aparecem na app, prontos para Apple Pay ou Google Pay.",
      },
      {
        title: "Gaste, faça a gestão e transfira",
        body: "Pague sem contacto em lojas, compre online e cubra subscrições em dólares. Cada autorização mostra o comerciante, o valor local e o custo exato após a conversão.",
      },
    ],
  },

  journey: {
    title: "Do registo ao primeiro pagamento",
    steps: [
      { n: "01", title: "Conta criada", duration: "30 s", body: "E-mail, palavra-passe e confirmação" },
      { n: "02", title: "Identidade verificada", duration: "2–5 min", body: "KYC na app com o seu documento" },
      { n: "03", title: "Saldo carregado", duration: "1–10 min", body: "Envie cripto da sua carteira" },
      { n: "04", title: "Cartão comprado", duration: "1 min", body: "Escolha um plano e pague a taxa única" },
      { n: "05", title: "Adicionado à carteira", duration: "30 s", body: "Apple Pay ou Google Pay" },
      { n: "06", title: "Primeiro pagamento", duration: "Imediato", body: "Pague sem contacto ou cole os dados na compra" },
    ],
  },

  marquee: { label: "Peça já o seu." },

  verification: {
    title: "Verificação sem complicações",
    cards: [
      {
        title: "Dados básicos",
        body: "Apenas o essencial — o seu nome, e-mail e número de telemóvel. Sem conta bancária, sem comprovativo de morada e sem papelada. Fica dentro em menos de um minuto.",
      },
      {
        title: "Verificação rápida de identidade",
        body: "Fotografe o seu passaporte ou cartão de cidadão e tire uma selfie. A verificação é automática e costuma ficar concluída em minutos, não em dias.",
      },
      {
        title: "O seu cartão está pronto!",
        body: "Depois de aprovado, o cartão virtual aparece de imediato — carregue-o a partir do seu saldo e comece já a gastar. Pode encomendar o cartão físico quando quiser.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "Ecrã de verificação KYC da SPay num telemóvel",
    },
  },
};
