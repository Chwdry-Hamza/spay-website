import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import AppHeader from "@/components/AppHeader";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/prohibited-activities", "Prohibited Activities", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "Prohibited Activities",
    description: page?.excerpt,
    path: "/prohibited-activities",
    site,
  });
}

export default function ProhibitedActivitiesPage() {
  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-24 pb-16">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">PROHIBITED</span>{" "}
            <span style={{ color: "#46F1C5" }}>ACTIVITIES</span>
          </h1>
          <p className="text-sm mb-10" style={{ color: "#46F1C5" }}>
            Effective Date: May 15, 2026 &middot; Last Updated: May 15, 2026
          </p>

          <div
            className="space-y-4 text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", color: "#A6AABE" }}
          >
            <p>
              By using your SPay Card, you agree not to engage in any of the activities listed below.
              This list is incorporated by reference into the <a href="/card-terms" style={{ color: "#46F1C5" }}>SPay Spend Card Terms</a>.
              Violation of this policy may result in suspension or termination of your Card privileges,
              and may expose you to civil or criminal liability under applicable law.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>1. Illegal and Regulated Activities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Illegal drugs or controlled substances, including narcotics, synthetic drugs, and drug paraphernalia</li>
              <li>Cannabis and marijuana-related products, including dispensaries and cultivation suppliers, regardless of local legality</li>
              <li>Firearms, ammunition, and weapons, including gun parts, accessories, explosives, and related items</li>
              <li>Human trafficking, forced labor, or any activity that exploits individuals</li>
              <li>Child sexual abuse material or any content sexually exploiting minors</li>
              <li>Counterfeit goods, including forged currency, fake identification documents, or pirated intellectual property</li>
              <li>Stolen property or goods acquired through theft or unauthorized access</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>2. Financial Crimes and Fraud</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Money laundering or transactions intended to conceal proceeds of illegal activity</li>
              <li>Terrorism financing or transactions involving sanctioned individuals or entities</li>
              <li>Fraudulent or deceptive practices, including phishing, identity theft, and account takeover schemes</li>
              <li>Unauthorized transactions using stolen payment credentials or accounts</li>
              <li>Pyramid schemes, Ponzi schemes, or multi-level marketing structures where returns depend primarily on recruitment</li>
              <li>Unregistered securities or investment contracts that have not complied with applicable securities laws</li>
              <li>Shell company transactions structured to evade reporting requirements</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>3. Regulated Industries</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gambling, including online casinos, sports betting, lottery tickets, and race track wagers</li>
              <li>Adult entertainment, including pornography, escort services, and adult dating services</li>
              <li>Tobacco products, including cigarettes, e-cigarettes, vaping products, and smokeless tobacco</li>
              <li>Prescription pharmaceuticals from unlicensed or non-compliant sources</li>
              <li>Unregistered money services, including unlicensed money transmission, remittance, or currency exchange</li>
              <li>Timeshares and high-pressure sales schemes for vacation properties</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>4. Cryptocurrency and Digital Asset Restrictions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Purchase of cryptocurrency or other digital or virtual currencies with your SPay Card</li>
              <li>Peer-to-peer crypto exchanges or unlicensed digital asset platforms</li>
              <li>Initial coin offerings (ICOs) or token sales not registered with applicable regulators</li>
              <li>Transactions involving sanctioned addresses or wallets on blockchain networks</li>
              <li>Privacy coins or mixers designed to obscure transaction origin</li>
              <li>NFTs that infringe intellectual property or depict illegal content</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>5. Cash-Like Transactions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Travelers checks, money orders, and wire transfers</li>
              <li>Foreign currency purchases outside of ordinary travel and commerce</li>
              <li>Person-to-person money transfers and account-funding transactions that convert card balance into cash equivalents</li>
              <li>Third-party bill payment services not made directly with the merchant</li>
              <li>Cash advances and balance transfers are not available under the Card Terms</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>6. Sanctions and Restricted Jurisdictions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transactions with individuals or entities identified on the U.S. Office of Foreign Assets Control (OFAC) Specially Designated Nationals list</li>
              <li>Transactions in or benefiting comprehensively sanctioned jurisdictions, including Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk regions</li>
              <li>Use of the Card by U.S. citizens or residents (this Card is intended for users outside the United States only)</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>7. Other Restricted Uses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any activity that violates applicable law in the cardholder&apos;s jurisdiction, the merchant&apos;s jurisdiction, or the Issuer&apos;s jurisdiction</li>
              <li>Business or commercial use (this Card is for personal, family, or household use only)</li>
              <li>Expenses not incurred by the cardholder personally</li>
              <li>Activities that violate Card Network rules (Visa, Mastercard) or Issuer policies</li>
              <li>High-risk merchant categories as determined by the Issuer or Card Network</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>Notice</h2>
            <p>
              This list is not exhaustive. SPay and the Issuer reserve the right to deny, block, or reverse
              any transaction for any reason, including suspected fraud, non-compliance with applicable law,
              or indication of increased risk. If you have questions about a specific merchant or transaction
              type, please contact us at <a href="mailto:hamza@spay.finance" style={{ color: "#46F1C5" }}>hamza@spay.finance</a> before
              completing the transaction.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
