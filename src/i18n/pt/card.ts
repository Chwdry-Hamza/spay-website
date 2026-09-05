/**
 * Portuguese Card page copy.
 *
 * The `id` of each tier stays in English: it is the section's anchor
 * (`/pt/card/#platinum`), not copy, and changing it would break links.
 */
import type { CardContent } from "@/lib/site/card";
import { APP_STORE_URL } from "@/lib/appStore";
import type { SiteImage } from "@/lib/site/merge";

const PLATINUM: SiteImage = {
  src: "/site/card-platinum-sm.png",
  alt: "Cartão virtual SPay Visa Platinum",
};
const SIGNATURE: SiteImage = {
  src: "/site/card-signature-sm.png",
  alt: "Cartão virtual SPay Visa Signature",
};
const INFINITE: SiteImage = {
  src: "/site/card-infinite-sm.png",
  alt: "Cartão virtual SPay Visa Infinite",
};

export const PT_CARD: CardContent = {
  hero: {
    title: "Três cartões Visa virtuais, emitidos em minutos",
    lede: "Todos os cartões SPay são virtuais, carregados a partir do seu saldo em USDC e prontos para Apple Pay e Google Pay assim que são criados. Escolha o nível que combina com a forma como gasta — Platinum, Signature ou Infinite.",
    fan: { left: PLATINUM, right: INFINITE, front: SIGNATURE },
  },

  tiers: [
    {
      id: "platinum",
      name: "Platinum",
      price: "9,99 $",
      priceNote: "Taxa única",
      blurb: "O cartão virtual do dia a dia — emitido em minutos e a pagar em dólares.",
      features: [
        "Cartão Visa virtual • Apple Pay e Google Pay",
        "Proteção de compra até 10 000 $",
        "Garantia alargada até 10 000 $",
        "Proteção de preço até 2 000 $",
        "Seguro de aluguer de automóvel (em todo o mundo)",
        "Apoio exclusivo 24/7 e Portal de Benefícios Visa",
      ],
      cta: { label: "Obter o Platinum", href: APP_STORE_URL },
      image: PLATINUM,
    },
    {
      id: "signature",
      name: "Signature",
      price: "19,99 $",
      priceNote: "Taxa única",
      blurb: "Benefícios de viagem e estilo de vida, além de tudo o que o Platinum cobre.",
      features: [
        "Tudo o que o Platinum inclui",
        "Serviço Visa Concierge",
        "Visa Luxury Hotel Collection",
        "Acesso a lounges de aeroporto (Visa Airport Companion)",
        "Limites de gastos mais elevados",
      ],
      cta: { label: "Obter o Signature", href: APP_STORE_URL },
      image: SIGNATURE,
    },
    {
      id: "infinite",
      name: "Infinite",
      price: "49,99 $",
      priceNote: "Taxa única",
      blurb: "Os limites de proteção mais elevados e o serviço prioritário que a SPay oferece.",
      features: [
        "Tudo o que o Signature inclui",
        "Seguro de acidentes pessoais em viagem até 1 500 000 $",
        "Cobertura por atraso e extravio de bagagem",
        "Concierge prioritário 24/7",
        "Os limites de proteção mais elevados (Compra 20 mil $ • Garantia 25 mil $)",
        "Privilégios exclusivos Infinite",
      ],
      cta: { label: "Obter o Infinite", href: APP_STORE_URL },
      image: INFINITE,
    },
  ],

  marquee: { label: "Peça já o seu." },

  physical: {
    id: "physical",
    name: "Cartão físico",
    price: "99 $",
    priceNote: "Taxa única",
    blurb:
      "O mesmo saldo SPay, agora em plástico — pague sem contacto em lojas, levante em multibanco e tenha um cartão consigo quando o telemóvel ficar sem bateria.",
    features: [
      "Cartão Visa de plástico em turquesa",
      "Pagamentos sem contacto em lojas e levantamentos em multibanco",
      "Aceite em todo o mundo",
      "Entregue na sua morada — ative quando chegar",
    ],
    cta: { label: "Brevemente", href: "" },
    image: { src: "/site/card-physical-sm.png", alt: "Cartão Visa físico da SPay em turquesa" },
  },
};
