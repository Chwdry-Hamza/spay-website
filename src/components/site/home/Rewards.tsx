import type { HomeContent } from "@/lib/site/home";

/**
 * Rewards band: copy and a ruled list of point rules beside the app shot.
 * `data-r="section-art"` is what re-scales and re-orders the art below 1080px.
 */
export default function Rewards({ content }: { content: HomeContent["rewards"] }) {
  const last = content.points.length - 1;

  return (
    <section
      id="rewards"
      style={{
        marginTop: "128px",
        padding: "96px 0 0",
        background: "#a2d9d4",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 0 0 72px",
          display: "grid",
          gridTemplateColumns: "minmax(min(100%, 340px), 1fr) minmax(min(100%, 340px), 1fr)",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div
          data-reveal="left"
          data-r="rewards-copy"
          style={{
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "26px",
            paddingBottom: "96px",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(38px, 4.4vw, 64px)",
              lineHeight: "1.02",
              fontWeight: "600",
              letterSpacing: "-2.2px",
              textTransform: "uppercase",
              color: "#000000",
              textWrap: "balance",
            }}
            data-cms-field="home.rewards.title"
          >
            {content.title}
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "46ch",
              fontSize: "19px",
              lineHeight: "1.7",
              color: "#000000",
              textWrap: "pretty",
            }}
            data-cms-field="home.rewards.lede"
          >
            {content.lede}
          </p>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "6px" }}>
            {content.points.map((point, i) => (
              <div
                key={point.n}
                style={{
                  display: "flex",
                  gap: "22px",
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderTop: "1px solid #7cc4bf",
                  // Only the final row closes the list off.
                  ...(i === last ? { borderBottom: "1px solid #7cc4bf" } : null),
                }}
              >
                <span
                  style={{
                    flex: "0 0 auto",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1.6px",
                    color: "#118EA3",
                  }}
                  data-cms-field={`home.rewards.points.${i}.n`}
                >
                  {point.n}
                </span>
                <p
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#000000",
                    textWrap: "pretty",
                  }}
                  data-cms-field={`home.rewards.points.${i}.body`}
                >
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-reveal="right"
          data-r="section-art"
          data-cms-type="image"
          data-cms-field="home.rewards.image.src"
          style={{
            minWidth: "0",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 72px 96px 0",
          }}
        >
          <img
            data-r="bleed"
            src={content.image.src}
            alt={content.image.alt}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
