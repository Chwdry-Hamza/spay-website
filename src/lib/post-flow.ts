/**
 * Finds a `flow` block the editor marked to show under the post intro.
 *
 * The block still lives wherever it was dropped in the body — only its
 * rendering moves, up between the excerpt and the byline (the placement the
 * blog design calls for). `PostBlocks` skips header-placed rails inline so the
 * same rail never draws twice.
 *
 * Only the first qualifying rail takes the slot — two stacked above the byline
 * would be meaningless. Any further header-placed rails fall back to rendering
 * in place, so marking two of them never makes one silently disappear.
 * TiptapRenderer applies `claimsHeaderSlot` in the same document order to skip
 * exactly the one drawn up top.
 */
import type { TiptapDoc, TiptapNode } from './cms';

export type FlowStage = Record<string, string>;

function readStages(node: TiptapNode): FlowStage[] {
  const data = node.attrs?.data as { items?: unknown } | undefined;
  const rows = Array.isArray(data?.items) ? data.items : [];
  return rows.map((row) => {
    const r = (row && typeof row === 'object' ? row : {}) as Record<string, unknown>;
    const out: FlowStage = {};
    for (const [k, v] of Object.entries(r)) out[k] = typeof v === 'string' ? v.trim() : '';
    return out;
  });
}

/**
 * Whether this node is a flow rail eligible for the header slot. Both the page
 * and the renderer test the same thing, so the block skipped inline is exactly
 * the block drawn above the byline. The two-stage floor matches FlowRail's own
 * — a rail that would render nothing must not claim the slot.
 */
export function claimsHeaderSlot(node: TiptapNode): boolean {
  if (node.type !== 'spayBlock' || node.attrs?.kind !== 'flow') return false;
  const fields = (node.attrs?.data as { fields?: { placement?: string } } | undefined)?.fields;
  if (fields?.placement !== 'header') return false;
  return readStages(node).filter((r) => r.label).length >= 2;
}

export function findHeaderFlow(doc: TiptapDoc | undefined | null): FlowStage[] | null {
  if (!doc?.content) return null;

  const walk = (nodes: TiptapNode[]): FlowStage[] | null => {
    for (const node of nodes) {
      if (claimsHeaderSlot(node)) return readStages(node).filter((r) => r.label);
      if (node.content) {
        const found = walk(node.content);
        if (found) return found;
      }
    }
    return null;
  };

  return walk(doc.content);
}
