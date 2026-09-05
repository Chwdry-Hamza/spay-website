import type { Metadata } from "next";
import { cache } from "react";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import HowItWorksPage from "@/components/site/HowItWorksPage";
import { buildLocaleMetadata } from "@/lib/site/localeMeta";
import { getLocalePageContent } from "@/lib/site/localePage";
import { getLocaleChrome } from "@/lib/site/localeChrome";
import { resolveHowItWorks } from "@/lib/site/howItWorks";

const LOCALE = "ur" as const;

/**
 * The how-it-works page in ur.
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
    slug: "/how-it-works",
    title: "How it works",
    template: "Content",
    locale: LOCALE,
    resolve: resolveHowItWorks,
  }),
);

export async function generateMetadata(): Promise<Metadata> {
  const { page, site } = await load();
  return buildLocaleMetadata({
    locale: LOCALE,
    path: "/how-it-works/",
    title: "طریقۂ کار — SPay",
    description: "سائن اَپ سے پہلی ادائیگی تک تقریباً پانچ منٹ میں۔ ہر مرحلہ: اکاؤنٹ بنانا، کرپٹو سے فنڈ کرنا، ورچوئل کارڈ لینا، اور پھر خرچ کرنا۔",
    page,
    site,
  });
}

export default async function Page() {
  const [{ content, page }, chrome] = await Promise.all([load(), getLocaleChrome(LOCALE)]);

  return (
    <SiteShell chrome={chrome} active="/ur/how-it-works/"
      footerMarginTop="0"
      footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <HowItWorksPage initialContent={content} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
