import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import AppHeader from "@/components/AppHeader";
import SupportSections from "@/components/SupportSections";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { resolveSupportContent } from "@/lib/supportContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/support", "Support", "Content");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Support",
    description: page?.excerpt,
    path: "/support",
    site,
  });
}

export default async function SupportPage() {
  const page = await getRouteSeoPage("/support", "Support", "Content");
  const content = resolveSupportContent(page?.sections);

  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      <SupportSections initialContent={content} />
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
