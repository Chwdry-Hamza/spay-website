import type { CSSProperties } from "react";
import type { HomeContent } from "@/lib/site/home";

/**
 * "How SPay works" — the phone shot beside a 2×2 grid of numbered steps.
 *
 * The two columns are the section's own direct children: app/spay-site.css
 * reorders them below 1080px with `#features > div:first-of-type` /
 * `:nth-of-type(2)` so the copy reads before the image, so nothing may wrap
 * them.
 */

const CARD: CSSProperties = {
  border: "1px solid #e3e8ec",
  borderRadius: "12px",
  padding: "36px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  minHeight: "320px",
  transition: "all .25s ease",
};

export default function Features({ content }: { content: HomeContent["features"] }) {
  return (
    <section
      id="features"
      style={{
        overflow: "hidden",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "128px 72px 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
        gap: "28px",
        alignItems: "center",
      }}
    >
      <div
        data-reveal="left"
        data-cms-type="image"
        data-cms-field="home.features.image.src"
        style={{ position: "relative", width: "100%", aspectRatio: "3/4", minWidth: "0" }}
      >
        <img
          src={content.image.src}
          alt={content.image.alt}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </div>
      <div
        data-reveal="right"
        style={{ display: "flex", flexDirection: "column", gap: "32px", minWidth: "0" }}
      >
        <h2
          style={{
            margin: "0",
            fontSize: "clamp(32px, 3.4vw, 46px)",
            lineHeight: "1.1",
            fontWeight: "600",
            letterSpacing: "-1.2px",
            textTransform: "uppercase",
            color: "#118EA3",
          }}
          data-cms-field="home.features.title"
        >
          {content.title}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "28px",
            minWidth: "0",
          }}
        >
          {content.steps.map((step, i) => (
            <div key={step.n} className="dc-h5" style={CARD}>
              <h3
                style={{
                  margin: "0",
                  fontSize: "25px",
                  lineHeight: "1.25",
                  fontWeight: "700",
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  color: "#118EA3",
                }}
                data-cms-field={`home.features.steps.${i}.title`}
              >
                {step.title}
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  fontWeight: "400",
                  color: "#000000",
                  textWrap: "pretty",
                }}
                data-cms-field={`home.features.steps.${i}.body`}
              >
                {step.body}
              </p>
              <span
                style={{
                  marginTop: "auto",
                  fontSize: "52px",
                  lineHeight: "1",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                  color: "#000000",
                }}
                data-cms-field={`home.features.steps.${i}.n`}
              >
                {step.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
