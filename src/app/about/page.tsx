import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import AppHeader from "@/components/AppHeader";
import AboutSections from "@/components/AboutSections";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { resolveAboutContent } from "@/lib/aboutContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/about", "About", "Content");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "About",
    description: page?.excerpt,
    path: "/about",
    site,
  });
}

export default async function AboutPage() {
  // CMS-editable text for the About page; falls back to the built-in copy.
  const page = await getRouteSeoPage("/about", "About", "Content");
  const content = resolveAboutContent(page?.sections);

  return (
    <main style={{ background: "#090e1c" }}>
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <AppHeader />
      <AboutSections initialContent={content} />
      <Footer />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </main>
  );
}
