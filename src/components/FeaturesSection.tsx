// "use client";

// export default function FeaturesSection() {
//   return (
//     <section className="relative bg-black py-16 md:py-36 overflow-hidden">
//       {/* Background gradient effects */}
//       <div className="absolute inset-0 bg-black" />
//       <div className="absolute top-1/2 left-0 w-200 h-200 bg-amber-100/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute top-1/2 right-0 w-200 h-200 bg-amber-100/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

//       {/* Header */}
//       <div className="relative z-10 text-center mb-16">
//         <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">
//           A NEW ERA OF DIGITAL BANKING
//         </p>
//         <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//           TAKE CONTROL OF ALL
//           <br />
//           YOUR MONEY
//         </h2>
//       </div>

//       {/* Feature Cards */}
//       <div className="relative z-10 w-full max-w-380 mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Money Card */}
//         <FeatureCard
//           title="MONEY"
//           description="Manage all your finances with a single tap. Forget about banking hassles."
//           visual={<MoneyVisual />}
//         />

//         {/* Crypto Card */}
//         <FeatureCard
//           title="CRYPTO"
//           description="Safely hold, effortlessly send, receive, and monitor your cryptocurrency holdings."
//           visual={<CryptoVisual />}
//         />

//         {/* Earn Card */}
//         <FeatureCard
//           title="EARN"
//           description="Get a wide range of innovative financial tools for unlimited wealth-building opportunities."
//           visual={<EarnVisual />}
//         />
//       </div>
//     </section>
//   );
// }

// function FeatureCard({ title, description, visual }: { title: string; description: string; visual: React.ReactNode }) {
//   return (
//     <div className="bg-linear-to-br from-zinc-200 to-zinc-300 rounded-3xl p-6 flex flex-col h-full">
//       {/* Visual Area */}
//       <div className="flex-1 mb-6 min-h-72 relative overflow-hidden rounded-2xl bg-linear-to-br from-zinc-100 to-zinc-200">
//         {visual}
//       </div>

//       {/* Text Content */}
//       <div>
//         <h3 className="text-2xl font-bold text-zinc-900 mb-3">{title}</h3>
//         <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// }

// function MoneyVisual() {
//   return (
//     <div className="absolute inset-0 p-4">
//       {/* Card mockup */}
//       <div className="absolute top-8 left-4 w-40 h-24 bg-linear-to-br from-zinc-700 to-zinc-900 rounded-xl shadow-lg transform -rotate-6">
//         <div className="p-3">
//           <div className="text-amber-100 text-xs font-bold">SICASH</div>
//           <div className="mt-4 text-white text-lg font-bold">14,000 €</div>
//         </div>
//       </div>

//       {/* Switch to USDT button */}
//       <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1.5 text-xs flex items-center gap-2 shadow">
//         <span className="text-zinc-500">€</span>
//         <span className="text-zinc-700">Switch to USDT</span>
//       </div>

//       {/* Crypto icons */}
//       <div className="absolute top-20 right-8 flex -space-x-2">
//         <div className="w-8 h-8 bg-amber-500 rounded-full border-2 border-white" />
//         <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
//         <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
//       </div>

//       {/* Transaction */}
//       <div className="absolute bottom-8 left-4 bg-zinc-800/90 rounded-xl px-4 py-3 shadow-lg">
//         <div className="text-zinc-400 text-xs">Last Transaction</div>
//         <div className="text-white text-xl font-bold">€500+</div>
//         <div className="text-zinc-500 text-xs">From Google Inc</div>
//       </div>
//     </div>
//   );
// }

