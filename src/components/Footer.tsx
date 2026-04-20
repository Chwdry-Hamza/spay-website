"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="pt-4 md:pt-8 pb-0 md:pb-32"
      style={{ backgroundColor: "#090e1c" }}
    >
      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-7xl mx-auto px-4 sm:px-8 pb-32">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src="/Spay.png" alt="SPAY" style={{ height: "2.5rem", width: "auto" }} />
        </div>

        {/* Header */}
        <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase text-center mb-12">
          THE MONEY APP
        </p>

        {/* Divider */}
        <div className="h-px mb-10" style={{ background: "#0e2e2e" }} />

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <Link href="/about" className="text-zinc-400 text-sm hover:text-white transition-colors">About SPay</Link>
          <Link href="/privacy-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/card-terms" className="text-zinc-400 text-sm hover:text-white transition-colors">Card Terms</Link>
          <Link href="/prohibited-activities" className="text-zinc-400 text-sm hover:text-white transition-colors">Prohibited Activities</Link>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col gap-3 mb-8 items-center">
          {/* App Store */}
          <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-3 hover:bg-zinc-800 transition-colors w-full max-w-xs">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-zinc-400">Download on the</p>
              <p className="text-white text-base font-semibold -mt-0.5">App Store</p>
            </div>
          </a>
          {/* Google Play */}
          <a href="https://play.google.com/store/apps/details?id=com.sicash" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-3 hover:bg-zinc-800 transition-colors w-full max-w-xs">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.79.64 1.18 0 .4-.24.9-.64 1.18l-2.61 1.51-2.38-2.38 2.38-2.38 2.61 1.51zm-3.35-4.31l2.27 2.27-8.49 8.49L6.05 2.66l10.76 4.22z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-zinc-400">GET IT ON</p>
              <p className="text-white text-base font-semibold -mt-0.5">Google Play</p>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-zinc-500 text-sm text-center mb-8">&copy; 2026 SPay. All rights reserved.</p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Section - Logo */}
        <div className="flex flex-col items-start mb-12">
          <img src="/Spay.png" alt="SPAY" style={{ height: "2.2rem", width: "auto" }} />
          <p className="text-zinc-500 text-sm tracking-widest mt-1">THE MONEY APP</p>
        </div>

        {/* Divider */}
        <div className="h-px mb-10" style={{ background: "#0e2e2e" }} />

        {/* Navigation Links - Centered */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 mb-10">
          <Link href="/about" className="text-zinc-300 text-base hover:text-white transition-colors">About SPay</Link>
          <Link href="/privacy-policy" className="text-zinc-300 text-base hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/card-terms" className="text-zinc-300 text-base hover:text-white transition-colors">Card Terms</Link>
          <Link href="/prohibited-activities" className="text-zinc-300 text-base hover:text-white transition-colors">Prohibited Activities</Link>
        </div>

        {/* App Store Buttons - Centered */}
        <div className="flex justify-center gap-4 mb-10">
          {/* App Store */}
          <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-3 hover:bg-zinc-800 transition-colors">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-zinc-400">Download on the</p>
              <p className="text-white text-base font-semibold -mt-0.5">App Store</p>
            </div>
          </a>
          {/* Google Play */}
          <a href="https://play.google.com/store/apps/details?id=com.sicash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-3 hover:bg-zinc-800 transition-colors">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.79.64 1.18 0 .4-.24.9-.64 1.18l-2.61 1.51-2.38-2.38 2.38-2.38 2.61 1.51zm-3.35-4.31l2.27 2.27-8.49 8.49L6.05 2.66l10.76 4.22z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-zinc-400">GET IT ON</p>
              <p className="text-white text-base font-semibold -mt-0.5">Google Play</p>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-zinc-500 text-sm text-center mb-8">&copy; 2026 SPay. All rights reserved.</p>
      </div>
    </footer>
  );
}
