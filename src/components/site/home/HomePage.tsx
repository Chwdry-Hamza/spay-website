"use client";

import type { CmsPost } from "@/lib/cms";
import type { Locale } from "@/i18n/locales";
import { resolveHome, type HomeContent } from "@/lib/site/home";
import { useEditablePreview } from "@/hooks/usePreview";
import Hero from "./Hero";
import Features from "./Features";
import Wallet from "./Wallet";
import VirtualCard from "./VirtualCard";
import Plans from "./Plans";
import Send from "./Send";
import Rewards from "./Rewards";
import Personalise from "./Personalise";
import Faqs from "./Faqs";
import Blogs from "./Blogs";

/**
 * The homepage body, ported from `spay-site/SPay Homepage.dc.html`.
 *
 * Each band is a sibling `<section>` with the id the design gave it — the
 * header, the footer and app/spay-site.css all address those ids, so they are
 * part of the contract, not decoration.
 *
 * A client component so the CMS live preview can stream unsaved content in and
 * edit each field in place. The Blogs band is the exception: its cards are real
 * posts, edited as posts, so only its heading is tagged.
 */
export default function HomePage({
  initialContent,
  posts,
  locale,
  prefix = "",
}: {
  initialContent: HomeContent;
  /** Latest published posts for the Blogs band. */
  posts: CmsPost[];
  /** The reader's language, so the Blogs band dates its cards in it. */
  locale: Locale;
  /** Locale URL prefix, so the Blogs band links stay in this language. */
  prefix?: string;
}) {
  const { content, rootRef } = useEditablePreview(initialContent, resolveHome);

  return (
    // `display: contents` keeps this ref holder out of the layout.
    <div ref={rootRef} style={{ display: "contents" }}>
      <Hero content={content.hero} />
      <Features content={content.features} />
      <Wallet content={content.wallet} />
      <VirtualCard content={content.virtualCard} />
      <Plans content={content.plans} />
      <Send content={content.send} />
      <Rewards content={content.rewards} />
      <Personalise content={content.personalise} />
      <Faqs content={content.faqs} />
      <Blogs content={content.blogs} posts={posts} locale={locale} prefix={prefix} />
    </div>
  );
}
