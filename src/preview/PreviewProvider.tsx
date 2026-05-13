"use client";

import * as React from "react";

export type LayoutItem = {
  instanceId: string;
  sectionKey: string;
  name?: string;
};

export type PreviewMessage =
  | {
      type: "PREVIEW_INIT";
      payload: {
        sections: Record<string, unknown>;
        visibility: Record<string, boolean>;
        selectedId?: string;
        layout?: LayoutItem[];
      };
    }
  | { type: "PREVIEW_PATCH"; payload: { id: string; data: Record<string, unknown> } }
  | { type: "PREVIEW_VISIBILITY"; payload: { id: string; visible: boolean } }
  | { type: "PREVIEW_LAYOUT"; payload: { layout: LayoutItem[] } }
  | { type: "PREVIEW_SELECT"; payload: { id: string } }
  | { type: "PREVIEW_SCROLL_TO"; payload: { id: string } };

type PreviewState = {
  active: boolean;
  data: Record<string, Record<string, unknown>>;
  visibility: Record<string, boolean>;
  selectedId: string | null;
  /** Sections published from the CMS — keyed by `instanceId` (one entry per
   * layout item) AND by `sectionKey` (first-instance wins) so subpages that
   * render hardcoded components without instance context still resolve. */
  publishedSections: Record<string, Record<string, unknown>>;
  /** instanceIds in the latest published page (visible items only). */
  publishedKeys: Set<string>;
  /** Ordered layout — drives the dynamic renderer on the home page. In preview
   * mode this is the live list from the CMS; otherwise it's the published list. */
  layout: LayoutItem[];
  /** True if a successful CMS fetch has populated publishedSections/publishedKeys. */
  hasPublishedData: boolean;
};

type PreviewContextValue = PreviewState & {
  setSelected: (id: string | null) => void;
};

const PreviewContext = React.createContext<PreviewContextValue>({
  active: false,
  data: {},
  visibility: {},
  selectedId: null,
  publishedSections: {},
  publishedKeys: new Set(),
  layout: [],
  hasPublishedData: false,
  setSelected: () => {},
});

/**
 * Carries the current section's `instanceId` down to `useSectionData` /
 * `useSectionBackground` so the same component file can render any instance
 * by reading data scoped to its own instance. When this context is unset
 * (e.g. subpages that hardcode <AppHeader />), the helpers fall back to the
 * literal sectionKey the component passes — preserving subpage behavior.
 */
const SectionInstanceContext = React.createContext<string | null>(null);
export const SectionInstanceProvider = SectionInstanceContext.Provider;
export function useSectionInstanceId(): string | null {
  return React.useContext(SectionInstanceContext);
}

function isPreviewMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("preview") === "true";
  } catch {
    return false;
  }
}

function postToParent(msg: unknown) {
  if (typeof window === "undefined" || window.parent === window) return;
  window.parent.postMessage(msg, "*");
}

