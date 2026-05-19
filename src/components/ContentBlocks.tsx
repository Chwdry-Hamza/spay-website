import * as React from "react";
import type { ContentBlock } from "@/lib/cms";

const LINK_COLOR = "#46F1C5";

function renderInline(text: string): React.ReactNode {
  // Tiny inline markdown: `[label](url)` and `**bold**`. The optional
  // `{:newtab}` suffix on a link forces `target="_blank"` so editors can
  // open internal links in a new tab too (external `http(s)://` URLs are
  // already opened in a new tab by default). Everything else is literal.
  // Newlines become <br>. No nested markup — keep this dumb.
  //
  // Match groups:
  //   1 — full `[label](url){:newtab}` (marker optional)
  //   2 — label
  //   3 — url
  //   4 — `{:newtab}` literal when the editor opted into new-tab open
  //   5 — full `**bold**`
  //   6 — bold inner text
  //   7 — newline
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const TOKEN =
    /(\[([^\]]+)\]\(([^)]+)\)(\{:newtab\})?)|(\*\*([^*]+)\*\*)|(\n)/g;
  let m: RegExpExecArray | null;
  while ((m = TOKEN.exec(text))) {
    if (m.index > i) out.push(text.slice(i, m.index));
    if (m[1]) {
      const isExternal = /^https?:\/\//i.test(m[3]);
      const explicitNewTab = Boolean(m[4]);
      const openNewTab = isExternal || explicitNewTab;
      out.push(
        <a
          key={`a${key++}`}
          href={m[3]}
          {...(openNewTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          style={{ color: LINK_COLOR }}
          className="underline decoration-transparent hover:decoration-current"
        >
          {m[2]}
        </a>,
      );
    } else if (m[5]) {
      out.push(
        <strong key={`b${key++}`} className="text-white font-semibold">
          {m[6]}
        </strong>,
      );
    } else if (m[7]) {
      out.push(<br key={`br${key++}`} />);
    }
    i = m.index + m[0].length;
  }
  if (i < text.length) out.push(text.slice(i));
  return out;
}

// Consistent type scale: each level steps down ~20%. H1/H2 use the display
// font; H3-H6 use the body font for a clean visual rhythm in long-form pages.
const HEADING_STYLES: Record<
  1 | 2 | 3 | 4 | 5 | 6,
  { className: string; useDisplayFont: boolean }
> = {
  1: {
    className: "text-4xl md:text-6xl font-bold mb-4 leading-tight",
    useDisplayFont: true,
  },
  2: {
    className: "text-2xl md:text-3xl font-bold mt-10 mb-4 leading-snug",
    useDisplayFont: true,
  },
  3: {
    className: "text-xl md:text-2xl font-semibold mt-8 mb-3 leading-snug",
    useDisplayFont: false,
  },
  4: {
    className: "text-lg md:text-xl font-semibold mt-6 mb-2",
    useDisplayFont: false,
  },
  5: {
    className: "text-base md:text-lg font-semibold mt-5 mb-2",
    useDisplayFont: false,
  },
  6: {
    className:
      "text-sm md:text-base font-semibold mt-4 mb-1 uppercase tracking-wider",
    useDisplayFont: false,
  },
};

function Heading({
  level,
  parts,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  parts: { text: string; color?: string }[];
}) {
  const content = parts.map((p, i) => (
    <span key={i} style={{ color: p.color ?? "#ffffff" }}>
      {p.text}
    </span>
  ));
  const { className, useDisplayFont } = HEADING_STYLES[level];
  const style: React.CSSProperties = useDisplayFont
    ? { fontFamily: "var(--font-space-grotesk)" }
    : {};
  switch (level) {
    case 1:
      return <h1 className={className} style={style}>{content}</h1>;
    case 2:
      return <h2 className={className} style={style}>{content}</h2>;
    case 3:
      return <h3 className={className} style={style}>{content}</h3>;
    case 4:
      return <h4 className={className} style={style}>{content}</h4>;
    case 5:
      return <h5 className={className} style={style}>{content}</h5>;
    case 6:
      return <h6 className={className} style={style}>{content}</h6>;
  }
}

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div
      className="space-y-4 text-sm md:text-base leading-relaxed"
      style={{ fontFamily: "var(--font-inter)", color: "#A6AABE" }}
    >
      {blocks.map((b) => {
        switch (b.type) {
          case "heading":
            return <Heading key={b.id} level={b.level} parts={b.parts} />;
          case "paragraph":
            return <p key={b.id}>{renderInline(b.text)}</p>;
          case "list":
            return b.ordered ? (
              <ol key={b.id} className="list-decimal pl-6 space-y-2">
                {b.items.map((it, i) => (
                  <li key={i}>{renderInline(it)}</li>
                ))}
              </ol>
            ) : (
              <ul key={b.id} className="list-disc pl-6 space-y-2">
                {b.items.map((it, i) => (
                  <li key={i}>{renderInline(it)}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <p key={b.id} className="text-sm" style={{ color: LINK_COLOR }}>
                {renderInline(b.text)}
              </p>
            );
          case "divider":
            return (
              <hr key={b.id} className="my-8 border-t" style={{ borderColor: "#1a2438" }} />
            );
          case "table":
            return <TableBlock key={b.id} block={b} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

/**
 * Renders a CMS-authored table as a semantic `<table>` with `<thead>` +
 * `<tbody>`. When `hasHeaderRow` is true, the first row's cells become
 * `<th scope="col">` so screen readers + search engines see the column
 * relationship. Wrapped in a horizontally-scrollable container so wide
 * tables don't blow out the mobile layout.
 *
 * Cells go through `renderInline` so editors can put **bold** and
 * `[link](url)` inside cells, consistent with paragraph/list blocks.
 */
function TableBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: "table" }>;
}) {
  const rows = block.rows;
  if (rows.length === 0) return null;
  const headerRow = block.hasHeaderRow ? rows[0] : null;
  const bodyRows = block.hasHeaderRow ? rows.slice(1) : rows;
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-[#1a2438]">
      <table className="w-full border-collapse text-sm">
        {block.caption && (
          <caption className="text-left p-3 text-xs uppercase tracking-wider text-[#6c7a86]">
            {block.caption}
          </caption>
        )}
        {headerRow && (
          <thead>
            <tr>
              {headerRow.map((cell, i) => (
                <th
                  key={i}
                  scope="col"
                  className="text-left px-4 py-3 text-xs uppercase tracking-wider font-semibold text-white"
                  style={{
                    background: "rgba(70, 241, 197, 0.06)",
                    borderBottom: "1px solid #1a2438",
                  }}
                >
                  {renderInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {bodyRows.map((row, r) => (
            <tr
              key={r}
              style={{
                borderTop: r === 0 && !headerRow ? "none" : "1px solid #1a2438",
              }}
            >
              {row.map((cell, c) => (
                <td
                  key={c}
                  className="px-4 py-3 align-top text-[#A6AABE]"
                >
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
