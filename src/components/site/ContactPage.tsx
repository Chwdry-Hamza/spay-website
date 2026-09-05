"use client";

import type { CSSProperties } from "react";
import { resolveContact, type ContactContent } from "@/lib/site/contact";
import { useEditablePreview } from "@/hooks/usePreview";
import MarqueeBand from "./MarqueeBand";
import { externalLinkProps } from '@/lib/site/externalLink';

/**
 * The Contact page body, ported from `spay-site/SPay Contact.dc.html`.
 *
 * The assistant conversation beside the hero is a static illustration, not a
 * live chat — the real one lives in the app.
 *
 * A client component so the CMS live preview can stream unsaved content in and
 * edit each field in place; `data-cms-field` goes on the element that already
 * renders the text, never on a wrapper, so the ported DOM is unchanged.
 */

const SECTION_TITLE: CSSProperties = {
  margin: "0",
  fontSize: "clamp(32px, 3.6vw, 54px)",
  lineHeight: "1.02",
  fontWeight: "600",
  letterSpacing: "-1.8px",
  textTransform: "uppercase",
  color: "#118EA3",
};

const BUBBLE: CSSProperties = {
  maxWidth: "82%",
  padding: "14px 18px",
  fontSize: "15px",
  lineHeight: "1.6",
};

const CUSTOMER_BUBBLE: CSSProperties = {
  ...BUBBLE,
  alignSelf: "flex-start",
  background: "#f1f5f6",
  borderRadius: "18px 18px 18px 6px",
  color: "#26333d",
};

const ASSISTANT_BUBBLE: CSSProperties = {
  ...BUBBLE,
  alignSelf: "flex-end",
  background: "#118EA3",
  color: "#ffffff",
  borderRadius: "18px 18px 6px 18px",
};

const DETAIL_CARD: CSSProperties = {
  minWidth: "0",
  background: "#f3fbfa",
  border: "1px solid #cfeae7",
  borderRadius: "20px",
  padding: "38px 34px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const DETAIL_EYEBROW: CSSProperties = {
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "2.4px",
  textTransform: "uppercase",
  color: "#118EA3",
};

const DETAIL_VALUE: CSSProperties = {
  fontSize: "clamp(24px, 2.1vw, 32px)",
  lineHeight: "1.15",
  fontWeight: "700",
  letterSpacing: "-0.8px",
  color: "#0b1620",
};

const DETAIL_BODY: CSSProperties = {
  margin: "0",
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#4a5560",
  textWrap: "pretty",
};

const CHANNEL_ROW: CSSProperties = {
  borderTop: "1px solid #e0eceb",
  padding: "28px 0",
  display: "grid",
  gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)",
  gap: "12px 40px",
  alignItems: "start",
};

