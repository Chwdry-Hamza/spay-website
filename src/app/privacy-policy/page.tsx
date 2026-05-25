import Footer from "@/components/Footer";
import AppHeader from "@/components/AppHeader";

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-24 pb-16">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">PRIVACY</span>{" "}
            <span style={{ color: "#46F1C5" }}>POLICY</span>
          </h1>
          <p className="text-sm mb-10" style={{ color: "#46F1C5" }}>
            Effective Date: May 15, 2026 &middot; Last Updated: May 15, 2026
          </p>

          <div
            className="space-y-4 text-sm md:text-base leading-relaxed legal-content"
            style={{ fontFamily: "var(--font-inter)", color: "#A6AABE" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>1. Overview</h2>
            <p>
              This Privacy Policy describes how Novara Tech LLC (&quot;SPay&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
              uses, shares, and protects information about you when you use the SPay platform, SPay Spend
              Card, website at <a href="https://spay.finance" style={{ color: "#46F1C5" }}>spay.finance</a>, and related services (collectively,
              the &quot;Services&quot;).
            </p>
            <p>
              By using the Services, you agree to the practices described in this Privacy Policy. If you do
              not agree, please do not use the Services.
            </p>
            <p>
              We do not sell or rent your personal information. We share your information only as described
              in this Policy and as necessary to operate the Services and comply with applicable law.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information: name, date of birth, nationality, email address, phone number, and residential address</li>
              <li>Government-issued identification such as passport, national ID, or driver&apos;s license</li>
              <li>Financial information: cryptocurrency wallet addresses, linked wallet credentials, and bank or card details used for funding</li>
              <li>KYC/AML documentation including selfies, proof of address, and source-of-funds documentation</li>
              <li>Communications: support requests, emails, chat messages, and call recordings</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transaction data: Card usage, merchant details, amounts, currency, date, and location</li>
              <li>Device and log data: IP address, device identifiers, browser type, operating system, and access times</li>
              <li>Blockchain data: public on-chain data associated with wallets you link to SPay, including balances and transaction history</li>
              <li>Cookies and similar technologies used for authentication, preferences, analytics, and security</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Information From Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity verification providers: KYC/AML results and risk scores</li>
              <li>Card Issuer and Networks: transaction authorization data from Third National (Issuer), Visa, Mastercard, and acquirers</li>
              <li>Blockchain analytics providers: wallet risk assessment and sanctions screening</li>
              <li>Fraud prevention services: risk signals from anti-fraud and cybersecurity partners</li>
              <li>Credit reference agencies and payment processors</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>3. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain the Services, including issuing Cards and processing transactions</li>
              <li>To verify your identity and comply with KYC/AML, sanctions, counter-terrorism, and other legal obligations</li>
              <li>To monitor, detect, prevent, and investigate fraud, abuse, and security incidents</li>
              <li>To communicate with you about your account, Card activity, payment reminders, and service updates</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve, personalize, and develop the Services</li>
              <li>To enforce the Card Terms, User Agreement, and other applicable terms</li>
              <li>To comply with legal process, regulatory requests, and court orders</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>4. How We Share Your Information</h2>
            <p>We share information only with the following categories of recipients:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Card Issuer:</strong> Third National, the Issuer of your SPay Card, to enable Card issuance, transaction processing, and regulatory compliance</li>
              <li><strong className="text-white">Card Networks:</strong> Visa and Mastercard, to authorize and settle Card transactions</li>
              <li><strong className="text-white">Service Providers:</strong> Vendors who support our operations (cloud hosting, KYC/AML, analytics, customer support, fraud prevention) under confidentiality obligations</li>
              <li><strong className="text-white">Law Enforcement and Regulators:</strong> When required by applicable law, valid legal process, or to protect our rights, property, or safety</li>
              <li><strong className="text-white">Affiliates and Successors:</strong> In connection with a merger, acquisition, financing, or sale of all or part of our business</li>
              <li><strong className="text-white">With Your Consent:</strong> For purposes disclosed at the time of collection or as you otherwise authorize</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>5. International Data Transfers</h2>
            <p>
              SPay operates globally, and your information may be transferred to and processed in countries
              other than your country of residence, including the United States, Puerto Rico, and the jurisdictions
              where our service providers operate. We implement appropriate safeguards such as contractual
              clauses to protect your data during such transfers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>6. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to provide the Services, comply with our
              legal, regulatory, and tax obligations, resolve disputes, and enforce our agreements. Certain
              categories of data (such as transaction records and KYC documentation) are retained for a
              minimum period required under applicable anti-money laundering and financial services laws,
              typically five (5) to seven (7) years after account closure.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>7. Your Rights and Choices</h2>
            <p>Subject to applicable law and verification of your identity, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Access</strong> the personal data we hold about you</li>
              <li><strong className="text-white">Correct</strong> inaccurate or incomplete information</li>
              <li><strong className="text-white">Delete</strong> personal data, subject to our legal retention obligations</li>
              <li><strong className="text-white">Restrict or object</strong> to certain processing activities</li>
              <li><strong className="text-white">Data portability</strong> &mdash; receive your data in a structured, commonly used format</li>
              <li><strong className="text-white">Withdraw consent</strong> for processing based on consent, at any time</li>
              <li><strong className="text-white">Opt-out</strong> of marketing communications by following the unsubscribe instructions in any email or contacting us</li>
              <li><strong className="text-white">Lodge a complaint</strong> with your local data protection authority</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:hamza@spay.finance" style={{ color: "#46F1C5" }}>hamza@spay.finance</a>.
              We will respond within the timeframes required by applicable law.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>8. Security</h2>
            <p>
              We implement technical, organizational, and administrative safeguards designed to protect your
              personal data from unauthorized access, alteration, disclosure, and destruction, including
              encryption in transit and at rest, access controls, security audits, and employee training.
              However, no method of transmission or storage is completely secure, and we cannot guarantee
              absolute security.
            </p>
            <p>
              You are responsible for maintaining the security of your account credentials, including your
              password and any two-factor authentication methods. Never share your credentials with anyone.
              Report suspicious communications to <a href="mailto:hamza@spay.finance" style={{ color: "#46F1C5" }}>hamza@spay.finance</a>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>9. Children&apos;s Privacy</h2>
            <p>
              The Services are not directed to individuals under the age of 18 (or the legal age of majority
              in your jurisdiction, whichever is higher). We do not knowingly collect personal data from
              minors. If we learn we have collected personal data from a minor, we will delete it promptly.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>10. Cookies and Tracking</h2>
            <p>
              We use cookies, local storage, and similar technologies to operate the Services, remember your
              preferences, analyze usage, and enhance security. You can control cookies through your browser
              settings. Disabling essential cookies may affect the functionality of the Services. For more
              details, see our <a href="/cookie-policy" style={{ color: "#46F1C5" }}>Cookie Policy</a>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>11. Third-Party Links and Services</h2>
            <p>
              The Services may contain links to third-party websites, applications, and services, including
              blockchain networks and third-party wallets. We are not responsible for the privacy practices
              of these third parties. We encourage you to review their privacy policies before using them.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>12. Blockchain Transparency</h2>
            <p>
              Transactions recorded on public blockchains are inherently transparent, immutable, and beyond
              our control. Wallet addresses and on-chain activity you associate with SPay may be publicly
              visible. We cannot delete or alter information recorded on a blockchain.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              applicable law. We will post the updated policy on this page and update the &quot;Last updated&quot;
              date above. Material changes will be communicated via email or in-app notice. Your continued
              use of the Services after the effective date constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>14. Contact Us</h2>
            <p>
              If you have questions, concerns, or complaints about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p>
              <strong className="text-white">Novara Tech LLC (SPay)</strong><br />
              Email: <a href="mailto:hamza@spay.finance" style={{ color: "#46F1C5" }}>hamza@spay.finance</a><br />
              Phone: +971 55 947 6972
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
