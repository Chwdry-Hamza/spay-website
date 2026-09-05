import type { Metadata } from "next";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import LegalSections from "@/components/LegalSections";
import SiteShell from "@/components/site/SiteShell";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { getSiteChrome } from "@/lib/site/chrome";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { CARD_TERMS_DEFAULTS, resolveLegalContent } from "@/lib/legalContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/card-terms", "Card Terms", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Card Terms",
    description: page?.excerpt,
    path: "/card-terms",
    site,
  });
}

export default async function CardTermsPage() {
  const [page, chrome] = await Promise.all([
    getRouteSeoPage("/card-terms", "Card Terms", "Legal"),
    getSiteChrome(),
  ]);
  const content = resolveLegalContent(CARD_TERMS_DEFAULTS, page?.sections);

  return (
    <SiteShell chrome={chrome} active="/card-terms/" footerMarginTop="0" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <LegalSections initialContent={content} defaults={CARD_TERMS_DEFAULTS} />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
