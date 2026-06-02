'use client';

import React from 'react';
import Link from 'next/link';

export type FooterBlogLink = { title: string; slug: string };

/**
 * Footer "Blogs" item — a click-to-open dropdown listing the latest posts,
 * with a "View all blogs" link to /blog. Opens downward and closes on
 * outside-click. Styled to match the footer.
 */
export default function FooterBlogsDropdown({
  posts,
  textClassName = 'text-sm',
}: {
  posts: FooterBlogLink[];
  textClassName?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`inline-flex items-center gap-1 transition-colors hover:text-white ${textClassName}`}
        style={{ color: '#A6AABE' }}
      >
        Blogs
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl p-2 text-left"
          style={{
            background: '#0e2e2e',
            border: '1px solid rgba(70,241,197,0.25)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.55)',
          }}
        >
          <p
            className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: '#7A8194', fontFamily: 'var(--font-geist-mono)' }}
          >
            Latest blogs
          </p>

          {posts.length === 0 ? (
            <p className="px-3 py-2 text-sm" style={{ color: '#7A8194' }}>
              No blogs yet.
            </p>
          ) : (
            posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="block truncate rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/[0.05] hover:text-white"
                style={{ color: '#A6AABE' }}
              >
                {p.title}
              </Link>
            ))
          )}

          <div className="my-1 h-px" style={{ background: 'rgba(70,241,197,0.15)' }} />
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/[0.05]"
            style={{ color: '#46F1C5' }}
          >
            View all blogs →
          </Link>
        </div>
      )}
    </div>
  );
}
