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
    // No excerpt fallback here: the homepage is edited via HomeContentEditor,
    // which has no excerpt field, so the seeded stub excerpt would invisibly
    // shadow the site-wide "Default meta description" from SEO settings.
    path: "/",
    site,
  });
  // Home title is emitted absolute (never wrapped by the layout's "%s · SPay"
  // template). Precedence: the homepage's own SEO title (page editor) wins;
  // otherwise the site-wide "Default title template" from SEO settings is
  // applied to the page title ({title} placeholder, or used verbatim when the
  // template is a literal); otherwise the page title / built-in default.
  const fallbackTitle = page?.title || "SPay - Your financial companion";
  const rawTemplate = site?.titleTemplate?.trim();
  const templatedTitle = rawTemplate
    ? rawTemplate.includes("{title}")
      ? rawTemplate.replace("{title}", fallbackTitle)
      : rawTemplate
    : fallbackTitle;
  meta.title = {
    absolute: page?.seo?.title || templatedTitle,
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
