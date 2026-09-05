"use client";

import type { CSSProperties } from "react";
import { resolveCard, type CardContent, type CardTier } from "@/lib/site/card";
import { useEditablePreview } from "@/hooks/usePreview";
import MarqueeBand from "./MarqueeBand";
import TickRow from "./TickRow";
import { externalLinkProps } from '@/lib/site/externalLink';

/**
 * The Card page body, ported from `spay-site/SPay Card.dc.html`.
 *
 * All four bands (three virtual tiers plus the plastic one) share one layout,
 * so they render through `TierBand`. What differs per band — the accent colour
 * used for the price, the ticks and the CTA, plus the band's own background and
 * padding — is design rather than copy, so it pairs with the content by
 * position here instead of living in the CMS.
 *
 * `data-r="card-fan"` and `data-r="plan-cta"` are responsive hooks: the hero
 * fan is re-laid-out on phones, and plan CTAs are excluded from the rule that
 * makes store buttons full-width.
 *
 * A client component so the CMS live preview can stream unsaved content in and
 * edit each field in place; `data-cms-field` sits on the element that already
 * renders the text, so the ported DOM is unchanged.
 */

type BandStyle = { background: string; padding: string; accent: string };

const TIER_STYLES: BandStyle[] = [
  { background: "#ffffff", padding: "104px 0", accent: "#118EA3" },
  { background: "#a2d9d4", padding: "96px 0", accent: "#c85a12" },
  { background: "#ffffff", padding: "96px 0", accent: "#0f7a5a" },
];

const PHYSICAL_STYLE: BandStyle = {
  background: "#ffffff",
  padding: "96px 0",
  accent: "#118EA3",
};

const TIER_NAME: CSSProperties = {
  margin: "0",
  fontSize: "clamp(30px, 3.2vw, 46px)",
  lineHeight: "1.04",
  fontWeight: "700",
  letterSpacing: "-1.6px",
  textTransform: "uppercase",
  color: "#0b1013",
};

const PRICE: CSSProperties = {
  fontSize: "44px",
  lineHeight: "1",
  fontWeight: "800",
  letterSpacing: "-1.8px",
};

const BLURB: CSSProperties = {
  margin: "0",
  maxWidth: "46ch",
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#16202a",
  textWrap: "pretty",
};

const CTA: CSSProperties = {
  alignSelf: "flex-start",
  marginTop: "10px",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "700",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  padding: "18px 40px",
  borderRadius: "999px",
  transition: "filter .22s ease",
};

const CARD_IMAGE: CSSProperties = {
  width: "100%",
  maxWidth: "620px",
  borderRadius: "22px",
  boxShadow: "0 26px 60px rgba(11,60,68,0.22)",
  display: "block",
};

/** The plastic card is a cut-out, so it takes a drop-shadow, not a box-shadow. */
const PLASTIC_IMAGE: CSSProperties = {
  width: "100%",
  maxWidth: "620px",
  filter: "drop-shadow(0 26px 40px rgba(11,60,68,0.22))",
  display: "block",
};

function TierBand({
  tier,
  style,
  plastic = false,
  cmsPath,
}: {
  tier: CardTier;
  style: BandStyle;
  plastic?: boolean;
  /** Content path of this tier, for CMS inline editing. */
  cmsPath: string;
}) {
  return (
    <section
      id={tier.id}
      style={{ padding: style.padding, background: style.background, overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div
          data-reveal="left"
          style={{
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            order: "0",
          }}
        >
          <h3 style={TIER_NAME} data-cms-field={`${cmsPath}.name`}>
            {tier.name}
          </h3>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span style={{ ...PRICE, color: style.accent }} data-cms-field={`${cmsPath}.price`}>
              {tier.price}
            </span>
            <span
              style={{ fontSize: "16px", color: "#6d7a83" }}
              data-cms-field={`${cmsPath}.priceNote`}
            >
              {tier.priceNote}
            </span>
          </div>
          <p style={BLURB} data-cms-field={`${cmsPath}.blurb`}>
            {tier.blurb}
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "4px" }}
          >
            {tier.features.map((feature, i) => (
              <TickRow
                key={feature}
                accent={style.accent}
                size="lg"
                cmsPath={`${cmsPath}.features.${i}`}
              >
                {feature}
              </TickRow>
            ))}
          </div>
          {tier.cta.href ? (
            <a
              className="dc-h12"
              data-r="plan-cta"
              href={tier.cta.href}
              {...externalLinkProps(tier.cta.href)}
              data-cms-href={`${cmsPath}.cta.href`}
              style={{ ...CTA, background: style.accent }}
              data-cms-field={`${cmsPath}.cta.label`}
            >
              {tier.cta.label}
            </a>
          ) : (
            /* An empty `cta.href` renders a muted pill instead of a link —
               the physical card is not orderable yet. It still carries the URL
               hook so an editor can give it a destination the day it is, and
               the branch above turns it back into a real link. */
            <span
              style={{ ...CTA, background: "#eef1f3", color: "#4a5560", transition: undefined }}
              data-cms-field={`${cmsPath}.cta.label`}
              data-cms-href={`${cmsPath}.cta.href`}
            >
              {tier.cta.label}
            </span>
          )}
        </div>
        <div
          data-reveal="right"
          data-cms-type="image"
          data-cms-field={`${cmsPath}.image.src`}
          style={{ minWidth: "0", display: "flex", justifyContent: "center", order: "0" }}
        >
          <img
            src={tier.image.src}
            alt={tier.image.alt}
            style={plastic ? PLASTIC_IMAGE : CARD_IMAGE}
          />
        </div>
      </div>
    </section>
  );
}