// function CryptoVisual() {
//   return (
//     <div className="absolute inset-0 p-4">
//       {/* Portfolio Header */}
//       <div className="mb-4">
//         <div className="text-zinc-500 text-xs">Total Portfolio</div>
//         <div className="flex items-center justify-between">
//           <div className="text-zinc-900 text-3xl font-bold">€4,249.60</div>
//           <div className="flex -space-x-1">
//             <div className="w-6 h-6 bg-amber-500 rounded-full text-xs flex items-center justify-center text-white">₿</div>
//             <div className="w-6 h-6 bg-blue-500 rounded-full text-xs flex items-center justify-center text-white">◆</div>
//             <div className="w-6 h-6 bg-green-500 rounded-full text-xs flex items-center justify-center text-white">₮</div>
//             <div className="w-6 h-6 bg-purple-500 rounded-full text-xs flex items-center justify-center text-white">◎</div>
//             <div className="w-6 h-6 bg-zinc-400 rounded-full text-xs flex items-center justify-center text-white">+7</div>
//           </div>
//         </div>
//         <div className="text-green-500 text-xs mt-1">▲ 1.12% LAST WEEK</div>
//       </div>

//       {/* Chart */}
//       <div className="relative h-32 mt-4">
//         <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
//           <path
//             d="M0,60 Q30,55 50,50 T100,35 T150,45 T200,30"
//             fill="none"
//             stroke="#71717a"
//             strokeWidth="2"
//           />
//         </svg>

//         {/* Data points */}
//         <div className="absolute left-1/4 top-1/2 bg-white rounded-lg px-2 py-1 shadow text-xs">
//           € 1,394+
//         </div>

//         {/* Added indicator */}
//         <div className="absolute right-8 bottom-4 bg-white rounded-lg px-3 py-2 shadow flex items-center gap-2">
//           <div className="w-5 h-5 bg-amber-500 rounded-full text-xs flex items-center justify-center text-white">₿</div>
//           <div>
//             <div className="text-zinc-700 text-xs">Added</div>
//             <div className="text-zinc-500 text-xs">↓ 0.3812</div>
//           </div>
//         </div>
//       </div>

//       {/* Timeline */}
//       <div className="absolute bottom-4 left-4 right-4 flex justify-between text-zinc-400 text-xs">
//         <span>FEB 13</span>
//         <span>FEB 14</span>
//         <span>FEB 15</span>
//         <span>FEB 16</span>
//       </div>
//     </div>
//   );
// }

// function EarnVisual() {
//   return (
//     <div className="absolute inset-0 p-4">
//       {/* APR display */}
//       <div className="mb-4">
//         <div className="text-zinc-500 text-xs">APR 7.2%</div>
//         <div className="text-zinc-900 text-3xl font-bold">15 920 <span className="text-xl">$</span></div>
//         <div className="text-zinc-500 text-xs">Ends On Dec 26, 2...</div>
//       </div>

//       {/* Card mockup */}
//       <div className="absolute top-16 right-0 w-48 bg-zinc-900 rounded-xl p-3 shadow-lg transform rotate-3">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-amber-100 text-xs font-bold">SICASH</span>
//           <span className="text-zinc-500 text-xs">MAIN WALLET</span>
//         </div>
//         <div className="flex gap-1 mb-3">
//           <div className="w-8 h-5 bg-amber-500 rounded" />
//           <div className="w-8 h-5 bg-blue-500 rounded" />
//           <div className="w-8 h-5 bg-green-500 rounded" />
//         </div>
//         <div className="text-white text-lg font-bold">2,192.</div>
//       </div>

//       {/* Staking button */}
//       <div className="absolute bottom-8 right-4 text-zinc-500 text-xs flex items-center gap-1">
//         Staking <span>⚙</span>
//       </div>

//       {/* Distribution label */}
//       <div className="absolute bottom-16 right-8 text-zinc-400 text-xs">
//         ...bution
//       </div>
//     </div>
//   );
// }

"use client";

export default function FeaturesSection() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #090e1c 0%, #071414 50%, #090e1c 100%)',
      }}
    >
      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6">
        {/* Radial gradient backdrop behind heading only */}
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{
            top: '60%',
            transform: 'translate(-50%, -30%)',
            width: '900px',
            height: '500px',
            maxWidth: '100vw',
            background:
              'radial-gradient(ellipse at center, #0f242d 0%, rgba(15,36,45,0.6) 40%, transparent 75%)',
            zIndex: -1,
          }}
        />
       <p className="text-[#A6AABE] font-inter font-normal not-italic tracking-[6px] text-xs md:text-sm uppercase mb-5">
  A new era of digital banking
