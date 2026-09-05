'use client';

/**
 * Sticky "On this page" rail. Headings come from the server (lib/toc's
 * `collectHeadings`), so the list renders in the initial HTML — the client
 * only adds the active-section highlight.
 *
 * Active tracking uses an IntersectionObserver band near the top of the
 * viewport (`-112px` top / `-70%` bottom): a heading is "current" from the
 * moment it clears the fixed header until the next one does. Scroll-position
 * math would need a listener on every frame for the same result.
 *
 * The top offset must stay in px — rootMargin rejects any other length unit,
 * `rem` included, and throws on construction. It mirrors the `scroll-mt-28` /
 * `scroll-margin-top: 7rem` used for the headings themselves (7rem = 112px).
 */
import { useEffect, useState } from 'react';
import type { TocHeading } from '@/lib/toc';
import type { BlogStrings } from '@/i18n/blog';

export default function PostToc({
  headings,
  strings,
}: {
  headings: TocHeading[];
  strings: BlogStrings['post'];
}) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!headings.length) return;

    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label={strings.toc} style={{ fontFamily: 'var(--font-inter)' }}>
      <p
        className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.16em]"
        style={{ color: '#8a949d' }}
      >
        {strings.toc}
      </p>
      <ul
        className="m-0 list-none p-0 ps-3.5"
        style={{ borderInlineStart: '1px solid rgba(255,255,255,0.09)' }}
      >
        {headings.map((h) => {
          const isActive = h.id === activeId;
          return (
            <li key={h.id} className="mb-0.5">
              <a
                href={`#${h.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="-ms-[15px] block py-1.5 ps-3.5 text-[13.5px] leading-snug transition-colors hover:text-[#0b1620]"
                style={{
                  color: isActive ? '#118EA3' : '#4a5560',
                  fontWeight: isActive ? 600 : 400,
                  // The active marker sits on the spine — the side the
                  // entries start from, which is the right in an RTL article.
                  borderInlineStart: `2px solid ${isActive ? '#118EA3' : 'transparent'}`,
                  // h3 entries indent under their parent h2.
                  paddingInlineStart: h.level === 3 ? '1.75rem' : undefined,
                }}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
