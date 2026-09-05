/**
 * Polish homepage copy. Typed as the full `HomeContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { HomeContent } from "@/lib/site/home";
import { APP_STORE_URL } from "@/lib/appStore";

const TICKS = {
  platinum: [
    "Wirtualna karta Visa • Apple Pay i Google Pay",
    "Ochrona zakupów do 10 000 $",
    "Przedłużona gwarancja do 10 000 $",
    "Ochrona ceny do 2 000 $",
    "Ubezpieczenie wynajmu samochodu (na całym świecie)",
    "Wyłączne wsparcie 24/7 i Portal Korzyści Visa",
  ],
  signature: [
    "Wszystko z Platinum",
    "Usługa Visa Concierge",
    "Visa Luxury Hotel Collection",
    "Dostęp do saloników lotniskowych (Visa Airport Companion)",
    "Wyższe limity wydatków",
  ],
  infinite: [
    "Wszystko z Signature",
    "Ubezpieczenie następstw nieszczęśliwych wypadków w podróży do 1 500 000 $",
    "Ochrona przy opóźnieniu i zagubieniu bagażu",
    "Priorytetowy concierge 24/7",
    "Najwyższe limity ochrony (Zakupy 20 tys. $ • Gwarancja 25 tys. $)",
    "Wyłączne przywileje Infinite",
  ],
};

export const PL_HOME: HomeContent = {
  hero: {
    title: "Portfel kryptowalutowy i karta Visa w dolarach",
    lede: "Trzymaj USDT, USDC, ETH i TRX w sieciach Tron i Ethereum. Twoje krypto zasila wirtualną kartę Visa w dolarach, którą stworzysz w aplikacji i wydasz tego samego dnia — wszędzie tam, gdzie akceptowana jest Visa.",
    primary: { label: "Pobierz aplikację SPay", href: APP_STORE_URL },
    secondary: { label: "Porównaj plany kart", href: "#plans" },
    image: { src: "/site/spay-hero-card.png", alt: "Karta Visa SPay" },
  },

  features: {
    image: { src: "/site/spay-phone-hand.png", alt: "Ekran powitalny aplikacji SPay" },
    title: "Jak działa SPay",
    steps: [
      {
        n: "01",
        title: "Załóż portfel",
        body: "Pobierz aplikację, odblokuj ją Face ID lub 6-cyfrowym kodem i przejdź weryfikację.",
      },
      {
        n: "02",
        title: "Wpłać krypto",
        body: "Wybierz token i sieć, a następnie zeskanuj lub skopiuj swój adres. Obsługujemy USDT, USDC, ETH i TRX.",
      },
      {
        n: "03",
        title: "Stwórz i zasil kartę",
        body: "Wydaj wirtualną kartę Visa w aplikacji i zasil ją ze swojego salda USDC. Środki są dostępne w kilka minut.",
      },
      {
        n: "04",
        title: "Płać w dolarach",
        body: "Płać online, w sklepach lub przez Apple Pay. Sprzedawcy rozliczani są w dolarach, tak jak przy każdej innej karcie.",
      },
    ],
  },

  wallet: {
    title: "Portfel wielowalutowy, gotowy od pierwszego dnia",
    lede: "Każde konto startuje z portfelami dla najpopularniejszych stablecoinów i monet w dwóch sieciach — każdy z własnym adresem, saldem i bieżącą wartością w dolarach.",
    tokens: ["USDT", "USDC", "ETH", "TRX", "Ethereum · Tron"],
    image: {
      src: "/site/spay-wallet-networks-v4.png",
      alt: "Wielowalutowy portfel SPay w sieciach Ethereum i Tron",
    },
    tiles: [
      { n: "01", title: "Kod QR do zeskanowania" },
      { n: "02", title: "Schowek, który sam się czyści" },
      { n: "03", title: "Podpowiedzi dotyczące sieci" },
      { n: "04", title: "Wypłaty do własnego portfela" },
    ],
  },

  virtualCard: {
    title: "Wirtualna karta Visa od ręki",
    lede: "Stwórz wirtualną kartę Visa w aplikacji i zacznij płacić od razu. Zasil ją ze swojego salda USDC i płać w dolarach wszędzie tam, gdzie akceptowana jest Visa — online, w sklepach i w portfelu w telefonie.",
    image: { src: "/site/spay-visa-cards.png", alt: "Wirtualne karty Visa SPay" },
  },

  plans: {
    title: "Wybierz kartę dopasowaną do siebie",
    tiers: [
      {
        name: "Platinum",
        price: "9,99 $",
        priceNote: "Opłata jednorazowa",
        badge: "",
        features: TICKS.platinum,
        ctaLabel: "Zacznij teraz",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Signature",
        price: "19,99 $",
        priceNote: "Opłata jednorazowa",
        badge: "POPULARNA",
        features: TICKS.signature,
        ctaLabel: "Zacznij teraz",
        ctaHref: APP_STORE_URL,
      },
      {
        name: "Infinite",
        price: "49,99 $",
        priceNote: "Opłata jednorazowa",
        badge: "",
        features: TICKS.infinite,
        ctaLabel: "Zacznij teraz",
        ctaHref: APP_STORE_URL,
      },
    ],
  },

  send: {
    title: "Wyślij pieniądze do każdego użytkownika SPay",
    lede: "Przelej środki znajomym i rodzinie w SPay w kilka sekund. Pieniądze trafiają prosto na ich kartę, gotowe do wydania.",
    image: { src: "/site/spay-send-money.png", alt: "Wysyłanie pieniędzy do innego użytkownika SPay" },
    steps: [
      {
        n: "01",
        title: "Znajdź osoby po UID lub e-mailu",
        body: "Przed potwierdzeniem zobaczysz zweryfikowane dopasowanie.",
      },
      {
        n: "02",
        title: "Ostatni odbiorcy",
        body: "Powtórz wcześniejszy przelew jednym dotknięciem.",
      },
    ],
  },

  rewards: {
    title: "Zarabiaj, gdy płacisz, i wymieniaj na cashback",
    lede: "Punkty zbierają się automatycznie, gdy korzystasz z aplikacji, a potem zamieniają się w prawdziwe USDC dopisane do salda karty.",
    points: [
      {
        n: "01",
        body: "Każda płatność kartą daje punkty — nawet do 1,5% zwrotu, zależnie od Twojego poziomu.",
      },
      {
        n: "02",
        body: "Jednorazowe bonusy za dołączenie z kodem polecającym, ukończenie weryfikacji i odebranie pierwszej karty.",
      },
      {
        n: "03",
        body: "200 punktów to 1 USDC, do wymiany od 1 000 punktów w elastycznych progach.",
      },
      {
        n: "04",
        body: "Poleć znajomego i zarabiaj na każdym etapie, który osiągnie — z postępem, który możesz śledzić.",
      },
    ],
    image: { src: "/site/spay-rewards-points-phone.png", alt: "Ekran punktów w aplikacji SPay" },
  },

  personalise: {
    image: { src: "/site/spay-settings-phone.png", alt: "Ekran ustawień aplikacji SPay w telefonie" },
    title: "Osobista, lokalna i prosta w obsłudze",
    lede: "SPay dopasowuje się do Twojego języka, wyglądu i waluty — a pomoc masz zawsze o jedno dotknięcie.",
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
        title: "131 walut wyświetlania",
        body: "Sprawdzaj salda w AED, USD, EUR, GBP, PKR, TRY i wielu innych walutach po bieżących kursach.",
      },
      {
        title: "Motywy i kolory akcentu",
        body: "Jasny, ciemny lub systemowy, a do tego pięć kolorów akcentu, które od razu zmieniają wygląd aplikacji.",
      },
      {
        title: "Wsparcie w aplikacji",
        body: "Asystent AI odpowiada natychmiast i w razie potrzeby przekazuje rozmowę konsultantowi — razem ze zrzutami ekranu, w tym samym czacie.",
      },
      {
        title: "E-wyciągi",
        body: "Wygeneruj PDF za dowolny okres z wpływami, wypłatami i saldem, a potem pobierz go lub wyślij e-mailem.",
      },
    ],
  },

  faqs: {
    title: "Najczęściej zadawane pytania",
    items: [
      {
        q: "Jak zasila się kartę SPay?",
        a: "Wpłacasz krypto do portfela SPay, a następnie zasilasz kartę ze swojego salda USDC, korzystając z szybkich kwot od 10 $ do 500 $. Środki są dostępne w kilka minut, a karta płaci w dolarach amerykańskich.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Jakie kryptowaluty mogę trzymać w SPay?",
        a: "USDT w sieci Tron (TRC-20) i Ethereum (ERC-20), USDC w sieci Ethereum (ERC-20) oraz natywne ETH i TRX. Każde połączenie tokena i sieci ma własny adres wpłaty, saldo i bieżącą wartość w dolarach.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Czy istnieje fizyczna karta SPay?",
        a: "Turkusowa plastikowa karta Visa jest w drodze — z płatnościami zbliżeniowymi w sklepach i wypłatami z bankomatów. Dziś karta jest wirtualna: tworzysz ją w aplikacji, od razu płacisz online i w sklepach, a także dodajesz ją do Apple Wallet.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Czy SPay działa z Apple Pay i Google Pay?",
        a: "Apple Pay już działa — dodaj kartę do Apple Wallet z poziomu ekranu karty i płać zbliżeniowo. Obsługa Google Pay jest w przygotowaniu.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Jak działa cashback?",
        a: "Za każdą płatność kartą zbierasz punkty, w tempie zależnym od Twojego poziomu. Punkty zamieniają się na cashback w USDC w przeliczniku 200 punktów za dolara, można je wymienić od 1 000 punktów, a środki trafiają prosto na saldo karty.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Jakie są limity wydatków?",
        a: "Każdy poziom ma limit miesięczny, dzienny i na pojedynczą transakcję, a swój własny limit ustawiasz dowolnie — od 0 $ aż do tej granicy. Limity odnawiają się automatycznie. Platinum ma limit 20 000 $ miesięcznie, Signature 50 000 $, a Infinite 100 000 $.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Jak wypłacić krypto do własnego portfela?",
        a: "Wypłaty wysyłamy jako USDC w sieci Base do dowolnego portfela, którym sam zarządzasz. Przed wysyłką upewnij się, że portfel odbiorcy obsługuje sieć Base — środków wysłanych w niewłaściwej sieci nie da się odzyskać.",
        linkLabel: "",
        linkHref: "",
        textAfter: "",
      },
      {
        q: "Czy mogę używać SPay w ZEA?",
        a: "Karta rozlicza sprzedawców w dolarach amerykańskich przez sieć Visa, więc sprzedawcy nigdy nie otrzymują krypto. Salda można wyświetlać w dirhamach, a aplikacja jest w pełni przetłumaczona na arabski, z obsługą pisma od prawej do lewej. Dostępność zależy od weryfikacji — aktualną listę krajów znajdziesz na stronie ",
        linkLabel: "Kontakt",
        linkHref: "/pl/contact/",
        textAfter: ".",
      },
    ],
  },

  blogs: {
    title: "Blog",
    allLabel: "Wszystkie artykuły",
    allHref: "/pl/blog/",
    readMoreLabel: "Czytaj dalej",
  },
};
