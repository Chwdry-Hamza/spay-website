// "use client";

// export default function PaymentSection() {
//   return (
//     <section id="payment" className="relative py-12 md:py-32 overflow-hidden">
//       {/* Background gradient - black to cream */}
//       <div className="absolute inset-0 bg-black" />

//       {/* Glow effect - mobile: bottom amber glow, desktop: center glow */}
//       <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-900/20 rounded-full blur-3xl" />
//       <div className="md:hidden absolute bottom-0 left-0 right-0 h-80 bg-linear-to-t from-amber-900/40 via-amber-800/20 to-transparent" />
//       <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md h-40 bg-amber-700/30 rounded-full blur-3xl" />

//       {/* Bottom gradient transition to next section - desktop only */}
//       <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-[#f5f0e6]" />

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-380 mx-auto px-6 md:px-8">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-16">
//           <p className="text-zinc-500 text-xs md:text-sm tracking-[0.2em] md:tracking-widest uppercase mb-4">
//             FIAT AND CRYPTO
//           </p>
//           {/* Mobile: italic "HOW TO PAY", Desktop: normal */}
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
//             CHOOSE HOW TO PAY
//           </h2>
//           <p className="text-lg md:text-xl text-zinc-400">
//             Switch between fiat and crypto in a second.
//           </p>
//         </div>

//         {/* Card Display */}
//         <div className="flex flex-col items-center">
//           {/* Credit Card - Mobile: 3D perspective, Desktop: original style */}
//           {/* Mobile Card */}
//           <div className="md:hidden relative w-full max-w-sm" style={{ perspective: '1000px' }}>
//             <div
//               className="w-full aspect-[1.6/1] bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800/50"
//               style={{
//                 transform: 'rotateX(15deg)',
//                 transformStyle: 'preserve-3d'
//               }}
//             >
//               <div className="p-5 h-full flex flex-col justify-between">
//                 <div className="text-amber-100 font-bold text-base tracking-tight">SICASH</div>
//                 <div className="flex items-end justify-between">
//                   <span className="text-white text-2xl font-light tracking-wide">16 623 USDT</span>
//                   <div className="flex -space-x-2">
//                     <div className="w-7 h-7 bg-red-500 rounded-full opacity-90" />
//                     <div className="w-7 h-7 bg-amber-400 rounded-full opacity-90" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Card */}
//           <div className="hidden md:block relative w-120 h-72 perspective-1000">
//             <div className="w-full h-full bg-zinc-900 rounded-3xl shadow-2xl transform rotate-x-12 border border-zinc-800">
//               <div className="p-8 h-full flex flex-col justify-between">
//                 <div className="text-amber-100 font-bold text-xl">SICASH</div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-white text-4xl font-light tracking-wide">16 623 USDT</span>
//                   <div className="flex -space-x-3">
//                     <div className="w-10 h-10 bg-red-500 rounded-full opacity-90" />
//                     <div className="w-10 h-10 bg-amber-400 rounded-full opacity-90" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Switch Button */}
//           <div className="mt-10 md:mt-12">
//             <button className="flex items-center gap-3 bg-zinc-900 md:bg-zinc-900 backdrop-blur-sm border border-zinc-700 rounded-full pl-6 pr-2 py-2 md:px-6 md:py-4 hover:bg-zinc-800 transition-colors">
//               <span className="text-white text-base md:text-lg">Switch to EUR</span>
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <span className="text-zinc-900 font-bold text-sm">₮</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function PaymentSection() {
  return (
    <section
      id="payment"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: '#090e1c',
      }}
    >
      {/* Soft teal radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #0e2e2e 50%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center">

        {/* Header */}
        <p className="text-zinc-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-5">
          Fiat and Crypto
        </p>
        <h2
          className="text-4xl md:text-6xl font-bold leading-tight text-center mb-5"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          <span style={{ color: '#46F1C5' }}>CHOOSE </span>
          <span className="text-white">HOW TO PAY</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base text-center mb-12 md:mb-16 max-w-md">
          Switch between fiat and crypto in a Second
        </p>

        {/* Credit Card */}
        <img
          src="/masterCard.png"
          alt="SPAY Mastercard"
          className="w-full max-w-2xl md:max-w-3xl aspect-[1.9/1] object-cover"
          style={{ transform: 'scale(1.4)' }}
        />

        {/* Switch button */}
        <button
          className="mt-10 md:mt-12 flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 transition-all hover:opacity-90"
          style={{
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span className="text-white text-sm md:text-base">Switch to EUR</span>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #1fc98a, #0fa86e)' }}
          >
            €
          </div>
        </button>
      </div>
    </section>
  );
}
