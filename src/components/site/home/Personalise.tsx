import type { CSSProperties } from "react";
import type { HomeContent } from "@/lib/site/home";

/**
 * Localisation band: settings shot beside language pills and a 2×2 tile grid.
 *
 * The two columns are direct children of the band's wrapper — app/spay-site.css
 * reorders them below 1080px through `#personalise > div > div:first-of-type`.
 *
 * The first language is the selected one; a pill with a `note` (RTL) carries
 * the tag inline, which is why those pills are flex and the plain ones are not.
 */

const PILL: CSSProperties = {
  border: "1px solid #e3e8ec",
  borderRadius: "999px",
  padding: "8px 16px",
  fontSize: "14px",
  color: "#000000",
};

const SELECTED_PILL: CSSProperties = {
  border: "1px solid #118EA3",
  borderRadius: "999px",
  padding: "8px 16px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#118EA3",
};

const TILE_LABEL: CSSProperties = {
  fontSize: "15px",
  fontWeight: "700",
  letterSpacing: "0.2px",
  textTransform: "uppercase",
  color: "#000000",
};

const TILE_BODY: CSSProperties = {
  margin: "0",
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#000000",
  textWrap: "pretty",
};

export default function Personalise({ content }: { content: HomeContent["personalise"] }) {
  return (
    <section id="personalise" style={{ marginTop: "128px", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "56px",
          alignItems: "center",
        }}
      >
        <div
          data-reveal="left"
          data-cms-type="image"
          data-cms-field="home.personalise.image.src"
          style={{ minWidth: "0", display: "flex", justifyContent: "center" }}
        >
          <img
            src={content.image.src}
            alt={content.image.alt}
            style={{ width: "100%", maxWidth: "640px", display: "block" }}
          />
        </div>
        <div
          data-reveal="right"
          style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}
        >
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(38px, 4.4vw, 64px)",
              lineHeight: "1.02",
              fontWeight: "600",
              letterSpacing: "-2.2px",
              textTransform: "uppercase",
              color: "#118EA3",
              textWrap: "balance",
            }}
            data-cms-field="home.personalise.title"
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
            data-cms-field="home.personalise.lede"
          >
            {content.lede}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "2px" }}>
            {content.languages.map((language, i) => {
              if (i === 0) {
                return (
                  <span
                    key={language.label}
                    style={SELECTED_PILL}
                    data-cms-field={`home.personalise.languages.${i}.label`}
                  >
                    {language.label}
                  </span>
                );
              }
              if (!language.note) {
                return (
                  <span
                    key={language.label}
                    style={PILL}
                    data-cms-field={`home.personalise.languages.${i}.label`}
                  >
                    {language.label}
                  </span>
                );
              }
              return (
                <span
                  key={language.label}
                  style={{ ...PILL, display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* Own element so it is editable: this pill also holds the
                      note, and a tagged element's full text is what gets
                      saved. */}
                  <span data-cms-field={`home.personalise.languages.${i}.label`}>
                    {language.label}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "1px",
                      color: "#8a949d",
                    }}
                    data-cms-field={`home.personalise.languages.${i}.note`}
                  >
                    {language.note}
                  </span>
                </span>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "1px",
              background: "#e3e8ec",
              marginTop: "8px",
            }}
          >
            {content.tiles.map((tile, i) => (
              <div
                key={tile.title}
                data-r="loc-tile"
                style={{
                  background: "#ffffff",
                  // The 1px grid gap is the divider, so each cell pads away
                  // from it: left column on the right, right column on the left.
                  padding: i % 2 === 0 ? "24px 24px 26px 0" : "24px 0 26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span style={TILE_LABEL} data-cms-field={`home.personalise.tiles.${i}.title`}>
                  {tile.title}
                </span>
                <p style={TILE_BODY} data-cms-field={`home.personalise.tiles.${i}.body`}>
                  {tile.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
