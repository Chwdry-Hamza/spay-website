/**
 * Visual breadcrumb trail + BreadcrumbList JSON-LD.
 *
 * Pass the full trail including the current page (last crumb is rendered as
 * plain text, earlier crumbs as links). Styling matches the site palette:
 * muted text, mint accent on links/hover.
 */
import Link from 'next/link';
import { buildBreadcrumbList, type Crumb } from '@/lib/structured-data';

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (!crumbs.length) return null;
  const jsonLd = buildBreadcrumbList(crumbs);

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={`${c.url}-${i}`} className="flex items-center gap-2">
              {isLast ? (
                <span style={{ color: '#A6AABE' }} aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.url}
                  className="transition-colors hover:underline"
                  style={{ color: '#46F1C5' }}
                >
                  {c.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden style={{ color: '#4E5566' }}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
