import type { Metadata } from "next";
import { cache } from "react";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import ContactPage from "@/components/site/ContactPage";
import { buildLocaleMetadata } from "@/lib/site/localeMeta";
import { getLocalePageContent } from "@/lib/site/localePage";
import { getLocaleChrome } from "@/lib/site/localeChrome";
import { resolveContact } from "@/lib/site/contact";

const LOCALE = "pt" as const;

/**
 * The contact page in pt.
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
    slug: "/contact",
    title: "Contact",
    template: "Content",
    locale: LOCALE,
    resolve: resolveContact,
  }),
);

export async function generateMetadata(): Promise<Metadata> {
  const { page, site } = await load();
  return buildLocaleMetadata({
    locale: LOCALE,
    path: "/contact/",
    title: "Contacto — SPay",
    description: "Fale com o assistente de IA, com uma pessoa da equipa, ou contacte-nos por e-mail e telefone. Questões de cartão e fraude têm prioridade.",
    page,
    site,
  });
}

export default async function Page() {
  const [{ content, page }, chrome] = await Promise.all([load(), getLocaleChrome(LOCALE)]);

  return (
    <SiteShell chrome={chrome} active="/pt/contact/"
      footerMarginTop="0"
      footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <ContactPage initialContent={content} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
