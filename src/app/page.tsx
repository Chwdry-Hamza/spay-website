import type { Metadata } from "next";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import HomePage from "@/components/site/home/HomePage";
import { getRouteSeoPage, getSeoSetting, getHomePage, getPosts, type CmsPost } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { serializeJsonLd } from "@/lib/sanitize";
import { getSiteChrome } from "@/lib/site/chrome";
import { syncPageSource } from "@/lib/site/localePage";
import { resolveHome } from "@/lib/site/home";
import { buildHomeJsonLd } from "@/lib/site/homeJsonLd";
import { localeAlternates, localeOpenGraph } from "@/lib/site/localeMeta";

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
  meta.title = { absolute: page?.seo?.title || templatedTitle };
  // The homepage is the one route that exists in more than one language.
  meta.alternates = { ...meta.alternates, languages: localeAlternates("/") };
  // …and say, in Open Graph's own spelling, which language this page is
  // and which others exist. See localeOpenGraph.
  meta.openGraph = { ...meta.openGraph, ...localeOpenGraph("en", "/") };
  return meta;
}

/** The three latest posts for the Blogs band; empty if the CMS is unreachable. */
async function latestPosts(): Promise<CmsPost[]> {
  try {
    return (await getPosts({ limit: 3 })).items;
  } catch {
    return [];
  }
}

export default async function Page() {
  const [page, chrome, posts] = await Promise.all([
    getHomePage(),
    getSiteChrome(),
    latestPosts(),
  ]);
  const content = resolveHome(page?.sections);
  // Tell the CMS what English this page renders, so it can translate it
  // into the other eight. See syncPageSource.
  await syncPageSource("/", "SPay - Your financial companion", "Landing", [content, chrome]);

  return (
    <SiteShell chrome={chrome} active="/">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      {/* Built from `content` so the Product offers and FAQ markup can never
          drift from the text actually rendered. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHomeJsonLd(content, "en")) }}
      />
      <HomePage initialContent={content} posts={posts} locale="en" />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