export function PreviewProvider({
  children,
  publishedSections = {},
  publishedKeys = [],
  publishedLayout = [],
}: {
  children: React.ReactNode;
  publishedSections?: Record<string, Record<string, unknown>>;
  publishedKeys?: string[];
  publishedLayout?: LayoutItem[];
}) {
  // Read once on mount to avoid hydration mismatches.
  const [active, setActive] = React.useState(false);
  const [data, setData] = React.useState<Record<string, Record<string, unknown>>>({});
  const [visibility, setVisibility] = React.useState<Record<string, boolean>>({});
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  // The live, ordered layout pushed from the CMS while in preview mode.
  const [liveLayout, setLiveLayout] = React.useState<LayoutItem[]>([]);
  const publishedKeysSet = React.useMemo(() => new Set(publishedKeys), [publishedKeys]);
  const hasPublishedData = publishedKeys.length > 0;

  React.useEffect(() => {
    setActive(isPreviewMode());
  }, []);

  React.useEffect(() => {
    if (!active) return;

    const onMessage = (event: MessageEvent) => {
      const msg = event.data as PreviewMessage | undefined;
      if (!msg || typeof msg !== "object" || !msg.type) return;
      switch (msg.type) {
        case "PREVIEW_INIT": {
          const sections = msg.payload.sections as Record<string, Record<string, unknown>>;
          setData(sections);
          setVisibility(msg.payload.visibility ?? {});
          if (msg.payload.layout) setLiveLayout(msg.payload.layout);
          if (msg.payload.selectedId) setSelectedId(msg.payload.selectedId);
          break;
        }
        case "PREVIEW_LAYOUT": {
          setLiveLayout(msg.payload.layout ?? []);
          break;
        }
        case "PREVIEW_PATCH": {
          const { id, data: patch } = msg.payload;
          setData((prev) => ({ ...prev, [id]: { ...(prev[id] || {}), ...patch } }));
          break;
        }
        case "PREVIEW_VISIBILITY": {
          const { id, visible } = msg.payload;
          setVisibility((prev) => ({ ...prev, [id]: visible }));
          break;
        }
        case "PREVIEW_SELECT": {
          setSelectedId(msg.payload.id);
          break;
        }
        case "PREVIEW_SCROLL_TO": {
          const id = msg.payload.id;
          requestAnimationFrame(() => {
            const el =
              document.querySelector<HTMLElement>(`[data-preview-section="${id}"]`) ||
              document.getElementById(id);
            if (!el) {
              // eslint-disable-next-line no-console
              console.warn("[preview] PREVIEW_SCROLL_TO: no element for id", id);
              return;
            }
            try {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            } catch {
              el.scrollIntoView();
            }
          });
          break;
        }
      }
    };

    window.addEventListener("message", onMessage);

    // Announce readiness
    postToParent({ type: "PREVIEW_READY" });

    let lastHeight = 0;
    const reportHeight = () => {
      const h = Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight ?? 0
      );
      if (h !== lastHeight) {
        lastHeight = h;
        postToParent({ type: "PREVIEW_HEIGHT", payload: { height: h } });
      }
    };
    reportHeight();
    const ro = new ResizeObserver(reportHeight);
    ro.observe(document.documentElement);
    if (document.body) ro.observe(document.body);
    const retries = [120, 400, 1200, 3000].map((ms) =>
      window.setTimeout(reportHeight, ms)
    );

    return () => {
      window.removeEventListener("message", onMessage);
      ro.disconnect();
      retries.forEach(clearTimeout);
    };
  }, [active]);

  // In preview mode, the live list wins. Outside preview, use the published
  // layout from the server. The brief moment after iframe load but before
  // INIT lands also falls back to published, preventing flicker.
  const layout = active && liveLayout.length > 0 ? liveLayout : publishedLayout;

  const value = React.useMemo<PreviewContextValue>(
    () => ({
      active,
      data,
      visibility,
      selectedId,
      publishedSections,
      publishedKeys: publishedKeysSet,
      layout,
      hasPublishedData,
      setSelected: (id) => setSelectedId(id),
    }),
    [active, data, visibility, selectedId, publishedSections, publishedKeysSet, layout, hasPublishedData]
  );

  return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>;
}

/**
 * Returns section data, merging three layers in priority order:
 *   1. live preview overrides (postMessage from the CMS, only in ?preview=true)
 *   2. CMS-published values (server-fetched at request time)
 *   3. component defaults (the LOCAL_DEFAULTS in each section file)
 *
 * If a `SectionInstanceProvider` is in scope, its instanceId overrides the
 * passed sectionKey — that's how the same component file renders any specific
 * instance dynamically without prop-drilling.
 */
export function useSectionData<T extends object>(id: string, defaults: T): T {
  const { active, data, publishedSections } = React.useContext(PreviewContext);
  const instanceId = useSectionInstanceId();
  const effectiveId = instanceId ?? id;
  const published =
    (publishedSections[effectiveId] as Partial<T> | undefined) ??
    (publishedSections[id] as Partial<T> | undefined) ??
    null;
  const base: T = published ? ({ ...defaults, ...published } as T) : defaults;
  if (!active) return base;
  const override =
    (data[effectiveId] as Partial<T> | undefined) ??
    (data[id] as Partial<T> | undefined) ??
    null;
  if (!override) return base;
  return { ...base, ...override } as T;
}

/**
 * Returns true when the page is rendering inside the CMS preview iframe
 * (i.e. the URL has `?preview=true`).
 */
export function useIsPreview(): boolean {
  return React.useContext(PreviewContext).active;
}

/**
 * Ordered layout for the home page's dynamic renderer.
 */
export function useLayout(): LayoutItem[] {
  return React.useContext(PreviewContext).layout;
}

type SectionBackground = {
  kind?: "none" | "solid" | "gradient";
  color?: string;
  start?: string;
  end?: string;
  angle?: number;
};

