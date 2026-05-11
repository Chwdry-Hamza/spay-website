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
import FeaturesGrid from "@/components/FeatureGrid";
import { PreviewSection } from "@/preview/PreviewProvider";
import { PreviewVisible } from "@/preview/PreviewVisible";

export default function Home() {
  return (
    <main className="pb-0">
      <PreviewVisible id="homeHero">
        <PreviewSection id="homeHero">
          <HomeHero />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="features">
        <PreviewSection id="features">
          <FeaturesSection />
        </PreviewSection>
      </PreviewVisible>
      <Currencies />
      <PreviewVisible id="payment">
        <PreviewSection id="payment">
          <PaymentSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="transfer">
        <PreviewSection id="transfer">
          <TransferSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="linkedAccounts">
        <PreviewSection id="linkedAccounts">
          <LinkedAccountsSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="crypto">
        <PreviewSection id="crypto">
          <CryptoSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="earn">
        <PreviewSection id="earn">
          <EarnSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="featureGrid">
        <PreviewSection id="featureGrid">
          <FeaturesGrid />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="joinUs">
        <PreviewSection id="joinUs">
          <JoinUsSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="collaborations">
        <PreviewSection id="collaborations">
          <CollaborationsSection />
        </PreviewSection>
      </PreviewVisible>
      <PreviewVisible id="footer">
        <PreviewSection id="footer">
          <Footer />
        </PreviewSection>
      </PreviewVisible>
    </main>
  );
}
