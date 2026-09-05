import type { Metadata } from "next";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import AboutPage from "@/components/site/AboutPage";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { localeAlternates, localeOpenGraph } from "@/lib/site/localeMeta";
import { getSiteChrome } from "@/lib/site/chrome";
import { syncPageSource } from "@/lib/site/localePage";
import { resolveAbout } from "@/lib/site/about";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/about", "About", "Content");
  const meta = buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "About",
    description: page?.excerpt,
    path: "/about",
    site,
  });
  // hreflang has to be reciprocal: the Turkish page points here, so this page
  // must point back, or Google discards the pair entirely.
  meta.alternates = { ...meta.alternates, languages: localeAlternates("/about/") };
  // …and say, in Open Graph's own spelling, which language this page is
  // and which others exist. See localeOpenGraph.
  meta.openGraph = { ...meta.openGraph, ...localeOpenGraph("en", "/about/") };
  return meta;
}

export default async function Page() {
  const [page, chrome] = await Promise.all([
    getRouteSeoPage("/about", "About", "Content"),
    getSiteChrome(),
  ]);
  const content = resolveAbout(page?.sections);
  // Tell the CMS what English this page renders, so it can translate it
  // into the other eight. See syncPageSource.
  await syncPageSource("/about", "About", "Content", content);

  return (
    <SiteShell chrome={chrome} active="/about/" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <AboutPage initialContent={content} />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
