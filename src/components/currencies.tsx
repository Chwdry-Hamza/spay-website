import { HOME_CONTENT_DEFAULTS, type HomeContent } from "@/lib/homeContent";

const SCROLL_SECONDS = 40;

export default function Currencies({
  content = HOME_CONTENT_DEFAULTS.currencies,
}: {
  content?: HomeContent["currencies"];
}) {
  const t = {
    pair: "#ffffff",
    price: "#d4d4d8",
    up: "#2ee8a0",
    down: "#ef4444",
  };

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
      <div
        className="flex whitespace-nowrap"
        style={{
          width: "max-content",
          animation: `marquee ${SCROLL_SECONDS}s linear infinite`,
        }}
      >
        {/* Render twice for a seamless infinite loop */}
        {[...content.tickers, ...content.tickers].map((c, i) => {
          const idx = i % content.tickers.length;
          return (
          <div key={i} className="flex items-center gap-3 px-8">
            <span
              className="font-semibold text-sm md:text-base tracking-wide"
              style={{ color: t.pair }}
              data-cms-field={`currencies.tickers.${idx}.pair`}
            >
              {c.pair}
            </span>
            <span
              className="text-sm md:text-base"
              style={{ color: t.price }}
              data-cms-field={`currencies.tickers.${idx}.price`}
            >
              {c.price}
            </span>
            <span
              className="text-xs md:text-sm font-medium"
              style={{ color: c.change.startsWith("-") ? t.down : t.up }}
              data-cms-field={`currencies.tickers.${idx}.change`}
            >
              {c.change}
            </span>
          </div>
          );
        })}
      </div>
    </section>
  );
}
