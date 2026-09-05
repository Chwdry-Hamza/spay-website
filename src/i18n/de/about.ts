/**
 * German About page copy. Typed as the full `AboutContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { AboutContent } from "@/lib/site/about";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export const DE_ABOUT: AboutContent = {
  hero: {
    title: "Digitales Geld sollte so einfach sein wie Bargeld",
    lede: "SPay ist aus einer einfachen Idee entstanden: Digitales Geld sollte so einfach zu nutzen sein wie Bargeld — und sicherer. Wir sind eine sichere, benutzerfreundliche Krypto-Wallet, die Stablecoin-Zahlungen für alle einfach und zugänglich macht: ob Sie Geld an Ihre Familie senden, online bezahlen oder in Ihrem Lieblingsgeschäft einkaufen.",
    appStore: { eyebrow: "Laden im", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Jetzt bei", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "Frau mit einer SPay Visa-Karte, während sie die SPay-App nutzt",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Globus mit umlaufenden Zahlungswegen",
    },
    title: "Ein neuer Standard für grenzenloses Banking",
    paragraphs: [
      "Klassische Karten hängen an einer Bank, und eine Bank hängt an einem Land. Das funktioniert, bis Sie umziehen, reisen oder aus einer anderen Rechtsordnung bezahlt werden — dann beginnt der Papierkram.",
      "Die SPay-Karte hängt an nichts davon. Ihr Guthaben liegt als Stablecoins vor. Aufgeladen wird sie aus Ihrer eigenen Wallet, on-chain. Ihre Karte funktioniert in jedem Land gleich, das Visa und Mastercard akzeptiert. Keine Filiale, kein lokales Konto, kein Adressnachweis.",
      "Es ist bewusst einfach: Halten Sie Ihren Wert in USDT oder USDC, geben Sie ihn in der Währung aus, die das Terminal vor Ihnen verlangt, und sehen Sie jede Transaktion in der App, sobald sie passiert.",
    ],
  },

  stablecoin: {
    title: "Warum Ihr Guthaben ein Stablecoin ist",
    paragraphs: [
      "Ihr SPay-Guthaben wird in USDT und USDC gehalten — Stablecoins, die an den US-Dollar gekoppelt sind, sodass 1 USDT oder 1 USDC stets 1 Dollar wert bleiben soll. So erhalten Sie das Beste aus beiden Welten: die Geschwindigkeit, die niedrigen Kosten und die grenzenlose Reichweite von Blockchain-Zahlungen, ohne die starken Kursschwankungen von Coins wie Bitcoin.",
      "Ihr Geld ist beim Ausgeben so viel wert wie beim Erhalten. Kein Beobachten von Charts, kein Timing des Marktes — nur digitale Dollar, die sich in Sekunden bewegen, über Grenzen hinweg funktionieren und jederzeit auf Ihrer SPay-Karte bereitstehen.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Goldene Stablecoin-Münzen" },
  },

  marquee: { label: "Hol dir deine noch heute." },

  security: {
    title: "Mehrschichtige Sicherheit, unter Ihrer Kontrolle",
    intro:
      "Der Schutz beginnt in dem Moment, in dem Sie die App entsperren, und reicht bis zur Benachrichtigung, wenn sich ein neues Gerät anmeldet.",
    image: {
      src: "/site/layered-security.png",
      alt: "Schild und Vorhängeschloss als Sinnbild für mehrschichtige Kontosicherheit",
    },
  },
};
