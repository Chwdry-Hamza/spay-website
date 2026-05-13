import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ConditionalBottomNav from "@/components/ConditionalBottomNav";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { PreviewProvider } from "@/preview/PreviewProvider";
import { getPublishedPage, digestPublishedPage } from "@/lib/cms";

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

export const metadata: Metadata = {
  title: "SPay",
  description: "SPay - Your financial companion",
  icons: {
    icon: [{ url: "/spayLogo.jpeg", type: "image/jpeg" }],
    shortcut: "/spayLogo.jpeg",
    apple: "/spayLogo.jpeg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch the latest published landing page from cms-backend. Returns null
  // if the API is unreachable or nothing has been published yet — components
  // will then fall back to their LOCAL_DEFAULTS.
  const published = await getPublishedPage();
  const { sectionsByKey, publishedKeys, layout } = digestPublishedPage(published);

  return (
    <html lang="en" className="h-full w-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        <PreviewProvider
          publishedSections={sectionsByKey}
          publishedKeys={publishedKeys}
          publishedLayout={layout}
        >
          {children}
          <ConditionalBottomNav />
          <CookieConsent />
          <GoogleAnalytics />
        </PreviewProvider>
      </body>
    </html>
  );
}
