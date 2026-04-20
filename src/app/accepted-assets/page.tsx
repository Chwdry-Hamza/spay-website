// import Link from "next/link";
// import Footer from "@/components/Footer";

// export default function AcceptedAssetsPage() {
//   return (
//     <main className="bg-black min-h-screen">
//       {/* Header */}
//       <header className="relative z-10 w-full max-w-380 mx-auto px-4 md:px-8 py-4 md:py-8 flex items-center justify-between">
//         <Link href="/" className="text-amber-100 font-bold text-2xl tracking-tight hover:text-white transition-colors">
//           SICASH
//         </Link>
//         <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
//           English
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//       </header>

//       {/* Hero Section */}
//       <section className="relative py-12 md:py-20">
//         <div className="w-full max-w-380 mx-auto px-4 md:px-8">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6">
//             <span className="text-amber-100">ACCEPTED</span>{" "}
//             <span className="text-white">ASSETS</span>
//           </h1>
//           <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
//             SICASH supports a wide range of cryptocurrencies and fiat currencies for seamless transactions and management.
//           </p>
//         </div>
//       </section>

//       {/* Cryptocurrencies Section */}
//       <section className="py-12 md:py-20">
//         <div className="w-full max-w-380 mx-auto px-4 md:px-8">
//           <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8 md:mb-12">CRYPTOCURRENCIES</h2>

//           <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8">
//             {/* USDT */}
//             <a href="https://coinmarketcap.com/currencies/tether/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-teal-400 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-2xl md:text-3xl font-bold">₮</span>
//               </div>
//               <p className="text-zinc-400 text-sm">USDT</p>
//             </a>

//             {/* BTC */}
//             <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-amber-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-2xl md:text-3xl font-bold">₿</span>
//               </div>
//               <p className="text-zinc-400 text-sm">BTC</p>
//             </a>

//             {/* ETH */}
//             <a href="https://coinmarketcap.com/currencies/ethereum/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-zinc-300 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-zinc-700 text-2xl md:text-3xl">◆</span>
//               </div>
//               <p className="text-zinc-400 text-sm">ETH</p>
//             </a>

//             {/* USDC */}
//             <a href="https://coinmarketcap.com/currencies/usd-coin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-xl md:text-2xl font-bold">$</span>
//               </div>
//               <p className="text-zinc-400 text-sm">USDC</p>
//             </a>

//             {/* ALGO */}
//             <a href="https://coinmarketcap.com/currencies/algorand/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-transparent border-2 border-zinc-600 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-xl md:text-2xl font-bold">A</span>
//               </div>
//               <p className="text-zinc-400 text-sm">ALGO</p>
//             </a>

//             {/* ADA */}
//             <a href="https://coinmarketcap.com/currencies/cardano/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-zinc-200 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <svg className="w-7 h-7 md:w-10 md:h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//                   <circle cx="12" cy="12" r="2" />
//                   <circle cx="12" cy="6" r="1.5" />
//                   <circle cx="12" cy="18" r="1.5" />
//                   <circle cx="6" cy="9" r="1.5" />
//                   <circle cx="18" cy="9" r="1.5" />
//                   <circle cx="6" cy="15" r="1.5" />
//                   <circle cx="18" cy="15" r="1.5" />
//                 </svg>
//               </div>
//               <p className="text-zinc-400 text-sm">ADA</p>
//             </a>

//             {/* SOL */}
//             <a href="https://coinmarketcap.com/currencies/solana/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-linear-to-br from-purple-500 via-teal-400 to-teal-300 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-xl md:text-2xl font-bold">=</span>
//               </div>
//               <p className="text-zinc-400 text-sm">SOL</p>
//             </a>

//             {/* DOGE */}
//             <a href="https://coinmarketcap.com/currencies/dogecoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-amber-400 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-amber-900 text-xl md:text-2xl font-bold">D</span>
//               </div>
//               <p className="text-zinc-400 text-sm">DOGE</p>
//             </a>