export default function CardPage({ initialContent }: { initialContent: CardContent }) {
  const { content: c, rootRef } = useEditablePreview(initialContent, resolveCard);
  const fanCard: CSSProperties = {
    position: "absolute",
    width: "42%",
    maxWidth: "460px",
    borderRadius: "18px",
    boxShadow: "0 24px 50px rgba(11,60,68,0.24)",
    display: "block",
  };

  return (
    // `display: contents` keeps this ref holder out of the layout.
    <div ref={rootRef} style={{ display: "contents" }}>
      <section
        id="top"
        style={{
          minHeight: "calc(100svh - 122px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#a2d9d4",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "56px 72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "26px",
          }}
        >
          <h1
            data-reveal="up"
            style={{
              margin: "0",
              maxWidth: "22ch",
              textAlign: "center",
              fontSize: "clamp(40px, 4.6vw, 66px)",
              lineHeight: "1.04",
              fontWeight: "700",
              letterSpacing: "-2.4px",
              textTransform: "uppercase",
              color: "#000000",
              textWrap: "balance",
            }}
            data-cms-field="card.hero.title"
          >
            {c.hero.title}
          </h1>
          <p
            data-reveal="up"
            style={{
              margin: "0",
              maxWidth: "64ch",
              textAlign: "center",
              fontSize: "19px",
              lineHeight: "1.75",
              color: "#000000",
              textWrap: "pretty",
            }}
            data-cms-field="card.hero.lede"
          >
            {c.hero.lede}
          </p>
          <div
            data-reveal="up"
            data-r="card-fan"
            style={{
              width: "100%",
              maxWidth: "1180px",
              marginTop: "18px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={c.hero.fan.left.src}
              alt={c.hero.fan.left.alt}
              data-cms-type="image"
              data-cms-field="card.hero.fan.left.src"
              style={{ ...fanCard, transform: "translateX(-58%) rotate(-8deg)" }}
            />
            <img
              src={c.hero.fan.right.src}
              alt={c.hero.fan.right.alt}
              data-cms-type="image"
              data-cms-field="card.hero.fan.right.src"
              style={{ ...fanCard, transform: "translateX(58%) rotate(8deg)" }}
            />
            <img
              src={c.hero.fan.front.src}
              alt={c.hero.fan.front.alt}
              data-cms-type="image"
              data-cms-field="card.hero.fan.front.src"
              style={{
                position: "relative",
                zIndex: "2",
                width: "44%",
                maxWidth: "480px",
                borderRadius: "18px",
                boxShadow: "0 30px 64px rgba(11,60,68,0.3)",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {c.tiers.map((tier, i) => (
        <TierBand
          key={tier.id}
          tier={tier}
          style={TIER_STYLES[i % TIER_STYLES.length]}
          cmsPath={`card.tiers.${i}`}
        />
      ))}

      <MarqueeBand label={c.marquee.label} cmsPath="card.marquee.label" />

      <TierBand tier={c.physical} style={PHYSICAL_STYLE} plastic cmsPath="card.physical" />
    </div>
  );
}
