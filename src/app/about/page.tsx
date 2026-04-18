import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-black">
      {/* First Section - About with Background */}
      <section className="min-h-fit md:min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Large SICASH text in background */}
          <div className="text-zinc-700/30 text-[50vw] md:text-[40vw] font-bold leading-none select-none tracking-tighter whitespace-nowrap scale-x-75">
            SICASH
          </div>
        </div>

        {/* Header */}
        <header className="relative z-10 w-full max-w-380 mx-auto px-4 md:px-8 py-4 md:py-8 flex items-center justify-between">
          <Link href="/" className="text-amber-100 font-bold text-xl md:text-2xl tracking-tight hover:text-white transition-colors">
            SICASH
          </Link>
          <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm md:text-base">
            English
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </header>

        {/* Content */}
        <div className="relative z-10 w-full max-w-380 mx-auto px-4 md:px-8 pt-8 md:pt-48 pb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-10">
            <span className="text-amber-100">ABOUT</span>{" "}
            <span className="text-white">SICASH</span>
          </h1>

          <div className="max-w-2xl">
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed">
              SICASH is a global innovative platform for unified financial management of fiat and
              cryptocurrencies. Using cutting-edge technologies it seamlessly integrates with other
              financial service providers allowing users to easily manage all their cards and accounts in
              one user-friendly mobile app. It also offers fiat accounts, a crypto wallet and the world&apos;s first
              card for both fiat and crypto with an easy switch. SICASH meets the highest standards of
              regulatory compliance and ensures advanced security measures to protect users&apos; funds.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative bg-black pb-8 md:pb-32">
        <div className="w-full max-w-380 mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            {/* Mission */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-4 md:mb-8">MISSION</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Our mission is to simplify financial management and bridge the gap between fiat
                and crypto. By saving our users&apos; time and money and empowering them with
                financial growth opportunities, we strive to be their trusted partner in achieving
                financial freedom.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-4 md:mb-8">VISION</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Our vision is to lead the digital finance revolution through continuous innovation.
                We aim to create a future where financial freedom, inclusivity, and transparency
                are the norms and everyone can seamlessly navigate and thrive in the evolving
                global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="relative pt-8 md:pt-48 pb-8 md:pb-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 0%, #1a1a1a 5%, #3d3a32 15%, #c4b89a 40%, #ffffff 100%)' }}>

        {/* Light rays effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-1 h-[200%] bg-white/10 -rotate-12 blur-sm" />
          <div className="absolute top-1/2 left-1/3 w-0.5 h-[200%] bg-white/10 -rotate-6 blur-sm" />
          <div className="absolute top-1/2 left-1/2 w-1 h-[200%] bg-white/10 rotate-3 blur-sm" />
          <div className="absolute top-1/2 left-2/3 w-0.5 h-[200%] bg-white/10 rotate-12 blur-sm" />
          <div className="absolute top-1/2 right-1/4 w-1 h-[200%] bg-white/10 rotate-6 blur-sm" />
        </div>

        <div className="relative z-10 w-full max-w-380 mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-20">EXECUTIVE TEAM</h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-48 md:gap-y-20">
            {/* Svitlana Monastyrska */}
            <div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-zinc-300 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-zinc-200 to-zinc-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 leading-tight mb-2 md:mb-3">
                SVITLANA<br />MONASTYRSKA
              </h3>
              <p className="text-zinc-700 text-sm md:text-lg italic mb-3 md:mb-4">
                CHIEF EXECUTIVE OFFICER<br />& <span className="font-bold not-italic">FOUNDER</span>
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 max-w-sm">
                Over 20 years of experience and leadership in Ukraine&apos;s banking sector, including roles at Pravex Bank, UkrsotsBank, Alfa-Bank, and UkrEximBank. Holds a PhD in Public Administration and has two higher education degrees in Banking.
              </p>
              <a href="#" className="text-zinc-600 text-sm md:text-base hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>

            {/* Michael Gorishnyi */}
            <div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-zinc-300 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-zinc-200 to-zinc-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 leading-tight mb-2 md:mb-3">
                MICHAEL<br />GORISHNYI
              </h3>
              <p className="text-zinc-700 text-sm md:text-lg italic mb-3 md:mb-4">
                CHIEF TECHNOLOGY OFFICER
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 max-w-sm">
                Over 15 years of experience in building high-load tech platforms and scalable architecture. Expert in creating autonomous engineering teams, process standardization, and scaling product development with clarity and speed. Certified SAFe&reg; 6 Agilist with a focus on agile delivery and engineering excellence.
              </p>
              <a href="#" className="text-zinc-600 text-sm md:text-base hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>

            {/* Mykhail Stryzhko */}
            <div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-zinc-300 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-zinc-200 to-zinc-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 leading-tight mb-2 md:mb-3">
                MYKHAIL<br />STRYZHKO
              </h3>
              <p className="text-zinc-700 text-sm md:text-lg italic mb-3 md:mb-4">
                CHIEF OPERATING OFFICER
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 max-w-sm">
                Over 20 years of experience in banks, fintech, audit & consulting, including roles at PricewaterhouseCoopers, Piraeus Bank, VTB Bank, Sportbank, and own fintech companies. Holds an Executive MBA, is ACMA/CGMA and ACCA qualified, with two Master&apos;s degrees in Banking and Business Administration.
              </p>
              <a href="#" className="text-zinc-600 text-sm md:text-base hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>

            {/* Marta Michalewska */}
            <div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-zinc-300 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-zinc-200 to-zinc-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 leading-tight mb-2 md:mb-3">
                MARTA<br />MICHALEWSKA
              </h3>
              <p className="text-zinc-700 text-sm md:text-lg italic mb-3 md:mb-4">
                MONEY LAUNDERING REPORTING OFFICER
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 max-w-sm">
                Over 10 years of experience in AML and anti-fraud, including senior positions in fintech and tech companies. Expert in building and managing compliance frameworks and regulatory processes. Serves as a Money Laundering Reporting Officer (MLRO) in international environments.
              </p>
              <a href="#" className="text-zinc-600 text-sm md:text-base hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>

            {/* Inna Grynova */}
            <div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-zinc-300 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-zinc-200 to-zinc-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 leading-tight mb-2 md:mb-3">
                INNA<br />GRYNOVA
              </h3>
              <p className="text-zinc-700 text-sm md:text-lg italic mb-3 md:mb-4">
                CHIEF OF CUSTOMER SUPPORT<br />AND FINANCIAL CRIME OPERATIONS
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 max-w-sm">
                Over 20 years of experience in customer service, financial crime prevention, fintech, including leading roles at Revolut and Shares.io, ex-program manager at Google. An expert in building scalable organizations, process optimization, and customer experience enhancement.
              </p>
              <a href="#" className="text-zinc-600 text-sm md:text-base hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>

            {/* Vladyslav Permohorov */}
            <div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-zinc-300 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-zinc-200 to-zinc-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 leading-tight mb-2 md:mb-3">
                VLADYSLAV<br />PERMOHOROV
              </h3>
              <p className="text-zinc-700 text-sm md:text-lg italic mb-3 md:mb-4">
                CHIEF MARKETING OFFICER
              </p>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 max-w-sm">
                Over 10 years in marketing with expertise in crypto, fintech, edutech, and e-commerce. Built marketing departments from scratch, developed go-to-market strategies, and led large cross-functional teams across EU, UK, Eastern Europe, and US markets.
              </p>
              <a href="#" className="text-zinc-600 text-sm md:text-base hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collaborations Section */}
      <div className="bg-white">
        <section className="relative bg-black py-8 md:py-24 overflow-hidden rounded-t-4xl md:rounded-t-[3rem]">
        {/* Diagonal light rays effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-zinc-800/50 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2 -skew-y-3">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-zinc-700/20 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-420 mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-6 md:mb-16 italic">
            OUR COLLABORATIONS
          </h2>

          {/* Partner Logos - Marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-10 md:gap-20">
              {/* First set */}
              <div className="flex items-center gap-10 md:gap-20 shrink-0">
                {/* BitGo */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold">BitGo</span>
                </div>

                {/* FENIGE */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                  </svg>
                  <div>
                    <span className="text-xl font-bold tracking-wider">FENIGE</span>
                    <p className="text-zinc-500 text-xs">all about payments</p>
                  </div>
                </div>

                {/* INTERCOM */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <rect x="6" y="7" width="2" height="8" rx="1" fill="#18181b" />
                    <rect x="9" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="12" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="15" y="7" width="2" height="8" rx="1" fill="#18181b" />
                  </svg>
                  <span className="text-xl font-semibold tracking-wide">INTERCOM</span>
                </div>

                {/* PLAID */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white/70 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-xl font-bold tracking-wider">PLAID</span>
                </div>

                {/* QUICKO */}
                <div className="flex items-center gap-1 text-white/70">
                  <span className="text-xl">((</span>
                  <span className="text-xl font-bold tracking-widest">QUICKO</span>
                </div>

                {/* onfido */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/70 rounded-full" />
                  </div>
                  <span className="text-xl font-medium">onfido</span>
                </div>

                {/* Verestro */}
                <div className="text-white/70">
                  <span className="text-xl font-light tracking-wide">Verestro</span>
                  <span className="text-amber-500 text-lg">™</span>
                  <p className="text-zinc-500 text-xs tracking-wider">Fintech as a service</p>
                </div>

                {/* YAPILY */}
                <div className="text-white/70">
                  <span className="text-xl font-black tracking-wider">YAPILY</span>
                </div>

                {/* BINARYX */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l10 10-10 10L2 12 12 2z" />
                  </svg>
                  <span className="text-xl font-bold tracking-wider">BINARYX</span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-10 md:gap-20 shrink-0">
                {/* BitGo */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold">BitGo</span>
                </div>

                {/* FENIGE */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                  </svg>
                  <div>
                    <span className="text-xl font-bold tracking-wider">FENIGE</span>
                    <p className="text-zinc-500 text-xs">all about payments</p>
                  </div>
                </div>

                {/* INTERCOM */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <rect x="6" y="7" width="2" height="8" rx="1" fill="#18181b" />
                    <rect x="9" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="12" y="5" width="2" height="12" rx="1" fill="#18181b" />
                    <rect x="15" y="7" width="2" height="8" rx="1" fill="#18181b" />
                  </svg>
                  <span className="text-xl font-semibold tracking-wide">INTERCOM</span>
                </div>

                {/* PLAID */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white/70 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-xl font-bold tracking-wider">PLAID</span>
                </div>

                {/* QUICKO */}
                <div className="flex items-center gap-1 text-white/70">
                  <span className="text-xl">((</span>
                  <span className="text-xl font-bold tracking-widest">QUICKO</span>
                </div>

                {/* onfido */}
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/70 rounded-full" />
                  </div>
                  <span className="text-xl font-medium">onfido</span>
                </div>

                {/* Verestro */}
                <div className="text-white/70">
                  <span className="text-xl font-light tracking-wide">Verestro</span>
                  <span className="text-amber-500 text-lg">™</span>
                  <p className="text-zinc-500 text-xs tracking-wider">Fintech as a service</p>
                </div>

                {/* YAPILY */}
                <div className="text-white/70">
                  <span className="text-xl font-black tracking-wider">YAPILY</span>
                </div>

                {/* BINARYX */}
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l10 10-10 10L2 12 12 2z" />
                  </svg>
                  <span className="text-xl font-bold tracking-wider">BINARYX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  );
}
