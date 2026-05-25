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

type TitlePart = { text: string; color: string };
type FeatureCard = {
  title: string;
  desc: string;
  image: string;
  bgStart: string;
  bgEnd: string;
};
type FeaturesData = {
  eyebrow: string;
  titleParts: TitlePart[];
  cards: FeatureCard[];
};

const FEATURES_DATA: FeaturesData = {
  eyebrow: "A new era of digital banking",
  titleParts: [
    { text: "TAKE ", color: "#ffffff" },
    { text: "CONTROL", color: "#46F1C5" },
    { text: " OF ALL\nYOUR ", color: "#ffffff" },
    { text: "MONEY", color: "#46F1C5" },
  ],
  cards: [
    {
      title: "TRANSACTION",
      desc: "Manage all your finances with a single tap. Forget about banking hassles.",
      image: "/transactions.jpeg",
      bgStart: "#46F1C5",
      bgEnd: "#004132",
    },
    {
      title: "CRYPTO",
      desc: "Safely hold, effortlessly send, receive, and monitor your cryptocurrency holding.",
      image: "/crypto.jpeg",
      bgStart: "#46F1C5",
      bgEnd: "#004132",
    },
    {
      title: "HISTORY",
      desc: "Get a wide range of innovative financial tools for unlimited wealth-building opportunities.",
      image: "/notifications.jpeg",
      bgStart: "#46F1C5",
      bgEnd: "#004132",
    },
  ],
};

export default function FeaturesSection() {
  const data = FEATURES_DATA;
  const t = {
    eyebrow: "#A6AABE",
    cardTitle: "#FFFFFF",
    cardDesc: "rgba(255,255,255,0.8)",
  };
  const cards = data.cards;
  return (
    <section
      className="relative pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-10 lg:pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #090e1c 0%, #071414 50%, #090e1c 100%)',
      }}
    >
      <div className="relative z-10 text-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6">
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
        <p
          className="font-inter font-normal not-italic tracking-[6px] text-xs md:text-sm uppercase mb-5"
          style={{ color: t.eyebrow }}
        >
          {data.eyebrow}
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white whitespace-pre-line"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {data.titleParts.map((p, i) => (
            <span key={i} style={{ color: p.color }}>{p.text}</span>
          ))}
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
      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-3 lg:gap-6 items-center">
        {cards.map((c, i) => {
          const isCenter = i === 1;
          return (
            <div key={i} className="flex items-center justify-center px-0 sm:px-2 lg:px-10">
              <div
                className={`w-full max-w-[300px] sm:max-w-none mx-auto relative origin-bottom ${
                  isCenter ? "sm:scale-110 lg:scale-125" : "sm:scale-105 lg:scale-110"
                }`}
                style={{
                  aspectRatio: isCenter ? "534 / 720" : "534 / 660",
                  borderRadius: "30px",
                  background: `linear-gradient(135deg, ${c.bgStart} 0%, ${c.bgEnd} 100%)`,
                }}
              >
                <div className="absolute inset-0 flex flex-col p-[7%]">
                  <div
                    className={`w-full ${
                      isCenter
                        ? "basis-[60%] sm:basis-[58%] lg:basis-[70%]"
                        : i === 0
                        ? "basis-[60%] sm:basis-[56%] lg:basis-[67%]"
                        : "basis-[68%] sm:basis-[64%] lg:basis-[75%]"
                    } shrink-0 grow-0 flex items-start justify-center`}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-[95%] object-cover"
                      style={{ borderRadius: "20px" }}
                    />
                  </div>
                  <div className="text-left mt-2 sm:mt-2 lg:mt-4">
                    <h3
                      className="mb-0.5 sm:mb-0.5 lg:mb-1 text-[14px] sm:text-[13px] lg:text-[20px]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        color: t.cardTitle,
                        lineHeight: 1.1,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="leading-snug text-[9px] sm:text-[8px] lg:text-[10px]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        color: t.cardDesc,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

