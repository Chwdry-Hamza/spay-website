"use client";

export default function TransferSection() {
  const fontFamily = 'var(--font-space-grotesk)';

  return (
    <section
      id="transfer"
      className="relative py-12 md:py-32 overflow-hidden"
      style={{ background: '#090e1c', fontFamily }}
    >
      {/* Mobile + Tablet glow behind phone */}
      <div
        className="lg:hidden absolute pointer-events-none"
        style={{
          left: '50%',
          bottom: '8%',
          transform: 'translateX(-50%)',
          width: '420px',
          height: '360px',
          maxWidth: '95%',
          background:
            'radial-gradient(ellipse 190px 200px at 50% 55%, #0e2e2e 0%, rgba(14,46,46,0.7) 30%, rgba(14,46,46,0.35) 55%, rgba(14,46,46,0.12) 75%, transparent 90%)',
        }}
      />

      {/* Soft teal radial glow center — fades fully to the section bg #090e1c on all edges so no seam shows */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{
          right: '-260px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1400px',
          height: '820px',
          background:
            'radial-gradient(ellipse 620px 420px at 62% 50%, #0e2e2e 0%, #0e2e2e 26%, rgba(14,46,46,0.75) 48%, rgba(14,46,46,0.4) 65%, rgba(14,46,46,0.15) 82%, transparent 96%)',
        }}
      />

      {/* Mobile + Tablet Layout */}
      <div className="lg:hidden relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-4 sm:mb-5 md:mb-6 text-center"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
        >
          TRANSFERS WITHOUT BARRIERS
        </p>

        {/* Main Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5 md:mb-6 text-center"
          style={{ fontFamily }}
        >
          SEND <span style={{ color: '#46F1C5' }}>CRYPTO</span> EASILY, ANYWHERE, TO ANYONE
        </h2>

        {/* Subtitle */}
        <p
          className="text-[11px] sm:text-xs md:text-base mb-6 sm:mb-8 md:mb-10 leading-relaxed text-center max-w-xl md:max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
        >
          Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA bank accounts, and seamlessly send crypto assets with a single tap.
        </p>

        {/* Phone Mockup */}
        <div className="relative w-full flex justify-center">
          <img
            src="/paymentMobile.png"
            alt="SPay transfer mockup"
            className="relative w-64 sm:w-72 md:w-96 h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-6">
          {/* Left Content */}
          <div className="max-w-md lg:max-w-lg xl:max-w-xl">
            <p
              className="text-[11px] lg:text-xs xl:text-sm uppercase mb-3 lg:mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
            >
              TRANSFERS WITHOUT BARRIERS
            </p>
            <h2
              className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 lg:mb-6"
              style={{ fontFamily }}
            >
              SEND <span style={{ color: '#46F1C5' }}>CRYPTO</span> EASILY,
              <br />
              ANYWHERE, TO ANYONE
            </h2>
            <p
              className="text-xs lg:text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
            >
              Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA
              bank accounts, and seamlessly send crypto assets with a single tap.
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative shrink-0 w-[320px] lg:w-[420px] xl:w-[500px] h-[420px] lg:h-[520px] xl:h-[580px] flex items-center justify-end ml-auto lg:translate-x-12 xl:translate-x-20">
            <img
              src="/paymentMobile.png"
              alt="SPay transfer mockup"
              className="w-72 lg:w-88 xl:w-96 h-auto object-contain"
              />
            <div className="absolute bottom-0 right-10 w-48 lg:w-64 h-36 lg:h-48 bg-linear-to-t from-zinc-400/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
