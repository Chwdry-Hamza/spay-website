"use client";

export default function LinkedAccountsSection() {
  return (
    <section className="relative pt-0 pb-24 md:pb-48 overflow-hidden" style={{ background: '#090e1c' }}>
      {/* Animation styles - translate only; rotation handled by responsive Tailwind utilities */}
      <style jsx>{`
        @keyframes floatY15 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes floatY10 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes floatY8  { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px);  } }
        .card-float-1 { animation: floatY15 4s ease-in-out infinite; }
        .card-float-2 { animation: floatY10 3.5s ease-in-out infinite 0.2s; }
        .card-float-3 { animation: floatY8  3s ease-in-out infinite 0.4s; }
        .card-float-4 { animation: floatY10 3.5s ease-in-out infinite 0.6s; }
        .card-float-5 { animation: floatY15 4s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Section background with rounded top corners */}
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-t-[80px]" style={{ background: '#090e1c' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-380 mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-28 lg:pt-32">
        {/* Header */}
        <div className="relative text-center mb-10 sm:mb-12 md:mb-16">
          {/* Soft teal radial glow behind heading — Mobile */}
          <div
            className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '500px',
              height: '300px',
              maxWidth: '110%',
              background:
                'radial-gradient(ellipse 220px 130px at 50% 50%, #0f242c 0%, #0f242c 25%, rgba(15,36,44,0.8) 48%, rgba(15,36,44,0.45) 65%, rgba(15,36,44,0.18) 82%, transparent 100%)',
            }}
          />

          {/* Soft teal radial glow behind heading — Desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '1100px',
              height: '520px',
              maxWidth: '110%',
              background:
                'radial-gradient(ellipse 480px 220px at 50% 50%, #0f242c 0%, #0f242c 25%, rgba(15,36,44,0.8) 48%, rgba(15,36,44,0.45) 65%, rgba(15,36,44,0.18) 82%, transparent 100%)',
            }}
          />
          <div className="relative">
            <p
              className="text-[10px] sm:text-xs md:text-sm uppercase mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
            >
              LINKED ACCOUNTS
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              USE YOUR OTHER
              <br />
              <span style={{ color: '#46F1C5' }}>BANK ACCOUNTS</span>
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
            >
              Safely connect your bank accounts to the app and manage
              them all from one secure access point.
            </p>
          </div>
        </div>

        {/* Bank Cards Display */}
        <div className="relative flex items-center justify-center mt-10 sm:mt-12 md:mt-16 h-[320px] sm:h-[360px] md:h-[440px] lg:h-150">
          {/* Soft teal radial glow behind cards — Mobile */}
          <div
            className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '700px',
              height: '520px',
              maxWidth: '140%',
              background:
                'radial-gradient(ellipse 300px 230px at 50% 55%, #0f242c 0%, #0f242c 28%, rgba(15,36,44,0.8) 48%, rgba(15,36,44,0.45) 66%, rgba(15,36,44,0.18) 82%, transparent 100%)',
            }}
          />

          {/* Soft teal radial glow behind cards — Desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '1400px',
              height: '900px',
              maxWidth: '120%',
              background:
                'radial-gradient(ellipse 620px 380px at 50% 55%, #0f242c 0%, #0f242c 28%, rgba(15,36,44,0.8) 48%, rgba(15,36,44,0.45) 66%, rgba(15,36,44,0.18) 82%, transparent 100%)',
            }}
          />

          {/* Bank 2 Card - Far Left */}
          <div className="absolute left-1/2 -ml-[105px] sm:-ml-[125px] md:-ml-[260px] lg:-ml-130 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:-rotate-3 md:-rotate-6 lg:-rotate-12 transition-transform duration-300">
            <div className="card-float-1 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#04babf' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Marcel Wisniewski</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">BANK 2</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">€ 8,724</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bank Card - Left */}
          <div className="absolute left-1/2 -ml-[100px] sm:-ml-[115px] md:-ml-[130px] lg:-ml-80 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:-rotate-1 md:-rotate-3 lg:-rotate-6 z-10 transition-transform duration-300">
            <div className="card-float-2 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#04babf' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Marcel Wisniewski</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">BANK</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">€ 9,824</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Card - Center */}
          <div className="absolute left-1/2 -ml-[90px] sm:-ml-[100px] md:-ml-[120px] lg:-ml-36 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 z-20 transition-transform duration-300">
            <div className="card-float-3 relative w-full h-full bg-linear-to-b from-zinc-200 to-zinc-400 rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-zinc-900 text-[11px] sm:text-xs md:text-sm font-medium">Marcel Wisniewski</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 text-amber-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-zinc-500 text-[10px] sm:text-xs mb-1 md:mb-2">All Accounts</div>
              <div className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-bold">€23,569</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-40 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#52525b" />
                  <circle cx="100" cy="70" r="1.5" fill="#52525b" />
                  <circle cx="100" cy="85" r="1.5" fill="#52525b" />
                  <circle cx="60" cy="70" r="1" fill="#52525b" />
                  <circle cx="140" cy="70" r="1" fill="#52525b" />
                  <circle cx="55" cy="85" r="1" fill="#52525b" />
                  <circle cx="145" cy="85" r="1" fill="#52525b" />
                  <circle cx="30" cy="85" r="1" fill="#52525b" />
                  <circle cx="170" cy="85" r="1" fill="#52525b" />
                  <circle cx="50" cy="100" r="1" fill="#52525b" />
                  <circle cx="150" cy="100" r="1" fill="#52525b" />
                  <circle cx="75" cy="100" r="1" fill="#52525b" />
                  <circle cx="125" cy="100" r="1" fill="#52525b" />
                </svg>
              </div>
            </div>
          </div>

          {/* Successful Linked Popup */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 z-30 backdrop-blur-md rounded-2xl px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-center w-[200px] sm:w-[240px] md:w-[280px] lg:w-80"
            style={{ background: 'rgba(4,186,191,0.9)' }}
          >
            {/* Link Icon */}
            <div className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4 mb-1 md:mb-2">SUCCESSFUL LINKED</h3>
            <p className="text-black text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 leading-snug">You have successfully connected your external bank account. Thank you for using us.</p>
            <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-700 hover:bg-zinc-600 text-white text-[10px] sm:text-xs md:text-sm font-medium px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-colors">
              CHECK IT OUT
            </a>
          </div>

          {/* Bank 3 Card - Right */}
          <div className="absolute left-1/2 -ml-[80px] sm:-ml-[85px] md:-ml-[110px] lg:ml-8 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:rotate-1 md:rotate-3 lg:rotate-6 z-10 transition-transform duration-300">
            <div className="card-float-4 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#04babf' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Marcel Wisniewski</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">BANK 3</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">€ 3,960</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bank 4 Card - Far Right */}
          <div className="absolute left-1/2 -ml-[75px] sm:-ml-[75px] md:ml-[20px] lg:ml-56 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:rotate-3 md:rotate-6 lg:rotate-12 transition-transform duration-300">
            <div className="card-float-5 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#04babf' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Marcel Wisniewski</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">BANK 4</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">€ 5,532</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3D Globe wireframe at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] md:w-[520px] lg:w-200 h-40 sm:h-48 md:h-56 lg:h-64 opacity-40">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              <ellipse cx="200" cy="120" rx="180" ry="50" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="100" rx="160" ry="45" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="80" rx="140" ry="40" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="60" rx="120" ry="35" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M200,20 Q200,70 200,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M140,30 Q140,80 160,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M260,30 Q260,80 240,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M100,50 Q100,90 130,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M300,50 Q300,90 270,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <circle cx="200" cy="120" r="2" fill="#71717a" />
              <circle cx="160" cy="110" r="1.5" fill="#71717a" />
              <circle cx="240" cy="110" r="1.5" fill="#71717a" />
              <circle cx="130" cy="100" r="1" fill="#71717a" />
              <circle cx="270" cy="100" r="1" fill="#71717a" />
              <defs>
                <linearGradient id="globeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#71717a" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#71717a" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
