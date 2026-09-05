/**
 * German homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "Virtuelle Visa-Karte • Apple Pay und Google Pay",
    "Kaufschutz bis zu 10.000 $",
    "Garantieverlängerung bis zu 10.000 $",
    "Preisschutz bis zu 2.000 $",
    "Mietwagenversicherung (weltweit)",
    "Exklusiver 24/7-Support und Visa Benefits Portal",
  ],
  signature: [
    "Alles aus Platinum",
    "Visa Concierge Service",
    "Visa Luxury Hotel Collection",
    "Zugang zu Flughafen-Lounges (Visa Airport Companion)",
    "Höhere Ausgabenlimits",
  ],
  infinite: [
    "Alles aus Signature",
    "Reiseunfallversicherung bis zu 1.500.000 $",
    "Schutz bei Gepäckverspätung und -verlust",
    "Bevorzugter 24/7-Concierge",
    "Höchste Schutzlimits (Kauf 20.000 $ • Garantie 25.000 $)",
    "Exklusive Infinite-Vorteile",
  ],
};

export const DE_HOME: HomeContent = {
  hero: {
    title: "Krypto-Wallet und eine USD-Visa-Karte",
    lede: "Halten Sie USDT, USDC, ETH und TRX auf Tron und Ethereum. Ihr Krypto speist eine virtuelle USD-Visa-Karte, die Sie in der App erstellen und noch am selben Tag ausgeben können — überall dort, wo Visa akzeptiert wird.",
    primary: { label: "SPay-App holen", href: APP_STORE_URL },
    secondary: { label: "Kartentarife vergleichen", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "SPay Visa-Karte" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "Willkommensbildschirm der SPay-App" },
    title: "So funktioniert SPay",
    steps: [
      {
        n: "01",
        title: "Wallet erstellen",
        body: "App laden, mit Face ID oder sechsstelligem Code entsperren und die Verifizierung abschließen.",
      },
      {
        n: "02",
        title: "Krypto einzahlen",
        body: "Token und Netzwerk wählen, dann Ihre Adresse scannen oder kopieren. USDT, USDC, ETH und TRX werden unterstützt.",
      },
      {
        n: "03",
        title: "Karte erstellen und aufladen",
        body: "Erstellen Sie in der App eine virtuelle Visa-Karte und laden Sie sie aus Ihrem USDC-Guthaben auf. Das Guthaben ist in Minuten verfügbar.",
      },
      {
        n: "04",
        title: "In USD bezahlen",
        body: "Zahlen Sie online, im Geschäft oder mit Apple Pay. Händler werden in Dollar abgerechnet wie bei jeder anderen Karte.",
      },
    ],
  },

  wallet: {
    title: "Multi-Währungs-Wallet, ab dem ersten Tag bereit",
    lede: "Jedes Konto startet mit Wallets für die gängigsten Stablecoins und Coins auf zwei Netzwerken — jedes mit eigener Adresse, eigenem Guthaben und aktuellem USD-Wert.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "SPay Multi-Währungs-Wallet auf Ethereum und Tron",
    },
    tiles: [
      { n: "01", title: "Scanbarer QR-Code" },
      { n: "02", title: "Selbstlöschende Zwischenablage" },
      { n: "03", title: "Netzwerk-Hinweise" },
      { n: "04", title: "Auszahlung in Eigenverwahrung" },
    ],
  },

  virtualCard: {
    title: "Sofort eine virtuelle Visa-Karte",
    lede: "Erstellen Sie eine virtuelle Visa-Karte direkt in der App und geben Sie sofort Geld aus. Laden Sie sie aus Ihrem USDC-Guthaben auf und zahlen Sie in Dollar, wo immer Visa akzeptiert wird — online, im Geschäft und in Ihrer mobilen Wallet.",
    image: { src: "/site/spay-visa-cards.png", alt: "Virtuelle SPay Visa-Karten" },
  },

  plans: {
    title: "Wählen Sie die passende Karte",
    tiers: [
      {
        name: "Platinum",
        price: "9,99 $",
        priceNote: "Einmalige Gebühr",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Jetzt starten",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19,99 $",
        priceNote: "Einmalige Gebühr",
        badge: "BELIEBT",
        features: TICKS.signature,
        ctaLabel: "Jetzt starten",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49,99 $",
        priceNote: "Einmalige Gebühr",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Jetzt starten",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Geld an jede SPay-Nutzerin und jeden SPay-Nutzer senden",
    lede: "Senden Sie Freunden und Familie auf SPay in Sekunden Geld. Es landet direkt auf ihrer Karte und ist sofort ausgabebereit.",
    image: { src: "/site/spay-send-money.png", alt: "Geld an eine andere SPay-Person senden" },
    steps: [
      {
        n: "01",
        title: "Personen über UID oder E-Mail finden",
        body: "Vor der Bestätigung wird ein geprüfter Treffer angezeigt.",
      },
      {
        n: "02",
        title: "Letzte Empfänger",
        body: "Eine frühere Überweisung mit einem Tippen wiederholen.",
      },
    ],
  },

  rewards: {
    title: "Beim Bezahlen verdienen, als Cashback einlösen",
    lede: "Punkte sammeln sich automatisch, während Sie die App nutzen, und werden als echtes USDC Ihrem Kartenguthaben gutgeschrieben.",
    points: [
      {
        n: "01",
        body: "Jeder Kartenkauf bringt Punkte — je nach Stufe bis zu 1,5 % zurück.",
      },
      {
        n: "02",
        body: "Einmalige Boni für den Beitritt mit Empfehlungscode, die abgeschlossene Verifizierung und Ihre erste Karte.",
      },
      {
        n: "03",
        body: "200 Punkte entsprechen 1 USDC, einlösbar ab 1.000 Punkten in flexiblen Schritten.",
      },
      {
        n: "04",
        body: "Empfehlen Sie einen Freund und verdienen Sie bei jedem Meilenstein, den er erreicht — mit nachvollziehbarem Fortschritt.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "Punkteübersicht in der SPay-App" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "Einstellungen der SPay-App auf einem Smartphone" },
    title: "Persönlich, lokalisiert, einfach zu bedienen",
    lede: "SPay passt sich Ihrer Sprache, Ihrem Erscheinungsbild und Ihrer Währung an — Hilfe ist immer nur ein Tippen entfernt.",
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
        title: "131 Anzeigewährungen",
        body: "Sehen Sie Ihre Guthaben in AED, USD, EUR, GBP, PKR, TRY und mehr zu aktuellen Kursen.",
      },
      {
        title: "Themes und Akzentfarben",
        body: "Hell, dunkel oder Systemeinstellung, dazu fünf Akzentfarben, die die App sofort umfärben.",
      },
      {
        title: "Support in der App",
        body: "Ein KI-Assistent antwortet sofort und übergibt bei Bedarf an eine echte Person — Screenshots inklusive, direkt im Chat.",
      },
      {
        title: "E-Kontoauszüge",
        body: "Erstellen Sie für jeden Zeitraum ein PDF mit Eingängen, Ausgängen und Saldo und laden Sie es herunter oder senden Sie es per E-Mail.",
      },
    ],
  },

  faqs: {
    title: "Häufig gestellte Fragen",
    items: [
      {
        q: "Wie wird die SPay-Karte aufgeladen?",
        a: "Sie zahlen Krypto in Ihre SPay-Wallet ein und laden die Karte dann aus Ihrem USDC-Guthaben auf — mit Schnellbeträgen zwischen 10 $ und 500 $. Das Guthaben ist in Minuten verfügbar, und die Karte zahlt in US-Dollar.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Welche Kryptowährungen kann ich in SPay halten?",
        a: "USDT auf Tron (TRC-20) und Ethereum (ERC-20), USDC auf Ethereum (ERC-20) sowie natives ETH und natives TRX. Jede Kombination aus Token und Netzwerk hat ihre eigene Einzahlungsadresse, ihr eigenes Guthaben und einen aktuellen USD-Wert.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Gibt es eine physische SPay-Karte?",
        a: "Eine türkisfarbene Visa-Karte aus Kunststoff ist in Vorbereitung — mit kontaktlosem Bezahlen im Geschäft und Bargeldabhebungen am Geldautomaten. Heute ist die Karte virtuell: in der App erstellt, sofort online und im Geschäft nutzbar und zu Apple Wallet hinzufügbar.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Funktioniert SPay mit Apple Pay und Google Pay?",
        a: "Apple Pay ist verfügbar — fügen Sie Ihre Karte vom Kartenbildschirm aus zu Apple Wallet hinzu und zahlen Sie kontaktlos. Die Unterstützung für Google Pay ist in Entwicklung.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Wie funktioniert das Cashback?",
        a: "Sie sammeln bei jedem Kartenkauf Punkte, in einer Höhe, die von Ihrer Stufe abhängt. Punkte werden im Verhältnis 200 Punkte je Dollar in USDC-Cashback umgewandelt, sind ab 1.000 Punkten einlösbar und werden direkt Ihrem Kartenguthaben gutgeschrieben.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Wie hoch sind die Ausgabenlimits?",
        a: "Jede Stufe hat eine Obergrenze pro Monat, pro Tag und pro Transaktion; Ihr eigenes Limit legen Sie irgendwo zwischen 0 $ und dieser Grenze fest. Limits werden automatisch zurückgesetzt. Platinum ist auf 20.000 $ pro Monat begrenzt, Signature auf 50.000 $ und Infinite auf 100.000 $.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Wie zahle ich Krypto auf meine eigene Wallet aus?",
        a: "Auszahlungen erfolgen als USDC über das Base-Netzwerk an jede selbstverwahrte Wallet. Prüfen Sie vor dem Senden, ob Ihre Empfänger-Wallet Base unterstützt — über das falsche Netzwerk gesendete Beträge lassen sich nicht zurückholen.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Kann ich SPay in den VAE nutzen?",
        a: "Die Karte rechnet Händler über das Visa-Netzwerk in US-Dollar ab; Händler erhalten also nie Krypto. Guthaben lassen sich in Dirham anzeigen, und die App ist vollständig ins Arabische lokalisiert, inklusive Rechts-nach-links-Darstellung. Die Zulassung hängt von der Verifizierung ab — die aktuelle Länderabdeckung finden Sie unter ",
        linkLabel: "Kontakt",
        linkHref: "/de/contact/",
        textAfter: ".",
      },
    ],
  },

  blogs: {
    title: "Blog",
    allLabel: "Alle Beiträge",
    allHref: "/de/blog/",
    readMoreLabel: "Weiterlesen",
  },
};
