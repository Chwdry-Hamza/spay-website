/**
 * Portuguese About page copy. Typed as the full `AboutContent`, so a new
 * English field cannot ship untranslated — the build fails instead.
 */
import type { AboutContent } from "@/lib/site/about";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export const PT_ABOUT: AboutContent = {
  hero: {
    title: "O dinheiro digital devia ser tão fácil de usar como o dinheiro vivo",
    lede: "A SPay nasceu de uma ideia simples: o dinheiro digital devia ser tão fácil de usar como o dinheiro vivo — e mais seguro. Somos uma carteira de criptomoedas segura e fácil de usar, que torna os pagamentos com stablecoins simples e acessíveis a todos, quer esteja a enviar dinheiro à família, a pagar online ou a comprar na sua loja preferida.",
    appStore: { eyebrow: "Descarregar na", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Disponível no", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "Mulher com um cartão Visa da SPay enquanto usa a app SPay",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Globo terrestre com rotas de pagamento em órbita",
    },
    title: "Um novo padrão de banca sem fronteiras",
    paragraphs: [
      "Os cartões tradicionais estão ligados a um banco, e um banco está ligado a um país. Isso funciona até mudar de casa, viajar ou receber um pagamento de outra jurisdição — e então começa a papelada.",
      "O cartão SPay não está ligado a nada disso. O seu saldo existe como stablecoins. O carregamento vem da sua própria carteira, na blockchain. O cartão funciona da mesma forma em todos os países que aceitam Visa e Mastercard. Não há balcão a visitar, conta local a abrir nem morada a comprovar.",
      "É propositadamente simples: guarde valor em USDT ou USDC, gaste-o na moeda que o terminal à sua frente pedir e veja cada movimento na app no momento exato em que acontece.",
    ],
  },

  stablecoin: {
    title: "Porque é que o seu saldo é uma stablecoin",
    paragraphs: [
      "O saldo da SPay é mantido em USDT e USDC — stablecoins indexadas ao dólar americano, pelo que 1 USDT ou 1 USDC procura valer sempre 1 dólar. Assim tem o melhor dos dois mundos: a rapidez, o baixo custo e o alcance sem fronteiras dos pagamentos em blockchain, sem as fortes oscilações de preço de moedas como a Bitcoin.",
      "O seu dinheiro vale o mesmo quando o gasta e quando o recebeu. Sem acompanhar gráficos nem tentar acertar no momento certo do mercado — apenas dólares digitais que se movem em segundos, funcionam além-fronteiras e estão sempre prontos a usar no seu cartão SPay.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Discos dourados de stablecoin" },
  },

  marquee: { label: "Peça já o seu." },

  security: {
    title: "Segurança em camadas, sob o seu controlo",
    intro:
      "A proteção começa no momento em que desbloqueia a app e vai até ao alerta que recebe quando um novo dispositivo inicia sessão.",
    image: {
      src: "/site/layered-security.png",
      alt: "Escudo e cadeado a representar a segurança em camadas da conta",
    },
  },
};
