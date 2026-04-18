"use client";

export default function CryptoSection() {
  return (
    <section id="crypto" className="relative bg-black md:min-h-screen overflow-hidden">
      {/* Desktop glow effects */}
      <div className="hidden md:block absolute top-1/2 left-0 w-200 h-200 bg-white/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-20" />
      <div className="hidden md:block absolute top-1/2 right-0 w-200 h-200 bg-white/25 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-20" />

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 w-full px-4 pt-8 pb-16">
        {/* Box Container */}
        <div className="bg-[#252525] rounded-4xl px-6 pt-10 pb-8">
          {/* Header */}
          <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase mb-4">
            MANAGE CRYPTO
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-amber-100 leading-tight mb-6">
            TRADE AND INVEST WITH SICASH
          </h2>

          {/* Subtitle */}
          <p className="text-base text-zinc-400 mb-10 leading-relaxed">
            Purchase, spend, sell, and hold cryptocurrencies, all from the convenience of your device. Delve into the world of digital currencies effortlessly.
          </p>

        {/* Phone Mockup - Mobile */}
        <div className="relative w-full flex justify-center">
          <div className="relative">
            {/* Phone */}
            <div className="relative w-64 bg-[#f8f7f4] rounded-[40px] border-8 border-zinc-800 shadow-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-5 pt-3 pb-2">
                <span className="text-black text-sm font-semibold">9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black"><path d="M2 17h2v4H2v-4zm4-5h2v9H6v-9zm4-4h2v13h-2V8zm4-4h2v17h-2V4z"/></svg>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                  <svg className="w-5 h-4" viewBox="0 0 24 24" fill="black"><rect x="2" y="7" width="18" height="10" rx="2" stroke="black" strokeWidth="2" fill="none"/><rect x="20" y="10" width="2" height="4" fill="black"/><rect x="4" y="9" width="12" height="6" fill="black"/></svg>
                </div>
              </div>

              {/* Nav Tabs */}
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-8 h-8 bg-zinc-300 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-amber-200 to-amber-400" />
                </div>
                <button className="flex items-center gap-1 text-zinc-500 text-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-3 3"/></svg>
                  Market
                </button>
                <button className="flex items-center gap-1 bg-zinc-900 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                  Portfolio
                </button>
                <svg className="w-5 h-5 text-zinc-400 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>

              {/* Portfolio Card */}
              <div className="mx-4 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-xs tracking-wider font-medium">PORTFOLIO</span>
                  <svg className="w-5 h-5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div className="text-3xl font-bold text-black mt-2 tracking-tight">5 987 €</div>
                <div className="text-sm mt-1">
                  <span className="text-emerald-500 font-medium">+248.59 €</span>
                  <span className="text-zinc-400"> today</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mx-4 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl text-sm font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  Add
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl text-sm font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                  Send
                </button>
                <button className="flex items-center justify-center bg-zinc-900 text-white px-3 py-3 rounded-xl">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
                </button>
              </div>

              {/* Holdings */}
              <div className="mx-4 mt-5 pb-6">
                <h3 className="text-lg font-bold text-black">Your holdings</h3>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">₿</div>
                  <div>
                    <div className="text-black font-semibold text-sm">Bitcoin</div>
                    <div className="text-zinc-400 text-xs">BTC • 0.025</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-zinc-800 rounded-full mr-6" />
              </div>
            </div>

            {/* TOP Cryptocurrencies Card */}
            <div className="absolute bottom-8 -right-4 bg-zinc-900 rounded-2xl p-4 w-40 shadow-xl">
              <div className="text-white font-bold text-lg">TOP</div>
              <div className="text-zinc-500 text-xs">cryptocurrencies</div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <div className="w-6 h-6 bg-red-500 rounded-full" />
                <div className="w-6 h-6 bg-blue-500 rounded-full" />
                <div className="w-6 h-6 bg-green-500 rounded-full" />
                <div className="w-6 h-6 bg-cyan-500 rounded-full" />
                <div className="w-6 h-6 bg-blue-400 rounded-full" />
                <div className="w-6 h-6 bg-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center min-h-screen">
        {/* Main Box */}
        <div className="relative z-10 w-full max-w-420 mx-8 h-160 bg-[#1a1a1a] rounded-[40px] flex items-center justify-center overflow-hidden">
        {/* Centered content wrapper */}
        <div className="flex items-center gap-12">
          {/* Left - Phone area */}
          <div className="relative w-44 h-140 shrink-0" style={{ perspective: '1000px' }}>
            {/* Phone positioned to show half with 3D tilt */}
            <div className="absolute right-0 top-0" style={{ transform: 'rotateY(-15deg) rotateX(5deg)' }}>
              {/* iPhone Frame with side depth */}
              <div className="relative w-80 h-[640px] bg-zinc-900 rounded-[55px] border-[12px] border-zinc-800 shadow-2xl overflow-hidden"
                style={{ boxShadow: '-20px 0 40px rgba(0,0,0,0.5)' }}>
                {/* Screen Content */}
                <div className="w-full h-full bg-[#f8f7f4]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-8 pt-4 pb-2">
                    <span className="text-black text-base font-semibold">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black"><path d="M2 17h2v4H2v-4zm4-5h2v9H6v-9zm4-4h2v13h-2V8zm4-4h2v17h-2V4z"/></svg>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                      <svg className="w-7 h-5" viewBox="0 0 24 24" fill="black"><rect x="2" y="7" width="18" height="10" rx="2" stroke="black" strokeWidth="2" fill="none"/><rect x="20" y="10" width="2" height="4" fill="black"/><rect x="4" y="9" width="12" height="6" fill="black"/></svg>
                    </div>
                  </div>

                  {/* Nav Tabs */}
                  <div className="flex items-center gap-3 px-6 py-4">
                    <div className="w-12 h-12 bg-zinc-300 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-linear-to-br from-amber-200 to-amber-400" />
                    </div>
                    <button className="flex items-center gap-2 text-zinc-500 text-base">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-3 3"/></svg>
                      Market
                    </button>
                    <button className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-base font-medium">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                      Portfolio
                    </button>
                    <svg className="w-6 h-6 text-zinc-400 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                  </div>

                  {/* Portfolio Card */}
                  <div className="mx-6 bg-white rounded-3xl p-6 mt-2 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 text-sm tracking-wider font-medium">PORTFOLIO</span>
                      <svg className="w-6 h-6 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <div className="text-5xl font-bold text-black mt-3 tracking-tight">5 987 €</div>
                    <div className="text-base mt-2">
                      <span className="text-emerald-500 font-medium">+248.59 €</span>
                      <span className="text-zinc-400"> today</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mx-6 mt-5">
                    <button className="flex-1 flex items-center justify-center gap-3 bg-zinc-900 text-white py-5 rounded-2xl text-lg font-medium">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                      Add
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-3 bg-zinc-900 text-white py-5 rounded-2xl text-lg font-medium">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                      Send
                    </button>
                    <button className="flex items-center justify-center bg-zinc-900 text-white px-5 py-5 rounded-2xl">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
                    </button>
                  </div>

                  {/* Holdings */}
                  <div className="mx-6 mt-8">
                    <h3 className="text-2xl font-bold text-black">Your holdings</h3>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">₿</div>
                      <div>
                        <div className="text-black font-semibold text-lg">Bitcoin</div>
                        <div className="text-zinc-400 text-base">BTC • 0.025</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-zinc-800 rounded-full mr-8" />
                </div>
              </div>

              {/* Floating Crypto Card */}
              <div className="absolute bottom-20 -right-16 bg-zinc-900 rounded-3xl p-5 w-48 z-30">
                <div className="text-white font-bold text-xl">TOP</div>
                <div className="text-zinc-500 text-sm">cryptocurrencies</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full" />
                  <div className="w-8 h-8 bg-blue-500 rounded-full" />
                  <div className="w-8 h-8 bg-blue-600 rounded-full" />
                  <div className="w-8 h-8 bg-green-500 rounded-full" />
                  <div className="w-8 h-8 bg-cyan-500 rounded-full" />
                  <div className="w-8 h-8 bg-blue-400 rounded-full" />
                  <div className="w-8 h-8 bg-pink-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="max-w-lg ml-8">
            <p className="text-zinc-500 text-base tracking-widest uppercase mb-5">
              MANAGE CRYPTO
            </p>
            <h2 className="text-6xl font-bold text-amber-100 leading-tight mb-8">
              TRADE AND
              <br />
              INVEST WITH SICASH
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Purchase, spend, sell, and hold cryptocurrencies, all from the
              convenience of your device. Delve into the world of digital
              currencies effortlessly.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
