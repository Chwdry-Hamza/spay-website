"use client";

import { Fragment, type CSSProperties, type ReactNode } from "react";
import { resolveHowItWorks, type HowItWorksContent } from "@/lib/site/howItWorks";
import { useEditablePreview } from "@/hooks/usePreview";
import MarqueeBand from "./MarqueeBand";

/**
 * The "How it works" page body, ported from
 * `spay-site/SPay How It Works.dc.html`.
 *
 * Two structures are load-bearing for app/spay-site.css:
 *   • `#journey > div > div > div > div` — the connector rail is drawn with
 *     ::before/::after on each journey cell (classes dc-b13 / dc-a14) and the
 *     responsive layer hides the tails at each row's ends, per breakpoint. The
 *     three wrapper divs between #journey and the cells must stay.
 *   • The hero's sticky phone unsticks below 1080px through
 *     `[style*="position:sticky"][style*="top:150px"]`, so those two
 *     declarations have to keep those exact values.
 *
 * A client component so the CMS live preview can stream unsaved content in and
 * edit each field in place; `data-cms-field` sits on the element that already
 * renders the text, so the ported DOM is unchanged.
 */

const STEP_CARD: CSSProperties = {
  background: "#ffffff",
  padding: "40px 48px",
  position: "relative",
  display: "flex",
  gap: "28px",
  alignItems: "flex-start",
};

const STEP_TITLE: CSSProperties = {
  margin: "0",
  fontSize: "24px",
  lineHeight: "1.2",
  fontWeight: "700",
  letterSpacing: "-0.5px",
  color: "#118EA3",
};

const STEP_BODY: CSSProperties = {
  margin: "0",
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#1d4a52",
  textWrap: "pretty",
};

/** The down-arrow that separates two stacked hero steps. */
const STEP_ARROW = (
  <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
    <svg
      width={28}
      height={58}
      viewBox="0 0 28 58"
      fill="none"
      stroke="#000000"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v42" />
      <path d="M6 40l8 10 8-10" />
    </svg>
  </div>
);

const SECTION_TITLE: CSSProperties = {
  margin: "0",
  fontSize: "clamp(34px, 4vw, 58px)",
  lineHeight: "1.02",
  fontWeight: "600",
  letterSpacing: "-2px",
  textTransform: "uppercase",
  color: "#118EA3",
};

const JOURNEY_NUMBER: CSSProperties = {
  position: "relative",
  zIndex: "2",
  width: "62px",
  height: "62px",
  borderRadius: "999px",
  background: "#118EA3",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "700",
  letterSpacing: "0.4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const JOURNEY_DURATION: CSSProperties = {
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1.6px",
  textTransform: "uppercase",
  color: "#0f6b78",
  background: "#e4f2f4",
  borderRadius: "999px",
  padding: "6px 14px",
};

const VERIFY_CARD: CSSProperties = {
  background: "#f4f8f9",
  border: "1px solid #e3e8ec",
  borderRadius: "22px",
  padding: "30px 34px",
  display: "flex",
  gap: "24px",
  alignItems: "flex-start",
};

const VERIFY_ICON_WELL: CSSProperties = {
  flex: "none",
  width: "60px",
  height: "60px",
  borderRadius: "999px",
  background: "#d8eef0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#118EA3",
};

/** Paired with `verification.cards` by position; cycles past the third. */
const VERIFY_ICONS: ReactNode[] = [
  <svg
    viewBox="0 0 24 24"
    width={26}
    height={26}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="person"
  >
    <circle cx={12} cy={8.4} r={3.4} />
    <path d="M4.8 19.6c.7-3.5 3.6-5.6 7.2-5.6s6.5 2.1 7.2 5.6" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={26}
    height={26}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="id"
  >
    <rect x={2.6} y={5} width={18.8} height={14} rx={2} />
    <circle cx={8.6} cy={11} r={2.1} />
    <path d="M5.2 16.4c.5-1.5 1.9-2.4 3.4-2.4s2.9.9 3.4 2.4M14.8 10h4M14.8 13.6h4" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    width={26}
    height={26}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    key="card"
  >
    <rect x={2.6} y={6} width={18.8} height={12} rx={2} />
    <path d="M2.6 10.2h18.8M6.4 14.4h4" />
    <path d="M15 15.4l1.5 1.6 2.8-3.2" />
  </svg>,
];

