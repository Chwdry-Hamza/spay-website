import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import TiptapRenderer from '@/components/cms/TiptapRenderer';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import CodeInjection from '@/components/cms/CodeInjection';
import ReadingProgress from '@/components/cms/ReadingProgress';
import PostToc from '@/components/cms/PostToc';
import PostByline from '@/components/cms/PostByline';
import FaqAccordion from '@/components/cms/FaqAccordion';
import RelatedPosts, { getRelatedPosts } from '@/components/cms/RelatedPosts';
import { PostCta, RailCta } from '@/components/cms/PostCta';
import { getPostBySlug, getSeoSetting, categoryDisplayName, categorySlugOf, structuredDataOf } from '@/lib/cms';
import { buildMetadataFromCMS } from '@/lib/cms-meta';
import {
  abs,
  buildArticle,
  buildFaqFromItems,
  buildFromSchemaField,
  type Crumb,
} from '@/lib/structured-data';
import { serializeJsonLd } from '@/lib/sanitize';
import { collectHeadings, estimateReadTime, tocEntries } from '@/lib/toc';
import { collectBodyFaq, mergeFaq, normalizeFaqItems } from '@/lib/post-faq';
import { findHeaderFlow } from '@/lib/post-flow';
import { findHeroImage } from '@/lib/post-hero';
import { FlowRail } from '@/components/cms/PostBlocks';
import { getLocaleChrome, localePrefix, dateLocaleFor } from '@/lib/site/localeChrome';
import { blogStrings } from '@/i18n/blog';
import type { Locale } from '@/i18n/locales';
import { SITE } from '@/lib/site/palette';

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

/**
 * Metadata for a post in one language.
 *
 * `alternates` comes from the CMS and lists only the languages the post is
 * genuinely published in, so hreflang never points at a page that is really the
 * English one.
 *
 * When this locale IS a fallback — no translation ready yet, so the English
 * article is what renders here — the canonical points at the English URL rather
 * than at this one. That is the honest description of the page: it is the same
 * article, at a second address.
 *
 * It used to be marked `noindex` instead. Canonical is the better tool for the
 * same job: noindex tells Google to forget the URL, so when the translation
 * lands minutes later the page has to be rediscovered, whereas a canonical
 * consolidates the two and simply stops pointing elsewhere once this language
 * has its own version. Nothing here is ever hidden from search.
 */
export async function buildPostMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const post = await getPostBySlug(slug, locale === 'en' ? undefined : locale);
  if (!post) return { title: 'Not found', robots: { index: false, follow: true } };

  const site = await getSeoSetting();
  const prefix = localePrefix(locale);
  const path = `${prefix}/blog/${post.slug}`;

  const base = buildMetadataFromCMS({
    seo: post.seo,
    title: post.title,
    description: post.excerpt,
    path,
    site,
    fallbackImage: post.cover,
    fallbackImageAlt: post.coverMedia?.alt,
  });

  const published = new Set<Locale>(['en', ...((post.alternates ?? []) as Locale[])]);
  const languages: Record<string, string> = {};
  for (const code of published) {
    languages[code] = abs(`${localePrefix(code)}/blog/${post.slug}/`);
  }
  languages['x-default'] = abs(`/blog/${post.slug}/`);

  const servedAsFallback = locale !== 'en' && post.translated === false;

  return {
    ...base,
    alternates: {
      ...base.alternates,
      canonical: abs(servedAsFallback ? `/blog/${post.slug}/` : `${path}/`),
      languages,
    },
  };
}

/**
 * A blog post, in one language.
 *
 * Every locale route renders this; only `locale` differs. The post body arrives
 * already translated from the CMS (or in English, when no translation is ready),
 * and everything around it comes from src/i18n/blog.
 */
