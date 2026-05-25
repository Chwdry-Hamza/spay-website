import Footer from "@/components/Footer";
import AppHeader from "@/components/AppHeader";

const SUPPORT_EMAIL = "support@spay.finance";
const GENERAL_EMAIL = "it@spay.finance";
const SUPPORT_PHONE_DISPLAY = "+971 55 947 6972";
const SUPPORT_PHONE_TEL = "+971559476972";

export default function SupportPage() {
  const accent = "#46F1C5";
  const body = "#A6AABE";
  const headingFont = { fontFamily: "var(--font-space-grotesk)" } as const;
  const bodyFont = { fontFamily: "var(--font-inter)" } as const;

  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />

      <section className="relative overflow-hidden pt-16 sm:pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute left-1/2 top-32 -translate-x-1/2 w-[80%] h-[60%] blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(70,241,197,0.10) 0%, rgba(14,46,46,0.4) 35%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-14 md:mb-20">
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4"
              style={{ color: accent, ...bodyFont }}
            >
              We&rsquo;re here to help
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={headingFont}
            >
              <span className="text-white">GET IN </span>
              <span style={{ color: accent }}>TOUCH</span>
            </h1>
            <p
              className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: body, ...bodyFont }}
            >
              Have a question about your SPay account, a transaction, or anything
              else? Our team is ready to assist. Reach out through any of the
              channels below and we&rsquo;ll get back to you within one business
              day.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16">
            {/* Email */}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="group relative rounded-2xl p-6 md:p-7 transition-all duration-200 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(160deg, rgba(14,46,46,0.45) 0%, rgba(9,14,28,0.6) 100%)",
                border: "1px solid rgba(70,241,197,0.18)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "0 0 40px -10px rgba(70,241,197,0.4)" }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(70,241,197,0.1)",
                  border: `1px solid ${accent}`,
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-2"
                style={{ color: accent, ...bodyFont }}
              >
                Email Support
              </p>
              <h3
                className="text-xl md:text-2xl font-bold text-white mb-2"
                style={headingFont}
              >
                {SUPPORT_EMAIL}
              </h3>
              <p className="text-sm" style={{ color: body, ...bodyFont }}>
                For account, card, and transaction issues. Replies within 24 hours
                on business days.
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${SUPPORT_PHONE_TEL}`}
              className="group relative rounded-2xl p-6 md:p-7 transition-all duration-200 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(160deg, rgba(14,46,46,0.45) 0%, rgba(9,14,28,0.6) 100%)",
                border: "1px solid rgba(70,241,197,0.18)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "0 0 40px -10px rgba(70,241,197,0.4)" }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(70,241,197,0.1)",
                  border: `1px solid ${accent}`,
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-2"
                style={{ color: accent, ...bodyFont }}
              >
                Phone Support
              </p>
              <h3
                className="text-xl md:text-2xl font-bold text-white mb-2"
                style={headingFont}
              >
                {SUPPORT_PHONE_DISPLAY}
              </h3>
              <p className="text-sm" style={{ color: body, ...bodyFont }}>
                Speak to a live agent for urgent card or fraud issues. Available
                during support hours.
              </p>
            </a>

            {/* Hours */}
            <div
              className="relative rounded-2xl p-6 md:p-7"
              style={{
                background:
                  "linear-gradient(160deg, rgba(14,46,46,0.45) 0%, rgba(9,14,28,0.6) 100%)",
                border: "1px solid rgba(70,241,197,0.18)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(70,241,197,0.1)",
                  border: `1px solid ${accent}`,
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-2"
                style={{ color: accent, ...bodyFont }}
              >
                Support Hours
              </p>
              <h3
                className="text-xl md:text-2xl font-bold text-white mb-3"
                style={headingFont}
              >
                Mon &ndash; Fri
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: body, ...bodyFont }}
              >
                9:00 AM &ndash; 6:00 PM GST
                <br />
                <span style={{ color: "#6b7280" }}>
                  Closed on UAE public holidays
                </span>
              </p>
            </div>
          </div>

          {/* Secondary contact */}
          <div
            className="rounded-2xl p-6 md:p-10 mb-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(70,241,197,0.06) 0%, rgba(14,46,46,0.4) 100%)",
              border: "1px solid rgba(70,241,197,0.12)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  style={headingFont}
                >
                  General <span style={{ color: accent }}>inquiries</span>
                </h2>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: body, ...bodyFont }}
                >
                  Press, partnerships, careers, or feedback &mdash; we read every
                  message. For account-specific questions, please use the channels
                  above so we can verify your identity faster.
                </p>
              </div>
              <div className="md:text-right">
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-2"
                  style={{ color: accent, ...bodyFont }}
                >
                  Drop us a line
                </p>
                <a
                  href={`mailto:${GENERAL_EMAIL}`}
                  className="text-lg md:text-2xl font-bold text-white hover:opacity-80 transition-opacity inline-block"
                  style={headingFont}
                >
                  {GENERAL_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* FAQ hint */}
          <p
            className="text-center text-sm"
            style={{ color: body, ...bodyFont }}
          >
            Looking for legal or compliance info? See our{" "}
            <a
              href="/privacy-policy"
              className="hover:opacity-80 transition-opacity"
              style={{ color: accent }}
            >
              Privacy Policy
            </a>
            ,{" "}
            <a
              href="/card-terms"
              className="hover:opacity-80 transition-opacity"
              style={{ color: accent }}
            >
              Card Terms
            </a>
            , or{" "}
            <a
              href="/prohibited-activities"
              className="hover:opacity-80 transition-opacity"
              style={{ color: accent }}
            >
              Prohibited Activities
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
