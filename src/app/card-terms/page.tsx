import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import AppHeader from "@/components/AppHeader";
import LegalSections from "@/components/LegalSections";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
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
  const page = await getRouteSeoPage("/card-terms", "Card Terms", "Legal");
  const content = resolveLegalContent(CARD_TERMS_DEFAULTS, page?.sections);

  return (
    <main style={{ background: "#090e1c" }}>
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <AppHeader />
      <LegalSections initialContent={content} defaults={CARD_TERMS_DEFAULTS} />
      <Footer />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </main>
  );
}
