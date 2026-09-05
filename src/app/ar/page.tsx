import type { Metadata } from "next";
import { cache } from "react";
import CodeInjection from "@/components/cms/CodeInjection";
import SiteShell from "@/components/site/SiteShell";
import HomePage from "@/components/site/home/HomePage";
import { getPosts, type CmsPost } from "@/lib/cms";
import { buildHomeJsonLd } from "@/lib/site/homeJsonLd";
import { serializeJsonLd } from "@/lib/sanitize";
import { buildLocaleMetadata } from "@/lib/site/localeMeta";
import { getLocalePageContent } from "@/lib/site/localePage";
import { getLocaleChrome } from "@/lib/site/localeChrome";
import { resolveHome } from "@/lib/site/home";
import { resolveSiteChrome } from "@/lib/site/chrome";

const LOCALE = "ar" as const;

/**
 * The home page in ar.
 *
 * Content comes from the CMS: the English `sections` an editor saved, merged
 * onto this repo's defaults, with this language's stored translation
 * substituted in. So an edit made once in English reaches all nine languages,
 * and a string with no translation yet simply stays English rather than
 * vanishing.
 *
 * `cache` is React's, not a network cache: `generateMetadata` and the component
 * both need the page, and this makes that one fetch per request.
 */
const load = cache(() =>
  getLocalePageContent({
    slug: "/",
    title: "SPay - Your financial companion",
    template: "Landing",
    locale: LOCALE,
    resolve: resolveHome,
    // The header and footer are stored on this same document.
    alsoInSource: resolveSiteChrome,
  }),
);

export async function generateMetadata(): Promise<Metadata> {
  const { page, site } = await load();
  return buildLocaleMetadata({
    locale: LOCALE,
    path: "/",
    title: "SPay — محفظة عملات رقمية وبطاقة Visa بالدولار",
    description: "احتفظ بعملات USDT وUSDC وETH وTRX وأنفقها في أي مكان ببطاقة SPay من Visa. محفظة وبطاقة للعملات الرقمية مبنية على الالتزام التنظيمي.",
    page,
    site,
  });
}

/** The three latest posts for the Blogs band; empty if the CMS is unreachable. */
async function latestPosts(): Promise<CmsPost[]> {
  try {
    return (await getPosts({ limit: 3, locale: LOCALE })).items;
  } catch {
    return [];
  }
}

export default async function Page() {
  const [{ content, page }, chrome, posts] = await Promise.all([
    load(),
    getLocaleChrome(LOCALE),
    latestPosts(),
  ]);

  return (
    <SiteShell chrome={chrome} active="/ar/">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      {/* Built from `content` so the Product offers and FAQ markup can never
          drift from the text actually rendered — in this language. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHomeJsonLd(content, LOCALE)) }}
      />
      <HomePage initialContent={content} posts={posts} locale={LOCALE} prefix="/ar" />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
