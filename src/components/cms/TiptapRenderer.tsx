/**
 * Renders a Tiptap / ProseMirror document (CMS post & page body) to React.
 *
 * The CMS editor runs StarterKit MINUS strike/code/codeBlock/blockquote/
 * horizontalRule, PLUS Link + Placeholder + Table extensions and the two
 * custom content-block nodes. So the ONLY nodes/marks that can appear — and
 * the only ones rendered here — are:
 *
 *   nodes:  doc, paragraph, heading (h1–h6), bulletList, orderedList,
 *           listItem, hardBreak, table, tableRow, tableHeader, tableCell,
 *           callout, spayBlock, image
 *   marks:  bold, italic, link
 *
 * Anything else (blockquote, codeBlock, horizontalRule, underline, strike,
 * code) is intentionally NOT supported and is skipped if encountered.
 *
 * Heading anchors: pass `headingIds` from lib/toc's `collectHeadings` and each
 * heading node gets the id at its position in document order. Both walk the
 * tree depth-first, so position N here is position N there. Omit the prop and
 * headings simply render without ids (pages that have no TOC).
 *
 * Visual styling for the article body lives in globals.css under `.spay-post`
 * (custom list markers, link underlines, table chrome) since ::before markers
 * and descendant selectors don't express cleanly as utility classes.
 *
 * Pure server component — no client JS.
 */
import React from 'react';
import Link from 'next/link';
import { linkTarget } from '@/lib/linkTarget';
import { safeHref } from '@/lib/sanitize';
import type { TiptapDoc, TiptapNode } from '@/lib/cms';
import SpayBlock, { CalloutBlock, PostImage, isBlockKind } from './PostBlocks';
import { claimsHeaderSlot } from '@/lib/post-flow';
import { claimsHeroSlot } from '@/lib/post-hero';

type Mark = { type: string; attrs?: Record<string, unknown> };

/**
 * Per-render walk state: the ordered heading ids and how many we've used, plus
 * whether the page already drew a flow rail in the header slot.
 */
type Ctx = {
  headingIds: string[];
  headingIndex: number;
  headerFlowUsed: boolean;
  /** Set once the page has drawn a body image in the hero slot. */
  heroImageUsed: boolean;
};

/** Wrap a text node's plain string in its bold / italic / link marks. */
function renderText(node: TiptapNode, key: React.Key): React.ReactNode {
  let el: React.ReactNode = node.text ?? '';
  const marks = node.marks ?? [];

  for (const mark of marks as Mark[]) {
    if (mark.type === 'bold') {
      el = <strong>{el}</strong>;
    } else if (mark.type === 'italic') {
      el = <em>{el}</em>;
    }
    // underline / strike / code marks are intentionally ignored.
  }

  // Link mark wraps last so bold/italic stay inside the anchor.
  const linkMark = (marks as Mark[]).find((m) => m.type === 'link');
  if (linkMark) {
    const href = String(linkMark.attrs?.href ?? '');
    const newTab = linkMark.attrs?.target === '_blank';
    const { target, rel } = linkTarget(href, newTab);
    el = (
      <Link href={safeHref(href)} target={target} rel={rel}>
        {el}
      </Link>
    );
  }

  return <React.Fragment key={key}>{el}</React.Fragment>;
}

function renderChildren(
  nodes: TiptapNode[] | undefined,
  ctx: Ctx,
): React.ReactNode {
  if (!nodes) return null;
  return nodes.map((child, i) => renderNode(child, i, ctx));
}

