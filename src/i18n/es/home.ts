/**
 * Spanish homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "Tarjeta Visa virtual • Apple Pay y Google Pay",
    "Protección de compra hasta 10.000 $",
    "Garantía extendida hasta 10.000 $",
    "Protección de precio hasta 2.000 $",
    "Seguro de alquiler de coches (en todo el mundo)",
    "Soporte exclusivo 24/7 y Portal de Beneficios Visa",
  ],
  signature: [
    "Todo lo de Platinum",
    "Servicio Visa Concierge",
    "Visa Luxury Hotel Collection",
    "Acceso a salas VIP de aeropuerto (Visa Airport Companion)",
    "Límites de gasto más altos",
  ],
  infinite: [
    "Todo lo de Signature",
    "Seguro de accidentes de viaje hasta 1.500.000 $",
    "Cobertura por retraso y pérdida de equipaje",
    "Concierge prioritario 24/7",
    "Los límites de protección más altos (Compra 20 mil $ • Garantía 25 mil $)",
    "Privilegios exclusivos de Infinite",
  ],
};

export const ES_HOME: HomeContent = {
  hero: {
    title: "Monedero cripto y una tarjeta Visa en dólares",
    lede: "Guarda USDT, USDC, ETH y TRX en Tron y Ethereum. Tu cripto financia una tarjeta Visa virtual en dólares que puedes crear en la app y usar el mismo día, allí donde se acepte Visa.",
    primary: { label: "Descargar la app de SPay", href: APP_STORE_URL },
    secondary: { label: "Comparar planes de tarjeta", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "Tarjeta Visa de SPay" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "Pantalla de bienvenida de la app de SPay" },
    title: "Cómo funciona SPay",
    steps: [
      {
        n: "01",
        title: "Crea tu monedero",
        body: "Descarga la app, desbloquéala con Face ID o un código de 6 dígitos y completa la verificación.",
      },
      {
        n: "02",
        title: "Deposita cripto",
        body: "Elige un token y una red, y después escanea o copia tu dirección. Se admiten USDT, USDC, ETH y TRX.",
      },
      {
        n: "03",
        title: "Crea y recarga tu tarjeta",
        body: "Emite una tarjeta Visa virtual en la app y recárgala desde tu saldo en USDC. El saldo se actualiza en minutos.",
      },
      {
        n: "04",
        title: "Paga en dólares",
        body: "Paga en línea, en tiendas o con Apple Pay. Los comercios se liquidan en dólares, como con cualquier otra tarjeta.",
      },
    ],
  },

  wallet: {
    title: "Un monedero multidivisa, listo desde el primer día",
    lede: "Cada cuenta se abre con monederos para las stablecoins y monedas más usadas en dos redes, cada uno con su propia dirección, su saldo y su valor en dólares en tiempo real.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "Monedero multidivisa de SPay en Ethereum y Tron",
    },
    tiles: [
      { n: "01", title: "Código QR escaneable" },
      { n: "02", title: "Portapapeles que se borra solo" },
      { n: "03", title: "Aviso de red" },
      { n: "04", title: "Retiros en autocustodia" },
    ],
  },

  virtualCard: {
    title: "Una tarjeta Visa virtual al instante",
    lede: "Crea una tarjeta Visa virtual dentro de la app y empieza a pagar de inmediato. Recárgala desde tu saldo en USDC y paga en dólares allí donde se acepte Visa: en línea, en tiendas y en tu monedero móvil.",
    image: { src: "/site/spay-visa-cards.png", alt: "Tarjetas Visa virtuales de SPay" },
  },

  plans: {
    title: "Elige la tarjeta que encaja contigo",
    tiers: [
      {
        name: "Platinum",
        price: "9,99 $",
        priceNote: "Pago único",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Empezar",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19,99 $",
        priceNote: "Pago único",
        badge: "POPULAR",
        features: TICKS.signature,
        ctaLabel: "Empezar",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49,99 $",
        priceNote: "Pago único",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Empezar",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Envía dinero a cualquier usuario de SPay",
    lede: "Envía dinero a tus amigos y a tu familia en SPay en segundos. Llega directamente a su tarjeta, listo para gastar.",
    image: { src: "/site/spay-send-money.png", alt: "Envío de dinero a otro usuario de SPay" },
    steps: [
      {
        n: "01",
        title: "Encuentra personas por UID o correo",
        body: "Antes de confirmar se muestra una coincidencia verificada.",
      },
      {
        n: "02",
        title: "Destinatarios recientes",
        body: "Repite una transferencia anterior con un solo toque.",
      },
    ],
  },

  rewards: {
    title: "Gana mientras gastas y canjéalo por cashback",
    lede: "Los puntos se acumulan solos mientras usas la app y se convierten en USDC real acreditado en el saldo de tu tarjeta.",
    points: [
      {
        n: "01",
        body: "Cada compra con la tarjeta suma puntos: hasta un 1,5 % de devolución según tu nivel.",
      },
      {
        n: "02",
        body: "Bonos únicos por registrarte con un código de referido, completar la verificación y conseguir tu primera tarjeta.",
      },
      {
        n: "03",
        body: "200 puntos equivalen a 1 USDC, canjeables a partir de 1.000 puntos en tramos flexibles.",
      },
      {
        n: "04",
        body: "Invita a un amigo y gana en cada hito que alcance, con un progreso que puedes seguir.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "Pantalla de puntos de la app de SPay" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "Pantalla de ajustes de la app de SPay en un móvil" },
    title: "Personal, adaptada a ti y fácil de usar",
    lede: "SPay se adapta a tu idioma, a tu aspecto y a tu moneda, con ayuda siempre a un toque de distancia.",
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
        title: "131 monedas de visualización",
        body: "Consulta tus saldos en AED, USD, EUR, GBP, PKR, TRY y muchas más, con tipos de cambio en tiempo real.",
      },
      {
        title: "Temas y colores de acento",
        body: "Claro, oscuro o el del sistema, además de cinco colores de acento que recolorean la app al instante.",
      },
      {
        title: "Soporte dentro de la app",
        body: "Un asistente de IA responde al momento y pasa la conversación a una persona cuando hace falta, con capturas adjuntas en el propio chat.",
      },
      {
        title: "Extractos electrónicos",
        body: "Genera un PDF de cualquier periodo con entradas, salidas y saldo neto, y descárgalo o envíalo por correo.",
      },
    ],
  },

  faqs: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo se recarga la tarjeta SPay?",
        a: "Depositas cripto en tu monedero de SPay y después recargas la tarjeta desde tu saldo en USDC con importes rápidos de entre 10 $ y 500 $. El saldo se actualiza en minutos y la tarjeta paga en dólares estadounidenses.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿Qué criptomonedas puedo guardar en SPay?",
        a: "USDT en Tron (TRC-20) y Ethereum (ERC-20), USDC en Ethereum (ERC-20), además de ETH y TRX nativos. Cada combinación de token y red tiene su propia dirección de depósito, su saldo y su valor en dólares en tiempo real.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿Existe una tarjeta física de SPay?",
        a: "Está en camino una tarjeta Visa de plástico en color turquesa, con pago sin contacto en tiendas y retiros en cajeros. Hoy la tarjeta es virtual: se crea en la app, se puede usar de inmediato en línea y en tiendas, y se añade a Apple Wallet.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿SPay funciona con Apple Pay y Google Pay?",
        a: "Apple Pay ya está disponible: añade tu tarjeta a Apple Wallet desde la pantalla de la tarjeta y paga sin contacto. La compatibilidad con Google Pay está en desarrollo.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿Cómo funciona el cashback?",
        a: "Ganas puntos en cada compra con la tarjeta, a un ritmo que depende de tu nivel. Los puntos se convierten en cashback en USDC a razón de 200 puntos por dólar, se pueden canjear a partir de 1.000 puntos y se acreditan directamente en el saldo de tu tarjeta.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿Cuáles son los límites de gasto?",
        a: "Cada nivel tiene un tope mensual, diario y por transacción, y tú fijas tu propio límite entre 0 $ y ese tope. Los límites se reinician automáticamente. Platinum llega hasta 20.000 $ al mes, Signature hasta 50.000 $ e Infinite hasta 100.000 $.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿Cómo retiro cripto a mi propio monedero?",
        a: "Los retiros se envían como USDC en la red Base a cualquier monedero de autocustodia. Comprueba que tu monedero receptor admite Base antes de enviar, porque los fondos enviados por la red equivocada no se pueden recuperar.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "¿Puedo usar SPay en los EAU?",
        a: "La tarjeta liquida a los comercios en dólares estadounidenses a través de la red Visa, así que los comercios nunca cobran en cripto. Los saldos se pueden mostrar en dírhams y la app está totalmente adaptada al árabe, con soporte de derecha a izquierda. La elegibilidad depende de la verificación; consulta la cobertura actual por países en ",
        linkLabel: "Contacto",
        linkHref: "/es/contact/",
        textAfter: ".",
      },
    ],
  },

  blogs: {
    title: "Blog",
    allLabel: "Todos los artículos",
    allHref: "/es/blog/",
    readMoreLabel: "Leer más",
  },
};
