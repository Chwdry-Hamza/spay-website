"use client";

import Image from "next/image";

export default function JoinUsSection() {
  return (
    <section className="relative bg-black pt-16 md:pt-32 pb-24 md:pb-48 overflow-hidden">
      {/* Photo Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-40">
        {/* Row 1 */}
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        {/* Row 2 */}
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        {/* Row 3 */}
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale" />
        </div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-380 mx-auto px-8 text-center py-24">
        <p className="text-zinc-400 text-sm tracking-widest uppercase mb-8">
          JOIN US
        </p>
        <h2 className="text-7xl md:text-8xl font-bold leading-tight mb-8">
          <span className="text-white">TIME IS </span>
          <span className="text-amber-100">MONEY</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Say goodbye to juggling multiple apps and tools for your financial
          transactions. SICASH is your one-stop solution for all your money needs.
        </p>
        <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="inline-block bg-linear-to-b from-zinc-200 to-zinc-400 text-black font-semibold px-12 py-5 text-lg rounded-2xl hover:from-zinc-100 hover:to-zinc-300 transition-all shadow-xl">
          GET SICASH APP
        </a>
      </div>
    </section>
  );
}
