import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import AppHeader from "@/components/AppHeader";
import LegalSections from "@/components/LegalSections";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { ESIGN_DEFAULTS, resolveLegalContent } from "@/lib/legalContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/e-sign-consent", "E-Sign Consent", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "E-Sign Consent",
    description: page?.excerpt,
    path: "/e-sign-consent",
    site,
  });
}

export default async function ESignConsentPage() {
  const page = await getRouteSeoPage("/e-sign-consent", "E-Sign Consent", "Legal");
  const content = resolveLegalContent(ESIGN_DEFAULTS, page?.sections);

  return (
    <main style={{ background: "#090e1c" }}>
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <AppHeader />
      <LegalSections initialContent={content} defaults={ESIGN_DEFAULTS} />
      <Footer />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </main>
  );
}
