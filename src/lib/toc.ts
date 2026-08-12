/**
 * Heading extraction + read-time estimation for CMS post bodies.
 *
 * The table of contents and the rendered article must agree on heading ids,
 * or every TOC link is a dead anchor. Rather than slugify twice (and risk the
 * two implementations drifting), `collectHeadings` walks the Tiptap doc once
 * and returns EVERY heading in document order with its final id. The renderer
 * walks the same depth-first order and consumes that list positionally — see
 * TiptapRenderer's `Ctx`. So the invariant is: same doc → same order → same
 * ids on both sides.
 */
import type { TiptapDoc, TiptapNode } from './cms';

export type TocHeading = { id: string; text: string; level: number };

/** Flatten a node subtree to its plain text (drops all marks and structure). */
export function plainTextOf(node: TiptapNode | undefined): string {
  if (!node) return '';
  if (node.type === 'text') return node.text ?? '';
  if (!node.content) return '';
  return node.content.map(plainTextOf).join('');
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Every heading in the document, in depth-first order, with a unique id.
 * Duplicate slugs get a `-2`, `-3`, … suffix; untitled headings fall back to
 * `section-N` so the id is never empty.
 */
export function collectHeadings(doc: TiptapDoc | undefined | null): TocHeading[] {
  const out: TocHeading[] = [];
  if (!doc?.content) return out;

  const used = new Map<string, number>();

  const walk = (nodes: TiptapNode[]) => {
    for (const node of nodes) {
      if (node.type === 'heading') {
        const text = plainTextOf(node).trim();
        const level = Math.min(6, Math.max(1, Number(node.attrs?.level ?? 2)));
        const base = slugify(text) || `section-${out.length + 1}`;
        const seen = used.get(base) ?? 0;
        used.set(base, seen + 1);
        out.push({ id: seen ? `${base}-${seen + 1}` : base, text, level });
      }
      if (node.content) walk(node.content);
    }
  };

  walk(doc.content);
  return out;
}

/** Headings shown in the sidebar rail — h2 and h3 only. */
export function tocEntries(headings: TocHeading[]): TocHeading[] {
  return headings.filter((h) => h.level === 2 || h.level === 3);
}

/**
 * Minutes to read, at 200 wpm. Only used when the CMS `readTime` field is
 * unset (0), so an editor's manual override always wins.
 */
export function estimateReadTime(doc: TiptapDoc | undefined | null): number {
  if (!doc?.content) return 0;
  const words = doc.content
    .map((n) => plainTextOf(n))
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  if (!words) return 0;
  return Math.max(1, Math.round(words / 200));
}
