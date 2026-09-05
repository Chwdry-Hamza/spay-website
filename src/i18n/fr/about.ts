/**
 * French About page copy. Typed as the full `AboutContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { AboutContent } from "@/lib/site/about";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export const FR_ABOUT: AboutContent = {
  hero: {
    title: "L’argent numérique devrait être aussi simple que l’espèce",
    lede: "SPay est née d’une idée simple : l’argent numérique devrait être aussi simple à utiliser que l’espèce — et plus sûr. Nous sommes un portefeuille crypto sécurisé et facile à prendre en main, qui rend les paiements en stablecoins simples et accessibles à tous, que vous envoyiez de l’argent à votre famille, payiez en ligne ou fassiez vos courses dans votre magasin préféré.",
    appStore: { eyebrow: "Télécharger dans l’", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Disponible sur", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "Femme tenant une carte Visa SPay tout en utilisant l’app SPay",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Globe terrestre entouré de trajets de paiement",
    },
    title: "Une nouvelle norme pour la banque sans frontières",
    paragraphs: [
      "Les cartes classiques sont liées à une banque, et une banque est liée à un pays. Cela fonctionne jusqu’au jour où vous déménagez, voyagez ou recevez un paiement depuis une autre juridiction — et là, la paperasse commence.",
      "La carte SPay n’est liée à rien de tout cela. Votre solde existe sous forme de stablecoins. Le rechargement vient de votre propre portefeuille, on-chain. Votre carte fonctionne de la même façon dans chaque pays qui accepte Visa et Mastercard. Aucune agence à visiter, aucun compte local à ouvrir, aucun justificatif de domicile à fournir.",
      "C’est volontairement simple : conservez votre valeur en USDT ou en USDC, dépensez-la dans la devise que réclame le terminal devant vous, et voyez chaque opération dans l’app au moment même où elle se produit.",
    ],
  },

  stablecoin: {
    title: "Pourquoi votre solde est un stablecoin",
    paragraphs: [
      "Votre solde SPay est conservé en USDT et en USDC — des stablecoins indexés sur le dollar américain, de sorte que 1 USDT ou 1 USDC vise à toujours valoir 1 dollar. Vous profitez ainsi du meilleur des deux mondes : la rapidité, le faible coût et la portée sans frontières des paiements sur blockchain, sans les fortes variations de prix de cryptos comme le Bitcoin.",
      "Votre argent vaut la même chose au moment où vous le dépensez qu’au moment où vous l’avez reçu. Pas de courbes à surveiller, pas de marché à anticiper — juste des dollars numériques qui circulent en quelques secondes, franchissent les frontières et sont prêts à être dépensés sur votre carte SPay à tout moment.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Jetons dorés représentant des stablecoins" },
  },

  marquee: { label: "Obtenez la vôtre dès aujourd’hui." },

  security: {
    title: "Une sécurité en couches, sous votre contrôle",
    intro:
      "La protection s’étend du moment où vous déverrouillez l’app jusqu’à l’alerte que vous recevez lorsqu’un nouvel appareil se connecte.",
    image: {
      src: "/site/layered-security.png",
      alt: "Bouclier et cadenas symbolisant la sécurité en couches du compte",
    },
  },
};
