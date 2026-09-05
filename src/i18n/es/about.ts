/**
 * Spanish About page copy. Typed as the full `AboutContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { AboutContent } from "@/lib/site/about";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export const ES_ABOUT: AboutContent = {
  hero: {
    title: "El dinero digital debería ser tan fácil de usar como el efectivo",
    lede: "SPay nació de una idea sencilla: el dinero digital debería ser tan fácil de usar como el efectivo, y más seguro. Somos un monedero cripto seguro y fácil de usar que hace que los pagos con stablecoins sean simples y accesibles para todos, ya sea para enviar dinero a tu familia, pagar en línea o comprar en tu tienda favorita.",
    appStore: { eyebrow: "Descárgalo en", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Disponible en", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "Mujer con una tarjeta Visa de SPay mientras usa la app de SPay",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Globo terráqueo con rutas de pago en órbita",
    },
    title: "Un nuevo estándar en banca sin fronteras",
    paragraphs: [
      "Las tarjetas tradicionales están ligadas a un banco, y un banco está ligado a un país. Eso funciona hasta que te mudas, viajas o te paga alguien desde otra jurisdicción; entonces empieza el papeleo.",
      "La tarjeta SPay no está ligada a nada de eso. Tu saldo vive como stablecoins. Tu recarga sale de tu propio monedero, en la cadena. Tu tarjeta funciona igual en cada país que acepta Visa y Mastercard. No hay sucursal que visitar, ni cuenta local que abrir, ni domicilio que demostrar.",
      "Es deliberadamente sencillo: guarda valor en USDT o USDC, gástalo en la moneda que te pida el terminal que tienes delante y consulta cada movimiento en la app en el mismo instante en que ocurre.",
    ],
  },

  stablecoin: {
    title: "Por qué tu saldo es una stablecoin",
    paragraphs: [
      "Tu saldo de SPay se guarda en USDT y USDC, stablecoins vinculadas al dólar estadounidense, de modo que 1 USDT o 1 USDC siempre aspira a valer 1 dólar. Así obtienes lo mejor de ambos mundos: la velocidad, el bajo coste y el alcance sin fronteras de los pagos en blockchain, sin los fuertes vaivenes de precio de monedas como Bitcoin.",
      "Tu dinero vale lo mismo cuando lo gastas que cuando lo recibiste. Sin mirar gráficos ni acertar con el momento del mercado: solo dólares digitales que se mueven en segundos, funcionan más allá de las fronteras y están listos para gastar en tu tarjeta SPay en cualquier momento.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Discos dorados de stablecoin" },
  },

  marquee: { label: "Consigue la tuya hoy." },

  security: {
    title: "Seguridad por capas, bajo tu control",
    intro:
      "La protección va desde el momento en que desbloqueas la app hasta el aviso que recibes cuando un dispositivo nuevo inicia sesión.",
    image: {
      src: "/site/layered-security.png",
      alt: "Escudo y candado que representan la seguridad por capas de la cuenta",
    },
  },
};