//             {/* GRT */}
//             <a href="https://coinmarketcap.com/currencies/the-graph/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-purple-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-xl md:text-2xl font-bold">G</span>
//               </div>
//               <p className="text-zinc-400 text-sm">GRT</p>
//             </a>

//             {/* LTC */}
//             <a href="https://coinmarketcap.com/currencies/litecoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-2xl md:text-3xl font-bold">Ł</span>
//               </div>
//               <p className="text-zinc-400 text-sm">LTC</p>
//             </a>

//             {/* BCH */}
//             <a href="https://coinmarketcap.com/currencies/bitcoin-cash/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-2xl md:text-3xl font-bold">₿</span>
//               </div>
//               <p className="text-zinc-400 text-sm">BCH</p>
//             </a>

//             {/* TRX */}
//             <a href="https://coinmarketcap.com/currencies/tron/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-red-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-xl md:text-2xl font-bold">T</span>
//               </div>
//               <p className="text-zinc-400 text-sm">TRX</p>
//             </a>

//             {/* TON */}
//             <a href="https://coinmarketcap.com/currencies/toncoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
//               <div className="w-14 h-14 md:w-20 md:h-20 bg-sky-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
//                 <span className="text-white text-xl md:text-2xl font-bold">T</span>
//               </div>
//               <p className="text-zinc-400 text-sm">TON</p>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Fiat Currencies Section */}
//       <section className="py-12 md:py-20">
//         <div className="w-full max-w-380 mx-auto px-4 md:px-8">
//           <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8 md:mb-12">FIAT CURRENCIES</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
//             {/* EUR */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-amber-200/50 transition-colors">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
//                 <span className="text-white text-2xl md:text-3xl font-bold">€</span>
//               </div>
//               <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Euro</h3>
//               <p className="text-zinc-500 text-base md:text-lg">EUR</p>
//               <p className="text-zinc-600 text-sm mt-3 md:mt-4">IBAN accounts available</p>
//             </div>

//             {/* USD */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-amber-200/50 transition-colors">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
//                 <span className="text-white text-2xl md:text-3xl font-bold">$</span>
//               </div>
//               <h3 className="text-white text-xl md:text-2xl font-bold mb-2">US Dollar</h3>
//               <p className="text-zinc-500 text-base md:text-lg">USD</p>
//               <p className="text-zinc-600 text-sm mt-3 md:mt-4">IBAN accounts available</p>
//             </div>

//             {/* GBP */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-amber-200/50 transition-colors">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
//                 <span className="text-white text-2xl md:text-3xl font-bold">£</span>
//               </div>
//               <h3 className="text-white text-xl md:text-2xl font-bold mb-2">British Pound</h3>
//               <p className="text-zinc-500 text-base md:text-lg">GBP</p>
//               <p className="text-zinc-600 text-sm mt-3 md:mt-4">Coming soon</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Supported Networks Section */}
//       <section className="py-12 md:py-20">
//         <div className="w-full max-w-380 mx-auto px-4 md:px-8">
//           <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8 md:mb-12">SUPPORTED NETWORKS</h2>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
//             {/* Ethereum Network */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <span className="text-white text-lg md:text-xl">◇</span>
//               </div>
//               <h3 className="text-white font-bold text-sm md:text-base">Ethereum</h3>
//               <p className="text-zinc-500 text-xs md:text-sm">ERC-20</p>
//             </div>

//             {/* Tron Network */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <span className="text-white text-lg md:text-xl font-bold">T</span>
//               </div>
//               <h3 className="text-white font-bold text-sm md:text-base">Tron</h3>
//               <p className="text-zinc-500 text-xs md:text-sm">TRC-20</p>
//             </div>

//             {/* Bitcoin Network */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <span className="text-white text-lg md:text-xl font-bold">₿</span>
//               </div>
//               <h3 className="text-white font-bold text-sm md:text-base">Bitcoin</h3>
//               <p className="text-zinc-500 text-xs md:text-sm">Native</p>
//             </div>

//             {/* Polygon Network */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//                 </svg>
//               </div>
//               <h3 className="text-white font-bold text-sm md:text-base">Polygon</h3>
//               <p className="text-zinc-500 text-xs md:text-sm">MATIC</p>
//             </div>

