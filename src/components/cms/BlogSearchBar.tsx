/**
 * Search entry point for the blog / listing pages.
 *
 * A plain GET form that submits to the SEO-safe `/search?q=…` results page
 * (which is noindex,follow and excluded from the sitemap). It's a server
 * component — no client JS needed; the browser performs the GET navigation,
 * so the query ends up in the shareable `?q=` URL.
 */
export default function BlogSearchBar({ defaultValue = '' }: { defaultValue?: string }) {
  return (
    <form action="/search" method="get" role="search" className="mt-8 mb-10 flex gap-3">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search posts and pages…"
        aria-label="Search posts and pages"
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
        className="rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
        style={{ background: '#04babf', color: '#0a2a23' }}
      >
        Search
      </button>
    </form>
  );
}
