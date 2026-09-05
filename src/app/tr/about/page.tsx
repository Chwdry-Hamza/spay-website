import type { Metadata } from "next";
import { cache } from "react";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import AboutPage from "@/components/site/AboutPage";
import { buildLocaleMetadata } from "@/lib/site/localeMeta";
import { getLocalePageContent } from "@/lib/site/localePage";
import { getLocaleChrome } from "@/lib/site/localeChrome";
import { resolveAbout } from "@/lib/site/about";

const LOCALE = "tr" as const;

/**
 * The about page in tr.
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
    title: "Hakkımızda — SPay",
    description: "SPay, dijital paranın nakit kadar kolay kullanılması gerektiği fikri üzerine kuruldu. Stablecoin ödemelerini herkes için basit ve güvenli kılıyoruz.",
    page,
    site,
  });
}

export default async function Page() {
  const [{ content, page }, chrome] = await Promise.all([load(), getLocaleChrome(LOCALE)]);

  return (
    <SiteShell chrome={chrome} active="/tr/about/" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <AboutPage initialContent={content} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
