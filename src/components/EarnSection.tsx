"use client";

export default function EarnSection() {
  return (
    <section id="earn" className="relative bg-black md:min-h-screen overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-200 h-200 bg-amber-900/10 rounded-full blur-3xl" />

      {/* Mobile amber glow at bottom */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-96 bg-linear-to-t from-amber-900/30 via-amber-800/10 to-transparent" />

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 w-full px-6 pt-8 pb-16">
        {/* Header */}
        <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase mb-4 text-center">
          EARN WITH SICASH
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-amber-100 leading-tight mb-6 text-center">
          MAKE CRYPTO<br />WORK FOR YOU
        </h2>

        {/* Subtitle */}
        <p className="text-base text-zinc-400 mb-12 leading-relaxed text-center">
          Enjoy the crypto staking benefits provided by highly-secured cutting-edge encrypted solutions
        </p>

        {/* Gauge and Bars Visual */}
        <div className="relative w-full h-80 mb-8">
          {/* Background bars */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-end gap-3">
            <div className="w-8 h-40 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-8 h-52 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-8 h-36 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-8 h-48 bg-zinc-800/50 rounded-t-lg" />
            <div className="w-8 h-32 bg-zinc-800/50 rounded-t-lg" />
          </div>

          {/* Semi-circular gauge */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-36">
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
          <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center">
            <p className="text-zinc-400 text-sm tracking-wider">APR 32%</p>
            <p className="text-5xl font-bold text-white mt-2">+ 15 920$</p>
            <p className="text-zinc-500 text-sm mt-2">Ends on Dec 20, 2024</p>
          </div>
        </div>

        {/* Staking Card */}
        <div className="bg-zinc-900 rounded-2xl p-5 mx-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-semibold text-lg">Staking</span>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-zinc-500 text-xs">Total Profit</p>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-4xl font-bold">536</span>
                <span className="text-zinc-500 text-sm">ETH</span>
              </div>
            </div>
            <span className="text-zinc-500 text-xs mb-2">12/90 day</span>
          </div>

          {/* Progress slider */}
          <div className="relative h-2 bg-zinc-700 rounded-full">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-6 h-6 bg-blue-500 rounded-full shadow flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center min-h-screen">
        <div className="relative z-10 w-full max-w-380 mx-auto px-8 flex items-center justify-between">
          {/* Left - Text Content */}
          <div className="max-w-xl">
            <p className="text-zinc-500 text-base tracking-widest uppercase mb-5">
              EARN WITH SICASH
            </p>
            <h2 className="text-6xl font-bold text-amber-100 leading-tight mb-8 italic">
              MAKE CRYPTO
              <br />
              WORK FOR YOU
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Enjoy the crypto staking benefits provided by highly-secured cutting-edge
              encrypted solutions
            </p>
          </div>

        {/* Right - Staking Visual */}
        <div className="relative w-140 h-120">
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
