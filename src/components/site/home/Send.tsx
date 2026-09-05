import type { HomeContent } from "@/lib/site/home";

/**
 * Peer-to-peer transfers: heading, art, then a bordered row of numbered notes.
 * The last note drops the divider and flips its padding to the other side.
 */
export default function Send({ content }: { content: HomeContent["send"] }) {
  const last = content.steps.length - 1;

  return (
    <section id="send" style={{ marginTop: "128px", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 72px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h2
          data-reveal="left"
          style={{
            margin: "0",
            maxWidth: "24ch",
            fontSize: "clamp(34px, 4vw, 58px)",
            lineHeight: "1.0",
            fontWeight: "600",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            color: "#118EA3",
            textWrap: "balance",
          }}
          data-cms-field="home.send.title"
        >
          {content.title}
        </h2>
        <p
          data-reveal="left"
          style={{
            margin: "0",
            maxWidth: "56ch",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "#000000",
            textWrap: "pretty",
          }}
          data-cms-field="home.send.lede"
        >
          {content.lede}
        </p>
      </div>

      <div
        data-reveal="right"
        data-cms-type="image"
        data-cms-field="home.send.image.src"
        style={{ maxWidth: "1600px", margin: "24px auto 0", padding: "0 72px" }}
      >
        <img
          src={content.image.src}
          alt={content.image.alt}
          style={{ width: "100%", maxWidth: "1200px", display: "block", margin: "0 auto" }}
        />
      </div>

      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            borderTop: "1px solid #e3e8ec",
          }}
        >
          {content.steps.map((step, i) => (
            <div
              key={step.n}
              data-reveal="up"
              data-r="send-step"
              style={{
                ...(i < last ? { borderRight: "1px solid #e3e8ec" } : null),
                padding: i < last ? "32px 36px 34px 0" : "32px 0 34px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minWidth: "0",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "1.6px",
                  color: "#118EA3",
                }}
                data-cms-field={`home.send.steps.${i}.n`}
              >
                {step.n}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                  textTransform: "uppercase",
                  color: "#000000",
                }}
                data-cms-field={`home.send.steps.${i}.title`}
              >
                {step.title}
              </span>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#5d6a75",
                  textWrap: "pretty",
                }}
                data-cms-field={`home.send.steps.${i}.body`}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
