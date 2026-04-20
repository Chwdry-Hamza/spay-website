"use client";

export default function EarnSection() {
  return (
    <section id="earn" className="relative overflow-hidden" style={{ backgroundColor: "#090e1c" }}>
      {/* Mobile + Tablet Layout */}
      <div className="lg:hidden relative z-10 w-full px-4 sm:px-8 md:px-12 pt-2 sm:pt-4 md:pt-6 pb-16 md:pb-20">
        {/* Header */}
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-4 sm:mb-5 md:mb-6 text-center"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
        >
          EARN WITH SPAY
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 text-center"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          MAKE <span style={{ color: '#46F1C5' }}>CRYPTO</span>
          <br />
          WORK FOR YOU
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12 leading-relaxed text-center max-w-xl md:max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
        >
          Enjoy the crypto staking benefits provided by highly-secured cutting-edge encrypted solutions
        </p>

        {/* Gauge and Bars Visual */}
        <div className="relative w-full h-72 sm:h-80 md:h-96 mb-8">
          {/* Glow behind visual */}
          <div
            className="absolute inset-0 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 65%, #0e2e2e 0%, rgba(14,46,46,0.5) 30%, transparent 65%)" }}
          />
          {/* Background bars */}
          <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-end gap-2 sm:gap-3 md:gap-4">
            <div className="w-7 sm:w-8 md:w-10 h-32 sm:h-40 md:h-48 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-7 sm:w-8 md:w-10 h-44 sm:h-52 md:h-60 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-7 sm:w-8 md:w-10 h-28 sm:h-36 md:h-44 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-7 sm:w-8 md:w-10 h-40 sm:h-48 md:h-56 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-7 sm:w-8 md:w-10 h-24 sm:h-32 md:h-40 bg-zinc-800/50 rounded-t-lg" />
          </div>

          {/* Semi-circular gauge */}
          <div className="absolute top-6 sm:top-8 md:top-10 left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-96 h-32 sm:h-36 md:h-48">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = (180 / 60) * i - 90;
                const radian = (angle * Math.PI) / 180;
                const innerRadius = 70;
                const outerRadius = 95;
                const x1 = 100 + innerRadius * Math.cos(radian);
                const y1 = 100 + innerRadius * Math.sin(radian);
                const x2 = 100 + outerRadius * Math.cos(radian);
                const y2 = 100 + outerRadius * Math.sin(radian);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i < 45 ? "#d4d4d8" : "#3f3f46"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </div>

          {/* Center content */}
          <div className="absolute top-20 sm:top-24 md:top-32 left-1/2 -translate-x-1/2 text-center">
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wider">APR up to 3%</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1 sm:mt-2 whitespace-nowrap">+ 15 920$</p>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1 sm:mt-2">Ends on Dec 20, 2024</p>
          </div>
        </div>

        {/* Staking Card */}
        <div className="bg-zinc-900 rounded-2xl p-4 sm:p-5 md:p-6 mx-auto max-w-sm sm:max-w-md md:max-w-lg">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-white font-semibold text-base sm:text-lg">Staking</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-end justify-between mb-3 sm:mb-4">
            <div>
              <p className="text-zinc-500 text-[11px] sm:text-xs">Total Profit</p>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-3xl sm:text-4xl font-bold">536</span>
                <span className="text-zinc-500 text-xs sm:text-sm">ETH</span>
              </div>
            </div>
            <span className="text-zinc-500 text-[11px] sm:text-xs mb-2">12/90 day</span>
          </div>

          {/* Progress slider */}
          <div className="relative h-2 bg-zinc-700 rounded-full">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full shadow flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center pt-4 lg:pt-6 pb-16 lg:pb-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Left - Text Content */}
          <div className="max-w-xl">
            <p
              className="text-base uppercase mb-5"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
            >
              EARN WITH SPAY
            </p>
            <h2
              className="text-6xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              MAKE <span style={{ color: '#46F1C5' }}>CRYPTO</span>
              <br />
              WORK FOR YOU
            </h2>
            <p
              className="text-xl leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
            >
              Enjoy the crypto staking benefits provided by highly-secured cutting-edge
              encrypted solutions
            </p>
          </div>

        {/* Right - Staking Visual */}
        <div className="relative w-140 h-120 scale-85 origin-right">
          {/* Glow behind visual */}
          <div
            className="absolute inset-0 -m-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 65%, #0e2e2e 0%, rgba(14,46,46,0.5) 30%, transparent 65%)" }}
          />
          {/* Background bars */}
          <div className="absolute bottom-16 left-0 flex items-end gap-6">
            <div className="w-16 h-80 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-16 h-96 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-16 h-72 bg-zinc-800/50 rounded-t-lg" />
          </div>

          {/* Semi-circular gauge */}
          <div className="absolute top-0 right-0 w-96 h-48">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {/* Gauge lines */}
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = (180 / 60) * i - 90;
                const radian = (angle * Math.PI) / 180;
                const innerRadius = 70;
                const outerRadius = 95;
                const x1 = 100 + innerRadius * Math.cos(radian);
                const y1 = 100 + innerRadius * Math.sin(radian);
                const x2 = 100 + outerRadius * Math.cos(radian);
                const y2 = 100 + outerRadius * Math.sin(radian);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i < 45 ? "#d4d4d8" : "#3f3f46"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            {/* Center content */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
              <p className="text-zinc-400 text-sm">APR up to 3%</p>
              <p className="text-5xl font-bold text-white mt-2">+ 15 920$</p>
              <p className="text-zinc-500 text-sm mt-2">Ends on Dec 20, 2024</p>
            </div>
          </div>

          {/* Staking Card */}
          <div className="absolute bottom-0 right-0 bg-white rounded-2xl p-5 w-72 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-900 font-semibold">Staking</span>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M3 9h18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-zinc-400 text-xs">Total Profit</p>
                <p className="text-zinc-900 text-4xl font-bold">536</p>
              </div>
              <span className="text-zinc-400 text-sm mb-1">ETH</span>
              <span className="text-zinc-400 text-xs mb-1">12/90 day</span>
            </div>

            {/* Progress slider */}
            <div className="relative h-2 bg-zinc-200 rounded-full">
              <div className="absolute left-0 top-0 h-full w-3/4 bg-blue-500 rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 left-3/4 w-5 h-5 bg-white border-4 border-blue-500 rounded-full shadow" />
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
