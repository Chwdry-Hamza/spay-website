/**
 * German Contact page copy.
 *
 * The email address and phone number are contact details, not copy — they stay
 * exactly as they are, and so do their `mailto:` / `tel:` targets.
 */
import type { ContactContent } from "@/lib/site/contact";

export const DE_CONTACT: ContactContent = {
  hero: {
    title: "Wir antworten schnell",
    lede: "Chatten Sie mit unserem KI-Assistenten, sobald eine Frage auftaucht, lassen Sie sich jederzeit mit einer echten Person verbinden oder erreichen Sie das Team per E-Mail und Telefon. Karten- und Betrugsfälle haben immer Vorrang.",
    ctaLabel: "Live-Chat starten",
    ctaHref: "#channels",
    chat: {
      title: "SPay Assistent",
      status: "Online",
      messages: [
        { from: "customer", text: "Meine Karte wurde an der Kasse abgelehnt. Warum?" },
        {
          from: "assistant",
          text: "Ihr Guthaben deckt den Betrag, aber der Händler gehört zu einer gesperrten Kategorie. Nutzen Sie dort eine andere Karte — es wurde nichts abgebucht.",
        },
        { from: "customer", text: "Kann ich mit jemandem sprechen?" },
        {
          from: "assistant",
          text: "Ich verbinde Sie jetzt mit einer echten Person. Durchschnittliche Wartezeit: unter 3 Minuten.",
        },
      ],
      placeholder: "Ihre Nachricht …",
    },
  },

  details: {
    title: "Das Team direkt erreichen",
    cards: [
      {
        eyebrow: "E-Mail-Support",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "Für Konto-, Karten- und Transaktionsfragen. Antwort innerhalb von 24 Stunden an Werktagen.",
      },
      {
        eyebrow: "Telefon-Support",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Sprechen Sie bei dringenden Karten- oder Betrugsfällen mit einer echten Person. Erreichbar während der Support-Zeiten.",
      },
      {
        eyebrow: "Support-Zeiten",
        value: "Mo – Fr",
        href: "",
        body: "9:00 – 18:00 Uhr GST. An gesetzlichen Feiertagen der VAE geschlossen.",
      },
    ],
  },

  marquee: { label: "Hol dir deine noch heute." },

  channels: {
    title: "Support in der App",
    intro:
      "Der Live-Chat sitzt in der unteren Ecke jedes Bildschirms der SPay-App. Beginnen Sie mit dem Assistenten und übergeben Sie an eine echte Person, wann immer Sie möchten.",
    items: [
      {
        title: "KI-Assistent",
        meta: "Sofort, rund um die Uhr",
        body: "Fragen Sie nach Guthaben, Limits, Gebühren oder einer abgelehnten Zahlung. Der Assistent antwortet in der App und führt Sie Schritt für Schritt zur Lösung.",
      },
      {
        title: "Mit einer Person sprechen",
        meta: "Mo – Fr, Support-Zeiten",
        body: "Vom Assistenten nicht gelöst? Bitten Sie im selben Chatfenster um eine Mitarbeiterin oder einen Mitarbeiter. Ihr Verlauf wird übernommen, Sie müssen nichts wiederholen.",
      },
      {
        title: "Dringende Kartenfälle",
        meta: "Erst sperren, dann anrufen",
        body: "Sperren Sie die Karte sofort in der App und rufen Sie dann +971 55 947 6972 an, damit wir die Transaktionen gemeinsam prüfen können.",
      },
    ],
  },
};
