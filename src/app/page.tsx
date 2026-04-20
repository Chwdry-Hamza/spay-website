import HomeHero from "@/components/HomeHero";
import FeaturesSection from "@/components/FeaturesSection";
import Currencies from "@/components/currencies";
import PaymentSection from "@/components/PaymentSection";
import TransferSection from "@/components/TransferSection";
import LinkedAccountsSection from "@/components/LinkedAccountsSection";
import CryptoSection from "@/components/CryptoSection";
import EarnSection from "@/components/EarnSection";
import JoinUsSection from "@/components/JoinUsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pb-0">
      <HomeHero />
      <FeaturesSection />
      <Currencies />
      <PaymentSection />
      <TransferSection />
      <LinkedAccountsSection />
      <CryptoSection />
      <EarnSection />
      <JoinUsSection />
      <CollaborationsSection />
      <Footer />
    </main>
  );
}
