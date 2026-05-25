import HomeHero from "@/components/HomeHero";
import FeaturesSection from "@/components/FeaturesSection";
import Currencies from "@/components/currencies";
import PaymentSection from "@/components/PaymentSection";
import TransferSection from "@/components/TransferSection";
import CryptoSection from "@/components/CryptoSection";
import JoinUsSection from "@/components/JoinUsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";
import FeaturesGrid from "@/components/FeatureGrid";

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
    </main>
  );
}
