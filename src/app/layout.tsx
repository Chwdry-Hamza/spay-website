import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ConditionalBottomNav from "@/components/ConditionalBottomNav";
import CookieConsent from "@/components/CookieConsent";
import AutoRefresh from "@/components/AutoRefresh";
import CodeInjection from "@/components/cms/CodeInjection";
import ConsentedAnalytics from "@/components/cms/ConsentedAnalytics";
import { getSeoSetting, getOrganizationSetting, getHomePage, getCodeInjectionSetting, getAnalyticsSetting } from "@/lib/cms";
import { buildOrganization } from "@/lib/structured-data";
import { serializeJsonLd } from "@/lib/sanitize";
import { resolveHomeContent } from "@/lib/homeContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://spay.example.com";

// Built from the static brand defaults, then enriched with CMS site-wide SEO
// (title template + Search Console verification) without overriding the
// existing identity.
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoSetting();

  // The CMS "Default title template" is the FALLBACK title for documents that
  // have no per-page SEO title of their own. Pages WITH their own SEO title
  // emit it as `title.absolute` and bypass this template entirely (see
  // buildMetadataFromCMS / buildListingMetadata), so the template only ever
  // applies to untitled documents. Used exactly as written:
  //   - contains {title} → replaced with the document's own title (Next %s).
  //   - a non-empty literal with no placeholder → used verbatim (e.g. "SPAYS").
  //   - empty → falls back to the built-in "%s · SPay" pattern.
  const rawTemplate = seo?.titleTemplate?.trim();
  const titleTemplate = rawTemplate
    ? rawTemplate.includes("{title}")
      ? rawTemplate.replace("{title}", "%s")
      : rawTemplate
    : "%s · SPay";

  const metadata: Metadata = {
    title: {
      default: "SPay - Your financial companion",
      template: titleTemplate,
    },
    // Site-wide default description from SEO settings; documents with their
    // own SEO description override this via their generateMetadata.
    description:
      seo?.defaultDescription?.trim() || "SPay - Your financial companion",
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [{ url: "/spayLogo.jpeg", type: "image/jpeg" }],
      shortcut: "/spayLogo.jpeg",
      apple: "/spayLogo.jpeg",
    },
  };

  return metadata;
}

/**
 * Google Search Console verification token from the CMS `seo` setting.
 * Editors sometimes store the full `<meta … content="TOKEN">` tag — accept
 * that too by extracting the content value. Rendered as a plain <meta> in
 * RootLayout (React hoists it into <head>) rather than via
 * `metadata.verification`: Next 16 streams generateMetadata output into the
 * <body> for regular browsers on dynamic pages, and the SEO team checks for
 * this tag inside <head> via View Source.
 */
function searchConsoleToken(
  seo: Awaited<ReturnType<typeof getSeoSetting>>,
): string | undefined {
  const raw = seo?.searchConsoleVerification?.trim();
  if (!raw) return undefined;
  return raw.match(/content=["']([^"']+)["']/i)?.[1] ?? raw;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Site-wide Organization JSON-LD from the CMS `organization` setting.
  const org = await getOrganizationSetting();
  const organizationLd = buildOrganization(org);

  // The global bottom nav + cookie banner are CMS-editable via the homepage
  // `sections`; resolve them here so every page reflects saved edits.
  const home = resolveHomeContent((await getHomePage())?.sections);

  // Site-wide code injection (SEO settings → Code) — applied to every page,
  // on top of any per-page snippets rendered by the page/post templates.
  const globalCode = await getCodeInjectionSetting();

  // Search Console verification (deduplicated fetch — generateMetadata reads
  // the same setting). Rendered here so React hoists it into <head> for every
  // user agent, including plain browsers doing View Source.
  const gscToken = searchConsoleToken(await getSeoSetting());

  // GA4 + GTM, rendered site-wide from the layout so both land in <head> on
  // every page. Single source — the per-page PerformanceScripts no longer
  // emits analytics.
  const analytics = await getAnalyticsSetting();

  return (
    <html lang="en" className="h-full w-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        {gscToken && (
          <meta name="google-site-verification" content={gscToken} />
        )}
        <ConsentedAnalytics ga4Id={analytics?.ga4Id} gtmId={analytics?.gtmId} />
        <CodeInjection code={globalCode} slots={["header", "body"]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationLd) }}
        />
        {children}
        <AutoRefresh />
        <ConditionalBottomNav content={home.bottomNav} />
        <CookieConsent content={home.cookieConsent} />
        <CodeInjection code={globalCode} slots={["footer"]} />
      </body>
    </html>
  );
}
