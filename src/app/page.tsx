import HomeSections from "@/components/HomeSections";
import { getFooterExtras } from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import type { Metadata } from "next";
import { getRouteSeoPage, getSeoSetting, getHomePage } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { resolveHomeContent } from "@/lib/homeContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/", "SPay - Your financial companion", "Landing");
  const meta = buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "SPay - Your financial companion",
    description: page?.excerpt,
    path: "/",
    site,
  });
  // Home title shouldn't be wrapped by the layout's "%s · SPay" template.
  meta.title = {
    absolute: page?.seo?.title || page?.title || "SPay - Your financial companion",
  };
  return meta;
}

export default async function Home() {
  // CMS-editable text/images for the landing page. Falls back to built-in
  // design defaults when the CMS record is empty or unreachable.
  const page = await getHomePage();
  const content = resolveHomeContent(page?.sections);
  const { dynamicLinks, latestBlogs } = await getFooterExtras();

  return (
    <>
      <CodeInjection code={page?.codeInjection} slots={["header", "body"]} />
      <HomeSections
        initialContent={content}
        footerDynamicLinks={dynamicLinks}
        latestBlogs={latestBlogs}
      />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </>
  );
}
