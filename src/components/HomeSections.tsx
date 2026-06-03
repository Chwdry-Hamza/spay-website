"use client";

import { useState, useEffect } from "react";
import { resolveHomeContent, type HomeContent } from "@/lib/homeContent";
import HomeHero from "./HomeHero";
import FeaturesSection from "./FeaturesSection";
import Currencies from "./currencies";
import PaymentSection from "./PaymentSection";
import TransferSection from "./TransferSection";
import CryptoSection from "./CryptoSection";
import FeaturesGrid from "./FeatureGrid";
import JoinUsSection from "./JoinUsSection";
import CollaborationsSection from "./CollaborationsSection";
import FooterView, { type FooterLink } from "./FooterView";
import type { FooterBlogLink } from "./FooterBlogsDropdown";

/**
 * Renders the full landing page from `content` state.
 *
 * Normally `content` is just the server-resolved snapshot (static). When the
 * page is loaded inside the CMS live-preview iframe (`?preview=1`), it listens
 * for `postMessage` updates from the CMS and re-renders in real time — so an
 * editor sees unsaved changes immediately without publishing.
 */
export default function HomeSections({
  initialContent,
  footerDynamicLinks,
  latestBlogs,
}: {
  initialContent: HomeContent;
  footerDynamicLinks: FooterLink[];
  latestBlogs: FooterBlogLink[];
}) {
  const [content, setContent] = useState<HomeContent>(initialContent);

  useEffect(() => {
    const isPreview = new URLSearchParams(window.location.search).get("preview") === "1";
    if (!isPreview) return;

    const onMessage = (e: MessageEvent) => {
      const d = e.data;
      if (d && typeof d === "object" && d.type === "spay:preview-content") {
        setContent(resolveHomeContent(d.sections));
      }
    };
    window.addEventListener("message", onMessage);

    // Let the CMS know we're mounted and ready to receive content.
    try {
      window.parent?.postMessage({ type: "spay:preview-ready" }, "*");
    } catch {
      /* not embedded */
    }
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const renderedFooterLinks: FooterLink[] = [...content.footer.links, ...footerDynamicLinks];

  return (
    <main className="pb-0">
      <HomeHero content={content.hero} />
      <FeaturesSection content={content.features} />
      <Currencies content={content.currencies} />
      <PaymentSection content={content.payment} />
      <TransferSection content={content.transfer} />
      <CryptoSection content={content.crypto} />
      <FeaturesGrid content={content.featureGrid} />
      <JoinUsSection content={content.joinUs} />
      <CollaborationsSection content={content.collaborations} />
      <FooterView content={content.footer} renderedLinks={renderedFooterLinks} latestBlogs={latestBlogs} />
    </main>
  );
}
