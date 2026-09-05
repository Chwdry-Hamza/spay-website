import type { Metadata } from "next";
import { cache } from "react";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import CardPage from "@/components/site/CardPage";
import { buildLocaleMetadata } from "@/lib/site/localeMeta";
import { getLocalePageContent } from "@/lib/site/localePage";
import { getLocaleChrome } from "@/lib/site/localeChrome";
import { resolveCard } from "@/lib/site/card";

const LOCALE = "tr" as const;

/**
 * The card page in tr.
 *
 * Content comes from the CMS: the English `sections` an editor saved, merged
 * onto this repo's defaults, with this language's stored translation
 * substituted in. So an edit made once in English reaches all nine languages,
 * and a string with no translation yet simply stays English rather than
 * vanishing.
 *
 * `cache` is React's, not a network cache: `generateMetadata` and the component
 * both need the page, and this makes that one fetch per request.
 */
const load = cache(() =>
  getLocalePageContent({
    slug: "/card",
    title: "Card",
    template: "Content",
    locale: LOCALE,
    resolve: resolveCard,
  }),
);

export async function generateMetadata(): Promise<Metadata> {
  const { page, site } = await load();
  return buildLocaleMetadata({
    locale: LOCALE,
    path: "/card/",
    title: "Kart — SPay",
    description: "Dakikalar içinde verilen üç sanal Visa kartı: Platinum, Signature ve Infinite. USDC bakiyenizden yükleyin, Visa'nın geçerli olduğu her yerde harcayın.",
    page,
    site,
  });
}

export default async function Page() {
  const [{ content, page }, chrome] = await Promise.all([load(), getLocaleChrome(LOCALE)]);

  return (
    <SiteShell chrome={chrome} active="/tr/card/" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <CardPage initialContent={content} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