export default function ContactPage({
  initialContent,
}: {
  initialContent: ContactContent;
}) {
  const { content: c, rootRef } = useEditablePreview(initialContent, resolveContact);

  return (
    // `display: contents` keeps this ref holder out of the layout.
    <div ref={rootRef} style={{ display: "contents" }}>
      <section id="top" style={{ padding: "96px 0 104px", background: "#a2d9d4", overflow: "clip" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div
            data-reveal="up"
            style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}
          >
            <h1
              style={{
                margin: "0",
                fontSize: "clamp(40px, 5.4vw, 80px)",
                lineHeight: ".98",
                fontWeight: "600",
                letterSpacing: "-2.6px",
                textTransform: "uppercase",
                color: "#0b3c44",
              }}
              data-cms-field="contact.hero.title"
            >
              {c.hero.title}
            </h1>
            <p
              style={{
                margin: "0",
                maxWidth: "56ch",
                fontSize: "19px",
                lineHeight: "1.75",
                color: "#12464f",
                textWrap: "pretty",
              }}
              data-cms-field="contact.hero.lede"
            >
              {c.hero.lede}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "6px" }}>
              <a
                className="dc-h3"
                href={c.hero.ctaHref}
                {...externalLinkProps(c.hero.ctaHref)}
                data-cms-href="contact.hero.ctaHref"
                style={{
                  background: "#118EA3",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  padding: "18px 38px",
                  borderRadius: "999px",
                  transition: "background .22s ease",
                }}
                data-cms-field="contact.hero.ctaLabel"
              >
                {c.hero.ctaLabel}
              </a>
            </div>
          </div>

          <div
            data-reveal="right"
            style={{
              minWidth: "0",
              background: "#ffffff",
              borderRadius: "24px",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                borderBottom: "1px solid #e6eef0",
                paddingBottom: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  letterSpacing: "-0.2px",
                  color: "#0b1620",
                }}
                data-cms-field="contact.hero.chat.title"
              >
                {c.hero.chat.title}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  color: "#118EA3",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: "#1fb98a",
                    display: "block",
                  }}
                />
                <span data-cms-field="contact.hero.chat.status">{c.hero.chat.status}</span>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {c.hero.chat.messages.map((message, i) => (
                <div
                  key={i}
                  data-r={message.from === "assistant" ? "bubble-out" : "bubble-in"}
                  style={message.from === "assistant" ? ASSISTANT_BUBBLE : CUSTOMER_BUBBLE}
                  data-cms-field={`contact.hero.chat.messages.${i}.text`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #e6eef0",
                borderRadius: "999px",
                padding: "14px 20px",
                color: "#8b98a1",
                fontSize: "15px",
              }}
            >
              <span data-cms-field="contact.hero.chat.placeholder">{c.hero.chat.placeholder}</span>
              <span
                data-r="chat-send"
                style={{
                  marginLeft: "auto",
                  width: "34px",
                  height: "34px",
                  borderRadius: "999px",
                  background: "#118EA3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <svg
              data-r="arrow"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="details" style={{ padding: "104px 0", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <h2 data-reveal="up" style={SECTION_TITLE} data-cms-field="contact.details.title">
            {c.details.title}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "28px",
            }}
          >
            {c.details.cards.map((card, i) => (
              <div key={card.eyebrow} data-reveal="up" style={DETAIL_CARD}>
                <span style={DETAIL_EYEBROW} data-cms-field={`contact.details.cards.${i}.eyebrow`}>
                  {card.eyebrow}
                </span>
                {card.href ? (
                  <a
                    className="dc-h1"
                    href={card.href}
                    {...externalLinkProps(card.href)}
                    data-cms-href={`contact.details.cards.${i}.href`}
                    style={{ ...DETAIL_VALUE, wordBreak: "break-word" }}
                    data-cms-field={`contact.details.cards.${i}.value`}
                  >
                    {card.value}
                  </a>
                ) : (
                  /* An empty href renders plain text — the support-hours card.
                     It still carries the URL hook so all three cards behave the
                     same: give it a destination and the branch above turns it
                     into a link. */
                  <span
                    style={DETAIL_VALUE}
                    data-cms-field={`contact.details.cards.${i}.value`}
                    data-cms-href={`contact.details.cards.${i}.href`}
                  >
                    {card.value}
                  </span>
                )}
                <p style={DETAIL_BODY} data-cms-field={`contact.details.cards.${i}.body`}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeBand label={c.marquee.label} cmsPath="contact.marquee.label" />

      <section id="channels" style={{ padding: "104px 0", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 72px",
            display: "grid",
            gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)",
            gap: "56px",
            alignItems: "start",
          }}
        >
          <div
            data-reveal="up"
            style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}
          >
            <h2 style={SECTION_TITLE} data-cms-field="contact.channels.title">
              {c.channels.title}
            </h2>
            <p
              style={{
                margin: "0",
                maxWidth: "44ch",
                fontSize: "18px",
                lineHeight: "1.75",
                color: "#4a5560",
                textWrap: "pretty",
              }}
              data-cms-field="contact.channels.intro"
            >
              {c.channels.intro}
            </p>
          </div>
          <div style={{ minWidth: "0", display: "flex", flexDirection: "column" }}>
            {c.channels.items.map((item, i) => (
              <div key={item.title} data-reveal="up" style={CHANNEL_ROW}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}
                >
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      lineHeight: "1.2",
                      fontWeight: "700",
                      letterSpacing: "-0.5px",
                      color: "#118EA3",
                    }}
                    data-cms-field={`contact.channels.items.${i}.title`}
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#0f6b78",
                    }}
                    data-cms-field={`contact.channels.items.${i}.meta`}
                  >
                    {item.meta}
                  </span>
                </div>
                <p
                  style={{
                    margin: "0",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#4a5560",
                    textWrap: "pretty",
                  }}
                  data-cms-field={`contact.channels.items.${i}.body`}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