function renderNode(node: TiptapNode, key: React.Key, ctx: Ctx): React.ReactNode {
  switch (node.type) {
    case 'text':
      return renderText(node, key);

    case 'paragraph':
      return <p key={key}>{renderChildren(node.content, ctx)}</p>;

    case 'heading': {
      const level = Math.min(6, Math.max(1, Number(node.attrs?.level ?? 2)));
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      // Consume the next id in document order (see the Ctx note above).
      const id = ctx.headingIds[ctx.headingIndex++];
      return (
        <Tag key={key} id={id}>
          {renderChildren(node.content, ctx)}
        </Tag>
      );
    }

    case 'bulletList':
      return <ul key={key}>{renderChildren(node.content, ctx)}</ul>;

    case 'orderedList': {
      const raw = Number(node.attrs?.start ?? 1);
      const start = Number.isFinite(raw) && raw > 0 ? raw : 1;
      return (
        <ol
          key={key}
          start={start}
          /*
           * The badge an item shows is drawn by CSS from a counter (see
           * `.spay-post ol` in globals.css), and a CSS counter knows nothing
           * about the `start` attribute — it resets to zero on every <ol>.
           *
           * That matters because the editor does not keep a list of four steps
           * as one <ol>. Tiptap splits it into four, each holding a single item
           * and carrying `start="1"`, `"2"`, `"3"`, `"4"`, so every badge on
           * every article rendered as "01". Seeding the counter here restores
           * the numbering the document asked for.
           *
           * A plain integer, not `calc(var(…))`: `counter-reset` has taken one
           * since forever, and this is not a place to depend on a newer syntax.
           */
          style={{ counterReset: `spay-step ${start - 1}` }}
        >
          {renderChildren(node.content, ctx)}
        </ol>
      );
    }

    case 'listItem':
      return <li key={key}>{renderChildren(node.content, ctx)}</li>;

    case 'hardBreak':
      return <br key={key} />;

    case 'callout':
      return (
        <CalloutBlock key={key}>{renderChildren(node.content, ctx)}</CalloutBlock>
      );

    case 'image':
      // The first image marked "full width at the top" is drawn by the page
      // above the table of contents, so drop it here. A second one marked the
      // same way still renders in place rather than vanishing.
      if (!ctx.heroImageUsed && claimsHeroSlot(node)) {
        ctx.heroImageUsed = true;
        return null;
      }
      return <PostImage key={key} attrs={node.attrs} />;

    case 'spayBlock': {
      // An unrecognised kind means a block authored by a newer CMS build than
      // this deploy — skip it rather than render a broken shell.
      const kind = node.attrs?.kind;
      if (!isBlockKind(kind)) return null;
      // The first flow rail marked "under the intro" is drawn by the page above
      // the byline, so drop it here. A second one marked the same way still
      // renders in place rather than vanishing.
      if (!ctx.headerFlowUsed && claimsHeaderSlot(node)) {
        ctx.headerFlowUsed = true;
        return null;
      }
      return <SpayBlock key={key} kind={kind} data={node.attrs?.data} />;
    }

    case 'table':
      return (
        <div key={key} className="spay-post__table-wrap">
          <table>
            <tbody>{renderChildren(node.content, ctx)}</tbody>
          </table>
        </div>
      );

    case 'tableRow':
      return <tr key={key}>{renderChildren(node.content, ctx)}</tr>;

    case 'tableHeader':
      return (
        <th
          key={key}
          colSpan={Number(node.attrs?.colspan ?? 1) || 1}
          rowSpan={Number(node.attrs?.rowspan ?? 1) || 1}
        >
          {renderChildren(node.content, ctx)}
        </th>
      );

    case 'tableCell':
      return (
        <td
          key={key}
          colSpan={Number(node.attrs?.colspan ?? 1) || 1}
          rowSpan={Number(node.attrs?.rowspan ?? 1) || 1}
        >
          {renderChildren(node.content, ctx)}
        </td>
      );

    // doc + any unsupported node: render children if present, else nothing.
    case 'doc':
      return (
        <React.Fragment key={key}>
          {renderChildren(node.content, ctx)}
        </React.Fragment>
      );

    default:
      return node.content ? (
        <React.Fragment key={key}>
          {renderChildren(node.content, ctx)}
        </React.Fragment>
      ) : null;
  }
}

export default function TiptapRenderer({
  content,
  className,
  headingIds,
  liftHeroImage = false,
}: {
  content: TiptapDoc | undefined | null;
  className?: string;
  /** Heading ids in document order, from lib/toc's `collectHeadings`. */
  headingIds?: string[];
  /**
   * Skip the first image marked "full width at the top" because the page is
   * drawing it in the hero slot. False when the post's featured image already
   * fills that slot, in which case the body image renders where it sits.
   */
  liftHeroImage?: boolean;
}) {
  if (!content || !content.content || content.content.length === 0) {
    return null;
  }
  const ctx: Ctx = {
    headingIds: headingIds ?? [],
    headingIndex: 0,
    headerFlowUsed: false,
    heroImageUsed: !liftHeroImage,
  };
  return (
    <div className={`spay-post ${className ?? ''}`.trim()}>
      {renderChildren(content.content, ctx)}
    </div>
  );
}
