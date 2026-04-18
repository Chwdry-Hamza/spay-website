import Link from "next/link";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <main className="bg-white min-h-screen overflow-y-auto policy-scroll">
      {/* Header */}
      <header className="w-full max-w-410 mx-auto px-4 md:px-8 py-4 md:py-8">
        <Link href="/" className="text-zinc-900 font-black text-xl md:text-2xl tracking-tight hover:text-zinc-600 transition-colors">
          SICASH
        </Link>
      </header>

      {/* Title Section */}
      <section className="w-full max-w-410 mx-auto px-4 md:px-8 pt-12 md:pt-24 pb-8 md:pb-16">
        <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 md:mb-8">
          COOKIE POLICY
        </h1>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-410 mx-auto px-4 md:px-8 pb-16 md:pb-24">

        {/* 1. What Are Cookies */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 md:mb-6">1. WHAT ARE COOKIES?</h2>
          <p className="text-zinc-700 leading-relaxed">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don&apos;t have to keep re-entering them whenever you come back to the site or browse from one page to another.
          </p>
        </div>

        {/* 2. How We Use Cookies */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 md:mb-6">2. HOW WE USE COOKIES</h2>
          <p className="text-zinc-700 leading-relaxed mb-6">
            We use cookies to ensure the proper functioning of the website, analyze traffic, and personalize content. We categorize the cookies we use as follows:
          </p>
          <ul className="text-zinc-700 leading-relaxed space-y-4">
            <li>&#8226; <strong>Strictly Necessary:</strong> These cookies are essential for you to browse the website and use its features. Without these cookies, services you have asked for cannot be provided.</li>
            <li>&#8226; <strong>Performance/Analytics:</strong> These cookies collect information about how visitors use a website, for instance, which pages visitors go to most often. All information these cookies collect is aggregated and therefore anonymous.</li>
            <li>&#8226; <strong>Functional:</strong> These allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.</li>
            <li>&#8226; <strong>Targeting/Marketing:</strong> These cookies are used to deliver adverts more relevant to you and your interests.</li>
          </ul>
        </div>

        {/* 3. Cookies We Collect */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 md:mb-6">3. COOKIES WE COLLECT</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            Below is a detailed list of the cookies used on our website:
          </p>

          {/* Cookie Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left py-4 pr-4 text-zinc-600 font-medium">Cookie Name</th>
                  <th className="text-left py-4 pr-4 text-zinc-600 font-medium">Duration</th>
                  <th className="text-left py-4 text-zinc-600 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">__hssrc</td>
                  <td className="py-4 pr-4">Session</td>
                  <td className="py-4">Set by HubSpot. Used to determine if the user has restarted their browser.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">__hstc</td>
                  <td className="py-4 pr-4">6 months</td>
                  <td className="py-4">The main HubSpot cookie for tracking visitors. It contains the domain, view timestamps (first, last, current), and the session count.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">hubspotutk</td>
                  <td className="py-4 pr-4">6 months</td>
                  <td className="py-4">Set by HubSpot. Used to track visitor identity. It allows associating visit history when a form is filled out later.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">_cfuvid</td>
                  <td className="py-4 pr-4">Session</td>
                  <td className="py-4">Set by Cloudflare. Used for rate limiting and security purposes to distinguish users from bots.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">_fbp</td>
                  <td className="py-4 pr-4">3 months</td>
                  <td className="py-4">Set by Facebook. Used to display advertisements and for retargeting users after visiting the website.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">_ga</td>
                  <td className="py-4 pr-4">2 years</td>
                  <td className="py-4">Set by Google Analytics. Used to distinguish unique users by assigning a randomly generated client identifier.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">_ga_9ETYQ7KSE2</td>
                  <td className="py-4 pr-4">2 years</td>
                  <td className="py-4">Set by Google Analytics 4. Stores session state and links user actions within the current visit.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-ad_personalization</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores the user&apos;s consent status for cookies used for ad personalization.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-ad_storage</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores user consent for storage of advertising-related data (e.g., for Google Ads).</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-ad_user_data</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores consent for sending user data to advertising systems (e.g., Google).</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-analytics_storage</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores the user&apos;s consent status for analytical cookies (statistics collection).</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-functionality_storage</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores consent for functional cookies, necessary for specific site features.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-personalization_storage</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores consent for cookies used for content personalization (e.g., recommendations).</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">fs-consent-security_storage</td>
                  <td className="py-4 pr-4">12 months</td>
                  <td className="py-4">Stores consent for security-related cookies.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">intercom-id-gnww1zdg</td>
                  <td className="py-4 pr-4">9 months</td>
                  <td className="py-4">Set by Intercom. Used to identify a unique visitor for chat support.</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 pr-4 font-semibold">intercom-device-id-gnww1zdg</td>
                  <td className="py-4 pr-4">9 months</td>
                  <td className="py-4">Set by Intercom. Identifies the user&apos;s device to preserve chat history across visits.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. How to Control Cookies */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 md:mb-6">4. HOW TO CONTROL COOKIES</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            You have the right to accept or reject cookies. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            For more information about how to manage cookies in your browser, please visit the developer&apos;s help page for your specific browser (Google Chrome, Safari, Firefox, etc.).
          </p>
        </div>

        {/* 5. Updates to This Policy */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-4 md:mb-6">5. UPDATES TO THIS POLICY</h2>
          <p className="text-zinc-700 leading-relaxed">
            We may update this Cookie Policy from time to time. We encourage you to periodically review this page to stay informed about any changes.
          </p>
        </div>

      </section>

      <Footer />
    </main>
  );
}
