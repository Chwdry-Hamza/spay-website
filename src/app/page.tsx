import type { Metadata } from "next";
import DynamicPage from "@/components/DynamicPage";
import { getPublishedPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedPage();

  // The home page bypasses the "%s · SPay" template (set in layout) by
  // returning `title.absolute` — we don't want "SPay · SPay".
  const titleText =
    page?.seoTitle?.trim() || page?.title || "SPay - Your financial companion";
  const description =
    page?.seoDescription?.trim() || "SPay - Your financial companion";
  const images = page?.ogImage ? [{ url: page.ogImage }] : undefined;

  return {
    title: { absolute: titleText },
    description,
    keywords: page?.seoKeywords?.trim() || undefined,
    alternates: { canonical: "/" },
    robots: page?.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: titleText,
      description,
      url: "/",
      type: "website",
      siteName: "SPay",
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: titleText,
      description,
      images,
    },
  };
}

export default function Home() {
  return <DynamicPage />;
}
