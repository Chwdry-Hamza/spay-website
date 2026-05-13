"use client";

import * as React from "react";
import HomeHero from "@/components/HomeHero";
import FeaturesSection from "@/components/FeaturesSection";
import Currencies from "@/components/currencies";
import PaymentSection from "@/components/PaymentSection";
import TransferSection from "@/components/TransferSection";
import CryptoSection from "@/components/CryptoSection";
import EarnSection from "@/components/EarnSection";
import LinkedAccountsSection from "@/components/LinkedAccountsSection";
import JoinUsSection from "@/components/JoinUsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import CustomSection from "@/components/CustomSection";
import FeaturesGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";
import {
  PreviewSection,
  SectionInstanceProvider,
  useLayout,
} from "@/preview/PreviewProvider";
import { PreviewVisible } from "@/preview/PreviewVisible";

const COMPONENT_MAP: Record<string, React.ComponentType> = {
  homeHero: HomeHero,
  features: FeaturesSection,
  currencies: Currencies,
  featureGrid: FeaturesGrid,
  payment: PaymentSection,
  transfer: TransferSection,
  crypto: CryptoSection,
  earn: EarnSection,
  linkedAccounts: LinkedAccountsSection,
  joinUs: JoinUsSection,
  collaborations: CollaborationsSection,
  customSection: CustomSection,
  footer: Footer,
};

/**
 * Renders the home page from the CMS layout. Each section in the layout —
 * including duplicates of any preset — appears here, wrapped in its own
 * PreviewSection (for CMS selection) and SectionInstanceProvider (so the
 * underlying component reads its own data instead of the sectionKey default).
 */
export default function DynamicPage() {
  const layout = useLayout();
  return (
    <main className="pb-0">
      {layout.map((item) => {
        const Component = COMPONENT_MAP[item.sectionKey];
        if (!Component) return null;
        return (
          <PreviewVisible key={item.instanceId} id={item.instanceId} fallback={false}>
            <PreviewSection id={item.instanceId}>
              <SectionInstanceProvider value={item.instanceId}>
                <Component />
              </SectionInstanceProvider>
            </PreviewSection>
          </PreviewVisible>
        );
      })}
    </main>
  );
}
