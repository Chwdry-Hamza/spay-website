"use client";

export default function TransferSection() {
  return (
    <section id="transfer" className="relative bg-[#f5f0e6] py-12 md:py-32 overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 w-full px-6">
        {/* Header */}
        <p className="text-zinc-600 text-xs tracking-[0.2em] uppercase mb-6">
          TRANSFERS WITHOUT BARRIERS
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-zinc-900 leading-tight mb-6 text-center">
          SEND MONEY EASILY, ANYWHERE, TO ANYONE
        </h2>

        {/* Subtitle */}
        <p className="text-base text-zinc-600 mb-10 leading-relaxed text-center">
          Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA bank accounts, and seamlessly send crypto assets with a single tap.
        </p>

        {/* Contacts Row */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <AvatarMobile img="👨" />
            <AvatarMobile img="👩" />
            <AvatarMobile img="👨‍🦱" />
            <AvatarMobile img="👩‍🦰" />
            <AvatarMobile img="👱‍♀️" />
          </div>

          {/* All Contacts Button */}
          <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-800 text-white rounded-full px-5 py-3 hover:bg-zinc-700 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-xs font-medium tracking-wide">ALL CONTACTS</span>
          </a>
        </div>

        <p className="text-zinc-600 text-sm text-center mb-10">
          Skip the numbers – send money straight to your contacts instantly
        </p>

        {/* Phone Mockup - Mobile */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-64 h-100">
            {/* Phone */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-95 bg-zinc-900 rounded-[40px] border-4 border-zinc-800 shadow-2xl overflow-hidden transform rotate-3">
              <div className="w-full h-full bg-zinc-900 p-3">
                {/* Floating avatars */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <div className="w-8 h-8 bg-amber-200 rounded-full border-2 border-zinc-700" />
                  <div className="w-8 h-8 bg-zinc-400 rounded-full border-2 border-zinc-700" />
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-zinc-700 text-[8px] flex items-center justify-center text-white font-bold">99+</div>
                </div>

                {/* Contact pill */}
                <div className="absolute top-3 left-12 bg-zinc-800 rounded-full px-2 py-1 flex items-center gap-1">
                  <span className="text-white text-[8px]">CONTACTS</span>
                  <span className="text-zinc-500 text-[8px]">→</span>
                </div>

                {/* Transaction Cards */}
                <div className="mt-16 space-y-2 px-2">
                  <div className="bg-zinc-800 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">€</div>
                      <div>
                        <div className="text-zinc-500 text-[10px]">You Sent</div>
                        <div className="text-white font-bold text-sm">55 EUR</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-3">
                    <div className="text-white text-xl font-bold">55 EUR</div>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">₮</div>
                      <div>
                        <div className="text-zinc-500 text-[10px]">You Received</div>
                        <div className="text-white font-bold text-sm">1001 USDT</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating messages */}
                <div className="absolute bottom-16 right-2 bg-zinc-700 rounded-lg px-2 py-1">
                  <span className="text-zinc-300 text-[8px]">thank you!</span>
                </div>
                <div className="absolute bottom-8 left-2 bg-zinc-700 rounded-lg px-2 py-1">
                  <span className="text-zinc-300 text-[8px]">thanx!</span>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden md:block relative z-10 w-full max-w-380 mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-zinc-600 text-sm tracking-widest uppercase mb-4">
              TRANSFERS WITHOUT BARRIERS
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              SEND MONEY EASILY,
              <br />
              ANYWHERE, TO ANYONE
            </h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA
              bank accounts, and seamlessly send crypto assets with a single tap.
            </p>

            {/* Contacts Row */}
            <div className="flex items-center gap-4 mb-6">
              {/* Avatars */}
              <div className="flex -space-x-3">
                <Avatar bg="bg-amber-200" />
                <Avatar bg="bg-zinc-300" />
                <Avatar bg="bg-amber-300" />
                <Avatar bg="bg-zinc-400" />
                <Avatar bg="bg-amber-100" />
              </div>

              {/* All Contacts Button */}
              <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-zinc-800 text-white rounded-full px-6 py-3 hover:bg-zinc-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium tracking-wide">ALL CONTACTS</span>
              </a>
            </div>

            <p className="text-zinc-500 text-sm">
              Skip the numbers – send money straight to your contacts instantly
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative w-150 h-150">
            {/* Main Phone */}
            <div className="absolute top-0 right-0 w-72 h-145 bg-zinc-900 rounded-[50px] border-8 border-zinc-800 shadow-2xl overflow-hidden transform rotate-6">
              {/* Screen Content */}
              <div className="w-full h-full bg-zinc-900 p-4">
                {/* Contact pill */}
                <div className="absolute -top-2 -right-8 bg-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 transform -rotate-12">
                  <span className="text-white text-xs">CONTACTS</span>
                  <span className="text-zinc-400">×</span>
                </div>

                {/* User avatars floating */}
                <div className="absolute top-4 right-4 flex flex-col gap-1">
                  <div className="w-10 h-10 bg-amber-200 rounded-full border-2 border-white" />
                  <div className="w-10 h-10 bg-zinc-300 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white text-xs flex items-center justify-center text-white">99+</div>
                </div>

                {/* Transaction Cards */}
                <div className="mt-20 space-y-3">
                  <div className="bg-zinc-800 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">€</div>
                        <div>
                          <div className="text-zinc-400 text-xs">You Sent</div>
                          <div className="text-white font-bold">55 EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-2xl p-4">
                    <div className="text-white text-2xl font-bold">55 EUR</div>
                  </div>

                  <div className="bg-zinc-800 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">₮</div>
                      <div>
                        <div className="text-zinc-400 text-xs">You Received</div>
                        <div className="text-white font-bold">1001 USDT</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating labels */}
                <div className="absolute bottom-20 right-4 text-zinc-400 text-xs transform rotate-45">
                  thank you! See ya
                </div>
                <div className="absolute bottom-40 left-4 text-zinc-400 text-xs">
                  thanx!
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
            </div>

            {/* Hand silhouette effect */}
            <div className="absolute bottom-0 right-10 w-64 h-48 bg-linear-to-t from-zinc-400/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ bg }: { bg: string }) {
  return (
    <div className={`w-14 h-14 ${bg} rounded-full border-4 border-white shadow-md`} />
  );
}

function AvatarMobile({ img }: { img: string }) {
  return (
    <div className="w-12 h-12 bg-zinc-200 rounded-full border-3 border-white shadow-md flex items-center justify-center text-2xl">
      {img}
    </div>
  );
}
