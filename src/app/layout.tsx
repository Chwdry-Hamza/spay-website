import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import "./spay-site.css";
import CookieConsent from "@/components/CookieConsent";
import AutoRefresh from "@/components/AutoRefresh";
import CodeInjection, { HeaderInjectionNodes, splitHeaderInjection } from "@/components/cms/CodeInjection";
import ConsentedAnalytics from "@/components/cms/ConsentedAnalytics";
import { headers } from "next/headers";
import { getSeoSetting, getOrganizationSetting, getHomePage, getCodeInjectionSetting, getAnalyticsSetting, getPathHeaderInjection } from "@/lib/cms";
import { buildOrganization } from "@/lib/structured-data";
import { serializeJsonLd } from "@/lib/sanitize";
import { resolveHomeContent } from "@/lib/homeContent";
import { platformForDevice } from "@/lib/appStore";
import { StorePlatformProvider } from "@/components/StorePlatform";
import { localeDef, splitLocale } from "@/i18n/locales";
import { consentStrings } from "@/i18n/consent";

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

// Inter has no Arabic glyphs. Without this the Arabic pages fall back to
// whatever the operating system happens to ship, which varies wildly in weight
// and metrics; app/spay-site.css puts this first in the stack under dir="rtl".
const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://spay.finance";

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
      // Site-wide default title: the CMS "Site name" is the fallback shown when a
      // document has no title of its own (e.g. the homepage without its own SEO
      // title), so the SEO Settings value actually takes effect on the front end.
      default: seo?.siteName?.trim() || "SPay - Your financial companion",
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

  // Header code injection rendered inside <head>: the site-wide snippet (SEO
  // Settings → Code → Header) plus the CURRENT page's per-page header snippet.
  // Both go here because a page component (mounted in <body>) cannot inject a
  // <script> into <head>. The pathname comes from the middleware-set header.
  // Inline scripts are merged into one <script> rendered as a direct <head>
  // child (so they land literally in <head> and run synchronously); the rest
  // (meta / link / external scripts) goes through the parser.
  const requestHeaders = await headers();
  const pathname =
    requestHeaders.get("x-spay-original-path")?.split("?")[0] ?? "/";

  // Which app store this visitor's device should be sent to. Decided here, on
  // the server, so every "get the app" button ships with the right URL already
  // in the HTML — see components/StorePlatform.
  const storePlatform = platformForDevice(requestHeaders.get("user-agent"));
  // Which language this URL is in, so <html lang>/<dir> are right for it. The
  // pathname comes from the middleware header set on every request.
  const { locale } = splitLocale(pathname);
  const { htmlLang, dir } = localeDef(locale);

  // Site-wide Organization JSON-LD from the CMS `organization` setting, in the
  // language of this URL. It renders on every page, so leaving it English meant
  // eight translated sites describing the company in a language their reader
  // had just chosen not to use. Built here rather than above because it needs
  // `locale`, which is only known once the pathname has been read.
  const organizationLd = buildOrganization(await getOrganizationSetting(locale), htmlLang);

  const perPageHeader = await getPathHeaderInjection(pathname);
  const combinedHeader = [globalCode?.header ?? "", perPageHeader]
    .filter((s) => s.trim())
    .join("\n");
  const { inlineScripts: headerInlineScripts, rest: headerRest } =
    splitHeaderInjection(combinedHeader);

  return (
    <html lang={htmlLang} dir={dir} className="h-full w-full scroll-smooth">
      <head>
        {headerInlineScripts.length > 0 && (
          <script dangerouslySetInnerHTML={{ __html: headerInlineScripts.join("\n") }} />
        )}
        <HeaderInjectionNodes html={headerRest} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${notoArabic.variable} antialiased min-h-screen w-full`}
      >
        {gscToken && (
          <meta name="google-site-verification" content={gscToken} />
        )}
        <ConsentedAnalytics ga4Id={analytics?.ga4Id} gtmId={analytics?.gtmId} />
        <CodeInjection code={globalCode} slots={["body"]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationLd) }}
        />
        <StorePlatformProvider platform={storePlatform}>
          {children}
          <AutoRefresh />
          {/* The site's own bottom nav is part of the design shell now
              (components/site/SiteBottomNav), so the layout only keeps the
              cookie banner. */}
          <CookieConsent content={home.cookieConsent} strings={consentStrings(locale)} />
        </StorePlatformProvider>
        <CodeInjection code={globalCode} slots={["footer"]} />
      </body>
    </html>
  );
}
