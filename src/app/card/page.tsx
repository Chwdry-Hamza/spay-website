import type { Metadata } from "next";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import CardPage from "@/components/site/CardPage";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { localeAlternates, localeOpenGraph } from "@/lib/site/localeMeta";
import { getSiteChrome } from "@/lib/site/chrome";
import { syncPageSource } from "@/lib/site/localePage";
import { resolveCard } from "@/lib/site/card";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/card", "Card", "Content");
  const meta = buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Card",
    description: page?.excerpt,
    path: "/card",
    site,
  });
  // hreflang has to be reciprocal: the Turkish page points here, so this page
  // must point back, or Google discards the pair entirely.
  meta.alternates = { ...meta.alternates, languages: localeAlternates("/card/") };
  // …and say, in Open Graph's own spelling, which language this page is
  // and which others exist. See localeOpenGraph.
  meta.openGraph = { ...meta.openGraph, ...localeOpenGraph("en", "/card/") };
  return meta;
}

export default async function Page() {
  const [page, chrome] = await Promise.all([
    getRouteSeoPage("/card", "Card", "Content"),
    getSiteChrome(),
  ]);
  const content = resolveCard(page?.sections);
  // Tell the CMS what English this page renders, so it can translate it
  // into the other eight. See syncPageSource.
  await syncPageSource("/card", "Card", "Content", content);

  return (
    <SiteShell chrome={chrome} active="/card/" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <CardPage initialContent={content} />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
