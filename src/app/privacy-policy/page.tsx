import type { Metadata } from "next";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import CodeInjection from "@/components/cms/CodeInjection";
import LegalSections from "@/components/LegalSections";
import SiteShell from "@/components/site/SiteShell";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { getSiteChrome } from "@/lib/site/chrome";
import { buildMetadataFromCMS } from "@/lib/cms-meta";
import { PRIVACY_DEFAULTS, resolveLegalContent } from "@/lib/legalContent";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/privacy-policy", "Privacy Policy", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Privacy Policy",
    description: page?.excerpt,
    path: "/privacy-policy",
    site,
  });
}

export default async function PrivacyPolicyPage() {
  const [page, chrome] = await Promise.all([
    getRouteSeoPage("/privacy-policy", "Privacy Policy", "Legal"),
    getSiteChrome(),
  ]);
  const content = resolveLegalContent(PRIVACY_DEFAULTS, page?.sections);

  return (
    <SiteShell chrome={chrome} active="/privacy-policy/" footerMarginTop="0" footerWatermarkLeft="48px">
      <CodeInjection code={page?.codeInjection} slots={["body"]} />
      <LegalSections initialContent={content} defaults={PRIVACY_DEFAULTS} />
      <PerformanceScripts perf={undefined} />
      <CodeInjection code={page?.codeInjection} slots={["footer"]} />
    </SiteShell>
  );
}
