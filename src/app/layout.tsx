import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ConditionalBottomNav from "@/components/ConditionalBottomNav";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { getSeoSetting, getOrganizationSetting } from "@/lib/cms";
import { buildOrganization } from "@/lib/structured-data";

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

  // The CMS "Default title template" controls the site-wide title pattern.
  // It uses a {title} placeholder; Next's title.template uses %s. Falls back
  // to the built-in pattern when the CMS value is missing/invalid.
  const titleTemplate =
    seo?.titleTemplate && seo.titleTemplate.includes("{title}")
      ? seo.titleTemplate.replace("{title}", "%s")
      : "%s · SPay";

  const metadata: Metadata = {
    title: {
      default: "SPay - Your financial companion",
      template: titleTemplate,
    },
    description: "SPay - Your financial companion",
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [{ url: "/spayLogo.jpeg", type: "image/jpeg" }],
      shortcut: "/spayLogo.jpeg",
      apple: "/spayLogo.jpeg",
    },
  };

  // Emit the Google Search Console verification meta tag if configured in the CMS.
  const verification = seo?.searchConsoleVerification?.trim();
  if (verification) {
    metadata.verification = { google: verification };
  }

  return metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Site-wide Organization JSON-LD from the CMS `organization` setting.
  const org = await getOrganizationSetting();
  const organizationLd = buildOrganization(org);

  return (
    <html lang="en" className="h-full w-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
        <ConditionalBottomNav />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
