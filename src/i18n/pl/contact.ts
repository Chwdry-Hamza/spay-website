/**
 * Polish Contact page copy.
 *
 * The email address and phone number are contact details, not copy — they stay
 * exactly as they are, and so do their `mailto:` / `tel:` targets.
 */
import type { ContactContent } from "@/lib/site/contact";

export const PL_CONTACT: ContactContent = {
  hero: {
    title: "Odpowiadamy szybko",
    lede: "Napisz do naszego asystenta AI, gdy tylko pojawi się pytanie, poproś o rozmowę z konsultantem w dowolnym momencie albo skontaktuj się z zespołem mailowo i telefonicznie. Sprawy dotyczące karty i oszustw zawsze mają pierwszeństwo.",
    ctaLabel: "Rozpocznij czat na żywo",
    ctaHref: "#channels",
    chat: {
      title: "Asystent SPay",
      status: "Online",
      messages: [
        { from: "customer", text: "Moja karta została odrzucona przy płatności. Dlaczego?" },
        {
          from: "assistant",
          text: "Saldo pokrywa kwotę, ale sprzedawca należy do zablokowanej kategorii. Spróbuj tam innej karty — nic nie zostało pobrane.",
        },
        { from: "customer", text: "Czy mogę porozmawiać z kimś z zespołu?" },
        {
          from: "assistant",
          text: "Już łączę Cię z konsultantem. Średni czas oczekiwania: poniżej 3 minut.",
        },
      ],
      placeholder: "Napisz wiadomość…",
    },
  },

  details: {
    title: "Skontaktuj się z zespołem bezpośrednio",
    cards: [
      {
        eyebrow: "Wsparcie mailowe",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "W sprawach konta, karty i transakcji. Odpowiedź w ciągu 24 godzin w dni robocze.",
      },
      {
        eyebrow: "Wsparcie telefoniczne",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Porozmawiaj z konsultantem w pilnych sprawach dotyczących karty lub oszustwa. Dostępne w godzinach wsparcia.",
      },
      {
        eyebrow: "Godziny wsparcia",
        value: "Pn – Pt",
        href: "",
        body: "9:00 – 18:00 czasu GST. Nieczynne w dni ustawowo wolne w ZEA.",
      },
    ],
  },

  marquee: { label: "Odbierz swoją już dziś." },

  channels: {
    title: "Wsparcie w aplikacji",
    intro:
      "Czat na żywo znajdziesz w dolnym rogu każdego ekranu aplikacji SPay. Zacznij od asystenta i przekaż rozmowę człowiekowi, kiedy tylko zechcesz.",
    items: [
      {
        title: "Asystent AI",
        meta: "Natychmiast, 24/7",
        body: "Zapytaj o saldo, limity, opłaty albo odrzuconą płatność. Asystent odpowiada w aplikacji i potrafi przeprowadzić Cię przez rozwiązanie krok po kroku.",
      },
      {
        title: "Porozmawiaj z człowiekiem",
        meta: "Pn – Pt, godziny wsparcia",
        body: "Asystent nie rozwiązał sprawy? Poproś o konsultanta w tym samym oknie czatu. Historia rozmowy zostaje, więc niczego nie musisz powtarzać.",
      },
      {
        title: "Pilne sprawy z kartą",
        meta: "Najpierw zablokuj, potem zadzwoń",
        body: "Natychmiast zablokuj kartę w aplikacji, a następnie zadzwoń pod +971 55 947 6972, żebyśmy razem przejrzeli transakcje.",
      },
    ],
  },
};
