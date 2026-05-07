import React from "react";

const tileBase =
  "relative rounded-[20px] p-6 md:p-7 border overflow-hidden min-h-[220px] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1";

const tileStyle: React.CSSProperties = {
  borderColor: "rgba(70, 241, 197, 0.18)",
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
};

const eyebrowClass =
  "text-[11px] font-medium uppercase mb-3";
const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk)",
  letterSpacing: "0.28em",
  color: "#46F1C5",
};

const headingClass = "font-bold text-[22px] tracking-[-0.01em] text-white mb-2";
const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk)",
};

const bodyClass = "text-[14px] leading-[1.5] m-0";
const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  color: "#A6AABE",
};

type AvatarProps = { initial: string; bg: string; size?: number };
const Avatar: React.FC<AvatarProps> = ({ initial, bg, size = 44 }) => (
  <div
    className="rounded-full inline-flex items-center justify-center font-bold text-white border-2 shrink-0"
    style={{
      width: size,
      height: size,
      background: bg,
      fontSize: size * 0.36,
      borderColor: "#090e1c",
      fontFamily: "var(--font-space-grotesk)",
    }}
  >
    {initial}
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] tracking-wide whitespace-nowrap"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(70, 241, 197, 0.22)",
      fontFamily: "var(--font-geist-mono)",
      color: "rgba(234, 244, 255, 0.85)",
    }}
  >
    {children}
  </span>
);

const SplitIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    style={{ color: "#46F1C5" }}
  >
    <path d="M3 6h5l4 6 4-6h5" />
    <path d="M3 18h5l4-6" />
    <path d="M16 18h5" />
  </svg>
);

const BusinessIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    style={{ color: "#46F1C5" }}
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path d="M3 12h18" />
  </svg>
);

const ProtectIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[52px] h-[52px]"
    style={{
      color: "#46F1C5",
      filter: "drop-shadow(0 0 8px rgba(70, 241, 197, 0.65))",
    }}
  >
    <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const iconBadgeClass =
  "w-10 h-10 rounded-[10px] inline-flex items-center justify-center mb-4";
const iconBadgeStyle: React.CSSProperties = {
  background: "rgba(70, 241, 197, 0.15)",
  border: "1px solid rgba(70, 241, 197, 0.3)",
};

