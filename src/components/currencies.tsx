"use client";

type Ticker = { pair: string; price: string; change: string };

const TICKERS: Ticker[] = [
  { pair: "ETH/USD", price: "$3,452.12", change: "+1.4%" },
  { pair: "TRX/USD", price: "$0.32", change: "+2.6%" },
  { pair: "USDT (TRC20)", price: "$1.00", change: "+0.0%" },
  { pair: "USDT (ERC20)", price: "$1.00", change: "+0.0%" },
  { pair: "USDC (ERC20)", price: "$1.00", change: "+0.0%" },
];

const SCROLL_SECONDS = 40;

export default function Currencies() {
  const t = {
    pair: "#ffffff",
    price: "#d4d4d8",
    up: "#2ee8a0",
    down: "#ef4444",
  };
  const tickers = TICKERS;
  const seconds = SCROLL_SECONDS;

  return (
    <section
      className="relative overflow-hidden py-5"
      style={{
        background:
          "linear-gradient(to right, #090e1c 25%,  #0e2e2e 65%, #090e1c 100%)",
        borderTop: "1px solid rgba(46,232,160,0.08)",
        borderBottom: "1px solid rgba(46,232,160,0.08)",
      }}
    >
      <div className="flex whitespace-nowrap ticker-track">
        {/* Render twice for a seamless infinite loop */}
        {[...tickers, ...tickers].map((c, i) => (
          <div key={i} className="flex items-center gap-3 px-8">
            <span
              className="font-semibold text-sm md:text-base tracking-wide"
              style={{ color: t.pair }}
            >
              {c.pair}
            </span>
            <span className="text-sm md:text-base" style={{ color: t.price }}>
              {c.price}
            </span>
            <span
              className="text-xs md:text-sm font-medium"
              style={{ color: c.change.startsWith("-") ? t.down : t.up }}
            >
              {c.change}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          animation: scroll-left ${seconds}s linear infinite;
          width: max-content;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
