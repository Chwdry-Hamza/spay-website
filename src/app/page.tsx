import HomeHero from "@/components/HomeHero";
import FeaturesSection from "@/components/FeaturesSection";
import Currencies from "@/components/currencies";
import PaymentSection from "@/components/PaymentSection";
import TransferSection from "@/components/TransferSection";
import CryptoSection from "@/components/CryptoSection";
import JoinUsSection from "@/components/JoinUsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import FeaturesGrid from "@/components/FeatureGrid";
import type { Metadata } from "next";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/", "SPay - Your financial companion", "Landing");
  const meta = buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "SPay - Your financial companion",
    description: page?.excerpt,
    path: "/",
    site,
  });
  // Home title shouldn't be wrapped by the layout's "%s · SPay" template.
  meta.title = {
    absolute: page?.seo?.title || page?.title || "SPay - Your financial companion",
  };
  return meta;
}

export default function Home() {
  return (
    <main className="pb-0">
      <HomeHero />
      <FeaturesSection />
      <Currencies />
      <PaymentSection />
      <TransferSection />
      <CryptoSection />
      <FeaturesGrid />
      <JoinUsSection />
      <CollaborationsSection />
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
