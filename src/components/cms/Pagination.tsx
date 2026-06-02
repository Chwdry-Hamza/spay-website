/**
 * Page-N pagination for listing routes (blog index, category landing).
 *
 * Builds ?page=N links off a base path. Page 1 links to the clean base path
 * (no ?page=1) so it matches the canonical. Purely presentational server
 * component.
 */
import Link from 'next/link';

function href(basePath: string, page: number): string {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

/** Compact page window: 1 … (p-1) p (p+1) … last */
function pageWindow(current: number, total: number): (number | '…')[] {
  const out: (number | '…')[] = [];
  const add = (n: number) => out.push(n);
  const want = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...want].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  let prev = 0;
  for (const n of sorted) {
    if (n - prev > 1) out.push('…');
    add(n);
    prev = n;
  }
  return out;
}

export default function Pagination({
  basePath,
  page,
  totalPages,
}: {
  basePath: string;
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;
  const window = pageWindow(page, totalPages);

  const base =
    'inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm transition-colors';
  const idle = { background: '#0e2e2e', color: '#A6AABE', border: '1px solid rgba(70,241,197,0.18)' };
  const active = { background: '#46F1C5', color: '#0a2a23', border: '1px solid #46F1C5' };

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {page > 1 && (
        <Link href={href(basePath, page - 1)} className={base} style={idle} rel="prev">
          ← Prev
        </Link>
      )}

      {window.map((n, i) =>
        n === '…' ? (
          <span key={`gap-${i}`} className="px-2" style={{ color: '#4E5566' }}>
            …
          </span>
        ) : n === page ? (
          <span key={n} aria-current="page" className={base} style={active}>
            {n}
          </span>
        ) : (
          <Link key={n} href={href(basePath, n)} className={base} style={idle}>
            {n}
          </Link>
        ),
      )}

      {page < totalPages && (
        <Link href={href(basePath, page + 1)} className={base} style={idle} rel="next">
          Next →
        </Link>
      )}
    </nav>
  );
}
