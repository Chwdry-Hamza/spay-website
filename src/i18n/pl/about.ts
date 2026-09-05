/**
 * Polish About page copy. Typed as the full `AboutContent`, so a new English
 * field cannot ship untranslated — the build fails instead.
 */
import type { AboutContent } from "@/lib/site/about";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appStore";

export const PL_ABOUT: AboutContent = {
  hero: {
    title: "Cyfrowe pieniądze powinny być tak proste jak gotówka",
    lede: "SPay powstało z prostej myśli: cyfrowe pieniądze powinny być tak proste w użyciu jak gotówka — i bezpieczniejsze. Jesteśmy bezpiecznym, przyjaznym portfelem kryptowalutowym, który sprawia, że płatności stablecoinami są proste i dostępne dla każdego: gdy wysyłasz pieniądze rodzinie, płacisz online albo robisz zakupy w ulubionym sklepie.",
    appStore: { eyebrow: "Pobierz z", name: "App Store", href: APP_STORE_URL },
    playStore: { eyebrow: "Pobierz z", name: "Google Play", href: PLAY_STORE_URL },
    image: {
      src: "/site/about-hero-woman-card.png",
      alt: "Kobieta trzymająca kartę Visa SPay podczas korzystania z aplikacji SPay",
    },
  },

  borderless: {
    image: {
      src: "/site/borderless-banking.png",
      alt: "Kula ziemska z orbitującymi ścieżkami płatności",
    },
    title: "Nowy standard bankowości bez granic",
    paragraphs: [
      "Tradycyjne karty są przypisane do banku, a bank do kraju. Działa to do momentu, w którym się przeprowadzasz, podróżujesz albo dostajesz przelew z innej jurysdykcji — wtedy zaczynają się formalności.",
      "Karta SPay nie jest przypisana do niczego z tych rzeczy. Twoje saldo istnieje jako stablecoiny. Zasilenie pochodzi z Twojego własnego portfela, w łańcuchu. Karta działa tak samo w każdym kraju, w którym akceptowane są Visa i Mastercard. Nie ma oddziału do odwiedzenia, lokalnego konta do otwarcia ani adresu do udowodnienia.",
      "To celowo proste: trzymaj wartość w USDT lub USDC, wydawaj ją w walucie, o którą prosi terminal przed Tobą, i widz każdą transakcję w aplikacji w chwili, w której się dzieje.",
    ],
  },

  stablecoin: {
    title: "Dlaczego Twoje saldo to stablecoin",
    paragraphs: [
      "Saldo w SPay trzymane jest w USDT i USDC — stablecoinach powiązanych z dolarem amerykańskim, więc 1 USDT lub 1 USDC zawsze ma być warte 1 dolara. Dzięki temu masz to, co najlepsze z obu światów: szybkość, niski koszt i brak granic w płatnościach blockchainowych, bez gwałtownych wahań kursu monet takich jak Bitcoin.",
      "Twoje pieniądze są warte tyle samo, gdy je wydajesz, co wtedy, gdy je otrzymałeś. Bez śledzenia wykresów i wyczekiwania na dobry moment — po prostu cyfrowe dolary, które przemieszczają się w sekundy, działają ponad granicami i w każdej chwili są gotowe do wydania kartą SPay.",
    ],
    image: { src: "/site/stablecoin-balance.png", alt: "Złote krążki stablecoinów" },
  },

  marquee: { label: "Odbierz swoją już dziś." },

  security: {
    title: "Warstwowe bezpieczeństwo pod Twoją kontrolą",
    intro:
      "Ochrona działa od chwili odblokowania aplikacji aż po powiadomienie, które dostajesz, gdy zaloguje się nowe urządzenie.",
    image: {
      src: "/site/layered-security.png",
      alt: "Tarcza i kłódka jako symbol warstwowego bezpieczeństwa konta",
    },
  },
};
