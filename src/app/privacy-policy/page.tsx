import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import AppHeader from "@/components/AppHeader";
import LegalSections from "@/components/LegalSections";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { PRIVACY_DEFAULTS, resolveLegalContent } from "@/lib/legalContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/privacy-policy", "Privacy Policy", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Privacy Policy",
    description: page?.excerpt,
    path: "/privacy-policy",
    site,
  });
}

export default async function PrivacyPolicyPage() {
  const page = await getRouteSeoPage("/privacy-policy", "Privacy Policy", "Legal");
  const content = resolveLegalContent(PRIVACY_DEFAULTS, page?.sections);

  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      <LegalSections initialContent={content} defaults={PRIVACY_DEFAULTS} />
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