function resolveSectionStyle(
  id: string,
  active: boolean,
  data: Record<string, Record<string, unknown>>,
  publishedSections: Record<string, Record<string, unknown>>,
  instanceId: string | null,
): SectionBackground | undefined {
  const key = instanceId ?? id;
  const liveOverride = active
    ? ((data[key] ?? data[id]) as { style?: { bg?: SectionBackground } } | undefined)
    : undefined;
  const published = (publishedSections[key] ?? publishedSections[id]) as
    | { style?: { bg?: SectionBackground } }
    | undefined;
  return liveOverride?.style?.bg ?? published?.style?.bg;
}

function useSectionBackgroundStyle(id: string): React.CSSProperties {
  const { active, data, publishedSections } = React.useContext(PreviewContext);
  const instanceId = useSectionInstanceId();
  const bg = resolveSectionStyle(id, active, data, publishedSections, instanceId);
  if (!bg || !bg.kind || bg.kind === "none") return {};
  if (bg.kind === "solid" && bg.color) {
    return { backgroundColor: bg.color, backgroundImage: "none" };
  }
  if (bg.kind === "gradient" && bg.start && bg.end) {
    return {
      backgroundImage: `linear-gradient(${bg.angle ?? 135}deg, ${bg.start}, ${bg.end})`,
    };
  }
  return {};
}

export function useSectionBackground(id: string): string | undefined {
  const { active, data, publishedSections } = React.useContext(PreviewContext);
  const instanceId = useSectionInstanceId();
  const bg = resolveSectionStyle(id, active, data, publishedSections, instanceId);
  if (!bg || !bg.kind || bg.kind === "none") return undefined;
  if (bg.kind === "solid" && bg.color) return bg.color;
  if (bg.kind === "gradient" && bg.start && bg.end) {
    return `linear-gradient(${bg.angle ?? 135}deg, ${bg.start}, ${bg.end})`;
  }
  return undefined;
}

/**
 * Returns whether a section should currently render.
 *   - In preview mode: follows live visibility toggles from the CMS.
 *   - In normal mode with CMS data: shows iff the section is in the published
 *     page (the backend only serves visible sections).
 *   - In normal mode WITHOUT CMS data (API down / never published): falls back.
 */
export function useSectionVisible(id: string, fallback = true): boolean {
  const { active, visibility, publishedKeys, hasPublishedData } =
    React.useContext(PreviewContext);
  if (active) return visibility[id] ?? fallback;
  if (hasPublishedData) return publishedKeys.has(id);
  return fallback;
}

/**
 * Wraps a section so that, in preview mode, it:
 *  - is anchored by `data-preview-section="<id>"`
 *  - shows a hover/selected outline matching the CMS selection
 *  - reports clicks back to the CMS so selecting in the canvas updates the inspector
 */
export function PreviewSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { active, selectedId, setSelected } = React.useContext(PreviewContext);
  const cmsBackgroundStyle = useSectionBackgroundStyle(id);

  const selected = active && selectedId === id;

  return (
    <div
      data-preview-section={id}
      onClick={
        active
          ? (e) => {
              e.stopPropagation();
              setSelected(id);
              postToParent({ type: "PREVIEW_SECTION_CLICKED", payload: { id } });
            }
          : undefined
      }
      style={{
        position: "relative",
        scrollMarginTop: 80,
        outline: selected ? "2px solid #04babf" : "2px solid transparent",
        outlineOffset: -2,
        transition: "outline-color .15s ease, box-shadow .15s ease",
        cursor: active ? "pointer" : undefined,
        boxShadow: selected ? "inset 0 0 0 1px rgba(4,186,191,.3)" : "none",
        ...cmsBackgroundStyle,
      }}
      onMouseEnter={(e) => {
        if (!selected)
          (e.currentTarget as HTMLDivElement).style.outline = "2px dashed rgba(4,186,191,.5)";
      }}
      onMouseLeave={(e) => {
        if (!selected) (e.currentTarget as HTMLDivElement).style.outline = "2px solid transparent";
      }}
    >
      {selected && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 1000,
            pointerEvents: "none",
            background: "#04babf",
            color: "#001819",
            fontSize: 10,
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: 6,
            letterSpacing: ".06em",
            boxShadow: "0 4px 14px -2px rgba(4,186,191,.5)",
            fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
          }}
        >
          {id.toUpperCase()}
        </div>
      )}
      {children}
    </div>
  );
}
