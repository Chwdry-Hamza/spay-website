import Link from "next/link";
import Footer from "@/components/Footer";
import AppHeader from "@/components/AppHeader";

export default function OTCDeskPage() {
  return (
    <main className="min-h-screen" style={{ background: "#090e1c" }}>
      <AppHeader />
      {/* Hero Section */}
      <section className="relative min-h-fit md:min-h-screen overflow-hidden pt-16 sm:pt-20" style={{ background: "#090e1c" }}>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-20 md:pt-16 pb-16 md:pb-8 text-center">
          <h1
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 md:mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block"><span>SECURE</span> OTC</span>
            <span className="block">TRADING FOR</span>
            <span className="block">YOUR <span style={{ color: "#46F1C5" }}>BUSINESS</span></span>
          </h1>
          <p className="text-lg md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 md:mb-10" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>
            Open IBAN accounts in EUR, USD and manage transactions, and take full control of your finances
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#demo"
              className="px-10 py-4 bg-zinc-600/60 hover:bg-zinc-500/60 text-white font-bold text-sm tracking-wider backdrop-blur-sm rounded transition-colors min-w-50"
            >
              REQUEST A DEMO
            </Link>
            <Link
              href="#demo"
              className="px-10 py-4 bg-zinc-700/60 hover:bg-zinc-600/60 text-white font-bold text-sm tracking-wider backdrop-blur-sm rounded transition-colors min-w-50"
            >
              OPEN AN ACCOUNT
            </Link>
          </div>
        </div>

        {/* Crypto Coins - Hidden on mobile */}
        {/* Tether - Top Right */}
        <div className="hidden md:flex absolute top-[35%] right-[12%] w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 z-20">
          <div className="w-full h-full rounded-full bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-500 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center transform -rotate-12 border-2 border-zinc-300/50">
            <div className="w-[85%] h-[85%] rounded-full bg-linear-to-b from-zinc-300 to-zinc-400 flex items-center justify-center">
              <span className="text-zinc-600 font-bold text-xl md:text-2xl">₮</span>
            </div>
          </div>
        </div>

        {/* Bitcoin - Right */}
        <div className="hidden md:flex absolute top-[42%] right-[5%] w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 z-20">
          <div className="w-full h-full rounded-full bg-linear-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-amber-400/50">
            <div className="w-[88%] h-[88%] rounded-full bg-linear-to-b from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-amber-900 font-bold text-4xl md:text-5xl">₿</span>
            </div>
          </div>
        </div>

        {/* Binance - Right Middle */}
        <div className="hidden md:flex absolute top-[55%] right-[10%] w-16 h-16 md:w-22 md:h-22 lg:w-24 lg:h-24 z-20">
          <div className="w-full h-full rounded-full bg-linear-to-b from-zinc-600 via-zinc-700 to-zinc-900 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex items-center justify-center border-2 border-zinc-500/50">
            <div className="w-[85%] h-[85%] rounded-full bg-linear-to-b from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-2xl md:text-3xl">◆</span>
            </div>
          </div>
        </div>

        {/* Gold Coin (IOTA style) - Center */}
        <div className="hidden md:flex absolute top-[70%] left-1/2 -translate-x-1/2 w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 z-20">
          <div className="w-full h-full rounded-full bg-linear-to-b from-amber-300 via-amber-500 to-amber-800 shadow-[0_15px_50px_rgba(0,0,0,0.6)] flex items-center justify-center transform rotate-15 border-4 border-amber-400/40">
            <div className="w-[92%] h-[92%] rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-amber-800/50 rounded-sm shadow-inner" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ethereum - Left */}
        <div className="hidden md:flex absolute top-[60%] left-[18%] w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-20">
          <div className="w-full h-full rounded-full bg-linear-to-b from-white via-zinc-100 to-zinc-300 shadow-[0_12px_45px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-white/60">
            <div className="w-[90%] h-[90%] rounded-full bg-linear-to-b from-white to-zinc-200 flex items-center justify-center">
              <span className="text-zinc-600 text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">◇</span>
            </div>
          </div>
        </div>

        {/* Ripple - Right Bottom */}
        <div className="hidden md:flex absolute top-[72%] right-[18%] w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20">
          <div className="w-full h-full rounded-full bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-600 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-center transform -rotate-15 border-3 border-zinc-300/40">
            <div className="w-[90%] h-[90%] rounded-full bg-linear-to-b from-zinc-300 to-zinc-500 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-600 shadow-inner" />
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-600 shadow-inner" />
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-600 shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24" style={{ background: "#090e1c" }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            {/* Left Side - Features */}
            <div className="flex-1">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 md:mb-16 leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="block">WE SIMPLIFY FIAT-<span style={{ color: "#46F1C5" }}>CRYPTO</span></span>
                <span className="block">OPERATIONS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Feature 1 */}
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "#0e2e2e" }}>
                    <svg className="w-6 h-6" style={{ color: "#46F1C5" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>IBAN ACCOUNTS IN EUR OR USD</h3>
                  <p className="text-sm" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Safe and convenient accounts tailored to your business need</p>
                </div>

                {/* Feature 2 */}
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "#0e2e2e" }}>
                    <svg className="w-6 h-6" style={{ color: "#46F1C5" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>CRYPTO WALLETS FOR USDT, USDC, BTC AND ETH</h3>
                  <p className="text-sm" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Secure and easy wallet setup for seamless transactions</p>
                </div>

                {/* Feature 3 */}
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "#0e2e2e" }}>
                    <svg className="w-6 h-6" style={{ color: "#46F1C5" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>SIMPLE FIAT-CRYPTO EXCHANGE</h3>
                  <p className="text-sm" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Fast, transparent transactions with no hidden fees</p>
                </div>

                {/* Feature 4 */}
                <div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "#0e2e2e" }}>
                    <svg className="w-6 h-6" style={{ color: "#46F1C5" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>UNIFIED MANAGEMENT PLATFORM</h3>
                  <p className="text-sm" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>A single, intuitive platform to handle everything</p>
                </div>
              </div>
            </div>

            {/* Right Side - Laptop Mockup */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                {/* Radial glow behind the laptop — darker tone */}
                <div
                  className="absolute -inset-16 md:-inset-24 rounded-full blur-3xl pointer-events-none"
                  style={{ background: "radial-gradient(circle, #0e2e2e 0%, #0a1f1f 25%, transparent 75%)" }}
                />
                {/* Laptop Frame */}
                <div className="relative">
                  {/* Screen */}
                  <div className="bg-zinc-900 rounded-t-xl p-2 shadow-2xl">
                    <div className="bg-zinc-800 rounded-lg p-4 aspect-16/10">
                      {/* Dashboard Content */}
                      <div className="h-full flex flex-col">
                        {/* Top Stats */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-zinc-500 text-xs">Balance</p>
                            <p className="text-white text-2xl font-bold">254,596<span className="text-lg">04</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400 text-lg font-bold">32.5</p>
                            <p className="text-zinc-400 text-xs">ETH</p>
                          </div>
                        </div>
                        {/* Chart Area */}
                        <div className="flex-1 flex items-end">
                          <svg className="w-full h-20" viewBox="0 0 200 50">
                            <path d="M0,40 Q30,35 50,25 T100,30 T150,15 T200,20" fill="none" stroke="#ef4444" strokeWidth="2"/>
                          </svg>
                        </div>
                        {/* Bottom Stats */}
                        <div className="flex justify-between mt-4">
                          <div className="text-center">
                            <p className="text-white font-bold">6953.2</p>
                            <p className="text-zinc-500 text-xs">EUR</p>
                          </div>
                          <div className="text-center">
                            <p className="text-white font-bold">EUR</p>
                            <p className="text-zinc-500 text-xs">Currency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="bg-linear-to-b from-zinc-300 to-zinc-400 h-4 rounded-b-xl mx-8"></div>
                  <div className="bg-linear-to-b from-zinc-400 to-zinc-300 h-2 rounded-b-lg mx-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 rounded-t-[40px] md:rounded-t-[80px] -mt-8 md:-mt-16 relative z-10" style={{ background: "#090e1c" }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          {/* Title */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-wide text-center mb-10 md:mb-20"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block">A SIMPLE & <span style={{ color: "#46F1C5" }}>STRAIGHTFORWARD</span></span>
            <span className="block">PROCESS</span>
          </h2>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            {/* Left Side - Images - Hidden on mobile */}
            <div className="hidden md:block flex-1 relative min-h-80 md:min-h-112.5">
              {/* Radial glow behind fingerprint card + lock */}
              <div
                className="absolute -inset-16 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #0e2e2e 0%, #0a2020 30%, transparent 75%)" }}
              />
              {/* Fingerprint Card - 3D tilted */}
              <div className="absolute top-0 left-1/2 -translate-x-1/4 w-80 h-55" style={{transform: 'perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(5deg)'}}>
                <div className="w-full h-full bg-linear-to-br from-zinc-700 via-zinc-800 to-zinc-900 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-zinc-600/30 flex items-center justify-center">
                  {/* Fingerprint SVG */}
                  <svg viewBox="0 0 80 100" className="w-24 h-32 opacity-50">
                    <path d="M40 5 C20 5 10 25 10 50 C10 75 20 95 40 95" stroke="#aaa" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 15 C25 15 18 30 18 50 C18 70 25 85 40 85" stroke="#999" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 25 C30 25 25 35 25 50 C25 65 30 75 40 75" stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 35 C35 35 32 42 32 50 C32 58 35 65 40 65" stroke="#777" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 5 C60 5 70 25 70 50 C70 75 60 95 40 95" stroke="#aaa" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 15 C55 15 62 30 62 50 C62 70 55 85 40 85" stroke="#999" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 25 C50 25 55 35 55 50 C55 65 50 75 40 75" stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M40 35 C45 35 48 42 48 50 C48 58 45 65 40 65" stroke="#777" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              </div>

              {/* Lock Button with Glow Ring */}
              <div className="absolute bottom-0 left-0 w-48 h-48">
                {/* Outer glow */}
                <div
                  className="absolute inset-0 rounded-full blur-sm"
                  style={{ background: "linear-gradient(to bottom, rgba(14,46,46,0.6), transparent, rgba(14,46,46,0.3))" }}
                />
                {/* Outer ring */}
                <div className="absolute inset-2 rounded-full border-2" style={{ borderColor: "rgba(70,241,197,0.4)" }} />
                {/* Dark middle */}
                <div className="absolute inset-6 rounded-full bg-linear-to-b from-zinc-700 to-zinc-900 border border-zinc-600"></div>
                {/* Inner button */}
                <div className="absolute inset-10 rounded-full bg-linear-to-b from-zinc-600 to-zinc-800 flex items-center justify-center shadow-inner">
                  <div className="w-14 h-14 bg-linear-to-b from-white to-zinc-200 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-zinc-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Steps */}
            <div className="flex-1 space-y-6 md:space-y-10">
              {/* Step 1 */}
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 border border-zinc-700">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>ONBOARDING</h3>
                <p className="text-base" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Submit your documents and complete the KYB process through our secure platform</p>
              </div>

              {/* Step 2 */}
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 border border-zinc-700">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>ACTIVATE YOUR ACCOUNT</h3>
                <p className="text-base" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Gain access to your IBAN account</p>
              </div>

              {/* Step 3 */}
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 border border-zinc-700">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>MANAGE YOUR TRANSACTION</h3>
                <p className="text-base" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Exchange fiat and crypto or withdraw funds with full control at every step</p>
              </div>

              {/* Button */}
              <button className="px-8 py-4 bg-zinc-700 hover:bg-zinc-600 text-white font-bold text-sm tracking-wider rounded transition-colors mt-6">
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-32 relative overflow-hidden" style={{ background: "#090e1c" }}>
        {/* Light Streak Background Effect — teal glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-0 right-0 h-[400px] -translate-y-1/2 transform -skew-y-6 blur-3xl"
            style={{ background: "linear-gradient(to right, transparent, #0e2e2e, transparent)" }}
          />
          <div
            className="absolute top-1/2 left-0 right-0 h-[200px] -translate-y-1/2 transform -skew-y-6 blur-2xl"
            style={{ background: "linear-gradient(to right, transparent, #0e2e2e, transparent)" }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          {/* Title */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-wide text-center mb-12 md:mb-24"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">SOLUTIONS </span>
            <span style={{ color: "#46F1C5" }}>THAT SUPPORT YOUR</span>
            <span className="block" style={{ color: "#46F1C5" }}>BUSINESS </span>
            <span className="text-white">GROWTH</span>
          </h2>

          {/* Three Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* REABILITY */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border-2 border-zinc-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>REABILITY</h3>
              <p className="text-base" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Trusted processes that meet<br />international standards</p>
            </div>

            {/* SUPPORT */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border-2 border-zinc-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>SUPPORT</h3>
              <p className="text-base" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>A dedicated account manager<br />for every client</p>
            </div>

            {/* FLEXIBILITY */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border-2 border-zinc-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>FLEXIBILITY</h3>
              <p className="text-base" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>Tarif structures and transaction solutions<br />tailored to your requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="demo" className="py-16 md:py-32 relative overflow-hidden scroll-mt-20" style={{ background: "#090e1c" }}>
        {/* Particle/Glow Background Effect */}
        <div className="absolute inset-0">
          {/* Main glow */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gradient-radial from-amber-200/30 via-amber-100/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-gradient-radial from-amber-100/20 via-transparent to-transparent rounded-full blur-2xl"></div>

          {/* Particle dots */}
          <div className="absolute inset-0">
            <div className="absolute w-1 h-1 bg-white/40 rounded-full" style={{left: '12%', top: '15%', opacity: 0.4}} />
            <div className="absolute w-1 h-1 bg-white/60 rounded-full" style={{left: '8%', top: '25%', opacity: 0.6}} />
            <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{left: '25%', top: '12%', opacity: 0.3}} />
            <div className="absolute w-1 h-1 bg-white/50 rounded-full" style={{left: '18%', top: '35%', opacity: 0.5}} />
            <div className="absolute w-1 h-1 bg-white/40 rounded-full" style={{left: '32%', top: '20%', opacity: 0.4}} />
            <div className="absolute w-1 h-1 bg-white/70 rounded-full" style={{left: '15%', top: '45%', opacity: 0.7}} />
            <div className="absolute w-1 h-1 bg-white/35 rounded-full" style={{left: '40%', top: '30%', opacity: 0.35}} />
            <div className="absolute w-1 h-1 bg-white/55 rounded-full" style={{left: '22%', top: '55%', opacity: 0.55}} />
            <div className="absolute w-1 h-1 bg-white/45 rounded-full" style={{left: '35%', top: '42%', opacity: 0.45}} />
            <div className="absolute w-1 h-1 bg-white/65 rounded-full" style={{left: '10%', top: '65%', opacity: 0.65}} />
            <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{left: '28%', top: '70%', opacity: 0.3}} />
            <div className="absolute w-1 h-1 bg-white/50 rounded-full" style={{left: '45%', top: '25%', opacity: 0.5}} />
            <div className="absolute w-1 h-1 bg-white/40 rounded-full" style={{left: '38%', top: '58%', opacity: 0.4}} />
            <div className="absolute w-1 h-1 bg-white/60 rounded-full" style={{left: '20%', top: '78%', opacity: 0.6}} />
            <div className="absolute w-1 h-1 bg-white/35 rounded-full" style={{left: '50%', top: '35%', opacity: 0.35}} />
            <div className="absolute w-1 h-1 bg-white/55 rounded-full" style={{left: '5%', top: '50%', opacity: 0.55}} />
            <div className="absolute w-1 h-1 bg-white/45 rounded-full" style={{left: '42%', top: '68%', opacity: 0.45}} />
            <div className="absolute w-1 h-1 bg-white/70 rounded-full" style={{left: '30%', top: '85%', opacity: 0.7}} />
            <div className="absolute w-1 h-1 bg-white/25 rounded-full" style={{left: '48%', top: '48%', opacity: 0.25}} />
            <div className="absolute w-1 h-1 bg-white/60 rounded-full" style={{left: '14%', top: '88%', opacity: 0.6}} />
            <div className="absolute w-1.5 h-1.5 bg-white/50 rounded-full" style={{left: '26%', top: '38%', opacity: 0.5}} />
            <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full" style={{left: '36%', top: '52%', opacity: 0.4}} />
            <div className="absolute w-0.5 h-0.5 bg-white/60 rounded-full" style={{left: '44%', top: '18%', opacity: 0.6}} />
            <div className="absolute w-0.5 h-0.5 bg-white/45 rounded-full" style={{left: '16%', top: '72%', opacity: 0.45}} />
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
            {/* Left Side - Title */}
            <div className="flex-1">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-wide"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="block">BOOK A <span style={{ color: "#46F1C5" }}>FREE DEMO</span></span>
                <span className="block">WITH AN <span style={{ color: "#46F1C5" }}>EXPERT</span></span>
              </h2>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 w-full max-w-lg">
              <form className="space-y-8">
                {/* First Name */}
                <div>
                  <label className="text-sm tracking-wider mb-2 block" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>FIRST NAME</label>
                  <input
                    type="text"
                    placeholder="Jon Doe"
                    className="w-full bg-transparent border-b border-zinc-700 text-white py-3 focus:outline-none focus:border-amber-200 transition-colors placeholder:text-zinc-600"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label className="text-sm tracking-wider mb-2 block" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>BUSINESS EMAIL</label>
                  <input
                    type="email"
                    placeholder="JonDoe@company.com"
                    className="w-full bg-transparent border-b border-zinc-700 text-white py-3 focus:outline-none focus:border-amber-200 transition-colors placeholder:text-zinc-600"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-sm tracking-wider mb-2 block" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>PHONE NUMBER</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-transparent border-b border-zinc-700 text-white py-3 focus:outline-none focus:border-amber-200 transition-colors placeholder:text-zinc-600"
                  />
                </div>

                {/* Language Selection */}
                <div>
                  <label className="text-sm tracking-wider mb-4 block" style={{ color: "#A6AABE", fontFamily: "var(--font-inter)", fontWeight: 400 }}>* IN WHAT LANGUAGE SHOULD WE ANSWER?</label>
                  <div className="flex gap-8">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input type="radio" name="language" value="english" className="w-4 h-4 accent-amber-200" defaultChecked />
                      <span>English</span>
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input type="radio" name="language" value="ukranian" className="w-4 h-4 accent-amber-200" />
                      <span>Ukranian</span>
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input type="radio" name="language" value="russian" className="w-4 h-4 accent-amber-200" />
                      <span>Russian</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-4 bg-zinc-700 hover:bg-zinc-600 text-white font-bold text-sm tracking-wider rounded transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
