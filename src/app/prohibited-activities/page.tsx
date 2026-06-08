import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import AppHeader from "@/components/AppHeader";
import LegalSections from "@/components/LegalSections";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { PROHIBITED_DEFAULTS, resolveLegalContent } from "@/lib/legalContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/prohibited-activities", "Prohibited Activities", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Prohibited Activities",
    description: page?.excerpt,
    path: "/prohibited-activities",
    site,
  });
}

export default async function ProhibitedActivitiesPage() {
  const page = await getRouteSeoPage("/prohibited-activities", "Prohibited Activities", "Legal");
  const content = resolveLegalContent(PROHIBITED_DEFAULTS, page?.sections);

  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      <LegalSections initialContent={content} defaults={PROHIBITED_DEFAULTS} />
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
