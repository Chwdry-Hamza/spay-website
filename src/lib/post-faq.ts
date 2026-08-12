/**
 * Collects the Q&A pairs a post publishes, from both places they can come from:
 *
 *   - the CMS `schema.faq` field, which renders as the section at the foot of
 *     the post
 *   - `faq` content blocks an editor dropped inline in the body
 *
 * The page emits ONE FAQPage node built from the combined list. Google requires
 * the marked-up answers to be visible on the page, and both sources are — but a
 * question repeated in both would otherwise be marked up twice, so the list is
 * deduplicated on the question text.
 */
import type { CmsFaqItem, TiptapDoc, TiptapNode } from './cms';

/** Every valid Q&A pair inside `faq` blocks in the body, in document order. */
export function collectBodyFaq(doc: TiptapDoc | undefined | null): CmsFaqItem[] {
  const out: CmsFaqItem[] = [];
  if (!doc?.content) return out;

  const walk = (nodes: TiptapNode[]) => {
    for (const node of nodes) {
      if (node.type === 'spayBlock' && node.attrs?.kind === 'faq') {
        const data = node.attrs?.data as { items?: unknown } | undefined;
        const rows = Array.isArray(data?.items) ? data.items : [];
        for (const row of rows) {
          const r = (row && typeof row === 'object' ? row : {}) as Record<string, unknown>;
          const q = typeof r.question === 'string' ? r.question.trim() : '';
          const a = typeof r.answer === 'string' ? r.answer.trim() : '';
          if (q && a) out.push({ q, a });
        }
      }
      if (node.content) walk(node.content);
    }
  };

  walk(doc.content);
  return out;
}

/** Valid pairs from the CMS `schema.faq` field. */
export function normalizeFaqItems(items: CmsFaqItem[] | undefined): CmsFaqItem[] {
  return (items ?? [])
    .map((f) => ({ q: (f.q ?? '').trim(), a: (f.a ?? '').trim() }))
    .filter((f) => f.q && f.a);
}

/** Merge both sources, keeping the first occurrence of each question. */
export function mergeFaq(...lists: CmsFaqItem[][]): CmsFaqItem[] {
  const seen = new Set<string>();
  const out: CmsFaqItem[] = [];
  for (const list of lists) {
    for (const item of list) {
      const key = item.q.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}