const FeaturesGrid: React.FC = () => {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-[100px] overflow-hidden"
      style={{ background: "#090e1c" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 220px at 50% 15%, rgba(70, 241, 197, 0.08), transparent 70%)",
        }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[820px] mx-auto mb-10 md:mb-14">
          <p
            className="text-xs font-medium uppercase mb-5"
            style={{
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.28em",
              color: "#A6AABE",
            }}
          >
            Your crypto, everyday spending
          </p>
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white m-0"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(32px, 5.2vw, 68px)",
            }}
          >
            PAY WITH <span style={{ color: "#46F1C5" }}>CRYPTO</span> ANYWHERE
            <br />
            A CARD WORKS.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* HERO TILE — SEND (span 2 on desktop) */}
          <article
            className={`${tileBase} lg:col-span-2 flex flex-col`}
            style={tileStyle}
          >
            <p className={eyebrowClass} style={eyebrowStyle}>
              Send
            </p>
            <h3 className={headingClass} style={headingStyle}>
              Send money in seconds, not days.
            </h3>
            <p className={`${bodyClass} max-w-[380px]`} style={bodyStyle}>
              Move funds to friends, family, or any wallet — across the city
              or across the world. Every transfer settles instantly.
            </p>

            <div className="mt-auto pt-6 flex items-center gap-4">
              <Avatar
                initial="M"
                bg="linear-gradient(135deg,#FF7A8A,#C73A56)"
              />
              <div
                className="relative flex-1 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(70,241,197,0.95), rgba(70,241,197,0.35))",
                }}
              >
                <span
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: "#46F1C5",
                    boxShadow: "0 0 10px 2px rgba(70,241,197,0.7)",
                  }}
                />
                <span
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: "#46F1C5",
                    boxShadow: "0 0 10px 2px rgba(70,241,197,0.7)",
                  }}
                />
                <div
                  className="absolute left-1/2 -top-8 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] whitespace-nowrap"
                  style={{
                    background: "#090e1c",
                    border: "1px solid rgba(70,241,197,0.35)",
                    color: "#46F1C5",
                    fontFamily: "var(--font-geist-mono)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.45)",
                  }}
                >
                  + 50 USDC · 1.2s
                </div>
              </div>
              <Avatar
                initial="J"
                bg="linear-gradient(135deg,#FFD18A,#E89B40)"
              />
            </div>
          </article>

          {/* STAT TILE — GROW */}
          <article
            className={`${tileBase} flex flex-col`}
            style={tileStyle}
          >
            <p className={eyebrowClass} style={eyebrowStyle}>
              Grow
            </p>
            <div className="flex items-baseline gap-1.5 mb-3">
              <span
                className="font-bold leading-none tracking-[-0.04em]"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 76,
                  color: "#FFFFFF",
                }}
              >
                5.0
              </span>
              <span
                className="font-semibold text-[16px]"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "rgba(234,244,255,0.85)",
                }}
              >
                % APY
              </span>
            </div>
            <p className={bodyClass} style={bodyStyle}>
              Earn yield on your idle balance, paid out daily. No lockups,
              no minimums, withdraw anytime.
            </p>
          </article>

          {/* CARD TILE — SPEND */}
          <article
            className={`${tileBase} flex flex-col`}
            style={tileStyle}
          >
            <p className={eyebrowClass} style={eyebrowStyle}>
              Spend
            </p>
            <h3 className={headingClass} style={headingStyle}>
              Tap, swipe, or shop online — with crypto.
            </h3>

            <div className="pt-4 flex justify-center">
              <img
                src="/spayFront.png"
                alt="SPay card"
                draggable={false}
                className="w-full max-w-[180px] max-h-[110px] object-contain select-none"
                style={{
                  transform: "rotate(-6deg) scale(4.3)",
                  transformOrigin: "center",
                  filter:
                    "drop-shadow(0 20px 40px rgba(0,0,0,0.55)) drop-shadow(0 0 22px rgba(70,241,197,0.18))",
                }}
              />
            </div>
          </article>

          {/* SPLIT TILE */}
          <article
            className={`${tileBase} flex flex-col`}
            style={tileStyle}
          >
            <div className={iconBadgeClass} style={iconBadgeStyle}>
              <SplitIcon />
            </div>
            <h3 className={headingClass} style={headingStyle}>
              Split bills in any currency.
            </h3>
            <p className={`${bodyClass} mb-5`} style={bodyStyle}>
              Dinner, rent, a weekend trip — settle with friends in dollars,
              USDC, or BTC, down to the cent.
            </p>
            <div className="mt-auto flex items-center">
              <div className="flex">
                <Avatar
                  initial="M"
                  bg="linear-gradient(135deg,#FF7A8A,#C73A56)"
                  size={40}
                />
                <div className="-ml-[10px]">
                  <Avatar
                    initial="J"
                    bg="linear-gradient(135deg,#FFD18A,#E89B40)"
                    size={40}
                  />
                </div>
                <div className="-ml-[10px]">
                  <Avatar
                    initial="S"
                    bg="linear-gradient(135deg,#A88AFF,#7B4FE0)"
                    size={40}
                  />
                </div>
              </div>
              <span
                className="ml-3 text-[14px] font-semibold"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: "#5BE3A1",
                }}
              >
                $37.42 each
              </span>
            </div>
          </article>

          {/* BUSINESS TILE */}
          <article
            className={`${tileBase} flex flex-col`}
            style={tileStyle}
          >
            <div className={iconBadgeClass} style={iconBadgeStyle}>
              <BusinessIcon />
            </div>
            <h3 className={headingClass} style={headingStyle}>
              For businesses, get paid in crypto.
            </h3>
            <p className={`${bodyClass} mb-5`} style={bodyStyle}>
              Online checkouts, in-store payments, and crypto invoices — with
              same-day payouts to your wallet or bank.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              <Pill>Online checkout</Pill>
              <Pill>In-store POS</Pill>
              <Pill>Crypto invoicing</Pill>
            </div>
          </article>

          {/* PROTECT TILE — span 2 on desktop */}
          <article
            className={`${tileBase} lg:col-span-2`}
            style={tileStyle}
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-full">
              <div className="flex-1 flex flex-col">
                <p className={eyebrowClass} style={eyebrowStyle}>
                  Protect
                </p>
                <h3 className={headingClass} style={headingStyle}>
                  Your funds, fully protected.
                </h3>
                <p
                  className={`${bodyClass} mb-5 max-w-[460px]`}
                  style={bodyStyle}
                >
                  Multi-sig cold storage on every wallet. Biometric login on
                  every device. 24/7 anomaly detection — your crypto stays
                  yours, always.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Pill>Multi-sig vault</Pill>
                  <Pill>Biometric login</Pill>
                  <Pill>SOC 2 Type II</Pill>
                </div>
              </div>
              <div className="hidden lg:flex shrink-0 w-[160px] h-[160px] items-center justify-center self-center relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px dashed rgba(70,241,197,0.35)" }}
                />
                <div
                  className="absolute inset-3 rounded-full"
                  style={{ border: "1px solid rgba(70,241,197,0.45)" }}
                />
                <div
                  className="absolute inset-7 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(70,241,197,0.45), transparent 70%)",
                  }}
                />
                <ProtectIcon />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
