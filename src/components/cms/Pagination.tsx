/**
 * Page-N pagination for listing routes (blog index, category landing).
 *
 * Builds ?page=N links off a base path. Page 1 links to the clean base path
 * (no ?page=1) so it matches the canonical. Purely presentational server
 * component.
 */
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { SITE } from '@/lib/site/palette';
import { EN_BLOG, type BlogStrings } from '@/i18n/blog';

function href(basePath: string, page: number): string {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

/** Compact page window: 1 … (p-1) p (p+1) … last */
function pageWindow(current: number, total: number): (number | '…')[] {
  const out: (number | '…')[] = [];
  const want = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...want].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  let prev = 0;
  for (const n of sorted) {
    if (n - prev > 1) out.push('…');
    out.push(n);
    prev = n;
  }
  return out;
}

const CELL: CSSProperties = {
  display: 'inline-flex',
  height: '44px',
  minWidth: '44px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  borderRadius: '999px',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.4px',
  transition: 'all .22s ease',
};

const IDLE: CSSProperties = {
  ...CELL,
  background: SITE.surface,
  color: SITE.brandDeep,
  border: `1px solid ${SITE.line}`,
};

const ACTIVE: CSSProperties = {
  ...CELL,
  background: SITE.brand,
  color: SITE.surface,
  border: `1px solid ${SITE.brand}`,
};

export default function Pagination({
  basePath,
  page,
  totalPages,
  strings = EN_BLOG.pagination,
}: {
  basePath: string;
  page: number;
  totalPages: number;
  /** Defaults to English so the English listings need no extra prop. */
  strings?: BlogStrings['pagination'];
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label={strings.label}
      style={{
        marginTop: '56px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      {page > 1 && (
        <Link className="dc-h10" href={href(basePath, page - 1)} style={IDLE} rel="prev">
          <span data-r="arrow" aria-hidden="true">←</span> {strings.previous}
        </Link>
      )}

      {pageWindow(page, totalPages).map((n, i) =>
        n === '…' ? (
          <span key={`gap-${i}`} style={{ padding: '0 6px', color: SITE.muted }}>
            …
          </span>
        ) : n === page ? (
          <span key={n} aria-current="page" style={ACTIVE}>
            {n}
          </span>
        ) : (
          <Link className="dc-h10" key={n} href={href(basePath, n)} style={IDLE}>
            {n}
          </Link>
        ),
      )}

      {page < totalPages && (
        <Link className="dc-h10" href={href(basePath, page + 1)} style={IDLE} rel="next">
          {strings.next} <span data-r="arrow" aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );
}
