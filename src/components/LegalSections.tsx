"use client";

import React from "react";
import { resolveLegalContent, type LegalContent } from "@/lib/legalContent";
import { useEditablePreview } from "@/hooks/usePreview";
import { safeHref } from "@/lib/sanitize";

/**
 * Renders a legal page (Privacy Policy, Card Terms) from CMS `sections`
 * content. Design stays in code; text comes from
 * `content`. In the CMS live-preview iframe (`?preview=1`) it listens for
 * postMessage updates and re-renders in real time.
 *
 * Text fields support light inline formatting so links survive CMS editing:
 *   - [label](url)            → link (relative or absolute)
 *   - bare emails / http URLs → auto-linked
 *   - **bold**                → bold, in the heading ink
 */

import { SITE } from "@/lib/site/palette";

const LINK = SITE.brand;

function pushAutoLink(parts: React.ReactNode[], text: string) {
  const re = /([\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}|https?:\/\/[^\s)]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    const href = tok.includes("@") ? `mailto:${tok}` : tok;
    parts.push(
      <a key={parts.length} href={href} style={{ color: LINK }} {...(tok.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {tok}
      </a>,
    );
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
}

function pushBold(parts: React.ReactNode[], text: string) {
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) pushAutoLink(parts, text.slice(last, m.index));
    parts.push(
      <strong key={parts.length} style={{ color: SITE.ink, fontWeight: 600 }}>
        {m[1]}
      </strong>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushAutoLink(parts, text.slice(last));
}

/** Render text with [label](url) links, auto-linked emails/URLs, and **bold**. */
function rich(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) pushBold(parts, text.slice(last, m.index));
    const href = safeHref(m[2]);
    parts.push(
      <a key={parts.length} href={href} style={{ color: LINK }} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushBold(parts, text.slice(last));
  return parts;
}

export default function LegalSections({
  initialContent,
  defaults,
}: {
  initialContent: LegalContent;
  defaults: LegalContent;
}) {
  // Edited inline in the CMS preview. Legal body/items are markdown, so each is
  // tagged `data-cms-raw` and edited as raw source (see InlineEditRuntime).
  const { content, rootRef } = useEditablePreview(
    initialContent,
    React.useCallback((raw: unknown) => resolveLegalContent(defaults, raw), [defaults]),
  );

  const { header, body } = content;

  return (
    <div ref={rootRef}>
      <section id="top" style={{ background: SITE.surface, overflow: "clip" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "88px 72px 0",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h1
            data-reveal="left"
            style={{
              margin: 0,
              fontSize: "clamp(38px, 5vw, 72px)",
              lineHeight: 1.0,
              fontWeight: 600,
              letterSpacing: "-2.4px",
              textTransform: "uppercase",
              color: SITE.brand,
              textWrap: "balance",
            }}
          >
            {/* Two spans purely so the CMS can edit each half in place; both
                render in the same brand colour the heading sets. */}
            <span data-cms-field="header.white">{header.white}</span>{" "}
            <span data-cms-field="header.accent">{header.accent}</span>
          </h1>
          {header.effectiveDate && (
            <p
              data-reveal="left"
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.6px",
                textTransform: "uppercase",
                color: SITE.brandMuted,
              }}
              data-cms-field="header.effectiveDate"
            >
              {header.effectiveDate}
            </p>
          )}
        </div>
      </section>

      <section style={{ background: SITE.surface }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "40px 72px 104px",
          }}
        >
          <div
            className="space-y-4"
            style={{ fontSize: "17px", lineHeight: 1.8, color: SITE.body }}
          >
            {body.sections.map((s, i) => (
              <div key={i} data-reveal="up">
                {s.heading && (
                  <h2
                    style={{
                      margin: "44px 0 16px",
                      fontSize: "clamp(24px, 2.4vw, 34px)",
                      lineHeight: 1.15,
                      fontWeight: 700,
                      letterSpacing: "-0.8px",
                      color: SITE.brand,
                    }}
                    data-cms-field={`body.sections.${i}.heading`}
                  >
                    {s.heading}
                  </h2>
                )}
                {s.body && (
                  <p
                    className="whitespace-pre-line"
                    data-cms-field={`body.sections.${i}.body`}
                    data-cms-raw={s.body}
                    data-cms-multiline
                  >
                    {rich(s.body)}
                  </p>
                )}
                {s.items && s.items.length > 0 && (
                  <ul className="list-disc space-y-2" style={{ paddingLeft: "26px" }}>
                    {s.items.map((it, j) => (
                      <li
                        key={j}
                        data-cms-field={`body.sections.${i}.items.${j}`}
                        data-cms-raw={it}
                      >
                        {rich(it)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
