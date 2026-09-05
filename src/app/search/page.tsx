import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/site/SiteShell';
import { PageHero, PageBody } from '@/components/site/PageBands';
import BlogSearchBar from '@/components/cms/BlogSearchBar';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { search, getCrawlSetting, type SearchHit } from '@/lib/cms';
import { getSiteChrome } from '@/lib/site/chrome';
import { SITE } from '@/lib/site/palette';

// Search results are user-specific — always render fresh.
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const crawl = await getCrawlSetting();
  // Respect the "Noindex search pages" crawl toggle (defaults to noindex),
  // mirroring how the tag page reads `noindexTags`. `follow` stays on so links
  // are still crawled; the title bypasses the site template to read "Search".
  const noindex = crawl?.noindexSearch !== false;
  return {
    title: { absolute: 'Search' },
    robots: { index: !noindex, follow: true },
  };
}

function hitHref(hit: SearchHit): string {
  // Page slugs are stored with a leading slash; post slugs are bare.
  return hit.kind === 'post' ? `/blog/${hit.slug}/` : hit.slug;
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

  const chrome = await getSiteChrome();

  return (
    <SiteShell chrome={chrome} active="/search/" footerMarginTop="0" footerWatermarkLeft="48px">
      <PageHero
        title="Search"
        intro={
          q
            ? total > 0
              ? `${total} result${total === 1 ? '' : 's'} for “${q}”`
              : `No results for “${q}”.`
            : undefined
        }
      >
        <BlogSearchBar defaultValue={q} />
      </PageHero>

      <PageBody>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {results.map((hit) => (
            <li
              key={`${hit.kind}-${hit._id}`}
              data-reveal="up"
              style={{ borderTop: `1px solid ${SITE.line}` }}
            >
              <Link
                href={hitHref(hit)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '28px 0',
                  color: 'inherit',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: SITE.brandMuted,
                  }}
                >
                  {hit.kind === 'post' ? hit.categoryName || 'Blog' : 'Page'}
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontSize: '24px',
                    lineHeight: 1.25,
                    fontWeight: 700,
                    letterSpacing: '-0.5px',
                    color: SITE.brand,
                  }}
                >
                  {hit.title}
                </h2>
                {hit.excerpt && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: '17px',
                      lineHeight: 1.7,
                      color: SITE.body,
                      textWrap: 'pretty',
                    }}
                  >
                    {hit.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </PageBody>

      <PerformanceScripts perf={undefined} />
    </SiteShell>
  );
}