//             {/* BSC Network */}
//             <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <span className="text-black text-lg md:text-xl font-bold">B</span>
//               </div>
//               <h3 className="text-white font-bold text-sm md:text-base">BNB Chain</h3>
//               <p className="text-zinc-500 text-xs md:text-sm">BEP-20</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Info Section */}
//       <section className="py-12 md:py-20">
//         <div className="w-full max-w-380 mx-auto px-4 md:px-8">
//           <div className="bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">Important Information</h2>

//             <div className="space-y-4 md:space-y-6 text-zinc-400">
//               <div className="flex gap-3 md:gap-4">
//                 <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
//                   <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-base md:text-lg">Minimum deposit and withdrawal amounts may vary depending on the asset and network selected.</p>
//               </div>

//               <div className="flex gap-3 md:gap-4">
//                 <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
//                   <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-base md:text-lg">Always double-check the network you are using when sending or receiving crypto assets.</p>
//               </div>

//               <div className="flex gap-3 md:gap-4">
//                 <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
//                   <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-base md:text-lg">SICASH reserves the right to add or remove supported assets at any time.</p>
//               </div>

//               <div className="flex gap-3 md:gap-4">
//                 <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
//                   <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-base md:text-lg">For large OTC trades, please contact our dedicated OTC desk for personalized rates.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 md:py-20">
//         <div className="w-full max-w-380 mx-auto px-4 md:px-8 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Ready to Get Started?</h2>
//           <p className="text-zinc-400 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
//             Open your SICASH account today and start managing your fiat and crypto assets in one place.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
//             <Link href="/otc-desk" className="px-6 md:px-8 py-3 md:py-4 bg-amber-200 hover:bg-amber-100 text-black font-bold text-sm tracking-wider rounded transition-colors">
//               EXPLORE OTC DESK
//             </Link>
//             <Link href="/about" className="px-6 md:px-8 py-3 md:py-4 bg-zinc-700 hover:bg-zinc-600 text-white font-bold text-sm tracking-wider rounded transition-colors">
//               LEARN MORE
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import AppHeader from "@/components/AppHeader";
import { useState } from "react";