export default async function BlogPostView({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const post = await getPostBySlug(slug, locale === 'en' ? undefined : locale);
  if (!post) notFound();

  const [site, chrome] = await Promise.all([getSeoSetting(), getLocaleChrome(locale)]);
  const t = blogStrings(locale);
  const prefix = localePrefix(locale);
  const url = `${prefix}/blog/${post.slug}`;

  // True when this locale is showing English because no translation is ready.
  // The reader is told once, quietly, rather than left to wonder.
  const servedAsFallback = locale !== 'en' && post.translated === false;
  const catName = categoryDisplayName(post);
  const catSlug = categorySlugOf(post);
  const related = await getRelatedPosts(catSlug, post.slug, locale);

  // Heading ids are computed once and handed to BOTH the TOC and the renderer
  // so every rail link resolves to a real anchor. See lib/toc.
  const headings = collectHeadings(post.content);
  const toc = tocEntries(headings);
  const readTime = post.readTime || estimateReadTime(post.content);
  const headerFlow = findHeaderFlow(post.content);

  // The featured image owns the lead slot; a body image marked "full width at
  // the top" fills it only when there is no featured image. `liftHeroImage`
  // tells the renderer whether that body image was consumed here.
  const bodyHero = post.cover ? null : findHeroImage(post.content);
  const hero = post.cover
    ? {
        src: post.cover,
        alt: post.coverMedia?.alt || post.title,
        caption: post.coverMedia?.alt ?? '',
        width: undefined as number | undefined,
        height: undefined as number | undefined,
      }
    : bodyHero;

  // Breadcrumbs: Home / Blog / [Category] / Title
  const crumbs: Crumb[] = [
    { name: t.index.home, url: `${prefix}/` },
    { name: t.index.blog, url: `${prefix}/blog` },
  ];
  if (catName && catSlug) {
    crumbs.push({ name: catName, url: `${prefix}/blog/category/${catSlug}` });
  }
  crumbs.push({ name: post.title, url });

  // Structured data: Article (always) + any Service/custom from `schema`.
  const article = buildArticle(post, {
    url,
    orgName: site?.organizationName || site?.siteName,
  });
  const { nodes: schemaNodes, customRaw } = buildFromSchemaField(structuredDataOf(post));

  // FAQs reach a post two ways: the `schema.faq` field (rendered as the section
  // below the body) and `faq` blocks placed inline in the body. Both are visible
  // on the page, so both belong in the markup — as a single deduplicated
  // FAQPage. Any FAQPage buildFromSchemaField produced is dropped here so the
  // page never emits two.
  const sectionFaq = normalizeFaqItems(structuredDataOf(post)?.faq);
  const allFaq = mergeFaq(sectionFaq, collectBodyFaq(post.content));
  const faqNode = buildFaqFromItems(allFaq);
  const otherSchemaNodes = schemaNodes.filter((n) => n['@type'] !== 'FAQPage');

  return (
    <SiteShell chrome={chrome} active={`${prefix}/blog/`} footerMarginTop="0" footerWatermarkLeft="48px">
      <CodeInjection code={post.codeInjection} slots={['body']} />
      <ReadingProgress />

      <JsonLd data={article} />
      {otherSchemaNodes.map((node, i) => (
        <JsonLd key={i} data={node} />
      ))}
      {faqNode && <JsonLd data={faqNode} />}
      {customRaw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(customRaw) }}
        />
      )}

      {/* ── Article head, on the design's mint band ─────────────────── */}
      <section id="top" style={{ background: SITE.band, overflow: 'clip' }}>
        <header
          data-r="post-head"
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '72px 72px 88px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Breadcrumbs crumbs={crumbs} />

          {catName && (
            <p
              data-reveal="left"
              style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2.4px',
                textTransform: 'uppercase',
                color: SITE.brandMuted,
              }}
            >
              {catSlug ? (
                <Link href={`${prefix}/blog/category/${catSlug}/`} style={{ color: 'inherit' }}>
                  {catName}
                </Link>
              ) : (
                catName
              )}
            </p>
          )}

          <h1
            data-reveal="left"
            style={{
              margin: 0,
              maxWidth: '21ch',
              fontSize: 'clamp(34px, 4.4vw, 64px)',
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
              // Solid black, on request — the post title reads heavier than the
              // deep teal the other page heroes use.
              color: '#000000',
              textWrap: 'balance',
            }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              data-reveal="left"
              style={{
                margin: 0,
                maxWidth: '62ch',
                fontSize: '19px',
                lineHeight: 1.75,
                color: '#12464f',
                textWrap: 'pretty',
              }}
            >
              {post.excerpt}
            </p>
          )}

          {/* A flow block the editor set to "Under the intro" renders here
              rather than in place. See lib/post-flow. */}
          {headerFlow && (
            <div className="spay-post">
              <FlowRail items={headerFlow} />
            </div>
          )}

          <PostByline
            authorName={post.authorName}
            publishedAt={post.publishedAt}
            readTime={readTime}
            shareUrl={abs(url)}
            title={post.title}
            strings={t.post}
            dateLocale={dateLocaleFor(locale)}
          />

          {servedAsFallback && (
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                lineHeight: 1.6,
                color: SITE.muted,
              }}
            >
              {t.post.partialNotice}
            </p>
          )}

          {/* Lead image: the featured image when set, otherwise a body image
              the editor marked "full width at the top". Either way it spans
              the container and the table of contents starts below it. */}
          {hero && (
            <figure data-reveal="up" style={{ margin: '12px 0 0' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.src}
                alt={hero.alt}
                {...(hero.width && hero.height
                  ? { width: hero.width, height: hero.height }
                  : {})}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '20px',
                  background: SITE.surfaceInset,
                  boxShadow: '0 26px 60px rgba(11,60,68,0.22)',
                }}
                // Above the fold — never lazy-load, it is the LCP element.
                fetchPriority="high"
              />
              {hero.caption && (
                <figcaption
                  style={{
                    marginTop: '12px',
                    textAlign: 'center',
                    fontSize: '13px',
                    color: SITE.brandMuted,
                  }}
                >
                  {hero.caption}
                </figcaption>
              )}
            </figure>
          )}
        </header>
      </section>

      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 72px',
          background: SITE.surface,
        }}
      >
        {/* ── Rail + body ──────────────────────────────────────────── */}
        {/* The two-column grid is applied only when there IS a rail: a post
            with no headings renders no <aside>, and an unconditional grid
            would drop the article into the 236px rail column. */}
        <div
          className={
            toc.length > 0
              ? 'items-start gap-14 py-16 lg:grid lg:grid-cols-[236px_minmax(0,1fr)]'
              : 'py-16'
          }
        >
          {/* Below lg the rail is a bordered card above the article; from lg it
              becomes the bare sticky column. The card chrome has to be utility
              classes, not inline style — inline style wins over the `lg:`
              variants, so the box would never clear on desktop. */}
          {toc.length > 0 && (
            <aside
              data-r="post-rail"
              className="mb-8 rounded-[14px] border border-[#e3e8ec] bg-[#f3fbfa] p-[18px] lg:sticky lg:top-32 lg:mb-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
            >
              <PostToc headings={toc} strings={t.post} />
              <div className="max-lg:hidden">
                <RailCta strings={t.cta} />
              </div>
            </aside>
          )}

          {/* No max-width: the body runs to the same right edge as the header
              and the hero image. With a rail the grid column bounds it; without
              one it fills the container. */}
          <article>
            <TiptapRenderer
              content={post.content}
              className="text-base md:text-lg"
              headingIds={headings.map((h) => h.id)}
              liftHeroImage={!!bodyHero}
            />

            {/* Only the `schema.faq` field renders here — inline `faq` blocks
                have already rendered in place inside the body above. */}
            <FaqAccordion items={sectionFaq} headingId="faq" />

            <PostCta strings={t.cta} />

            {post.tags && post.tags.length > 0 && (
              <div
                className="mt-12 flex flex-wrap items-center gap-2.5 pt-7"
                style={{ borderTop: `1px solid ${SITE.line}` }}
              >
                <span style={{ fontSize: '14px', color: SITE.muted }}>{t.post.tagsLabel}</span>
                {post.tags.map((tag) => (
                  <Link
                    className="dc-h10"
                    key={tag}
                    href={`${prefix}/blog/tag/${encodeURIComponent(tag)}/`}
                    style={{
                      background: SITE.surface,
                      border: `1px solid ${SITE.line}`,
                      borderRadius: '999px',
                      padding: '8px 16px',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.6px',
                      color: SITE.brandDeep,
                      transition: 'all .22s ease',
                    }}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            <RelatedPosts
              posts={related}
              categoryName={catName}
              strings={t.post}
              locale={locale}
              prefix={prefix}
            />
          </article>
        </div>
      </div>

      <PerformanceScripts perf={post.performance} />
      <CodeInjection code={post.codeInjection} slots={['footer']} />
    </SiteShell>
  );
}
