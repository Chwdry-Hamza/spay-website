"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-0 md:pb-32">
      {/* Mobile Layout */}
      <div className="md:hidden px-6 pb-24">
        {/* Logo */}
        <h2 className="text-white text-5xl font-black tracking-tight text-center mb-2">SICASH</h2>

        {/* Header */}
        <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase text-center mb-12">
          THE MONEY APP
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-10 mb-16">
          {/* X (Twitter) */}
          <a href="#" className="text-white hover:text-zinc-400 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-white hover:text-zinc-400 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="text-white hover:text-zinc-400 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-white hover:text-zinc-400 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <Link href="/about" className="text-zinc-400 text-sm hover:text-white transition-colors">ABOUT SICASH</Link>
          <Link href="/otc-desk" className="text-zinc-400 text-sm hover:text-white transition-colors">OTC DESK</Link>
          <Link href="/privacy-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">PRIVACY POLICY</Link>
          <Link href="/cookie-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">COOKIE POLICY</Link>
          <Link href="/terms-conditions" className="text-zinc-400 text-sm hover:text-white transition-colors">TERMS & CONDITIONS</Link>
          <Link href="/accepted-assets" className="text-zinc-400 text-sm hover:text-white transition-colors">ACCEPTED ASSETS</Link>
        </div>
  

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-8" />

        {/* App Store Buttons */}
        <div className="flex flex-col gap-3 mb-8">
          {/* App Store */}
          <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-3 hover:bg-zinc-800 transition-colors">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-zinc-400">Download on the</p>
              <p className="text-white text-base font-semibold -mt-0.5">App Store</p>
            </div>
          </a>  
          {/* Google Play */}
          <a href="https://play.google.com/store/apps/details?id=com.sicash" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-3 hover:bg-zinc-800 transition-colors">
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
        <p className="text-zinc-600 text-sm text-center mb-6">&copy;SICASH 2025</p>

        {/* Legal Text */}
        <div className="space-y-4 text-zinc-600 text-xs leading-relaxed text-center">
          <p>
            SICASH HOLDING LIMITED is a company registered at Cloud Desk D08, 11th Floor, Al Sarab Tower, Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi, United Arab Emirates, company number 000010186.
          </p>
          <p>
            SICASH POLAND SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ is a company registered at 48 Wita Stwosza str., office 105, code 02-661, Warsaw, Poland, KRS number: 0001069747, NIP: 5214045155, REGON: 526968250.
          </p>
          <p>
            SICASH IP - FZCO, a company registered at IFZA Business Park, DDP, 001 - 47487, PO Box 342001, Dubai, United Arab Emirates, Registration Number DSO-FZCO-45281, License Number 47487.
          </p>
          <p>
            SICASH TECH - FZCO, a company registered at IFZA Business Park, DDP, 001 - 47488, PO Box 342001, Dubai, United Arab Emirates, Registration Number DSO-FZCO-45282, License Number 47488.
          </p>
          <p>
            SICASH Holding, SICASH Poland, SICASH IP and SICASH TECH use the trading name &quot;SICASH&quot;.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full max-w-420 mx-auto px-12">
        {/* Top Section - Logo and Social Icons */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <div>
            <h2 className="text-white text-4xl font-black tracking-tight">SICASH</h2>
            <p className="text-zinc-500 text-sm tracking-widest mt-1">THE MONEY APP</p>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {/* X (Twitter) */}
            <a href="#" className="text-white hover:text-zinc-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-white hover:text-zinc-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-white hover:text-zinc-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white hover:text-zinc-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div> 
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 mb-8">
          <Link href="/about" className="text-zinc-400 text-sm hover:text-white transition-colors">ABOUT SICASH</Link>
          <Link href="/otc-desk" className="text-zinc-400 text-sm hover:text-white transition-colors">OTC DESK</Link>
          <Link href="/privacy-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">PRIVACY POLICY</Link>
          <Link href="/cookie-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">COOKIE POLICY</Link>
          <Link href="/terms-conditions" className="text-zinc-400 text-sm hover:text-white transition-colors">TERMS & CONDITIONS</Link>
          <Link href="/accepted-assets" className="text-zinc-400 text-sm hover:text-white transition-colors">ACCEPTED ASSETS</Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-amber-900/50 mb-8" />

        {/* Bottom Section */}
        <div className="flex justify-between gap-12">
          {/* Legal Text */}
          <div className="flex-1 space-y-4 text-zinc-600 text-sm leading-relaxed">
            <p>&copy;SICASH 2025</p>
            <p>
              SICASH HOLDING LIMITED is a company registered at Cloud Desk D08, 11thFloor, Al Sarab Tower, Abu Dhabi Global Market Square, Al Maryahlsland, Abu Dhabi, United Arab Emirates, company number 000010186.
            </p>
            <p>
              SICASH POLAND SP&Oacute;LKA Z OGRANICZON&Aogon; ODPOWIEDZIALNO&Sacute;CI&Aogon; is a company registered at 48 Wita Stwosza str., office 105, code 02-661, Warsaw, Poland, KRS number: 0001069747, NIP: 5214045155, REGON: 526968250.
            </p>
            <p>
              SICASH IP - FZCO, a company registered at IFZA Business Park, DDP, 001 - 47487, PO Box 342001, Dubai, United Arab Emirates, Registration Number DSO-FZCO-45281, License Number 47487.
            </p>
            <p>
              SICASH TECH - FZCO, a company registered at IFZA Business Park, DDP, 001 - 47488, PO Box 342001, Dubai, United Arab Emirates, Registration Number DSO-FZCO-45282, License Number 47488.
            </p>
            <p>
              SICASH Holding, SICASH Poland, SICASH IP and SICASH TECH use the trading name &quot;SICASH&quot;.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col gap-3 shrink-0">
            {/* App Store */}
            <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 hover:bg-zinc-800 transition-colors">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-[10px] text-zinc-400">Download on the</p>
                <p className="text-white text-sm font-semibold -mt-0.5">App Store</p>
              </div>
            </a>
            {/* Google Play */}
            <a href="https://play.google.com/store/apps/details?id=com.sicash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 hover:bg-zinc-800 transition-colors">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.79.64 1.18 0 .4-.24.9-.64 1.18l-2.61 1.51-2.38-2.38 2.38-2.38 2.61 1.51zm-3.35-4.31l2.27 2.27-8.49 8.49L6.05 2.66l10.76 4.22z" />
              </svg>
              <div>
                <p className="text-[10px] text-zinc-400">GET IT ON</p>
                <p className="text-white text-sm font-semibold -mt-0.5">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
