import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PerformanceScripts from "@/components/cms/PerformanceScripts";
import AppHeader from "@/components/AppHeader";
import { getRouteSeoPage, getSeoSetting } from "@/lib/cms";
import { buildMetadataFromCMS } from "@/lib/cms-meta";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSeoSetting();
  const page = await getRouteSeoPage("/e-sign-consent", "E-Sign Consent", "Legal");
  return buildMetadataFromCMS({
    seo: page?.seo,
    title: page?.title || "E-Sign Consent",
    description: page?.excerpt,
    path: "/e-sign-consent",
    site,
  });
}

export default function ESignConsentPage() {
  const subheadingClass = "text-xl font-semibold text-white mt-6 mb-3";
  const linkStyle = { color: "#46F1C5" } as const;

  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-24 pb-16">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">E-SIGN &amp; ELECTRONIC</span>{" "}
            <span style={{ color: "#46F1C5" }}>COMMUNICATIONS NOTICE</span>
          </h1>
          <p className="text-sm mb-10" style={{ color: "#46F1C5" }}>
            Last updated: November 24, 2025
          </p>

          <div
            className="space-y-4 text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", color: "#A6AABE" }}
          >
            <h3 className={subheadingClass}>Your Consent to Electronic Delivery</h3>
            <p>(&ldquo;Consent Statement&rdquo;)</p>
            <p>You are applying for a Rain Card. If you consent to this Consent Statement for this Program, it applies even if you do not obtain (or are not offered) a Rain Card.</p>
            <p>Your affirmative consent to this E-sign &amp; Electronic Communications Notice (&ldquo;Consent&rdquo;) permits Us to provide you such Communications electronically, enables you to sign and authorize Communications electronically through the use of the Dashboard or API&rsquo;s provided by Rain (the &ldquo;Dashboard&rdquo;, &ldquo;Platform&rdquo; or &ldquo;Service&rdquo;), and allows Rain and its partners to collect such e-signings. If you do not consent to electronic delivery of Communications, you will not be able to use the Service. By registering for a Rain Account, applying for a card, or accessing Rain Dashboard, you agree that such registration constitutes your electronic signature, and you consent to us providing notices to you, your Company Administrators, and Company Users, including in each case those required by law, and you shall ensure that all Company Administrators and Company Users consent to receiving User Notifications, electronically. You understand that this consent has the same legal effect as a physical signature.</p>
            <p>You have the right to receive legal disclosures, notices, and communications (together, the &ldquo;Covered Items&rdquo;) in paper form by mail. We may instead provide these Covered Items to you electronically if you: give us your Consent to do so and satisfy the System Requirements below. For purposes of this Consent Statement, the Covered Items include all servicing and collection communications on your account, as well as all legal disclosures, notices and communications that Rain is required to provide in writing regarding the account.</p>
            <p>In this Consent Statement, &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to: Third National and our service providers.</p>

            <h3 className={subheadingClass}>Duration of Consent</h3>
            <p>Your Consent will remain effective until: (1) you or we have terminated the Program or your Card; (2) you opt-out of electronic communications. If you terminate your Card, your Consent will still continue with respect to the pre-termination rights of Rain (including rights created by your Consent to this Consent Statement). See your cardholder agreement for information on how to terminate your Card.</p>

            <h3 className={subheadingClass}>Methods of Providing Covered Items</h3>
            <p>In this document, &ldquo;provide&rdquo; means to deliver, make available, send, notify or similar term. We may provide the Covered Items electronically through files, including those in PDF format, downloaded from our website. It is your responsibility to review the Covered Items promptly, so you can take appropriate action.</p>

            <h3 className={subheadingClass}>Access to Paper Copies</h3>
            <p>You may make copies of the Covered Items by using the &ldquo;print&rdquo; or &ldquo;save&rdquo; functionality of the application in which you are viewing the Covered Items (e.g. Web browser, Adobe&reg; Reader&reg; software). We retain copies of the Covered Items for the time periods required by law and will provide you with copies upon request within those time periods. We do not necessarily retain copies for longer than is required by law. Save or print copies of Covered Items to ensure you have them when needed.</p>
            <p>You may request a paper copy at no cost of any Covered Item by calling us at 1 (302) 515-7246, emailing us at <a href="mailto:support@raincards.xyz" style={linkStyle}>support@raincards.xyz</a>.</p>

            <h3 className={subheadingClass}>Our Right to Send Paper</h3>
            <p>We reserve the right to provide the Covered Items in paper form at all times at our discretion even if you have given us Consent to provide it electronically. For example, but without limitation, we may do this if we have a system outage or if we suspect fraud.</p>

            <h3 className={subheadingClass}>Hardware and Software Requirements</h3>
            <p>To access and retain the Covered Items, you must have a computing or communications device with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>working Internet access</li>
              <li>a Web browser that supports 128-bit encryption (we support the latest version of Chrome&reg;, Firefox&reg;, Microsoft Edge&reg;, or Safari&reg;)</li>
              <li>16 MB of available memory (32 MB of RAM recommended) and</li>
              <li>a program that can view, save and print PDF files (such as Adobe&reg; Reader&reg; 4.0 or higher).</li>
            </ul>
            <p>You can download Adobe&reg; Reader&reg; by clicking here (clicking will open another browser window and take you to Adobe&rsquo;s website). By providing us your Consent, you confirm you meet all of the above System Requirements.</p>

            <h3 className={subheadingClass}>Withdrawing Consent</h3>
            <p>You are free to withdraw Your Consent at any time and at no charge to you. If you do withdraw Your Consent prior to the approval of your application, this will prevent you from receiving credit from us over the Internet. If at any time you wish to withdraw Your Consent, you may do this by emailing us at <a href="mailto:support@raincards.xyz" style={linkStyle}>support@raincards.xyz</a>. If you decide to withdraw Your Consent, the legal effectiveness, validity and/or enforceability of any prior electronic Disclosures will not be affected.</p>

            <h3 className={subheadingClass}>Acknowledging Ability to Access and Consenting to Electronic Communications</h3>
            <p>By confirming that you have read and agreed to these terms, you are confirming that (1) you have access to a computer system that meets the requirements set forth above; (2) you agree to receive Covered Items electronically; and (3) you are able to access and print or store information presented to you.</p>
          </div>
        </div>
      </section>
      <Footer />
      <PerformanceScripts perf={undefined} />
    </main>
  );
}
