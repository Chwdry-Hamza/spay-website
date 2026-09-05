/**
 * Search entry point for the blog / listing pages.
 *
 * A plain GET form that submits to the SEO-safe `/search?q=…` results page
 * (which is noindex,follow and excluded from the sitemap). It's a server
 * component — no client JS needed; the browser performs the GET navigation,
 * so the query ends up in the shareable `?q=` URL.
 */
import { SITE } from '@/lib/site/palette';

export default function BlogSearchBar({ defaultValue = '' }: { defaultValue?: string }) {
  return (
    <form
      action="/search"
      method="get"
      role="search"
      data-r="search-bar"
      style={{ margin: '28px 0 40px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}
    >
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search posts and pages…"
        aria-label="Search posts and pages"
        autoComplete="off"
        style={{
          flex: '1 1 260px',
          minWidth: '0',
          borderRadius: '999px',
          padding: '16px 24px',
          fontSize: '16px',
          fontFamily: 'inherit',
          color: SITE.ink,
          background: SITE.surface,
          border: `1px solid ${SITE.line}`,
          outline: 'none',
        }}
      />
      <button
        className="dc-h3"
        type="submit"
        style={{
          flex: 'none',
          background: SITE.brand,
          color: SITE.surface,
          border: '0',
          borderRadius: '999px',
          padding: '16px 36px',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          fontFamily: 'inherit',
          cursor: 'pointer',
          transition: 'background .22s ease',
        }}
      >
        Search
      </button>
    </form>
  );
}
