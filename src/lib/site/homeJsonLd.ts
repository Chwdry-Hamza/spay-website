import { SITE_URL } from "@/lib/cms";
import { localeDef, type Locale } from "@/i18n/locales";
import type { HomeContent } from "./home";

/**
 * Structured data for the homepage.
 *
 * Organization and WebSite are emitted site-wide from layout.tsx
 * (buildOrganization), so repeating them here would create duplicate @ids —
 * only the three page-specific nodes live here, on the canonical origin.
 *
 * The Product offers and the FAQ are read from the same content the page
 * renders, so the rich-result markup can never drift from the visible text.
 */
export function buildHomeJsonLd(content: HomeContent, locale: Locale = "en") {
  const org = `${SITE_URL}/#organization`;
  const { htmlLang, prefix } = localeDef(locale);
  // Every node here is built from `content`, which arrives already translated,
  // so the whole graph is in this language and has to say so — and point at
  // this language's URL rather than the English one, or nine copies of the
  // graph all claim to describe the same page.
  const url = `${SITE_URL}${prefix}/`;
  const inLanguage = htmlLang;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "SPay",
        operatingSystem: "iOS, Android",
        applicationCategory: "FinanceApplication",
        url,
        inLanguage,
        publisher: { "@id": org },
        featureList:
          "Multi-currency crypto wallet, instant virtual USD Visa card, Apple Pay, instant transfers to SPay users, USDC cashback rewards, spending controls, e-statements, 9 languages",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "Product",
        inLanguage,
        "@id": `${SITE_URL}/#card`,
        name: "SPay USD Visa Card",
        description:
          "A virtual USD Visa card funded from your SPay crypto balance, available in three tiers.",
        brand: { "@id": org },
        offers: content.plans.tiers.map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          // "$9.99" → "9.99"; schema.org wants a bare number.
          price: tier.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
          description: tier.priceNote,
          url: `${SITE_URL}/#plans`,
        })),
      },
      {
        "@type": "FAQPage",
        inLanguage,
        "@id": `${SITE_URL}/#faq`,
        mainEntity: content.faqs.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            // The inline link in an answer is text as far as schema is concerned.
            text: `${item.a}${item.linkLabel}${item.textAfter}`,
          },
        })),
      },
    ],
  };
}
