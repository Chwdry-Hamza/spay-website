import type { CSSProperties } from "react";
import type { HomeContent } from "@/lib/site/home";

/**
 * The multi-currency wallet band: copy and token pills beside the network art,
 * with a bordered 2×2 tile grid underneath.
 *
 * `data-r="wallet-art"` lets the art bleed to the screen edges on phones and
 * drop below the copy when the band stacks.
 */

const TOKEN_PILL: CSSProperties = {
  border: "1px solid #7cc4bf",
  borderRadius: "999px",
  padding: "8px 16px",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "#000000",
};

const TILE: CSSProperties = {
  borderRight: "1px solid #7cc4bf",
  borderBottom: "1px solid #7cc4bf",
  padding: "34px 28px 38px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  minWidth: "0",
  transition: "background .25s ease",
};

export default function Wallet({ content }: { content: HomeContent["wallet"] }) {
  return (
    <section
      id="wallet"
      style={{
        marginTop: "128px",
        padding: "96px 0",
        background: "#a2d9d4",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          alignItems: "center",
          columnGap: "0",
          rowGap: "32px",
        }}
      >
        <div
          data-reveal="left"
          style={{
            position: "relative",
            zIndex: "2",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            padding: "56px 0",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(40px, 4.6vw, 68px)",
              lineHeight: "1.02",
              fontWeight: "600",
              letterSpacing: "-2px",
              textTransform: "uppercase",
              color: "#000000",
              textWrap: "balance",
            }}
            data-cms-field="home.wallet.title"
          >
            {content.title}
          </h2>
          <div style={{ height: "1px", width: "88px", background: "#0b3c44" }} />
          <p
            style={{
              margin: "0",
              maxWidth: "44ch",
              fontSize: "19px",
              lineHeight: "1.7",
              color: "#000000",
              textWrap: "pretty",
            }}
            data-cms-field="home.wallet.lede"
          >
            {content.lede}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {content.tokens.map((token, i) => (
              <span key={token} style={TOKEN_PILL} data-cms-field={`home.wallet.tokens.${i}`}>
                {token}
              </span>
            ))}
          </div>
        </div>
        <div
          data-reveal="right"
          data-r="wallet-art"
          data-cms-type="image"
          data-cms-field="home.wallet.image.src"
          style={{
            position: "relative",
            zIndex: "1",
            minWidth: "0",
            display: "flex",
            justifyContent: "center",
            marginRight: "clamp(-140px, -7vw, 0px)",
          }}
        >
          <img
            data-r="bleed"
            src={content.image.src}
            alt={content.image.alt}
            style={{ width: "118%", maxWidth: "none", display: "block" }}
          />
        </div>
      </div>

      <div data-reveal="up" style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            borderTop: "1px solid #7cc4bf",
            borderLeft: "1px solid #7cc4bf",
          }}
        >
          {content.tiles.map((tile, i) => (
            <div key={tile.n} className="dc-h6" style={TILE}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.6px",
                  color: "#118EA3",
                }}
                data-cms-field={`home.wallet.tiles.${i}.n`}
              >
                {tile.n}
              </span>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  color: "#000000",
                  lineHeight: "1.3",
                }}
                data-cms-field={`home.wallet.tiles.${i}.title`}
              >
                {tile.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
