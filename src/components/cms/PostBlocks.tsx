/**
 * Public rendering for the rich content an editor inserts into a post body
 * from the CMS beyond plain prose.
 *
 * Three node types arrive here from Tiptap:
 *   `callout`   — prose in a highlighted box; its children render normally, so
 *                 only the shell lives here (TiptapRenderer supplies the body).
 *   `spayBlock` — a record-shaped block (`kind` + `data`), rendered from data
 *                 alone. No nested rich text, so nothing recursive is needed.
 *   `image`     — a picture from the media library, with optional caption.
 *
 * All of it is treated as untrusted: the backend clamps it on save, and
 * everything read here is coerced again with `text()` / `safeHref()` /
 * `imageSrc()`. A block whose rows are all blank renders nothing rather than
 * an empty shell.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THESE SHAPES ARE MIRRORED IN TWO OTHER APPS. Change all three together:
 *   spay-cms/src/lib/blocks.ts                               (block forms)
 *   spay-cms/src/components/editor/extensions/PostImage.tsx  (image node)
 *   spay-backend/src/schemas/content.schema.ts               (validation)
 * ─────────────────────────────────────────────────────────────────────────────
 */
import React from 'react';
import Link from 'next/link';
import { linkTarget } from '@/lib/linkTarget';
import { safeHref } from '@/lib/sanitize';
import FaqAccordion from './FaqAccordion';

export type BlockKind = 'assets' | 'links' | 'steps' | 'flow' | 'faq';

const KINDS: BlockKind[] = ['assets', 'links', 'steps', 'flow', 'faq'];

export function isBlockKind(v: unknown): v is BlockKind {
  return typeof v === 'string' && (KINDS as string[]).includes(v);
}

type Row = Record<string, string>;

/** Read a string off untrusted data; anything else becomes ''. */
function text(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function readData(raw: unknown): { fields: Row; items: Row[] } {
  const d = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const f = (d.fields && typeof d.fields === 'object' ? d.fields : {}) as Record<string, unknown>;
  const rows = Array.isArray(d.items) ? d.items : [];

  const fields: Row = {};
  for (const [k, v] of Object.entries(f)) fields[k] = text(v);

  const items: Row[] = rows.map((row) => {
    const r = (row && typeof row === 'object' ? row : {}) as Record<string, unknown>;
    const out: Row = {};
    for (const [k, v] of Object.entries(r)) out[k] = text(v);
    return out;
  });

  return { fields, items };
}

/** Anchor that keeps external links safe and internal links client-routed. */
function BlockLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const safe = safeHref(href);
  const { target, rel } = linkTarget(safe, false);
  return (
    <Link href={safe} target={target} rel={rel} className={className}>
      {children}
    </Link>
  );
}

/**
 * Accept only an image URL we are willing to load: absolute http(s), or
 * root-relative. `safeHref` is not reused here because its `#` fallback would
 * make the browser re-request the page itself as an image.
 */
function imageSrc(v: unknown): string | null {
  const s = text(v);
  if (!s || s.startsWith('//')) return null;
  if (s.startsWith('/')) return s;
  return /^https?:\/\//i.test(s) ? s : null;
}

export function PostImage({ attrs }: { attrs: Record<string, unknown> | undefined }) {
  const src = imageSrc(attrs?.src);
  if (!src) return null;

  const alt = text(attrs?.alt);
  const caption = text(attrs?.caption);
  const width = Number(attrs?.width);
  const height = Number(attrs?.height);
  const hasSize = Number.isFinite(width) && width > 0 && Number.isFinite(height) && height > 0;

  return (
    <figure className="spay-figure">
      {/* Plain <img>: the rest of the site does the same, and it avoids having
          to allowlist every media host in next.config for next/image. Real
          width/height reserve the space so the article doesn't jump on load. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        {...(hasSize ? { width, height } : {})}
        loading="lazy"
        decoding="async"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function CalloutBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="spay-callout">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
      <div className="spay-callout__body">{children}</div>
    </div>
  );
}

export default function SpayBlock({ kind, data }: { kind: BlockKind; data: unknown }) {
  const { fields, items } = readData(data);

  if (kind === 'assets') {
    const rows = items.filter((r) => r.symbol);
    if (!rows.length) return null;
    return (
      <div className="spay-assets">
        {rows.map((r, i) => (
          <div className="spay-asset" key={i}>
            <div className="spay-asset__sym">{r.symbol}</div>
            {r.network && <div className="spay-asset__net">{r.network}</div>}
            {r.note && <p className="spay-asset__note">{r.note}</p>}
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'links') {
    const rows = items.filter((r) => r.name);
    if (!rows.length) return null;
    return (
      <div className="spay-links">
        {(fields.title || (fields.allLabel && fields.allHref)) && (
          <div className="spay-links__head">
            <p className="spay-links__title">{fields.title}</p>
            {fields.allLabel && fields.allHref && (
              <BlockLink href={fields.allHref} className="spay-links__all">
                {fields.allLabel}
              </BlockLink>
            )}
          </div>
        )}
        <div className="spay-links__grid">
          {rows.map((r, i) =>
            r.href ? (
              <BlockLink key={i} href={r.href} className="spay-lcard">
                <LinkCardBody row={r} />
              </BlockLink>
            ) : (
              <div key={i} className="spay-lcard">
                <LinkCardBody row={r} />
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (kind === 'faq') {
    // Goes through the same component as the post's own FAQ section, so the
    // two look identical. No heading id — an inline block can appear more than
    // once in a document.
    const rows = items.filter((r) => r.question && r.answer);
    if (!rows.length) return null;
    return (
      <FaqAccordion
        items={rows.map((r) => ({ q: r.question, a: r.answer }))}
        title={fields.title}
        className="my-8"
      />
    );
  }

  if (kind === 'steps') {
    const rows = items.filter((r) => r.title);
    if (!rows.length) return null;
    return (
      <ol className="spay-steps">
        {rows.map((r, i) => (
          <li key={i}>
            <b>{r.title}</b>
            {r.description && <span>{r.description}</span>}
          </li>
        ))}
      </ol>
    );
  }

  // flow — the header copy and the inline copy share this one implementation.
  // Whether a given rail is skipped here (because it was drawn above the
  // byline) is decided by TiptapRenderer, which can see document order.
  return <FlowRail items={items} />;
}

/**
 * The HOLD → SEND → SPEND rail. Stage numbers are derived from position rather
 * than typed by the editor — it is a sequence, so the number is a fact about
 * the order, not content someone should have to keep in sync.
 *
 * Fewer than two stages doesn't read as a sequence, so nothing renders.
 */
export function FlowRail({ items }: { items: Row[] }) {
  const rows = items.filter((r) => r.label);
  if (rows.length < 2) return null;

  return (
    <div className="spay-flow">
      {rows.map((r, i) => {
        const inner = (
          <>
            <b>{String(i + 1).padStart(2, '0')}</b>
            {r.label}
          </>
        );
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <span className="spay-flow__arrow" aria-hidden>
                →
              </span>
            )}
            {r.href ? (
              <BlockLink href={r.href} className="spay-flow__step">
                {inner}
              </BlockLink>
            ) : (
              <span className="spay-flow__step">{inner}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function LinkCardBody({ row }: { row: Row }) {
  return (
    <>
      {row.tag && <span className="spay-lcard__tag">{row.tag}</span>}
      <span className="spay-lcard__name">{row.name}</span>
      {row.description && <span className="spay-lcard__desc">{row.description}</span>}
    </>
  );
}