export default function AcceptedAssetsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen">
      <AppHeader />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6">
            <span className="text-amber-100">ACCEPTED</span>{" "}
            <span className="text-white">ASSETS</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
            SICASH supports a wide range of cryptocurrencies and fiat currencies for seamless transactions and management.
          </p>
        </div>
      </section>

      {/* Cryptocurrencies Section */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8 md:mb-12">CRYPTOCURRENCIES</h2>

          <div className="grid grid-cols-3 md:flex md:flex-nowrap items-center justify-between gap-4 md:gap-6 pb-4">
            {/* ETH */}
            <a href="https://coinmarketcap.com/currencies/ethereum/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-zinc-300 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <span className="text-zinc-700 text-2xl md:text-3xl">◆</span>
              </div>
              <p className="text-zinc-400 text-sm">ETH</p>
            </a>
            {/* TRX */}
            <a href="https://coinmarketcap.com/currencies/tron/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-red-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <span className="text-white text-xl md:text-2xl font-bold">T</span>
              </div>
              <p className="text-zinc-400 text-sm">TRX</p>
            </a>
            {/* BTC */}
            <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-amber-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <span className="text-white text-2xl md:text-3xl font-bold">₿</span>
              </div>
              <p className="text-zinc-400 text-sm">BTC</p>
            </a>
            {/* MATIC */}
            <a href="https://coinmarketcap.com/currencies/polygon/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-purple-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <svg className="w-7 h-7 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm">MATIC</p>
            </a>
            {/* BNB */}
            <a href="https://coinmarketcap.com/currencies/bnb/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <span className="text-black text-xl md:text-2xl font-bold">B</span>
              </div>
              <p className="text-zinc-400 text-sm">BNB</p>
            </a>
            {/* Add Button */}
            <button onClick={() => setIsModalOpen(true)} className="flex flex-col items-center p-3 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-zinc-600 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm">Add</p>
            </button>
          </div>
        </div>
      </section>

      {/* Request Currency Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

          {/* Modal */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 w-full max-w-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl md:text-3xl font-bold text-amber-100 mb-2">
              CAN&apos;T FIND A CRYPTO ASSET? LEAVE A REQUEST.
            </h3>
            <p className="text-zinc-400 text-lg mb-8 italic">And we will make it happen.</p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-amber-200 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="mail@gmail.com"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-amber-200 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Currency name"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-amber-200 transition-colors"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-linear-to-b from-zinc-300 to-zinc-500 text-zinc-900 font-bold text-sm tracking-wider rounded-lg hover:from-zinc-200 hover:to-zinc-400 transition-all"
                >
                  REQUEST CURRENCY
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fiat Currencies Section */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8 md:mb-12">FIAT CURRENCIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* EUR */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-white text-2xl md:text-3xl font-bold">€</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Euro</h3>
              <p className="text-zinc-500 text-base md:text-lg">EUR</p>
              <p className="text-zinc-600 text-sm mt-3 md:mt-4">IBAN accounts available</p>
            </div>

            {/* USD */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-white text-2xl md:text-3xl font-bold">$</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">US Dollar</h3>
              <p className="text-zinc-500 text-base md:text-lg">USD</p>
              <p className="text-zinc-600 text-sm mt-3 md:mt-4">IBAN accounts available</p>
            </div>

            {/* GBP */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-white text-2xl md:text-3xl font-bold">£</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">British Pound</h3>
              <p className="text-zinc-500 text-base md:text-lg">GBP</p>
              <p className="text-zinc-600 text-sm mt-3 md:mt-4">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Networks Section */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8 md:mb-12">SUPPORTED NETWORKS</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {/* Ethereum Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-lg md:text-xl">◇</span>
              </div>
              <h3 className="text-white font-bold text-sm md:text-base">Ethereum</h3>
              <p className="text-zinc-500 text-xs md:text-sm">ERC-20</p>
            </div>

            {/* Tron Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-lg md:text-xl font-bold">T</span>
              </div>
              <h3 className="text-white font-bold text-sm md:text-base">Tron</h3>
              <p className="text-zinc-500 text-xs md:text-sm">TRC-20</p>
            </div>

            {/* Bitcoin Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-lg md:text-xl font-bold">₿</span>
              </div>
              <h3 className="text-white font-bold text-sm md:text-base">Bitcoin</h3>
              <p className="text-zinc-500 text-xs md:text-sm">Native</p>
            </div>

            {/* Polygon Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm md:text-base">Polygon</h3>
              <p className="text-zinc-500 text-xs md:text-sm">MATIC</p>
            </div>

            {/* BSC Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-black text-lg md:text-xl font-bold">B</span>
              </div>
              <h3 className="text-white font-bold text-sm md:text-base">BNB Chain</h3>
              <p className="text-zinc-500 text-xs md:text-sm">BEP-20</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">Important Information</h2>

            <div className="space-y-4 md:space-y-6 text-zinc-400">
              <div className="flex gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base md:text-lg">Minimum deposit and withdrawal amounts may vary depending on the asset and network selected.</p>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base md:text-lg">Always double-check the network you are using when sending or receiving crypto assets.</p>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base md:text-lg">SICASH reserves the right to add or remove supported assets at any time.</p>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base md:text-lg">For large OTC trades, please contact our dedicated OTC desk for personalized rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Ready to Get Started?</h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
            Open your SICASH account today and start managing your fiat and crypto assets in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/otc-desk" className="px-6 md:px-8 py-3 md:py-4 bg-amber-200 hover:bg-amber-100 text-black font-bold text-sm tracking-wider rounded transition-colors">
              EXPLORE OTC DESK
            </Link>
            <Link href="/about" className="px-6 md:px-8 py-3 md:py-4 bg-zinc-700 hover:bg-zinc-600 text-white font-bold text-sm tracking-wider rounded transition-colors">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 