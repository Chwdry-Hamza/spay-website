/**
 * Renders a Tiptap / ProseMirror document (CMS post & page body) to React.
 *
 * The CMS editor runs StarterKit MINUS strike/code/codeBlock/blockquote/
 * horizontalRule, PLUS Link + Placeholder + Table extensions. So the ONLY
 * nodes/marks that can appear — and the only ones rendered here — are:
 *
 *   nodes:  doc, paragraph, heading (h1–h6), bulletList, orderedList,
 *           listItem, hardBreak, table, tableRow, tableHeader, tableCell
 *   marks:  bold, italic, link
 *
 * Anything else (image, blockquote, codeBlock, horizontalRule, underline,
 * strike, code) is intentionally NOT supported and is skipped if encountered.
 *
 * Pure server component — no client JS.
 */
import React from 'react';
import Link from 'next/link';
import { linkTarget } from '@/lib/linkTarget';
import { safeHref } from '@/lib/sanitize';
import type { TiptapDoc, TiptapNode } from '@/lib/cms';

const ACCENT = '#46F1C5';

type Mark = { type: string; attrs?: Record<string, unknown> };

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
      <Link
        href={safeHref(href)}
        target={target}
        rel={rel}
        style={{ color: ACCENT, textDecoration: 'underline' }}
      >
        {el}
      </Link>
    );
  }

  return <React.Fragment key={key}>{el}</React.Fragment>;
}

function renderChildren(nodes: TiptapNode[] | undefined): React.ReactNode {
  if (!nodes) return null;
  return nodes.map((child, i) => renderNode(child, i));
}

function renderNode(node: TiptapNode, key: React.Key): React.ReactNode {
  switch (node.type) {
    case 'text':
      return renderText(node, key);

    case 'paragraph':
      return (
        <p key={key} className="my-4 leading-relaxed">
          {renderChildren(node.content)}
        </p>
      );

    case 'heading': {
      const level = Math.min(
        6,
        Math.max(1, Number(node.attrs?.level ?? 2)),
      );
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const sizes: Record<number, string> = {
        1: 'text-3xl md:text-4xl',
        2: 'text-2xl md:text-3xl',
        3: 'text-xl md:text-2xl',
        4: 'text-lg md:text-xl',
        5: 'text-base md:text-lg',
        6: 'text-base',
      };
      return (
        <Tag
          key={key}
          className={`${sizes[level]} font-bold mt-8 mb-3 text-white`}
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {renderChildren(node.content)}
        </Tag>
      );
    }

    case 'bulletList':
      return (
        <ul key={key} className="list-disc pl-6 my-4 space-y-2">
          {renderChildren(node.content)}
        </ul>
      );

    case 'orderedList': {
      const start = Number(node.attrs?.start ?? 1);
      return (
        <ol
          key={key}
          start={Number.isFinite(start) ? start : 1}
          className="list-decimal pl-6 my-4 space-y-2"
        >
          {renderChildren(node.content)}
        </ol>
      );
    }

    case 'listItem':
      return <li key={key}>{renderChildren(node.content)}</li>;

    case 'hardBreak':
      return <br key={key} />;

    case 'table':
      return (
        <div key={key} className="my-6 overflow-x-auto">
          <table
            className="w-full border-collapse text-left text-sm"
            style={{ border: '1px solid rgba(70,241,197,0.2)' }}
          >
            <tbody>{renderChildren(node.content)}</tbody>
          </table>
        </div>
      );

    case 'tableRow':
      return <tr key={key}>{renderChildren(node.content)}</tr>;

    case 'tableHeader':
      return (
        <th
          key={key}
          colSpan={Number(node.attrs?.colspan ?? 1) || 1}
          rowSpan={Number(node.attrs?.rowspan ?? 1) || 1}
          className="px-3 py-2 font-semibold text-white align-top"
          style={{
            border: '1px solid rgba(70,241,197,0.2)',
            background: 'rgba(70,241,197,0.06)',
          }}
        >
          {renderChildren(node.content)}
        </th>
      );

    case 'tableCell':
      return (
        <td
          key={key}
          colSpan={Number(node.attrs?.colspan ?? 1) || 1}
          rowSpan={Number(node.attrs?.rowspan ?? 1) || 1}
          className="px-3 py-2 align-top"
          style={{ border: '1px solid rgba(70,241,197,0.2)' }}
        >
          {renderChildren(node.content)}
        </td>
      );

    // doc + any unsupported node: render children if present, else nothing.
    case 'doc':
      return <React.Fragment key={key}>{renderChildren(node.content)}</React.Fragment>;

    default:
      return node.content ? (
        <React.Fragment key={key}>{renderChildren(node.content)}</React.Fragment>
      ) : null;
  }
}

export default function TiptapRenderer({
  content,
  className,
}: {
  content: TiptapDoc | undefined | null;
  className?: string;
}) {
  if (!content || !content.content || content.content.length === 0) {
    return null;
  }
  return (
    <div
      className={className}
      style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
    >
      {renderChildren(content.content)}
    </div>
  );
}
