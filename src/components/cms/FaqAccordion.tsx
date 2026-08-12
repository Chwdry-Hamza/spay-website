/**
 * Expandable Q&A list, used in two places:
 *   - the section at the foot of a post, built from the CMS `schema.faq` field
 *   - an inline `faq` content block an editor dropped into the body
 *
 * Both go through this one component so the two never drift apart visually.
 *
 * Native <details>/<summary> rather than a state-driven accordion: it works
 * with JavaScript off, is keyboard- and screen-reader-accessible for free, and
 * — the point for SEO — the answer text is in the initial HTML whether or not
 * the panel is open, so it matches the FAQPage JSON-LD the page emits.
 */
import type { CmsFaqItem } from '@/lib/cms';

export default function FaqAccordion({
  items,
  title = 'Frequently asked questions',
  /** Anchor id for the heading. Omit for inline blocks so ids stay unique. */
  headingId,
  className = 'mt-14',
}: {
  items: CmsFaqItem[];
  title?: string;
  headingId?: string;
  className?: string;
}) {
  const faq = items.filter((f) => f.q?.trim() && f.a?.trim());
  if (!faq.length) return null;

  return (
    <section className={className} style={{ fontFamily: 'var(--font-inter)' }}>
      {title && (
        <h2
          id={headingId}
          className="mb-2 text-2xl font-bold text-white md:text-3xl"
          style={{ fontFamily: 'var(--font-space-grotesk)', scrollMarginTop: '7rem' }}
        >
          {title}
        </h2>
      )}

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
        {faq.map((f, i) => (
          <details
            key={i}
            className="group"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}
          >
            <summary
              className="relative cursor-pointer list-none py-[19px] pr-11 text-[17.5px] font-semibold leading-snug text-white [&::-webkit-details-marker]:hidden"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {f.q}
              <span
                aria-hidden
                className="absolute right-1.5 top-[26px] size-[9px] rotate-45 transition-transform group-open:-rotate-[135deg]"
                style={{
                  borderRight: '2px solid #46F1C5',
                  borderBottom: '2px solid #46F1C5',
                }}
              />
            </summary>
            <p className="mb-5 text-[15.5px]" style={{ color: '#C9D3E2' }}>
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
