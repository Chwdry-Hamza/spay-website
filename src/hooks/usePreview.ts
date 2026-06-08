"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { resolveHomeContent, type HomeContent } from "@/lib/homeContent";
import { useInlineEditRuntime } from "@/components/InlineEditRuntime";

/**
 * Shared hooks for components that live OUTSIDE the homepage tree (the global
 * bottom nav + cookie banner in the root layout) but still need to be editable
 * in the CMS live preview. HomeSections already does this inline for the page
 * body; these give the same behaviour to the global chrome.
 */

function readIsPreview(): boolean {
  return (
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("preview") === "1"
  );
}

/**
 * Full editable-preview wiring for a page body component (About, Support, …):
 * holds the live `content`, listens for the CMS stream + edit-mode toggle with a
 * focus guard, and mounts the inline-edit runtime. The component just spreads
 * `content` into its markup and tags fields with `data-cms-*`. Mirrors the
 * inline behaviour HomeSections implements for the homepage.
 */
export function useEditablePreview<T>(
  initialContent: T,
  resolve: (raw: unknown) => T,
): { content: T; rootRef: RefObject<HTMLDivElement | null> } {
  const [isPreview] = useState(readIsPreview);
  const [content, setContent] = useState<T>(initialContent);
  const [editing, setEditing] = useState(false);
  const editingFieldRef = useRef(false);
  const pendingRef = useRef<T | null>(null);
  // Scope editing to the page body so shared chrome (the site footer, which is
  // homepage-owned) isn't made editable on inner pages.
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPreview) return;
    const onMessage = (e: MessageEvent) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "spay:preview-content") {
        const resolved = resolve(d.sections);
        if (editingFieldRef.current) {
          pendingRef.current = resolved; // apply once the field blurs
        } else {
          setContent(resolved);
        }
      } else if (d.type === "spay:preview-edit-mode") {
        setEditing(!!d.editing);
      }
    };
    window.addEventListener("message", onMessage);
    try {
      window.parent?.postMessage({ type: "spay:preview-ready" }, "*");
    } catch {
      /* not embedded */
    }
    return () => window.removeEventListener("message", onMessage);
    // `resolve` is a stable module import.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreview]);

  const onFieldBlur = useCallback(() => {
    if (pendingRef.current !== null) {
      setContent(pendingRef.current);
      pendingRef.current = null;
    }
  }, []);

  useInlineEditRuntime({
    enabled: isPreview && editing,
    editingFieldRef,
    onFieldBlur,
    contentKey: content,
    root: rootRef.current,
  });

  return { content, rootRef };
}

/** Whether we're in the preview iframe and whether Edit mode is on. */
export function usePreviewEditMode(): { isPreview: boolean; editing: boolean } {
  const [isPreview] = useState(readIsPreview);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!isPreview) return;
    const onMsg = (e: MessageEvent) => {
      if (e.data && typeof e.data === "object" && e.data.type === "spay:preview-edit-mode") {
        setEditing(!!e.data.editing);
      }
    };
    window.addEventListener("message", onMsg);
    // Announce readiness so the CMS (re)sends the current content + edit mode.
    try {
      window.parent?.postMessage({ type: "spay:preview-ready" }, "*");
    } catch {
      /* not embedded */
    }
    return () => window.removeEventListener("message", onMsg);
  }, [isPreview]);

  return { isPreview, editing };
}

/**
 * One slice of the homepage content (e.g. `bottomNav`), kept live in the
 * preview. `fallback` is the server-resolved value used outside preview and as
 * the initial value. Mirrors HomeSections' focus guard so an incoming echo
 * never clobbers a field the editor is currently typing in.
 */
export function usePreviewSlice<K extends keyof HomeContent>(
  key: K,
  fallback: HomeContent[K],
): HomeContent[K] {
  const [isPreview] = useState(readIsPreview);
  const [value, setValue] = useState<HomeContent[K]>(fallback);
  const pendingRef = useRef<HomeContent[K] | null>(null);

  useEffect(() => {
    if (!isPreview) return;

    const onMsg = (e: MessageEvent) => {
      if (e.data && typeof e.data === "object" && e.data.type === "spay:preview-content") {
        const next = resolveHomeContent(e.data.sections)[key];
        const active = document.activeElement as HTMLElement | null;
        if (active?.isContentEditable) {
          pendingRef.current = next; // apply once the field blurs
        } else {
          setValue(next);
        }
      }
    };
    const onFocusOut = () => {
      if (pendingRef.current !== null) {
        setValue(pendingRef.current);
        pendingRef.current = null;
      }
    };

    window.addEventListener("message", onMsg);
    document.addEventListener("focusout", onFocusOut);
    try {
      window.parent?.postMessage({ type: "spay:preview-ready" }, "*");
    } catch {
      /* not embedded */
    }
    return () => {
      window.removeEventListener("message", onMsg);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, [isPreview, key]);

  return value;
}
