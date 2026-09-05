import type { Metadata } from "next";
import { cache } from "react";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import AboutPage from "@/components/site/AboutPage";
import { buildLocaleMetadata } from "@/lib/site/localeMeta";
import { getLocalePageContent } from "@/lib/site/localePage";
import { getLocaleChrome } from "@/lib/site/localeChrome";
import { resolveAbout } from "@/lib/site/about";

const LOCALE = "es" as const;

/**
 * The about page in es.
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
    slug: "/about",
    title: "About",
    template: "Content",
    locale: LOCALE,
    resolve: resolveAbout,
  }),
);

export async function generateMetadata(): Promise<Metadata> {
  const { page, site } = await load();
  return buildLocaleMetadata({
    locale: LOCALE,
    path: "/about/",
    title: "Sobre nosotros — SPay",
    description: "SPay nació de la idea de que el dinero digital debería ser tan fácil como el efectivo. Hacemos que los pagos con stablecoins sean simples y seguros.",
    page,
    site,
  });
}

export default async function Page() {
  const [{ content, page }, chrome] = await Promise.all([load(), getLocaleChrome(LOCALE)]);

  return (
    <SiteShell chrome={chrome} active="/es/about/" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <AboutPage initialContent={content} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
