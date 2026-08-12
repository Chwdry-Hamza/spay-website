/**
 * Finds a body image the editor marked "Full width at the top".
 *
 * Such an image is drawn in the hero slot — full container width, above the
 * table-of-contents grid — rather than inside the narrow article column. The
 * node stays where it was dropped in the document; only its rendering moves,
 * and TiptapRenderer skips the one that was lifted so it never appears twice.
 *
 * The post's own featured image always wins the slot when it is set; this is
 * the fallback for posts that carry their lead image in the body instead.
 * Only the first qualifying image is used — a second one keeps rendering in
 * place rather than disappearing.
 */
import type { TiptapDoc, TiptapNode } from './cms';

export type HeroImage = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function positive(v: unknown): number | undefined {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

/** True for an image node asking to be drawn full width at the top. */
export function claimsHeroSlot(node: TiptapNode): boolean {
  return (
    node.type === 'image' &&
    node.attrs?.placement === 'full' &&
    str(node.attrs?.src) !== ''
  );
}

export function findHeroImage(doc: TiptapDoc | undefined | null): HeroImage | null {
  if (!doc?.content) return null;

  const walk = (nodes: TiptapNode[]): HeroImage | null => {
    for (const node of nodes) {
      if (claimsHeroSlot(node)) {
        return {
          src: str(node.attrs?.src),
          alt: str(node.attrs?.alt),
          caption: str(node.attrs?.caption),
          width: positive(node.attrs?.width),
          height: positive(node.attrs?.height),
        };
      }
      if (node.content) {
        const found = walk(node.content);
        if (found) return found;
      }
    }
    return null;
  };

  return walk(doc.content);
}
