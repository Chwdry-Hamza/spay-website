/**
 * Visual breadcrumb trail + BreadcrumbList JSON-LD.
 *
 * Rendered as a rounded "pill" bar: a home icon for the first crumb, chevron
 * separators, muted links that brighten on hover, and the current page in the
 * mint accent. Pass the full trail including the current page (last crumb is
 * the current page).
 */
import Link from 'next/link';
import { buildBreadcrumbList, type Crumb } from '@/lib/structured-data';
import { serializeJsonLd } from '@/lib/sanitize';

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 shrink-0"
      style={{ color: '#4E5566' }}
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 shrink-0"
      aria-hidden
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (!crumbs.length) return null;
  const jsonLd = buildBreadcrumbList(crumbs);

  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-inter)' }}>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      )}
      <ol
        className="inline-flex flex-wrap items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm backdrop-blur-sm"
        style={{
          background: 'rgba(14,46,46,0.45)',
          border: '1px solid rgba(70,241,197,0.16)',
        }}
      >
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={`${c.url}-${i}`} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight />}
              {isLast ? (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-medium"
                  style={{
                    color: '#46F1C5',
                    background: 'rgba(70,241,197,0.10)',
                  }}
                  aria-current="page"
                >
                  {i === 0 && <HomeIcon />}
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.url}
                  className="inline-flex items-center gap-1.5 px-1 transition-colors hover:text-white"
                  style={{ color: '#A6AABE' }}
                >
                  {i === 0 && <HomeIcon />}
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
