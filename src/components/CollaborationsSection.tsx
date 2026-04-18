"use client";

export default function CollaborationsSection() {
  return (
    <section className="relative bg-black py-12 md:py-32 overflow-hidden">
      {/* Subtle light streaks */}
      <div className="absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-amber-100/5 to-transparent transform -skew-y-3" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent transform skew-y-2 translate-y-8" />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 w-full px-6">
        {/* Our Collaborations */}
        <h2 className="text-4xl font-bold text-amber-100 text-center mb-16">
          OUR COLLABORATIONS
        </h2>

        {/* Partner Logos - Stacked vertically */}
        <div className="flex flex-col items-center gap-12 mb-20">
          {/* BitGo */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 border-2 border-white/80 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold">₿</span>
            </div>
            <span className="text-3xl font-bold tracking-tight">BitGo</span>
          </div>

          {/* FENIGE */}
          <div className="flex items-center gap-3 text-white">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8v8l-7 3.5L5 16V8l7-3.5z" />
            </svg>
            <div>
              <span className="text-3xl font-bold tracking-tight">FENIGE</span>
              <p className="text-xs text-white/60">all about payments</p>
            </div>
          </div>

          {/* INTERCOM */}
          <div className="flex items-center gap-3 text-white">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M7 8v8M10 6v12M13 8v8M17 6v12" />
            </svg>
            <span className="text-3xl font-bold tracking-wide">INTERCOM</span>
          </div>

          {/* PLAID */}
          <div className="flex items-center gap-3 text-white">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
            </svg>
            <span className="text-3xl font-bold tracking-wide">PLAID</span>
          </div>

          {/* QUICKO */}
          <div className="flex items-center gap-1 text-white">
            <span className="text-3xl font-light">((</span>
            <span className="text-3xl font-bold tracking-widest">QUICKO</span>
          </div>

          {/* onfido */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 border-2 border-white/80 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white/80 rounded-full" />
            </div>
            <span className="text-3xl font-medium">onfido</span>
          </div>

          {/* Verestro */}
          <div className="text-white text-center">
            <span className="text-3xl font-light tracking-wider">Verestro</span>
            <span className="text-xs align-top">™</span>
            <p className="text-xs text-amber-400">Fintech as a service</p>
          </div>

          {/* YAPILY */}
          <div className="text-white">
            <span className="text-3xl font-black tracking-wider">YAPILY</span>
          </div>

          {/* BINARYX */}
          <div className="flex items-center gap-3 text-white">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12l9-9 9 9-9 9-9-9z" />
            </svg>
            <span className="text-3xl font-bold tracking-wider">BINARYX</span>
          </div>
        </div>

   
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative z-10 w-full max-w-380 mx-auto px-8">
        {/* Our Collaborations */}
        <h2 className="text-5xl md:text-6xl font-bold text-amber-100 text-center mb-20">
          OUR COLLABORATIONS
        </h2>

        {/* Partner Logos - Row 1 */}
        <div className="flex items-center justify-center gap-16 mb-12 flex-wrap">
          {/* BitGo */}
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">₿</span>
            </div>
            <span className="text-xl font-bold tracking-tight">BitGo</span>
          </div>

          {/* FENIGE */}
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8v8l-7 3.5L5 16V8l7-3.5z" />
            </svg>
            <div>
              <span className="text-xl font-bold tracking-tight">FENIGE</span>
              <p className="text-[8px] text-white/50">all about payments</p>
            </div>
          </div>

          {/* INTERCOM */}
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M7 8v8M10 6v12M13 8v8M17 6v12" />
            </svg>
            <span className="text-xl font-bold tracking-wide">INTERCOM</span>
          </div>

          {/* PLAID */}
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
            </svg>
            <span className="text-xl font-bold tracking-wide">PLAID</span>
          </div>

          {/* QUICKO */}
          <div className="flex items-center gap-1 text-white/80">
            <span className="text-xl font-light">((</span>
            <span className="text-xl font-bold tracking-widest">QUICKO</span>
          </div>
        </div>

        {/* Partner Logos - Row 2 */}
        <div className="flex items-center justify-center gap-16 mb-32 flex-wrap">
          {/* onfido */}
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-6 h-6 border border-white/60 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white/60 rounded-full" />
            </div>
            <span className="text-xl font-medium">onfido</span>
          </div>

          {/* Verestro */}
          <div className="text-white/80">
            <span className="text-2xl font-light tracking-wider">Verestro</span>
            <span className="text-[8px] align-top">™</span>
            <p className="text-[8px] text-white/50 text-center">Fintech as a service</p>
          </div>

          {/* YAPILY */}
          <div className="text-white/80">
            <span className="text-2xl font-black tracking-wider">YAPILY</span>
          </div>

          {/* BINARYX */}
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12l9-9 9 9-9 9-9-9z" />
            </svg>
            <span className="text-xl font-bold tracking-wider">BINARYX</span>
          </div>
        </div>

  
      </div>
    </section>
  );
}
