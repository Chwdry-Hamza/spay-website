/**
 * Portuguese homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "Cartão Visa virtual • Apple Pay e Google Pay",
    "Proteção de compra até 10 000 $",
    "Garantia alargada até 10 000 $",
    "Proteção de preço até 2 000 $",
    "Seguro de aluguer de automóvel (em todo o mundo)",
    "Apoio exclusivo 24/7 e Portal de Benefícios Visa",
  ],
  signature: [
    "Tudo o que o Platinum inclui",
    "Serviço Visa Concierge",
    "Visa Luxury Hotel Collection",
    "Acesso a lounges de aeroporto (Visa Airport Companion)",
    "Limites de gastos mais elevados",
  ],
  infinite: [
    "Tudo o que o Signature inclui",
    "Seguro de acidentes pessoais em viagem até 1 500 000 $",
    "Cobertura por atraso e extravio de bagagem",
    "Concierge prioritário 24/7",
    "Os limites de proteção mais elevados (Compra 20 mil $ • Garantia 25 mil $)",
    "Privilégios exclusivos Infinite",
  ],
};

export const PT_HOME: HomeContent = {
  hero: {
    title: "Carteira de criptomoedas e um cartão Visa em dólares",
    lede: "Guarde USDT, USDC, ETH e TRX nas redes Tron e Ethereum. As suas criptomoedas alimentam um cartão Visa virtual em dólares que cria na app e usa no próprio dia — em qualquer lugar onde a Visa seja aceite.",
    primary: { label: "Obter a app SPay", href: APP_STORE_URL },
    secondary: { label: "Comparar planos de cartão", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "Cartão Visa da SPay" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "Ecrã de boas-vindas da app SPay" },
    title: "Como funciona a SPay",
    steps: [
      {
        n: "01",
        title: "Crie a sua carteira",
        body: "Descarregue a app, desbloqueie-a com Face ID ou um código de 6 dígitos e conclua a verificação.",
      },
      {
        n: "02",
        title: "Deposite criptomoedas",
        body: "Escolha um token e uma rede e, depois, leia ou copie o seu endereço. São suportados USDT, USDC, ETH e TRX.",
      },
      {
        n: "03",
        title: "Crie e carregue o seu cartão",
        body: "Emita um cartão Visa virtual na app e carregue-o a partir do seu saldo em USDC. O saldo fica disponível em minutos.",
      },
      {
        n: "04",
        title: "Pague em dólares",
        body: "Pague online, em lojas ou através do Apple Pay. Os comerciantes são liquidados em dólares, tal como em qualquer outro cartão.",
      },
    ],
  },

  wallet: {
    title: "Uma carteira multimoeda, pronta desde o primeiro dia",
    lede: "Cada conta abre com carteiras para as stablecoins e moedas mais usadas em duas redes — cada uma com o seu endereço, o seu saldo e o valor em dólares em tempo real.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "Carteira multimoeda da SPay nas redes Ethereum e Tron",
    },
    tiles: [
      { n: "01", title: "Código QR para ler" },
      { n: "02", title: "Área de transferência que se limpa sozinha" },
      { n: "03", title: "Indicações sobre a rede" },
      { n: "04", title: "Levantamentos para carteira própria" },
    ],
  },

  virtualCard: {
    title: "Um cartão Visa virtual num instante",
    lede: "Crie um cartão Visa virtual dentro da app e comece a pagar de imediato. Carregue-o a partir do seu saldo em USDC e pague em dólares onde quer que a Visa seja aceite — online, em lojas e na carteira do telemóvel.",
    image: { src: "/site/spay-visa-cards.png", alt: "Cartões Visa virtuais da SPay" },
  },

  plans: {
    title: "Escolha o cartão certo para si",
    tiers: [
      {
        name: "Platinum",
        price: "9,99 $",
        priceNote: "Taxa única",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Começar",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19,99 $",
        priceNote: "Taxa única",
        badge: "POPULAR",
        features: TICKS.signature,
        ctaLabel: "Começar",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49,99 $",
        priceNote: "Taxa única",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Começar",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Envie dinheiro para qualquer utilizador SPay",
    lede: "Transfira para amigos e família na SPay em segundos. O dinheiro chega diretamente ao cartão deles, pronto a usar.",
    image: { src: "/site/spay-send-money.png", alt: "Envio de dinheiro para outro utilizador SPay" },
    steps: [
      {
        n: "01",
        title: "Encontre pessoas por UID ou e-mail",
        body: "Antes de confirmar, é mostrada uma correspondência verificada.",
      },
      {
        n: "02",
        title: "Destinatários recentes",
        body: "Repita uma transferência anterior com um só toque.",
      },
    ],
  },

  rewards: {
    title: "Ganhe enquanto gasta e converta em cashback",
    lede: "Os pontos acumulam-se automaticamente à medida que usa a app e convertem-se em USDC real creditado no saldo do seu cartão.",
    points: [
      {
        n: "01",
        body: "Cada compra com o cartão dá pontos — até 1,5% de retorno, consoante o seu nível.",
      },
      {
        n: "02",
        body: "Bónus únicos por aderir com um código de referência, concluir a verificação e receber o primeiro cartão.",
      },
      {
        n: "03",
        body: "200 pontos convertem-se em 1 USDC, resgatáveis a partir de 1 000 pontos em escalões flexíveis.",
      },
      {
        n: "04",
        body: "Convide um amigo e ganhe em cada etapa que ele alcançar, com um progresso que pode acompanhar.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "Ecrã de pontos da app SPay" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "Ecrã de definições da app SPay num telemóvel" },
    title: "Pessoal, adaptada a si e fácil de usar",
    lede: "A SPay adapta-se ao seu idioma, ao seu aspeto e à sua moeda — com ajuda sempre a um toque de distância.",
    languages: [
      { label: "English", note: "" },
      { label: "العربية", note: "RTL" },
      { label: "اردو", note: "RTL" },
      { label: "Türkçe", note: "" },
      { label: "Deutsch", note: "" },
      { label: "Español", note: "" },
      { label: "Polski", note: "" },
      { label: "Português", note: "" },
      { label: "Français", note: "" },
    ],
    tiles: [
      {
        title: "131 moedas de visualização",
        body: "Veja os seus saldos em AED, USD, EUR, GBP, PKR, TRY e muitas outras, com câmbios em tempo real.",
      },
      {
        title: "Temas e cores de destaque",
        body: "Claro, escuro ou o do sistema, mais cinco cores de destaque que mudam a app na hora.",
      },
      {
        title: "Apoio dentro da app",
        body: "Um assistente de IA responde de imediato e passa a conversa a uma pessoa quando é preciso, com capturas de ecrã anexadas no próprio chat.",
      },
      {
        title: "Extratos eletrónicos",
        body: "Gere um PDF de qualquer período com entradas, saídas e saldo, e descarregue-o ou envie-o por e-mail.",
      },
    ],
  },

  faqs: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Como se carrega o cartão SPay?",
        a: "Deposita criptomoedas na sua carteira SPay e depois carrega o cartão a partir do saldo em USDC, com valores rápidos entre 10 $ e 500 $. O saldo fica disponível em minutos e o cartão paga em dólares americanos.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Que criptomoedas posso guardar na SPay?",
        a: "USDT na rede Tron (TRC-20) e Ethereum (ERC-20), USDC na rede Ethereum (ERC-20), além de ETH e TRX nativos. Cada combinação de token e rede tem o seu próprio endereço de depósito, saldo e valor em dólares em tempo real.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Existe um cartão SPay físico?",
        a: "Está a caminho um cartão Visa de plástico em turquesa, com pagamentos sem contacto em lojas e levantamentos em multibanco. Hoje o cartão é virtual: criado na app, utilizável de imediato online e em lojas, e pode ser adicionado à Apple Wallet.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "A SPay funciona com Apple Pay e Google Pay?",
        a: "O Apple Pay já está disponível — adicione o seu cartão à Apple Wallet a partir do ecrã do cartão e pague sem contacto. O suporte para Google Pay está em desenvolvimento.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Como funciona o cashback?",
        a: "Ganha pontos em cada compra com o cartão, a um ritmo que depende do seu nível. Os pontos convertem-se em cashback em USDC à razão de 200 pontos por dólar, podem ser resgatados a partir de 1 000 pontos e são creditados diretamente no saldo do cartão.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Quais são os limites de gastos?",
        a: "Cada nível tem um limite mensal, diário e por transação, e é você que define o seu próprio limite entre 0 $ e esse máximo. Os limites reiniciam-se automaticamente. O Platinum vai até 20 000 $ por mês, o Signature até 50 000 $ e o Infinite até 100 000 $.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Como levanto criptomoedas para a minha própria carteira?",
        a: "Os levantamentos são enviados como USDC na rede Base para qualquer carteira sob a sua guarda. Confirme que a carteira de destino suporta a rede Base antes de enviar, porque fundos enviados na rede errada não podem ser recuperados.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Posso usar a SPay nos EAU?",
        a: "O cartão liquida os comerciantes em dólares americanos através da rede Visa, pelo que os comerciantes nunca recebem criptomoedas. Os saldos podem ser apresentados em dirhams e a app está totalmente traduzida para árabe, com suporte da direita para a esquerda. A elegibilidade depende da verificação — consulte a cobertura atual por país em ",
        linkLabel: "Contacto",
        linkHref: "/pt/contact/",
        textAfter: ".",
      },
    ],
  },

  blogs: {
    title: "Blog",
    allLabel: "Todos os artigos",
    allHref: "/pt/blog/",
    readMoreLabel: "Ler mais",
  },
};