export default function HowItWorksPage({
  initialContent,
}: {
  initialContent: HowItWorksContent;
}) {
  const { content: c, rootRef } = useEditablePreview(initialContent, resolveHowItWorks);

  return (
    // `display: contents` keeps this ref holder out of the layout.
    <div ref={rootRef} style={{ display: "contents" }}>
      <section id="top" style={{ padding: "96px 0 104px", background: "#a2d9d4", overflow: "clip" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "22px",
          }}
        >
          <h1
            data-reveal="left"
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-2.6px",
              textTransform: "uppercase",
              color: "#000000",
            }}
            data-cms-field="howItWorks.hero.title"
          >
            {c.hero.title}
          </h1>
          <p
            data-reveal="left"
            style={{
              margin: "0",
              maxWidth: "88ch",
              fontSize: "19px",
              lineHeight: "1.75",
              color: "#0b3c44",
              textWrap: "pretty",
            }}
            data-cms-field="howItWorks.hero.lede"
          >
            {c.hero.lede}
          </p>
        </div>
        <div
          style={{
            maxWidth: "1600px",
            margin: "56px auto 0",
            padding: "0 72px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div
            data-reveal="left"
            data-cms-type="image"
            data-cms-field="howItWorks.hero.image.src"
            style={{
              minWidth: "0",
              position: "sticky",
              top: "150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={c.hero.image.src}
              alt={c.hero.image.alt}
              style={{ width: "100%", maxWidth: "520px", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column" }}>
            {c.hero.steps.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && STEP_ARROW}
                <div
                  data-reveal="up"
                  data-r="hiw-step"
                  style={{
                    ...STEP_CARD,
                    // Odd cards sit further in and mirror the rounded corner.
                    marginLeft: i % 2 === 0 ? "56px" : "128px",
                    borderRadius: i % 2 === 0 ? "96px 0 0 0" : "0 96px 0 0",
                  }}
                >
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}
                  >
                    <h3 style={STEP_TITLE} data-cms-field={`howItWorks.hero.steps.${i}.title`}>
                      {step.title}
                    </h3>
                    <p style={STEP_BODY} data-cms-field={`howItWorks.hero.steps.${i}.body`}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" style={{ padding: "104px 0", background: "#ffffff", overflow: "clip" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "56px",
          }}
        >
          <h2
            data-reveal="up"
            style={{ ...SECTION_TITLE, textAlign: "center" }}
            data-cms-field="howItWorks.journey.title"
          >
            {c.journey.title}
          </h2>
          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
                gap: "40px 16px",
              }}
            >
              {c.journey.steps.map((step, i) => (
                <div
                  key={step.n}
                  className="dc-b13 dc-a14"
                  data-reveal="up"
                  style={{
                    position: "relative",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "16px",
                  }}
                >
                  <span style={JOURNEY_NUMBER} data-cms-field={`howItWorks.journey.steps.${i}.n`}>
                    {step.n}
                  </span>
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "19px",
                      lineHeight: "1.25",
                      fontWeight: "700",
                      letterSpacing: "-0.3px",
                      color: "#0b1620",
                    }}
                    data-cms-field={`howItWorks.journey.steps.${i}.title`}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={JOURNEY_DURATION}
                    data-cms-field={`howItWorks.journey.steps.${i}.duration`}
                  >
                    {step.duration}
                  </span>
                  <p
                    style={{
                      margin: "0",
                      maxWidth: "22ch",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#4a5560",
                      textWrap: "pretty",
                    }}
                    data-cms-field={`howItWorks.journey.steps.${i}.body`}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MarqueeBand label={c.marquee.label} cmsPath="howItWorks.marquee.label" />

      <section
        id="verification"
        style={{ padding: "104px 0 0", background: "#ffffff", overflow: "clip" }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "64px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "24px",
              paddingBottom: "104px",
            }}
          >
            <h2
              data-reveal="left"
              style={{ ...SECTION_TITLE, maxWidth: "18ch" }}
              data-cms-field="howItWorks.verification.title"
            >
              {c.verification.title}
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "8px" }}
            >
              {c.verification.cards.map((card, i) => (
                <div key={card.title} data-reveal="up" style={VERIFY_CARD}>
                  <span style={VERIFY_ICON_WELL}>{VERIFY_ICONS[i % VERIFY_ICONS.length]}</span>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}
                  >
                    <h3
                      style={{
                        margin: "0",
                        fontSize: "21px",
                        lineHeight: "1.25",
                        fontWeight: "700",
                        letterSpacing: "-0.4px",
                        color: "#0b1620",
                      }}
                      data-cms-field={`howItWorks.verification.cards.${i}.title`}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "#4a5560",
                        textWrap: "pretty",
                      }}
                      data-cms-field={`howItWorks.verification.cards.${i}.body`}
                    >
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            data-reveal="right"
            data-r="section-art"
            data-cms-type="image"
            data-cms-field="howItWorks.verification.image.src"
            style={{
              minWidth: "0",
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "clamp(-140px, -7vw, 0px)",
              paddingBottom: "104px",
            }}
          >
            <img
              data-r="bleed"
              src={c.verification.image.src}
              alt={c.verification.image.alt}
              style={{
                width: "116%",
                maxWidth: "none",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
