/**
 * German "How it works" copy. The journey step numbers ("01"…"06") are the
 * design's own numerals and stay as they are.
 */
import type { HowItWorksContent } from "@/lib/site/howItWorks";

export const DE_HOW_IT_WORKS: HowItWorksContent = {
  hero: {
    title: "So funktioniert die SPay-Karte",
    lede: "Von der Anmeldung bis zur ersten Zahlung, von Anfang bis Ende in etwa fünf Minuten. Hier ist jeder Schritt — vom Erstellen des Kontos bis zu dem Moment, in dem ein Einkauf in Ihrem Verlauf erscheint.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "Hand hält ein Smartphone mit geöffneter SPay-App",
    },
    steps: [
      {
        title: "Konto erstellen",
        body: "E-Mail-Adresse eingeben, Passwort wählen und die E-Mail bestätigen. Das ist das Konto — kein Filialbesuch, kein Papierkram.",
      },
      {
        title: "Mit Krypto aufladen",
        body: "Öffnen Sie „Einzahlen“, wählen Sie USDT, USDC, ETH oder TRX und dann Tron oder Ethereum, um Ihre Adresse zu sehen. Senden Sie von einer beliebigen Wallet oder Börse — das Guthaben ist in Minuten da.",
      },
      {
        title: "Virtuelle Karte kaufen",
        body: "Wählen Sie Platinum, Signature oder Infinite und zahlen Sie die einmalige Gebühr. Kartennummer, Ablaufdatum und CVV erscheinen dann in der App, bereit für Apple Pay oder Google Pay.",
      },
      {
        title: "Ausgeben, verwalten, überweisen",
        body: "Zahlen Sie kontaktlos im Geschäft, online und für Abos in US-Dollar. Jede Autorisierung zeigt den Händler, den lokalen Betrag und die genauen Kosten nach Umrechnung.",
      },
    ],
  },

  journey: {
    title: "Von der Anmeldung zur ersten Zahlung",
    steps: [
      { n: "01", title: "Konto erstellt", duration: "30 Sek.", body: "E-Mail, Passwort, Bestätigung" },
      { n: "02", title: "Identität geprüft", duration: "2–5 Min.", body: "KYC in der App mit Ihrem Ausweis" },
      { n: "03", title: "Guthaben aufgeladen", duration: "1–10 Min.", body: "Krypto aus Ihrer Wallet senden" },
      { n: "04", title: "Karte gekauft", duration: "1 Min.", body: "Tarif wählen und einmalige Gebühr zahlen" },
      { n: "05", title: "Zur Wallet hinzugefügt", duration: "30 Sek.", body: "Apple Pay oder Google Pay" },
      { n: "06", title: "Erste Zahlung", duration: "Sofort", body: "Kontaktlos zahlen oder an der Kasse einfügen" },
    ],
  },

  marquee: { label: "Hol dir deine noch heute." },

  verification: {
    title: "Verifizierung leicht gemacht",
    cards: [
      {
        title: "Grundangaben",
        body: "Nur das Nötigste — Ihr Name, Ihre E-Mail-Adresse und Ihre Telefonnummer. Kein Bankkonto, kein Adressnachweis, kein Papierkram. In unter einer Minute sind Sie dabei.",
      },
      {
        title: "Schnelle Identitätsprüfung",
        body: "Fotografieren Sie Ihren Reisepass oder Personalausweis und machen Sie ein Selfie. Die Prüfung läuft automatisch und ist meist in Minuten abgeschlossen, nicht in Tagen.",
      },
      {
        title: "Ihre Karte ist bereit!",
        body: "Nach der Freigabe erscheint Ihre virtuelle Karte sofort — laden Sie sie aus Ihrem Guthaben auf und legen Sie direkt los. Eine physische Karte können Sie jederzeit bestellen.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "SPay KYC-Verifizierung auf einem Smartphone",
    },
  },
};
