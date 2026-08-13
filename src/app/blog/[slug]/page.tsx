import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
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
import {
  getPostBySlug,
  getSeoSetting,
  categoryDisplayName,
  categorySlugOf,
} from '@/lib/cms';
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

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Not found', robots: { index: false, follow: true } };
  const site = await getSeoSetting();
  return buildMetadataFromCMS({
    seo: post.seo,
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    site,
    fallbackImage: post.cover,
    fallbackImageAlt: post.coverMedia?.alt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const site = await getSeoSetting();
  const url = `/blog/${post.slug}`;
  const catName = categoryDisplayName(post);
  const catSlug = categorySlugOf(post);
  const related = await getRelatedPosts(catSlug, post.slug);

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
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];
  if (catName && catSlug) {
    crumbs.push({ name: catName, url: `/blog/category/${catSlug}` });
  }
  crumbs.push({ name: post.title, url });

  // Structured data: Article (always) + any Service/custom from `schema`.
  const article = buildArticle(post, {
    url,
    orgName: site?.organizationName || site?.siteName,
  });
  const { nodes: schemaNodes, customRaw } = buildFromSchemaField(post.schema);

  // FAQs reach a post two ways: the `schema.faq` field (rendered as the section
  // below the body) and `faq` blocks placed inline in the body. Both are visible
  // on the page, so both belong in the markup — as a single deduplicated
  // FAQPage. Any FAQPage buildFromSchemaField produced is dropped here so the
  // page never emits two.
  const sectionFaq = normalizeFaqItems(post.schema?.faq);
  const allFaq = mergeFaq(sectionFaq, collectBodyFaq(post.content));
  const faqNode = buildFaqFromItems(allFaq);
  const otherSchemaNodes = schemaNodes.filter((n) => n['@type'] !== 'FAQPage');

  return (
    <main style={{ background: '#090e1c', minHeight: '100vh' }}>
      <CodeInjection code={post.codeInjection} slots={['body']} />
      <ReadingProgress />
      <AppHeader />

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

      <div className="mx-auto w-full max-w-7xl px-4 pt-24 sm:px-8 lg:px-16">
        {/* ── Article head ─────────────────────────────────────────── */}
        <header className="relative pt-2">
          {/* Soft accent glow behind the headline, matching the blog template. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-40px] -z-0 h-[420px] w-[900px] max-w-full -translate-x-1/2"
            style={{
              background:
                'radial-gradient(closest-side, rgba(70,241,197,0.10), transparent 72%)',
            }}
          />
          <div className="relative z-10">
            <Breadcrumbs crumbs={crumbs} />

            {catName && (
              <p
                className="mb-3 mt-6 text-xs font-bold uppercase tracking-[0.16em]"
                style={{ color: '#46F1C5', fontFamily: 'var(--font-geist-mono)' }}
              >
                {catSlug ? (
                  <Link href={`/blog/category/${catSlug}`} className="hover:underline">
                    {catName}
                  </Link>
                ) : (
                  catName
                )}
              </p>
            )}

            <h1
              className="mb-4 max-w-[21ch] text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                className="mb-6 max-w-[62ch] text-lg leading-relaxed"
                style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
              >
                {post.excerpt}
              </p>
            )}

            {/* A flow block the editor set to "Under the intro" renders here
                rather than in place. See lib/post-flow. */}
            {headerFlow && (
              <div className="spay-post mb-2">
                <FlowRail items={headerFlow} />
              </div>
            )}

            <PostByline
              authorName={post.authorName}
              publishedAt={post.publishedAt}
              readTime={readTime}
              shareUrl={abs(url)}
            />

            {/* Lead image: the featured image when set, otherwise a body image
                the editor marked "full width at the top". Either way it spans
                the container and the table of contents starts below it. */}
            {hero && (
              <figure className="mb-2 mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.src}
                  alt={hero.alt}
                  {...(hero.width && hero.height
                    ? { width: hero.width, height: hero.height }
                    : {})}
                  className="aspect-[16/9] w-full rounded-[20px] object-cover"
                  style={{
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 30px 80px -40px rgba(0,0,0,0.9)',
                    background: '#0a2a23',
                  }}
                  // Above the fold — never lazy-load, it is the LCP element.
                  fetchPriority="high"
                />
                {hero.caption && (
                  <figcaption
                    className="mt-2.5 text-center text-[13px]"
                    style={{ color: '#7A8194', fontFamily: 'var(--font-inter)' }}
                  >
                    {hero.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </header>

        {/* ── Rail + body ──────────────────────────────────────────── */}
        <div className="items-start gap-14 py-9 lg:grid lg:grid-cols-[236px_minmax(0,1fr)]">
          {/* Below lg the rail is a bordered card above the article; from lg it
              becomes the bare sticky column. The card chrome has to be utility
              classes, not inline style — inline style wins over the `lg:`
              variants, so the box would never clear on desktop. */}
          {toc.length > 0 && (
            <aside className="mb-8 rounded-[14px] border border-white/[0.09] bg-[rgba(70,241,197,0.03)] p-[18px] lg:sticky lg:top-28 lg:mb-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
              <PostToc headings={toc} />
              <div className="max-lg:hidden">
                <RailCta />
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

            <PostCta />

            {post.tags && post.tags.length > 0 && (
              <div
                className="mt-10 flex flex-wrap items-center gap-2 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}
              >
                <span
                  className="text-sm"
                  style={{ color: '#7A8194', fontFamily: 'var(--font-inter)' }}
                >
                  Tags:
                </span>
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/blog/tag/${encodeURIComponent(t)}`}
                    className="rounded-[7px] px-3 py-1 text-xs transition-opacity hover:opacity-80"
                    style={{
                      background: 'rgba(70,241,197,0.10)',
                      border: '1px solid rgba(70,241,197,0.28)',
                      color: '#46F1C5',
                      fontFamily: 'var(--font-geist-mono)',
                    }}
                  >
                    #{t}
                  </Link>
                ))}
              </div>
            )}

            <RelatedPosts posts={related} categoryName={catName} />
          </article>
        </div>
      </div>

      <Footer />
      <PerformanceScripts perf={post.performance} />
      <CodeInjection code={post.codeInjection} slots={['footer']} />
    </main>
  );
}
