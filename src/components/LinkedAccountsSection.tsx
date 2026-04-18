"use client";

export default function LinkedAccountsSection() {
  return (
    <section className="relative pt-0 pb-24 md:pb-48 overflow-hidden" style={{ background: '#090e1c' }}>
      {/* Animation styles */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        .card-float-1 { animation: float1 4s ease-in-out infinite; }
        .card-float-2 { animation: float2 3.5s ease-in-out infinite 0.2s; }
        .card-float-3 { animation: float3 3s ease-in-out infinite 0.4s; }
        .card-float-4 { animation: float4 3.5s ease-in-out infinite 0.6s; }
        .card-float-5 { animation: float5 4s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Section background with rounded top corners */}
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-t-[80px]" style={{ background: '#090e1c' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-380 mx-auto px-8 pt-32">
        {/* Header */}
        <div className="relative text-center mb-16">
          {/* Soft teal radial glow behind heading */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '1100px',
              height: '520px',
              background:
                'radial-gradient(ellipse 480px 220px at 50% 50%, #0f242c 0%, #0f242c 25%, rgba(15,36,44,0.8) 48%, rgba(15,36,44,0.45) 65%, rgba(15,36,44,0.18) 82%, transparent 100%)',
            }}
          />
          <div className="relative">
            <p
              className="text-xs md:text-sm uppercase mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
            >
              LINKED ACCOUNTS
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              USE YOUR <span style={{ color: '#46F1C5' }}>OTHER</span>
              <br />
              <span style={{ color: '#46F1C5' }}>BANK ACCOUNTS</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
            >
              Safely connect your bank accounts to the app and manage
              them all from one secure access point.
            </p>
          </div>
        </div>

        {/* Bank Cards Display */}
        <div className="relative flex items-center justify-center mt-16 h-150">
          {/* Soft teal radial glow behind cards */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '1400px',
              height: '900px',
              background:
                'radial-gradient(ellipse 620px 380px at 50% 55%, #0f242c 0%, #0f242c 28%, rgba(15,36,44,0.8) 48%, rgba(15,36,44,0.45) 66%, rgba(15,36,44,0.18) 82%, transparent 100%)',
            }}
          />

          {/* Bank 2 Card - Far Left */}
          {/* old: bg-zinc-900 */}
          <div className="card-float-1 absolute left-1/2 -ml-130 w-72 h-96 rounded-3xl p-5" style={{ background: '#04babf' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-500 rounded-full" />
                <div>
                  <div className="text-white text-sm font-medium">Marcel Wisniewski</div>
                  <div className="text-zinc-500 text-xs">Online</div>
                </div>
              </div>
              <div className="w-6 h-6 text-zinc-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="text-black text-xs mb-2">BANK 2</div>
            <div className="text-white text-4xl font-bold">€ 8,724</div>
            {/* Dotted globe pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-44 opacity-60 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Horizontal latitude lines */}
                <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Vertical longitude lines */}
                <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Dots at intersections */}
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

          {/* Bank Card - Left */}
          {/* old: bg-zinc-800 */}
          <div className="card-float-2 absolute left-1/2 -ml-80 w-72 h-96 rounded-3xl p-5 z-10" style={{ background: '#04babf' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-500 rounded-full" />
                <div>
                  <div className="text-white text-sm font-medium">Marcel Wisniewski</div>
                  <div className="text-zinc-500 text-xs">Online</div>
                </div>
              </div>
              <div className="w-6 h-6 text-zinc-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="text-black text-xs mb-2">BANK</div>
            <div className="text-white text-4xl font-bold">€ 9,824</div>
            {/* Dotted globe pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-44 opacity-60 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Horizontal latitude lines */}
                <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Vertical longitude lines */}
                <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Dots at intersections */}
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

          {/* Main Card - Center */}
          <div className="card-float-3 absolute left-1/2 -ml-36 w-72 h-96 bg-linear-to-b from-zinc-200 to-zinc-400 rounded-3xl p-6 z-20 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-500 rounded-full" />
                <div>
                  <div className="text-zinc-900 text-sm font-medium">Marcel Wisniewski</div>
                  <div className="text-zinc-500 text-xs">Online</div>
                </div>
              </div>
              <div className="w-8 h-8 text-amber-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="text-zinc-500 text-xs mb-2">All Accounts</div>
            <div className="text-zinc-900 text-5xl font-bold">€23,569</div>
            {/* Dotted globe pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-44 opacity-40 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Horizontal latitude lines */}
                <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#71717a" strokeWidth="0.5" />
                {/* Vertical longitude lines */}
                <path d="M100,40 Q100,70 100,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <path d="M60,50 Q55,80 50,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <path d="M140,50 Q145,80 150,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <path d="M30,70 Q25,90 20,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                <path d="M170,70 Q175,90 180,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                {/* Dots at intersections */}
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

          {/* Successful Linked Popup */}
          {/* old: bg-zinc-800/90 */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-30 backdrop-blur-md rounded-2xl px-8 py-6 text-center w-80"
            style={{ background: 'rgba(4,186,191,0.9)' }}
          >
            {/* Link Icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mt-4 mb-2">SUCCESSFUL LINKED</h3>
            <p className="text-black text-sm mb-4">You have successfully connected your external bank account. Thank you for using us.</p>
            <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-700 hover:bg-zinc-600 text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors">
              CHECK IT OUT
            </a>
          </div>

          {/* Bank 3 Card - Right */}
          {/* old: bg-zinc-800 */}
          <div className="card-float-4 absolute left-1/2 ml-8 w-72 h-96 rounded-3xl p-5 z-10" style={{ background: '#04babf' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-500 rounded-full" />
                <div>
                  <div className="text-white text-sm font-medium">Marcel Wisniewski</div>
                  <div className="text-zinc-500 text-xs">Online</div>
                </div>
              </div>
              <div className="w-6 h-6 text-zinc-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="text-black text-xs mb-2">BANK 3</div>
            <div className="text-white text-4xl font-bold">€ 3,960</div>
            {/* Dotted globe pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-44 opacity-60 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Horizontal latitude lines */}
                <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Vertical longitude lines */}
                <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Dots at intersections */}
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

          {/* Bank 4 Card - Far Right */}
          {/* old: bg-zinc-900 */}
          <div className="card-float-5 absolute left-1/2 ml-56 w-72 h-96 rounded-3xl p-5" style={{ background: '#04babf' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-500 rounded-full" />
                <div>
                  <div className="text-white text-sm font-medium">Marcel Wisniewski</div>
                  <div className="text-zinc-500 text-xs">Online</div>
                </div>
              </div>
              <div className="w-6 h-6 text-zinc-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="text-black text-xs mb-2">BANK 4</div>
            <div className="text-white text-4xl font-bold">€ 5,532</div>
            {/* Dotted globe pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-44 opacity-60 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Horizontal latitude lines */}
                <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Vertical longitude lines */}
                <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                {/* Dots at intersections */}
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

          {/* 3D Globe wireframe at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-64 opacity-40">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              {/* Horizontal ellipses */}
              <ellipse cx="200" cy="120" rx="180" ry="50" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="100" rx="160" ry="45" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="80" rx="140" ry="40" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="60" rx="120" ry="35" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />

              {/* Vertical lines */}
              <path d="M200,20 Q200,70 200,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M140,30 Q140,80 160,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M260,30 Q260,80 240,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M100,50 Q100,90 130,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M300,50 Q300,90 270,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />

              {/* Dotted effect circles */}
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
