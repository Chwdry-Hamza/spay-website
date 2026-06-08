"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { resolveHomeContent, type HomeContent } from "@/lib/homeContent";
import { useInlineEditRuntime } from "./InlineEditRuntime";
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
  // Whether we're rendered inside the CMS preview iframe (?preview=1). Constant
  // for the session, so derive it once (SSR-safe) rather than in an effect.
  const [isPreview] = useState(
    () =>
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("preview") === "1",
  );
  const [editing, setEditing] = useState(false);

  // Focus guard: while a field is being edited inline, don't let an incoming
  // content echo clobber it — hold the latest payload and flush it on blur.
  const editingFieldRef = useRef(false);
  const pendingContentRef = useRef<HomeContent | null>(null);

  useEffect(() => {
    if (!isPreview) return;

    const onMessage = (e: MessageEvent) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "spay:preview-content") {
        const resolved = resolveHomeContent(d.sections);
        if (editingFieldRef.current) {
          pendingContentRef.current = resolved; // apply once the field blurs
        } else {
          setContent(resolved);
        }
      } else if (d.type === "spay:preview-edit-mode") {
        setEditing(!!d.editing);
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
  }, [isPreview]);

  const onFieldBlur = useCallback(() => {
    if (pendingContentRef.current) {
      setContent(pendingContentRef.current);
      pendingContentRef.current = null;
    }
  }, []);

  useInlineEditRuntime({
    enabled: isPreview && editing,
    editingFieldRef,
    onFieldBlur,
    contentKey: content,
  });

  const renderedFooterLinks: FooterLink[] = [...content.footer.links, ...footerDynamicLinks];

  return (
    <main className="pb-0">
      <HomeHero content={content.hero} />
      <FeaturesSection content={content.features} />
      <Currencies content={content.currencies} />
      <PaymentSection content={content.payment} editMode={isPreview && editing} />
      <TransferSection content={content.transfer} />
      <CryptoSection content={content.crypto} />
      <FeaturesGrid content={content.featureGrid} />
      <JoinUsSection content={content.joinUs} />
      <CollaborationsSection content={content.collaborations} />
      <FooterView content={content.footer} renderedLinks={renderedFooterLinks} latestBlogs={latestBlogs} />
    </main>
  );
}
