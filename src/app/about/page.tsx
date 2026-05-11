import Footer from "@/components/Footer";
import AppHeader from "@/components/AppHeader";

export default function AboutPage() {
  return (
    <main style={{ background: "#090e1c" }}>
      <AppHeader />
      {/* First Section - About with Background */}
      <section className="min-h-fit md:min-h-screen relative overflow-hidden pt-16 sm:pt-20">
        {/* Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          {/* Radial glow behind the SPAY watermark */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, #0e2e2e 0%, #0e2e2e 30%, transparent 75%)" }}
          />
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            {/* Large SPAY text in background — stretched to fill the header's content width */}
            <div
              className="text-zinc-700/30 font-bold leading-none select-none tracking-tighter whitespace-nowrap text-center"
              style={{ fontSize: "clamp(10rem, 38vw, 32rem)" }}
            >
              SPAY
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-32 pb-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 md:mb-10"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">ABOUT</span>{" "}
            <span style={{ color: "#46F1C5" }}>SPAY</span>
          </h1>

          <div className="max-w-3xl">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                color: "#A6AABE",
              }}
            >
              SPAY is a global innovative platform for unified financial management of fiat and
              cryptocurrencies. Using cutting-edge technologies it seamlessly integrates with other
              financial service providers allowing users to easily manage all their cards and accounts in
              one user-friendly mobile app. It also offers fiat accounts, a crypto wallet and the world&apos;s first
              card for both fiat and crypto with an easy switch. SPAY meets the highest standards of
              regulatory compliance and ensures advanced security measures to protect users&apos; funds.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative pb-8 md:pb-32" style={{ background: "#090e1c" }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            {/* Mission */}
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-4 md:mb-8"
                style={{ color: "#46F1C5", fontFamily: "var(--font-space-grotesk)" }}
              >
                MISSION
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#A6AABE" }}
              >
                Our mission is to make crypto spendable in everyday life. With the SPay card,
                your USDT, USDC, TRX, or ETH converts to fiat the moment you check out — tap
                at any store, swipe at a terminal, or pay online. No exchanges, no waiting,
                no friction between your crypto and the real world.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-4 md:mb-8"
                style={{ color: "#46F1C5", fontFamily: "var(--font-space-grotesk)" }}
              >
                VISION
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#A6AABE" }}
              >
                A world where holding crypto doesn&apos;t mean choosing between saving and spending.
                We&apos;re building the bridge that lets your digital assets work like cash —
                accepted anywhere a card is, settled instantly, and always under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collaborations Section */}
      <div style={{ background: "#090e1c" }}>
        <section
          className="relative py-8 md:py-24 overflow-hidden"
          style={{ background: "#090e1c" }}
        >
        {/* Marquee glow band */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-0 right-0 h-48 md:h-64 -translate-y-1/2 blur-2xl"
            style={{ background: "#0e2e2e" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <h2
            className="text-3xl md:text-6xl font-bold text-center mb-6 md:mb-16"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">OUR</span>{" "}
            <span style={{ color: "#46F1C5" }}>COLLABORATIONS</span>
          </h2>

          {/* Partner Logos - Marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-10 md:gap-20">
              {/* First set */}
              <div className="flex items-center gap-10 md:gap-20 shrink-0">
                {/* BitGo */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold">BitGo</span>
                </div>

                {/* FENIGE */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                  </svg>
                  <div>
                    <span className="text-xl font-bold tracking-wider">FENIGE</span>
                    <p className="text-zinc-500 text-xs">all about payments</p>
                  </div>
                </div>

                {/* INTERCOM */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <rect x="6" y="7" width="2" height="8" rx="1" fill="#18181b" />
                    <rect x="9" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="12" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="15" y="7" width="2" height="8" rx="1" fill="#18181b" />
                  </svg>
                  <span className="text-xl font-semibold tracking-wide">INTERCOM</span>
                </div>

                {/* PLAID */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white/70 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-xl font-bold tracking-wider">PLAID</span>
                </div>

                {/* QUICKO */}
                <div className="flex items-center gap-1 text-white/70">
                  <span className="text-xl">((</span>
                  <span className="text-xl font-bold tracking-widest">QUICKO</span>
                </div>

                {/* onfido */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/70 rounded-full" />
                  </div>
                  <span className="text-xl font-medium">onfido</span>
                </div>

                {/* Verestro */}
                <div className="text-white/70">
                  <span className="text-xl font-light tracking-wide">Verestro</span>
                  <span className="text-amber-500 text-lg">™</span>
                  <p className="text-zinc-500 text-xs tracking-wider">Fintech as a service</p>
                </div>

                {/* YAPILY */}
                <div className="text-white/70">
                  <span className="text-xl font-black tracking-wider">YAPILY</span>
                </div>

                {/* BINARYX */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l10 10-10 10L2 12 12 2z" />
                  </svg>
                  <span className="text-xl font-bold tracking-wider">BINARYX</span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-10 md:gap-20 shrink-0">
                {/* BitGo */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold">BitGo</span>
                </div>

                {/* FENIGE */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                  </svg>
                  <div>
                    <span className="text-xl font-bold tracking-wider">FENIGE</span>
                    <p className="text-zinc-500 text-xs">all about payments</p>
                  </div>
                </div>

                {/* INTERCOM */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <rect x="6" y="7" width="2" height="8" rx="1" fill="#18181b" />
                    <rect x="9" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="12" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="15" y="7" width="2" height="8" rx="1" fill="#18181b" />
                  </svg>
                  <span className="text-xl font-semibold tracking-wide">INTERCOM</span>
                </div>

                {/* PLAID */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white/70 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-xl font-bold tracking-wider">PLAID</span>
                </div>

                {/* QUICKO */}
                <div className="flex items-center gap-1 text-white/70">
                  <span className="text-xl">((</span>
                  <span className="text-xl font-bold tracking-widest">QUICKO</span>
                </div>

                {/* onfido */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/70 rounded-full" />
                  </div>
                  <span className="text-xl font-medium">onfido</span>
                </div>

                {/* Verestro */}
                <div className="text-white/70">
                  <span className="text-xl font-light tracking-wide">Verestro</span>
                  <span className="text-amber-500 text-lg">™</span>
                  <p className="text-zinc-500 text-xs tracking-wider">Fintech as a service</p>
                </div>

                {/* YAPILY */}
                <div className="text-white/70">
                  <span className="text-xl font-black tracking-wider">YAPILY</span>
                </div>

                {/* BINARYX */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l10 10-10 10L2 12 12 2z" />
                  </svg>
                  <span className="text-xl font-bold tracking-wider">BINARYX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  );
}
