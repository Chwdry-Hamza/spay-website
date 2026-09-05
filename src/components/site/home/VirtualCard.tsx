import type { HomeContent } from "@/lib/site/home";

/**
 * Centred pitch for the virtual card, over a full-bleed card render.
 * `data-r="wide-art"` drops the art's gutters on phones.
 */
export default function VirtualCard({ content }: { content: HomeContent["virtualCard"] }) {
  return (
    <section id="virtual-card" style={{ padding: "128px 0 0", overflow: "hidden" }}>
      <div
        data-reveal="left"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 72px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: "0",
            fontSize: "clamp(34px, 3.6vw, 50px)",
            lineHeight: "1.06",
            fontWeight: "600",
            letterSpacing: "-1.4px",
            textTransform: "uppercase",
            color: "#118EA3",
            textWrap: "balance",
          }}
          data-cms-field="home.virtualCard.title"
        >
          {content.title}
        </h2>
        <p
          style={{
            margin: "0",
            maxWidth: "60ch",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "#000000",
            textWrap: "pretty",
          }}
          data-cms-field="home.virtualCard.lede"
        >
          {content.lede}
        </p>
      </div>
      <div
        data-reveal="right"
        data-r="wide-art"
        data-cms-type="image"
        data-cms-field="home.virtualCard.image.src"
        style={{ maxWidth: "1600px", margin: "48px auto 0", padding: "0 72px" }}
      >
        <img
          src={content.image.src}
          alt={content.image.alt}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </section>
  );
}
