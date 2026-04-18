"use client";

export default function TransferSection() {
  const fontFamily = 'var(--font-space-grotesk)';

  return (
    <section
      id="transfer"
      className="relative py-12 md:py-32 overflow-hidden"
      style={{ background: '#090e1c', fontFamily }}
    >
      {/* Mobile glow behind phone — sharper top fade so it doesn't bleed into the section above */}
      <div
        className="md:hidden absolute pointer-events-none"
        style={{
          left: '50%',
          bottom: '5%',
          transform: 'translateX(-50%)',
          width: '480px',
          height: '460px',
          background:
            'radial-gradient(ellipse 220px 260px at 50% 60%, #0e2e2e 0%, #0e2e2e 25%, rgba(14,46,46,0.7) 48%, rgba(14,46,46,0.3) 70%, transparent 92%)',
        }}
      />

      {/* Soft teal radial glow center — fades fully to the section bg #090e1c on all edges so no seam shows */}
      <div
        className="hidden md:block absolute pointer-events-none"
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

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <p
          className="text-[10px] sm:text-xs uppercase mb-5 sm:mb-6 text-center"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
        >
          TRANSFERS WITHOUT BARRIERS
        </p>

        {/* Main Heading */}
        <h2
          className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5 sm:mb-6 text-center"
          style={{ fontFamily }}
        >
          SEND <span style={{ color: '#46F1C5' }}>CRYPTO</span> EASILY, ANYWHERE, TO ANYONE
        </h2>

        {/* Subtitle */}
        <p
          className="text-[11px] sm:text-xs mb-8 sm:mb-10 leading-relaxed text-center"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}
        >
          Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA bank accounts, and seamlessly send crypto assets with a single tap.
        </p>

        {/* Contacts Row */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex -space-x-2">
            <AvatarMobile img="👨" />
            <AvatarMobile img="👩" />
            <AvatarMobile img="👨‍🦱" />
            <AvatarMobile img="👩‍🦰" />
            <AvatarMobile img="👱‍♀️" />
          </div>

          <a
            href="https://apps.apple.com/app/sicash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 text-white rounded-full px-5 py-3 hover:bg-zinc-700 transition-colors"
            style={{ fontFamily }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-xs font-medium tracking-wide">ALL CONTACTS</span>
          </a>
        </div>

        <p
          className="text-sm text-center mb-10"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
        >
          Skip the numbers – send money straight to your contacts instantly
        </p>

        {/* Phone Mockup - Mobile */}
        <div className="relative w-full flex justify-center">
          <img
            src="/paymentMobile.png"
            alt="SPay transfer mockup"
            className="w-52 sm:w-60 h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
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
              className="text-xs lg:text-sm mb-8 lg:mb-10 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}
            >
              Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA
              bank accounts, and seamlessly send crypto assets with a single tap.
            </p>

            {/* Contacts Row */}
            <div className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-6">
              <div className="flex -space-x-3">
                <Avatar bg="bg-amber-200" />
                <Avatar bg="bg-zinc-300" />
                <Avatar bg="bg-amber-300" />
                <Avatar bg="bg-zinc-400" />
                <Avatar bg="bg-amber-100" />
              </div>

              <a
                href="https://apps.apple.com/app/sicash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 lg:gap-3 bg-zinc-800 text-white rounded-full px-4 py-2.5 lg:px-6 lg:py-3 hover:bg-zinc-700 transition-colors"
                style={{ fontFamily }}
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-xs lg:text-sm font-medium tracking-wide">ALL CONTACTS</span>
              </a>
            </div>

            <p
              className="text-xs lg:text-sm"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
            >
              Skip the numbers – send money straight to your contacts instantly
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative shrink-0 w-[320px] lg:w-[420px] xl:w-[500px] h-[420px] lg:h-[520px] xl:h-[580px] flex items-center justify-center">
            <img
              src="/paymentMobile.png"
              alt="SPay transfer mockup"
              className="w-52 lg:w-64 xl:w-72 h-auto object-contain"
              />
            <div className="absolute bottom-0 right-10 w-48 lg:w-64 h-36 lg:h-48 bg-linear-to-t from-zinc-400/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ bg }: { bg: string }) {
  return (
    <div className={`w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 ${bg} rounded-full border-[3px] lg:border-4 border-white shadow-md`} />
  );
}

function AvatarMobile({ img }: { img: string }) {
  return (
    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-zinc-200 rounded-full border-[3px] border-white shadow-md flex items-center justify-center text-xl sm:text-2xl">
      {img}
    </div>
  );
}
