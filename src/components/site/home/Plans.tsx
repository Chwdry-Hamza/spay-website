import type { CSSProperties } from "react";
import type { HomeContent } from "@/lib/site/home";
import TickRow from "../TickRow";
import { externalLinkProps } from "@/lib/site/externalLink";

/**
 * The three plan cards.
 *
 * `data-r="plans"` is what app/spay-site.css narrows to a single column below
 * 1080px, and it also finds the badged card through
 * `[data-r="plans"] > div[style*="padding:54px"]` — so the badged card's extra
 * top padding must stay spelled exactly that way.
 *
 * The reveal direction is positional (left / up / right), matching the design.
 */

const ACCENT = "#118EA3";

const CARD: CSSProperties = {
  position: "relative",
  background: "#ffffff",
  borderRadius: "22px",
  display: "flex",
  flexDirection: "column",
  gap: "0",
  minWidth: "0",
  transition: "transform .28s cubic-bezier(.22,.61,.36,1), box-shadow .28s ease",
};

const REVEALS = ["left", "up", "right"];

export default function Plans({ content }: { content: HomeContent["plans"] }) {
  return (
    <section
      id="plans"
      style={{
        margin: "128px 0 0",
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
          boxSizing: "content-box",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2
          data-reveal="left"
          style={{
            margin: "0",
            maxWidth: "none",
            whiteSpace: "nowrap",
            fontSize: "clamp(28px, 3.4vw, 54px)",
            lineHeight: "1.02",
            fontWeight: "600",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            color: "#000000",
            textWrap: "balance",
          }}
          data-cms-field="home.plans.title"
        >
          {content.title}
        </h2>
      </div>

      <div
        data-r="plans"
        style={{
          maxWidth: "1600px",
          margin: "56px auto 0",
          padding: "0 72px",
          boxSizing: "content-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        {content.tiers.map((tier, i) => (
          <div
            key={tier.name}
            className="dc-h7"
            data-reveal={REVEALS[i % REVEALS.length]}
            style={{
              ...CARD,
              // The badge overhangs the top edge, so the badged card gets extra
              // padding and must not clip its children.
              padding: tier.badge ? "54px 38px 38px" : "44px 38px 38px",
              ...(tier.badge ? null : { overflow: "hidden" }),
            }}
          >
            {tier.badge && (
              <span
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: ACCENT,
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: "800",
                  letterSpacing: "1.2px",
                  padding: "12px 30px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                }}
                data-cms-field={`home.plans.tiers.${i}.badge`}
              >
                {tier.badge}
              </span>
            )}
            <h3
              style={{
                margin: "0",
                fontSize: "31px",
                lineHeight: "1.1",
                fontWeight: "800",
                letterSpacing: "-0.8px",
                color: "#0b1013",
              }}
              data-cms-field={`home.plans.tiers.${i}.name`}
            >
              {tier.name}
            </h3>
            <span
              style={{
                marginTop: "14px",
                fontSize: "42px",
                lineHeight: "1",
                fontWeight: "800",
                letterSpacing: "-1.6px",
                color: ACCENT,
              }}
              data-cms-field={`home.plans.tiers.${i}.price`}
            >
              {tier.price}
            </span>
            <span
              style={{ marginTop: "10px", fontSize: "16px", color: "#8a949d" }}
              data-cms-field={`home.plans.tiers.${i}.priceNote`}
            >
              {tier.priceNote}
            </span>
            <div style={{ height: "1px", background: "#dcdfe2", margin: "28px 0 30px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {tier.features.map((feature, j) => (
                <TickRow
                  key={feature}
                  accent={ACCENT}
                  size="md"
                  cmsPath={`home.plans.tiers.${i}.features.${j}`}
                >
                  {feature}
                </TickRow>
              ))}
            </div>
            <a
              href={tier.ctaHref}
              {...externalLinkProps(tier.ctaHref)}
              data-cms-href={`home.plans.tiers.${i}.ctaHref`}
              style={{ marginTop: "auto", paddingTop: "38px", display: "block" }}
            >
              <span
                className="dc-h3"
                style={{
                  display: "block",
                  background: ACCENT,
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "20px 24px",
                  fontSize: "19px",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "background .22s ease",
                }}
                data-cms-field={`home.plans.tiers.${i}.ctaLabel`}
              >
                {tier.ctaLabel}
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
