"use client";

import { resolveAbout, type AboutContent } from "@/lib/site/about";
import { useEditablePreview } from "@/hooks/usePreview";
import MarqueeBand from "./MarqueeBand";
import StorePair from "./StoreButtons";

/**
 * The About page body, ported from `spay-site/SPay About.dc.html`.
 *
 * Section ids (#top, #borderless, #security) and the `data-r` hooks are what
 * app/spay-site.css selects on to restack these bands below 1080px;
 * `data-reveal` is what SiteMotion animates. Neither is decorative.
 *
 * A client component so the CMS live preview can stream unsaved content in and
 * make each field editable in place. Every text node carries the content path
 * it renders (`about.…`), which is what an inline edit is written back to.
 * `rootRef` scopes editing to the page body, leaving the shared chrome alone.
 */

const H2 = {
  margin: "0",
  fontSize: "clamp(34px, 3.6vw, 54px)",
  lineHeight: "1.06",
  fontWeight: "700",
  letterSpacing: "-1.8px",
  textTransform: "uppercase",
  color: "#118EA3",
  textWrap: "balance",
} as const;

/** The short teal rule that sits under a section heading. */
const RULE = { height: "1px", width: "88px", background: "#118EA3" } as const;

const BODY = {
  margin: "0",
  fontSize: "18px",
  lineHeight: "1.75",
  color: "#000000",
  textWrap: "pretty",
} as const;

const WIDE_BODY = {
  margin: "0",
  maxWidth: "none",
  fontSize: "19px",
  lineHeight: "1.7",
  color: "#000000",
} as const;

export default function AboutPage({ initialContent }: { initialContent: AboutContent }) {
  const { content: c, rootRef } = useEditablePreview(initialContent, resolveAbout);

  return (
    // `display: contents` so this wrapper can hold the ref without adding a box
    // to the layout — the sections stay direct children of the page shell.
    <div ref={rootRef} style={{ display: "contents" }}>
      <section
        id="top"
        style={{
          minHeight: "calc(100svh - 122px)",
          display: "flex",
          alignItems: "stretch",
          overflow: "hidden",
          background: "#a2d9d4",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "32px 72px 0",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.86fr) minmax(0, 1.14fr)",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          <div
            data-reveal="left"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "30px",
              paddingBottom: "32px",
            }}
          >
            <h1
              style={{
                margin: "0",
                fontSize: "clamp(40px, 4.6vw, 66px)",
                lineHeight: "1.04",
                fontWeight: "700",
                letterSpacing: "-2.4px",
                textTransform: "uppercase",
                color: "#000000",
                textWrap: "balance",
              }}
              data-cms-field="about.hero.title"
            >
              {c.hero.title}
            </h1>
            <p
              style={{
                margin: "0",
                maxWidth: "52ch",
                fontSize: "19px",
                lineHeight: "1.75",
                fontWeight: "400",
                color: "#000000",
                textWrap: "pretty",
              }}
              data-cms-field="about.hero.lede"
            >
              {c.hero.lede}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                marginTop: "4px",
              }}
            >
              <StorePair
                appStore={c.hero.appStore}
                playStore={c.hero.playStore}
                size="md"
                cmsPath="about.hero"
              />
            </div>
          </div>
          <div
            data-reveal="right"
            data-r="hero-art"
            data-cms-type="image"
            data-cms-field="about.hero.image.src"
            style={{
              minWidth: "0",
              margin: "-32px -72px 0 0",
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              data-r="bleed"
              src={c.hero.image.src}
              alt={c.hero.image.alt}
              style={{
                width: "118%",
                maxWidth: "none",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section id="borderless" style={{ padding: "96px 0", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.06fr)",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div data-reveal="left" style={{ minWidth: "0" }} data-cms-type="image" data-cms-field="about.borderless.image.src">
            <img
              data-r="bleed"
              src={c.borderless.image.src}
              alt={c.borderless.image.alt}
              style={{
                width: "122%",
                maxWidth: "none",
                height: "auto",
                display: "block",
                marginLeft: "clamp(-120px, -6vw, 0px)",
              }}
            />
          </div>
          <div
            data-reveal="right"
            style={{ display: "flex", flexDirection: "column", gap: "26px", minWidth: "0" }}
          >
            <h2 style={H2} data-cms-field="about.borderless.title">
              {c.borderless.title}
            </h2>
            <div style={RULE} />
            {c.borderless.paragraphs.map((text, i) => (
              <p key={i} style={BODY} data-cms-field={`about.borderless.paragraphs.${i}`}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stablecoin"
        style={{ padding: "96px 0", background: "#a2d9d4", overflow: "hidden" }}
      >
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
              maxWidth: "none",
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: "1.05",
              fontWeight: "600",
              letterSpacing: "-2px",
              textTransform: "uppercase",
              color: "#000000",
            }}
            data-cms-field="about.stablecoin.title"
          >
            {c.stablecoin.title}
          </h2>
          {c.stablecoin.paragraphs.map((text, i) => (
            <p
              key={i}
              data-reveal="left"
              style={WIDE_BODY}
              data-cms-field={`about.stablecoin.paragraphs.${i}`}
            >
              {text}
            </p>
          ))}
        </div>
        <div
          data-reveal="right"
          style={{ maxWidth: "1600px", margin: "24px auto 0", padding: "0 72px" }}
          data-cms-type="image"
          data-cms-field="about.stablecoin.image.src"
        >
          <img
            src={c.stablecoin.image.src}
            alt={c.stablecoin.image.alt}
            style={{ width: "100%", maxWidth: "860px", display: "block", margin: "0 auto" }}
          />
        </div>
      </section>

      <MarqueeBand label={c.marquee.label} cmsPath="about.marquee.label" />

      <section id="security" style={{ padding: "96px 0", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "44px",
          }}
        >
          <div
            data-reveal="left"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center",
            }}
          >
            <h2 style={{ ...H2, maxWidth: "26ch" }} data-cms-field="about.security.title">
              {c.security.title}
            </h2>
            <div style={RULE} />
            <p
              style={{
                margin: "0",
                maxWidth: "56ch",
                fontSize: "19px",
                lineHeight: "1.75",
                color: "#000000",
                textWrap: "pretty",
              }}
              data-cms-field="about.security.intro"
            >
              {c.security.intro}
            </p>
          </div>
          <div data-reveal="right" style={{ width: "100%", display: "flex", justifyContent: "center" }} data-cms-type="image" data-cms-field="about.security.image.src">
            <img
              src={c.security.image.src}
              alt={c.security.image.alt}
              style={{ width: "min(640px, 82vw)", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
