import type { Metadata } from 'next';
import Link from 'next/link';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import { search, type SearchHit } from '@/lib/cms';
import { buildNoindexMetadata } from '@/lib/cms-meta';

// Search results are user-specific and noindex'd — always render fresh.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildNoindexMetadata('Search');

function hitHref(hit: SearchHit): string {
  // Page slugs are stored with a leading slash; post slugs are bare.
  return hit.kind === 'post' ? `/blog/${hit.slug}` : hit.slug;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { q: rawQ } = await searchParams;
  const q = (Array.isArray(rawQ) ? rawQ[0] : rawQ || '').trim();

  let results: SearchHit[] = [];
  let total = 0;
  if (q) {
    try {
      const data = await search(q, 30);
      results = data.items;
      total = data.total;
    } catch {
      results = [];
      total = 0;
    }
  }

  return (
    <main style={{ background: '#090e1c', minHeight: '100vh' }}>
      <AppHeader />
      <section className="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-8 lg:px-16">
        <h1
          className="mb-6 text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Search
        </h1>

        {/* GET form so the query lives in ?q= and is shareable/bookmarkable. */}
        <form action="/search" method="get" className="mb-10 flex gap-3">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search posts and pages…"
            aria-label="Search"
            autoComplete="off"
            className="flex-1 rounded-xl px-4 py-3 text-base text-white outline-none"
            style={{
              background: '#0e2e2e',
              border: '1px solid rgba(70,241,197,0.25)',
              fontFamily: 'var(--font-inter)',
            }}
          />
          <button
            type="submit"
            className="rounded-xl px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#46F1C5', color: '#0a2a23' }}
          >
            Search
          </button>
        </form>

        {q && (
          <p className="mb-6 text-sm" style={{ color: '#7A8194', fontFamily: 'var(--font-inter)' }}>
            {total > 0
              ? `${total} result${total === 1 ? '' : 's'} for “${q}”`
              : `No results for “${q}”.`}
          </p>
        )}

        <ul className="space-y-5">
          {results.map((hit) => (
            <li key={`${hit.kind}-${hit._id}`}>
              <Link href={hitHref(hit)} className="group block">
                <span
                  className="mb-1 inline-block text-xs font-semibold uppercase tracking-wide"
                  style={{ color: '#46F1C5', fontFamily: 'var(--font-geist-mono)' }}
                >
                  {hit.kind === 'post' ? hit.categoryName || 'Blog' : 'Page'}
                </span>
                <h2
                  className="text-lg font-bold text-white group-hover:underline"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {hit.title}
                </h2>
                {hit.excerpt && (
                  <p
                    className="mt-1 text-sm leading-relaxed line-clamp-2"
                    style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
                  >
                    {hit.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
