import type { Metadata } from "next";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import HowItWorksPage from "@/components/site/HowItWorksPage";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { localeAlternates, localeOpenGraph } from "@/lib/site/localeMeta";
import { getSiteChrome } from "@/lib/site/chrome";
import { syncPageSource } from "@/lib/site/localePage";
import { resolveHowItWorks } from "@/lib/site/howItWorks";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/how-it-works", "How it works", "Content");
  const meta = buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "How it works",
    description: page?.excerpt,
    path: "/how-it-works",
    site,
  });
  // hreflang has to be reciprocal: the Turkish page points here, so this page
  // must point back, or Google discards the pair entirely.
  meta.alternates = { ...meta.alternates, languages: localeAlternates("/how-it-works/") };
  // …and say, in Open Graph's own spelling, which language this page is
  // and which others exist. See localeOpenGraph.
  meta.openGraph = { ...meta.openGraph, ...localeOpenGraph("en", "/how-it-works/") };
  return meta;
}

export default async function Page() {
  const [page, chrome] = await Promise.all([
    getRouteSeoPage("/how-it-works", "How it works", "Content"),
    getSiteChrome(),
  ]);
  const content = resolveHowItWorks(page?.sections);
  // Tell the CMS what English this page renders, so it can translate it
  // into the other eight. See syncPageSource.
  await syncPageSource("/how-it-works", "How it works", "Content", content);

  return (
    <SiteShell
      chrome={chrome}
      active="/how-it-works/"
      footerMarginTop="0"
      footerWatermarkLeft="48px"
    >
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <HowItWorksPage initialContent={content} />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
