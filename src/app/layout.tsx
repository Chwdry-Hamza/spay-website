import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ConditionalBottomNav from "@/components/ConditionalBottomNav";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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

export const metadata: Metadata = {
  title: {
    default: "SPay - Your financial companion",
    template: "%s · SPay",
  },
  description: "SPay - Your financial companion",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/spayLogo.jpeg", type: "image/jpeg" }],
    shortcut: "/spayLogo.jpeg",
    apple: "/spayLogo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        {children}
        <ConditionalBottomNav />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
