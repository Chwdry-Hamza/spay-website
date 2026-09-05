/**
 * Polish "How it works" copy. The journey step numbers ("01"…"06") are the
 * design's own numerals and stay as they are.
 */
import type { HowItWorksContent } from "@/lib/site/howItWorks";

export const PL_HOW_IT_WORKS: HowItWorksContent = {
  hero: {
    title: "Jak działa karta SPay",
    lede: "Od rejestracji do pierwszej płatności, od początku do końca, w około pięć minut. Oto każdy krok — od założenia konta po moment, w którym zakup pojawia się w Twojej historii.",
    image: {
      src: "/site/spay-phone-hand.png",
      alt: "Dłoń trzymająca telefon z otwartą aplikacją SPay",
    },
    steps: [
      {
        title: "Załóż konto",
        body: "Podaj adres e-mail, wybierz hasło i potwierdź wiadomość. To całe konto — bez wizyty w oddziale i bez papierologii.",
      },
      {
        title: "Zasil krypto",
        body: "Otwórz Wpłatę, wybierz USDT, USDC, ETH lub TRX, a następnie sieć Tron albo Ethereum, aby zobaczyć swój adres. Wyślij z dowolnego portfela lub giełdy — środki dotrą w kilka minut.",
      },
      {
        title: "Kup wirtualną kartę",
        body: "Wybierz Platinum, Signature albo Infinite i zapłać jednorazową opłatę. Numer karty, data ważności i kod CVV pojawią się w aplikacji, gotowe do Apple Pay lub Google Pay.",
      },
      {
        title: "Płać, zarządzaj, przelewaj",
        body: "Płać zbliżeniowo w sklepach, kupuj online i opłacaj subskrypcje w dolarach. Każda autoryzacja pokazuje sprzedawcę, kwotę lokalną i dokładny koszt po przewalutowaniu.",
      },
    ],
  },

  journey: {
    title: "Od rejestracji do pierwszej płatności",
    steps: [
      { n: "01", title: "Konto założone", duration: "30 s", body: "E-mail, hasło, potwierdzenie" },
      { n: "02", title: "Tożsamość zweryfikowana", duration: "2–5 min", body: "KYC w aplikacji z dokumentem" },
      { n: "03", title: "Saldo zasilone", duration: "1–10 min", body: "Wyślij krypto ze swojego portfela" },
      { n: "04", title: "Karta kupiona", duration: "1 min", body: "Wybierz plan i zapłać jednorazową opłatę" },
      { n: "05", title: "Dodana do portfela", duration: "30 s", body: "Apple Pay lub Google Pay" },
      { n: "06", title: "Pierwsza płatność", duration: "Natychmiast", body: "Zapłać zbliżeniowo lub wklej dane przy zakupie" },
    ],
  },

  marquee: { label: "Odbierz swoją już dziś." },

  verification: {
    title: "Weryfikacja bez komplikacji",
    cards: [
      {
        title: "Podstawowe dane",
        body: "Tylko to, co niezbędne — imię i nazwisko, e-mail oraz numer telefonu. Bez konta bankowego, bez potwierdzenia adresu, bez papierologii. Jesteś w środku w niecałą minutę.",
      },
      {
        title: "Szybka weryfikacja tożsamości",
        body: "Zrób zdjęcie paszportu lub dowodu i selfie. Weryfikacja jest automatyczna i zwykle kończy się w minuty, a nie w dni.",
      },
      {
        title: "Twoja karta jest gotowa!",
        body: "Po akceptacji wirtualna karta pojawia się natychmiast — zasil ją ze swojego salda i od razu zacznij płacić. Kartę fizyczną zamówisz, kiedy tylko zechcesz.",
      },
    ],
    image: {
      src: "/site/spay-kyc-phone.png",
      alt: "Ekran weryfikacji KYC SPay w telefonie",
    },
  },
};
