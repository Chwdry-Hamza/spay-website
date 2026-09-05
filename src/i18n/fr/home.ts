/**
 * French homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "Carte Visa virtuelle • Apple Pay et Google Pay",
    "Protection des achats jusqu’à 10 000 $",
    "Garantie prolongée jusqu’à 10 000 $",
    "Protection du prix jusqu’à 2 000 $",
    "Assurance location de voiture (dans le monde entier)",
    "Assistance exclusive 24/7 et portail Avantages Visa",
  ],
  signature: [
    "Tout ce que comprend Platinum",
    "Service Visa Concierge",
    "Visa Luxury Hotel Collection",
    "Accès aux salons d’aéroport (Visa Airport Companion)",
    "Plafonds de dépenses plus élevés",
  ],
  infinite: [
    "Tout ce que comprend Signature",
    "Assurance accidents de voyage jusqu’à 1 500 000 $",
    "Couverture retard et perte de bagages",
    "Conciergerie prioritaire 24/7",
    "Les plafonds de protection les plus élevés (Achats 20 k$ • Garantie 25 k$)",
    "Privilèges exclusifs Infinite",
  ],
};

export const FR_HOME: HomeContent = {
  hero: {
    title: "Portefeuille crypto et carte Visa en dollars",
    lede: "Conservez vos USDT, USDC, ETH et TRX sur Tron et Ethereum. Vos cryptos alimentent une carte Visa virtuelle en dollars que vous créez dans l’app et utilisez le jour même — partout où Visa est acceptée.",
    primary: { label: "Télécharger l’app SPay", href: APP_STORE_URL },
    secondary: { label: "Comparer les offres de carte", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "Carte Visa SPay" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "Écran d’accueil de l’app SPay" },
    title: "Comment fonctionne SPay",
    steps: [
      {
        n: "01",
        title: "Créez votre portefeuille",
        body: "Téléchargez l’app, déverrouillez-la avec Face ID ou un code à 6 chiffres, puis terminez la vérification.",
      },
      {
        n: "02",
        title: "Déposez des cryptos",
        body: "Choisissez un jeton et un réseau, puis scannez ou copiez votre adresse. USDT, USDC, ETH et TRX sont pris en charge.",
      },
      {
        n: "03",
        title: "Créez et rechargez votre carte",
        body: "Émettez une carte Visa virtuelle dans l’app et rechargez-la depuis votre solde en USDC. Le solde est disponible en quelques minutes.",
      },
      {
        n: "04",
        title: "Payez en dollars",
        body: "Payez en ligne, en magasin ou via Apple Pay. Les commerçants sont réglés en dollars, comme avec n’importe quelle autre carte.",
      },
    ],
  },

  wallet: {
    title: "Un portefeuille multidevise, prêt dès le premier jour",
    lede: "Chaque compte s’ouvre avec des portefeuilles pour les stablecoins et les cryptos les plus utilisés sur deux réseaux — chacun avec sa propre adresse, son solde et sa valeur en dollars en temps réel.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "Portefeuille multidevise SPay sur Ethereum et Tron",
    },
    tiles: [
      { n: "01", title: "QR code à scanner" },
      { n: "02", title: "Presse-papiers qui s’efface seul" },
      { n: "03", title: "Indications sur le réseau" },
      { n: "04", title: "Retraits en auto-conservation" },
    ],
  },

  virtualCard: {
    title: "Une carte Visa virtuelle instantanée",
    lede: "Créez une carte Visa virtuelle dans l’app et payez immédiatement. Rechargez-la depuis votre solde en USDC et payez en dollars partout où Visa est acceptée — en ligne, en magasin et dans votre portefeuille mobile.",
    image: { src: "/site/spay-visa-cards.png", alt: "Cartes Visa virtuelles SPay" },
  },

  plans: {
    title: "Choisissez la carte qui vous correspond",
    tiers: [
      {
        name: "Platinum",
        price: "9,99 $",
        priceNote: "Frais uniques",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Commencer",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19,99 $",
        priceNote: "Frais uniques",
        badge: "POPULAIRE",
        features: TICKS.signature,
        ctaLabel: "Commencer",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49,99 $",
        priceNote: "Frais uniques",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Commencer",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Envoyez de l’argent à n’importe quel utilisateur SPay",
    lede: "Transférez de l’argent à vos proches sur SPay en quelques secondes. Il arrive directement sur leur carte, prêt à être dépensé.",
    image: { src: "/site/spay-send-money.png", alt: "Envoi d’argent à un autre utilisateur SPay" },
    steps: [
      {
        n: "01",
        title: "Trouvez quelqu’un par UID ou e-mail",
        body: "Une correspondance vérifiée s’affiche avant que vous confirmiez.",
      },
      {
        n: "02",
        title: "Destinataires récents",
        body: "Refaites un virement précédent en un seul geste.",
      },
    ],
  },

  rewards: {
    title: "Gagnez en dépensant, convertissez en cashback",
    lede: "Les points s’accumulent automatiquement à mesure que vous utilisez l’app, puis se convertissent en USDC réels crédités sur le solde de votre carte.",
    points: [
      {
        n: "01",
        body: "Chaque achat par carte rapporte des points — jusqu’à 1,5 % de retour selon votre niveau.",
      },
      {
        n: "02",
        body: "Bonus ponctuels à l’inscription avec un code de parrainage, à la fin de la vérification et à l’obtention de votre première carte.",
      },
      {
        n: "03",
        body: "200 points valent 1 USDC, échangeables à partir de 1 000 points par paliers flexibles.",
      },
      {
        n: "04",
        body: "Parrainez un proche et gagnez à chaque étape qu’il franchit, avec une progression que vous pouvez suivre.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "Écran des points de l’app SPay" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "Écran des réglages de l’app SPay sur un téléphone" },
    title: "Personnelle, localisée, simple à utiliser",
    lede: "SPay s’adapte à votre langue, à votre apparence et à votre devise — avec de l’aide toujours à portée de doigt.",
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
        title: "131 devises d’affichage",
        body: "Consultez vos soldes en AED, USD, EUR, GBP, PKR, TRY et bien d’autres, aux taux en temps réel.",
      },
      {
        title: "Thèmes et couleurs d’accent",
        body: "Clair, sombre ou celui du système, plus cinq couleurs d’accent qui recolorent l’app instantanément.",
      },
      {
        title: "Assistance dans l’app",
        body: "Un assistant IA répond immédiatement et passe la main à une personne quand il le faut, captures d’écran jointes dans la conversation.",
      },
      {
        title: "Relevés électroniques",
        body: "Générez un PDF pour la période de votre choix, avec entrées, sorties et solde, puis téléchargez-le ou envoyez-le par e-mail.",
      },
    ],
  },

  faqs: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Comment recharge-t-on la carte SPay ?",
        a: "Vous déposez des cryptos dans votre portefeuille SPay, puis vous rechargez la carte depuis votre solde en USDC avec des montants rapides de 10 $ à 500 $. Le solde est disponible en quelques minutes et la carte paie en dollars américains.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Quelles cryptos puis-je conserver dans SPay ?",
        a: "USDT sur Tron (TRC-20) et Ethereum (ERC-20), USDC sur Ethereum (ERC-20), ainsi que l’ETH et le TRX natifs. Chaque combinaison de jeton et de réseau dispose de sa propre adresse de dépôt, de son solde et de sa valeur en dollars en temps réel.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Existe-t-il une carte SPay physique ?",
        a: "Une carte Visa en plastique turquoise arrive bientôt, avec le paiement sans contact en magasin et les retraits au distributeur. Aujourd’hui la carte est virtuelle : créée dans l’app, utilisable immédiatement en ligne et en magasin, et ajoutable à Apple Wallet.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "SPay fonctionne-t-elle avec Apple Pay et Google Pay ?",
        a: "Apple Pay est disponible : ajoutez votre carte à Apple Wallet depuis l’écran de la carte et payez sans contact. La prise en charge de Google Pay est en cours de développement.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Comment fonctionne le cashback ?",
        a: "Vous gagnez des points à chaque achat par carte, à un rythme qui dépend de votre niveau. Les points se convertissent en cashback en USDC à raison de 200 points par dollar, sont échangeables à partir de 1 000 points et sont crédités directement sur le solde de votre carte.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Quels sont les plafonds de dépenses ?",
        a: "Chaque niveau a un plafond mensuel, quotidien et par transaction, et vous fixez votre propre limite entre 0 $ et ce plafond. Les limites se réinitialisent automatiquement. Platinum plafonne à 20 000 $ par mois, Signature à 50 000 $ et Infinite à 100 000 $.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Comment retirer mes cryptos vers mon propre portefeuille ?",
        a: "Les retraits sont envoyés en USDC sur le réseau Base vers n’importe quel portefeuille dont vous gardez les clés. Vérifiez que le portefeuille destinataire prend en charge Base avant d’envoyer : des fonds envoyés sur le mauvais réseau sont irrécupérables.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Puis-je utiliser SPay aux Émirats arabes unis ?",
        a: "La carte règle les commerçants en dollars américains via le réseau Visa : les commerçants ne reçoivent donc jamais de cryptos. Les soldes peuvent s’afficher en dirhams et l’app est entièrement traduite en arabe, avec la prise en charge de l’écriture de droite à gauche. L’éligibilité dépend de la vérification — consultez la couverture actuelle par pays sur la page ",
        linkLabel: "Contact",
        linkHref: "/fr/contact/",
        textAfter: ".",
      },
    ],
  },

  blogs: {
    title: "Blog",
    allLabel: "Tous les articles",
    allHref: "/fr/blog/",
    readMoreLabel: "Lire la suite",
  },
};
