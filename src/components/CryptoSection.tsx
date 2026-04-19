"use client";

export default function CryptoSection() {
  return (
    <section id="crypto" className="relative md:min-h-screen overflow-hidden" style={{ background: '#090e1c' }}>
      {/* Mobile + Tablet Layout */}
      <div className="lg:hidden relative z-10 w-full px-4 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-16 md:pb-20 text-center">
        {/* Header */}
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-3 sm:mb-4"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
        >
          MANAGE CRYPTO
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          DEPOSIT AND INVEST WITH <span style={{ color: '#46F1C5' }}>SPAY</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl md:max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
        >
          Purchase, spend, sell, and hold cryptocurrencies, all from the convenience of your device. Delve into the world of digital currencies effortlessly.
        </p>

        {/* Phone Mockup - Mobile/Tablet with glow */}
        <div className="relative w-full flex justify-center items-center">
          <div
            className="absolute pointer-events-none"
            style={{
              width: '420px',
              height: '420px',
              maxWidth: '95%',
              background:
                'radial-gradient(ellipse 200px 240px at 50% 50%, #0e2e2e 0%, #0e2e2e 25%, rgba(14,46,46,0.7) 48%, rgba(14,46,46,0.3) 70%, transparent 92%)',
            }}
          />
          <img
            src="/paymentMobileTrade.png"
            alt="SPay trade mockup"
            className="relative w-56 sm:w-64 md:w-80 h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center min-h-screen">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between gap-8">
            {/* Left - Text Content */}
            <div className="max-w-xl">
              <p
                className="text-[11px] lg:text-xs xl:text-sm uppercase mb-3 lg:mb-4"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
              >
                MANAGE CRYPTO
              </p>
              <h2
                className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 lg:mb-6"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                DEPOSIT AND
                <br />
                INVEST WITH <span style={{ color: '#46F1C5' }}>SPAY</span>
              </h2>
              <p
                className="text-xs lg:text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
              >
                Purchase, spend, sell, and hold cryptocurrencies, all from the
                convenience of your device. Delve into the world of digital
                currencies effortlessly.
              </p>
            </div>

            {/* Right - Phone */}
            <div className="relative shrink-0 flex items-center justify-center ml-auto lg:translate-x-8 xl:translate-x-16">
              <div
                className="absolute pointer-events-none"
                style={{
                  width: '640px',
                  height: '640px',
                  background:
                    'radial-gradient(ellipse 300px 340px at 50% 50%, #0e2e2e 0%, #0e2e2e 25%, rgba(14,46,46,0.7) 48%, rgba(14,46,46,0.3) 70%, transparent 92%)',
                }}
              />
              <img
                src="/paymentMobileTrade.png"
                alt="SPay trade mockup"
                className="relative w-60 lg:w-72 xl:w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
