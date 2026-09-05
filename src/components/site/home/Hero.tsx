import type { HomeContent } from "@/lib/site/home";
import GetAppLink from "@/components/GetAppLink";
import { externalLinkProps } from "@/lib/site/externalLink";

/**
 * Homepage hero.
 *
 * `data-r="hero-cta"` stacks the two buttons full-width on phones and
 * `data-r="hero-card"` widens the card art there, both from app/spay-site.css.
 */
export default function Hero({ content }: { content: HomeContent["hero"] }) {
  return (
    <section id="top" style={{ background: "#a2d9d4" }}>
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "96px 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 430px), 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div data-reveal="left" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h1
            style={{
              margin: "0",
              fontSize: "clamp(40px, 4.8vw, 70px)",
              lineHeight: "1.05",
              fontWeight: "700",
              letterSpacing: "-2.5px",
              textTransform: "uppercase",
              color: "#000000",
              textWrap: "balance",
            }}
            data-cms-field="home.hero.title"
          >
            {content.title}
          </h1>
          <p
            style={{
              margin: "0",
              maxWidth: "560px",
              fontSize: "19px",
              lineHeight: "1.7",
              fontWeight: "400",
              color: "#000000",
              textWrap: "pretty",
            }}
            data-cms-field="home.hero.lede"
          >
            {content.lede}
          </p>
          <div
            data-r="hero-cta"
            style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "4px" }}
          >
            <GetAppLink
              className="dc-h3"
              appleHref={content.primary.href}
              data-cms-href="home.hero.primary.href"
              style={{
                background: "#118EA3",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                padding: "19px 36px",
                borderRadius: "999px",
                transition: "all .22s ease",
              }}
              data-cms-field="home.hero.primary.label"
            >
              {content.primary.label}
            </GetAppLink>
            <a
              className="dc-h4"
              href={content.secondary.href}
              {...externalLinkProps(content.secondary.href)}
              data-cms-href="home.hero.secondary.href"
              style={{
                border: "1px solid #000000",
                color: "#000000",
                fontSize: "15px",
                fontWeight: "700",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                padding: "18px 34px",
                borderRadius: "999px",
                transition: "all .22s ease",
              }}
              data-cms-field="home.hero.secondary.label"
            >
              {content.secondary.label}
            </a>
          </div>
        </div>
        <div
          data-reveal="right"
          data-r="hero-card"
          data-cms-type="image"
          data-cms-field="home.hero.image.src"
          style={{ position: "relative", width: "100%", aspectRatio: "1/1", minWidth: "0" }}
        >
          <img
            src={content.image.src}
            alt={content.image.alt}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