</p>
        <h2
          className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          <span>TAKE </span>
          <span style={{ color: '#46F1C5' }}>CONTROL</span>
          <span> OF ALL</span>
          <br />
          <span>YOUR </span>
          <span style={{ color: '#46F1C5' }}>MONEY</span>
        </h2>
      </div>

      <div className="relative z-10 text-center mb-6 sm:mb-8 lg:mb-10">
        <span
          className="text-white font-bold text-sm tracking-[0.25em]"
          style={{ fontFamily: 'var(--font-space-grotesk)',color: '#0f242d' }}
        >
          .
        </span>
      </div>{/* Tab indicator */}
      

      {/* Cards grid — outer card edges aligned vertically with HomeHero appbar (SPay logo / GET SPAY APP button) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-3 lg:gap-6 items-center">
        {/* CRYPTO Card — left, shorter */}
        <FeatureCard
          title="CRYPTO"
          description="Safely hold, effortlessly send, receive, and monitor your cryptocurrency holdings."
          height="w-full max-w-[300px] mx-auto sm:max-w-none aspect-[534/720] sm:aspect-auto sm:h-[260px] lg:h-[360px]"
          visual={<MoneyVisual />}
          plainVisual
        />

        {/* MONEY Card — center; ADAPTIVE: scaled up only on desktop */}
        <div className="flex items-center justify-center px-0 sm:px-2 lg:px-10">
          <div
            className="w-full max-w-[300px] sm:max-w-none mx-auto relative origin-bottom sm:scale-110 lg:scale-125"
            style={{
              aspectRatio: '534 / 720',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #46F1C5 0%, #004132 100%)',
            }}
          >
            {/* Content overlay: white box + text */}
            <div className="absolute inset-0 flex flex-col p-[7%]">
              {/* White box — with portfolio content */}
              <div
                className="bg-white w-full relative overflow-hidden basis-[60%] sm:basis-[58%] lg:basis-[70%] shrink-0 grow-0"
                style={{ borderRadius: '20px', containerType: 'inline-size' }}
              >
                {/* Graph — inline SVG with fill + teal top line */}
                <svg
                  className="absolute left-0 right-0 bottom-0 w-full pointer-events-none"
                  style={{ height: '65%' }}
                  viewBox="0 0 461 194"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="graphFill" x1="298.299" y1="71.9483" x2="307.754" y2="170.238" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#64EDDD" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                  {/* Filled area */}
                  <path
                    opacity="0.4"
                    d="M0 135.289L105.465 90.4361L168.526 76.9436L236.661 68.5564L310.233 40.4774L382.717 18.5977L461 0V194H0V135.289Z"
                    fill="url(#graphFill)"
                  />
                  {/* Teal top line */}
                  <path
                    d="M0 135.289 L105.465 90.4361 L168.526 76.9436 L236.661 68.5564 L310.233 40.4774 L382.717 18.5977 L461 0"
                    fill="none"
                    stroke="#58CECA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Top portion — Total Portfolio info */}
                <div className="absolute top-2 left-2 right-2 sm:top-2 sm:left-2 sm:right-2 lg:top-3 lg:left-3 lg:right-3">
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 400,
                      fontSize: 'clamp(8px, 4cqw, 13px)',
                      color: '#000',
                    }}
                  >
                    Total Portfolio
                  </div>

                  {/* Price + Coin circles in a row */}
                  <div className="flex items-center gap-1.5 lg:gap-3">
                    <div
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 700,
                        fontSize: 'clamp(15px, 8cqw, 24px)',
                        color: '#000',
                        lineHeight: 1.1,
                      }}
                    >
                      $4,249.60
                    </div>
                    <div className="flex items-center -space-x-1">
                      <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center text-[5px] lg:text-[6px] font-bold text-white border border-white" style={{ backgroundColor: '#f7931a' }}>B</div>
                      <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-4 lg:h-4 rounded-full border border-white" style={{ backgroundColor: '#1a68c2' }} />
                      <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-4 lg:h-4 rounded-full border border-white" style={{ backgroundColor: '#16c784' }} />
                      <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-4 lg:h-4 rounded-full border border-white" style={{ backgroundColor: '#9c27b0' }} />
                      <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center text-[5px] lg:text-[6px] font-bold text-white border border-white" style={{ backgroundColor: '#9e9e9e' }}>+7</div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-1 mt-0.5"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 700,
                      fontSize: 'clamp(6.5px, 3.2cqw, 10px)',
                      color: '#00c853',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <span>▲</span>
                    <span>1.12% LAST WEEK</span>
                  </div>
                </div>

                {/* Tooltip € 1,394+ */}
                <div
                  className="absolute left-[40%] top-[50%] px-1.5 py-0.5"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.12)',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(6px, 3cqw, 9px)',
                    fontWeight: 500,
                    color: '#333',
                  }}
                >
                  € 1,394+
                </div>

                {/* Added tooltip */}
                <div
                  className="absolute right-[15%] top-[62%] flex items-center gap-1 px-1.5 py-0.5"
                  style={{
                    backgroundColor: 'rgba(245,245,245,0.98)',
                    borderRadius: '8px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                  }}
                >
                  <div className="w-2 h-2 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full flex items-center justify-center text-[4px] lg:text-[5px] font-bold text-white" style={{ backgroundColor: '#f7931a' }}>B</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(5.5px, 2.6cqw, 8px)', fontWeight: 600, color: '#000', lineHeight: 1 }}>Added</div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(5px, 2.2cqw, 7px)', color: '#888', lineHeight: 1.2 }}>↓ 0.3812</div>
                  </div>
                </div>

                {/* Bottom — dates */}
                <div
                  className="absolute bottom-1.5 left-2 right-2 sm:bottom-1.5 sm:left-2 sm:right-2 lg:bottom-2 lg:left-3 lg:right-3 flex items-center justify-between"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(6px, 3cqw, 9px)',
                    fontWeight: 400,
                    color: '#888',
                  }}
                >
                  <span>FEB 13</span>
                  <span>FEB 14</span>
                  <span>FEB 15</span>
                  <span>FEB 16</span>
                </div>
              </div>
              {/* Text left-aligned below white box */}
              <div className="text-left mt-2 sm:mt-2 lg:mt-4">
                <h3
                  className="mb-0.5 sm:mb-0.5 lg:mb-1 text-[14px] sm:text-[13px] lg:text-[20px]"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                  }}
                >
                  CRYPTO
                </h3>
                <p
                  className="leading-snug text-[9px] sm:text-[8px] lg:text-[10px]"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Safely hold, effortlessly send, receive, and monitor your cryptocurrency holding.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EARN Card — right, shorter */}
        <FeatureCard
          title="EARN"
          description="Get a wide range of innovative financial tools for unlimited wealth-building opportunities."
          height="w-full max-w-[300px] mx-auto sm:max-w-none aspect-[534/720] sm:aspect-auto sm:h-[260px] lg:h-[360px]"
          visual={<EarnVisual />}
          plainVisual
        />
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  height,
  visual,
  elevated = false,
  plainVisual = false,
}: {
  title: string;
  description: string;
  height: string;
  visual: React.ReactNode;
  elevated?: boolean;
  plainVisual?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-5 flex flex-col ${height} ${elevated ? 'md:-translate-y-8' : ''}`}
      style={{
        background: plainVisual
          ? 'transparent'
          : 'linear-gradient(180deg, #0a1f1f 0%, #051010 100%)',
        border: plainVisual
          ? 'none'
          : elevated
            ? '1px solid rgba(46,232,160,0.25)'
            : '1px solid rgba(46,232,160,0.08)',
        boxShadow: plainVisual
          ? 'none'
          : elevated
            ? '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 60px -10px rgba(46,232,160,0.25), 0 0 100px -20px rgba(46,232,160,0.15)'
            : 'none',
      }}
    >
      {/* Visual area */}
      <div
        className="flex-1 mb-5 overflow-hidden relative"
        style={{
          background: plainVisual
            ? 'transparent'
            : 'linear-gradient(135deg, #1a4d3a 0%, #0d3025 60%, #07201a 100%)',
          borderRadius: plainVisual ? '30px' : '12px',
        }}
      >
        {visual}
      </div>

      {/* Text below visual — only shown when not plainVisual */}
      {!plainVisual && (
        <div>
          <h3
            className="mb-2"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '24px',
              color: '#FFFFFF',
            }}
          >
            {title}
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

function MoneyVisual() {
  return (
    <div className="absolute inset-0">
      <img
        src="/card1and%203.svg"
        alt="Money"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content overlay on top of picture: white box + text */}
      <div className="absolute inset-0 flex flex-col p-[7%]">
        {/* White box — takes most of the space, with spaycard.svg + controls + transactionCard */}
        <div
          className="bg-white w-full overflow-hidden flex flex-col p-2 gap-1 sm:p-1.5 sm:gap-1 lg:p-4 lg:gap-3 relative basis-[60%] sm:basis-[58%] lg:basis-[65%] shrink-0 grow-0"
          style={{ borderRadius: '20px', containerType: 'inline-size' }}
        >
          {/* Top row — Spay card + controls */}
          <div className="flex items-start justify-between gap-2 sm:gap-1.5 lg:gap-3">
            {/* Left — Spay card image (scales with container width) */}
            <img
              src="/spaycard.svg"
              alt="Spay Card"
              className="object-contain"
              style={{ width: 'clamp(55px, 30cqw, 140px)', height: 'auto' }}
            />

            {/* Right — Switch pill + three circles (both centered together) */}
            <div className="flex flex-col items-center gap-1 lg:gap-2 mt-1 lg:mt-3">
              {/* Switch to USDT pill */}
              <div
                className="px-1.5 py-[1px] sm:px-1.5 lg:px-5 whitespace-nowrap"
                style={{ backgroundColor: '#D9D9D9CC', borderRadius: '10px' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: 'clamp(5.5px, 2.6cqw, 9px)',
                    color: '#000000',
                  }}
                >
                  Switch to USDT
                </span>
              </div>

              {/* Three circles */}
              <div className="flex items-center -space-x-1.5">
                <div
                  className="w-2 h-2 sm:w-2 sm:h-2 lg:w-4 lg:h-4 rounded-full border border-white"
                  style={{ backgroundColor: '#46F1C5' }}
                />
                <div
                  className="w-2 h-2 sm:w-2 sm:h-2 lg:w-4 lg:h-4 rounded-full border border-white"
                  style={{ backgroundColor: '#004132' }}
                />
                <div
                  className="w-2 h-2 sm:w-2 sm:h-2 lg:w-4 lg:h-4 rounded-full border border-white"
                  style={{ backgroundColor: '#0D1323' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom — transactionCard.png (scales with container width) */}
          <img
            src="/transactionCard.png"
            alt="Transaction Card"
            className="mt-auto object-contain"
            style={{ width: 'clamp(38px, 20cqw, 100px)', height: 'auto' }}
          />
        </div>
        {/* Text left-aligned below white box */}
        <div className="text-left mt-2 sm:mt-2 lg:mt-4">
          <h3
            className="mb-0.5 sm:mb-0.5 lg:mb-1 text-[16px] sm:text-[14px] lg:text-[24px]"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            MONEY
          </h3>
          <p
            className="leading-snug text-[10px] sm:text-[9px] lg:text-[12px]"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Manage all your finances with a single tap. Forget about banking hassles.
          </p>
        </div>
      </div>
    </div>
  );
}

function CryptoVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="/cryptoCard.svg"
        alt="Crypto Card"
        className="object-contain"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

function EarnVisual() {
  return (
    <div className="absolute inset-0">
      <img
        src="/card1and%203.svg"
        alt="Earn"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content overlay on top of picture: white box + text */}
      <div className="absolute inset-0 flex flex-col p-[7%]">
        <div
          className="bg-white w-full relative overflow-hidden basis-[60%] sm:basis-[58%] lg:basis-[65%] shrink-0 grow-0"
          style={{ borderRadius: '20px', containerType: 'inline-size' }}
        >
          {/* Top-left: APR + Amount + Ends On — constrained so it doesn't overlap wallet card */}
          <div className="absolute top-2 left-2 sm:top-2 sm:left-2 lg:top-3 lg:left-3 max-w-[48%] lg:max-w-[40%] whitespace-nowrap">
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: 'clamp(8px, 4cqw, 13px)',
                color: '#888',
              }}
            >
              APR 7.2%
            </div>
            <div
              className="flex items-baseline gap-1"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                fontSize: 'clamp(15px, 8cqw, 24px)',
                color: '#000',
                lineHeight: 1.1,
              }}
            >
              <span>15 920</span>
              <span style={{ fontSize: 'clamp(10px, 5cqw, 16px)', fontWeight: 500 }}>$</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: 'clamp(7px, 3.5cqw, 11px)',
                color: '#888',
                marginTop: '2px',
              }}
            >
              Ends On Dec 2
            </div>
          </div>

          {/* Top-right: Dark green wallet card — scales with white box width */}
          <div
            className="absolute top-1.5 right-1.5 p-1 sm:top-1.5 sm:right-1.5 sm:p-1 lg:top-3 lg:right-3 lg:p-2"
            style={{
              width: 'clamp(56px, 32cqw, 160px)',
              backgroundColor: '#0B3B2E',
              borderRadius: '8px',
            }}
          >
            <div className="flex items-center justify-between mb-0.5 lg:mb-2">
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: 'clamp(5px, 2.4cqw, 9px)',
                  color: '#46F1C5',
                  letterSpacing: '0.05em',
                }}
              >
                SPAY
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: 'clamp(5px, 2.4cqw, 9px)',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                Main Wallet
              </span>
            </div>
            <div className="flex gap-0.5 sm:gap-0.5 lg:gap-1 mb-0.5 lg:mb-2">
              <div className="flex-1 h-1 sm:h-1 lg:h-3 rounded" style={{ backgroundColor: '#F59E0B' }} />
              <div className="flex-1 h-1 sm:h-1 lg:h-3 rounded" style={{ backgroundColor: '#1a68c2' }} />
              <div className="flex-1 h-1 sm:h-1 lg:h-3 rounded" style={{ backgroundColor: '#22c55e' }} />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                fontSize: 'clamp(7px, 3.6cqw, 14px)',
                color: '#FFFFFF',
              }}
            >
              2,192.
            </div>
          </div>

          {/* Bottom-right: ...bution */}
          <div
            className="absolute right-2 bottom-6 sm:right-2 sm:bottom-6 lg:right-3 lg:bottom-7"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: 'clamp(7px, 3.5cqw, 11px)',
              color: '#888',
            }}
          >
            ...bution
          </div>

          {/* Bottom-right: Staking */}
          <div
            className="absolute right-2 bottom-1.5 sm:right-2 sm:bottom-1.5 lg:right-3 lg:bottom-2 flex items-center gap-1"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: 'clamp(7px, 3.5cqw, 11px)',
              color: '#888',
            }}
          >
            <span>Staking</span>
            <span>⚙</span>
          </div>
        </div>
        <div className="text-left mt-2 sm:mt-2 lg:mt-4">
          <h3
            className="mb-0.5 sm:mb-0.5 lg:mb-1 text-[16px] sm:text-[14px] lg:text-[24px]"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            EARN
          </h3>
          <p
            className="leading-snug text-[10px] sm:text-[9px] lg:text-[12px]"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Get a wide range of innovative financial tools for unlimited wealth-building opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
