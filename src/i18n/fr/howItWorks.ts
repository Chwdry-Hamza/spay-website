/**
 * French "How it works" copy. The journey step numbers ("01"…"06") are the
 * design's own numerals and stay as they are.
 */
import type { HowItWorksContent } from "@/lib/site/howItWorks";

export const FR_HOW_IT_WORKS: HowItWorksContent = {
  hero: {
    title: "Comment fonctionne la carte SPay",
    lede: "De l’inscription au premier paiement, de bout en bout, en cinq minutes environ. Voici chaque étape — de la création du compte jusqu’au moment où un achat apparaît dans votre historique.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "Main tenant un téléphone avec l’app SPay ouverte",
    },
    steps: [
      {
        title: "Créez votre compte",
        body: "Saisissez une adresse e-mail, choisissez un mot de passe et confirmez l’e-mail. C’est tout — aucune agence à visiter, aucune paperasse.",
      },
      {
        title: "Rechargez en crypto",
        body: "Ouvrez Dépôt, choisissez USDT, USDC, ETH ou TRX, puis sélectionnez Tron ou Ethereum pour voir votre adresse. Envoyez depuis n’importe quel portefeuille ou plateforme : le solde arrive en quelques minutes.",
      },
      {
        title: "Achetez votre carte virtuelle",
        body: "Choisissez Platinum, Signature ou Infinite et réglez les frais uniques. Le numéro de carte, la date d’expiration et le CVV apparaissent alors dans l’app, prêts pour Apple Pay ou Google Pay.",
      },
      {
        title: "Dépensez, gérez, transférez",
        body: "Payez sans contact en magasin, achetez en ligne et réglez vos abonnements en dollars. Chaque autorisation affiche le commerçant, le montant local et le coût exact après conversion.",
      },
    ],
  },

  journey: {
    title: "De l’inscription au premier paiement",
    steps: [
      { n: "01", title: "Compte créé", duration: "30 s", body: "E-mail, mot de passe, confirmation" },
      { n: "02", title: "Identité vérifiée", duration: "2–5 min", body: "KYC dans l’app avec votre pièce d’identité" },
      { n: "03", title: "Solde rechargé", duration: "1–10 min", body: "Envoyez des cryptos depuis votre portefeuille" },
      { n: "04", title: "Carte achetée", duration: "1 min", body: "Choisissez une offre et réglez les frais uniques" },
      { n: "05", title: "Ajoutée au portefeuille", duration: "30 s", body: "Apple Pay ou Google Pay" },
      { n: "06", title: "Premier paiement", duration: "Immédiat", body: "Payez sans contact ou collez les données au paiement" },
    ],
  },

  marquee: { label: "Obtenez la vôtre dès aujourd’hui." },

  verification: {
    title: "Une vérification tout en simplicité",
    cards: [
      {
        title: "Informations de base",
        body: "Uniquement l’essentiel — votre nom, votre e-mail et votre numéro de téléphone. Pas de compte bancaire, pas de justificatif de domicile, pas de paperasse. Vous êtes dedans en moins d’une minute.",
      },
      {
        title: "Contrôle d’identité rapide",
        body: "Photographiez votre passeport ou votre carte d’identité et prenez un selfie. La vérification est automatique et aboutit généralement en quelques minutes, pas en plusieurs jours.",
      },
      {
        title: "Votre carte est prête !",
        body: "Une fois validée, votre carte virtuelle apparaît instantanément — rechargez-la depuis votre solde et commencez à dépenser tout de suite. Vous pouvez commander la carte physique quand vous le souhaitez.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "Écran de vérification KYC SPay sur un téléphone",
    },
  },
};
