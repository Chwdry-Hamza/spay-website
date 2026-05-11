"use client";

import * as React from "react";

export type PreviewMessage =
  | { type: "PREVIEW_INIT"; payload: { sections: Record<string, unknown>; visibility: Record<string, boolean>; selectedId?: string } }
  | { type: "PREVIEW_PATCH"; payload: { id: string; data: Record<string, unknown> } }
  | { type: "PREVIEW_VISIBILITY"; payload: { id: string; visible: boolean } }
  | { type: "PREVIEW_SELECT"; payload: { id: string } }
  | { type: "PREVIEW_SCROLL_TO"; payload: { id: string } };

type PreviewState = {
  active: boolean;
  data: Record<string, Record<string, unknown>>;
  visibility: Record<string, boolean>;
  selectedId: string | null;
};

type PreviewContextValue = PreviewState & {
  setSelected: (id: string | null) => void;
};

const PreviewContext = React.createContext<PreviewContextValue>({
  active: false,
  data: {},
  visibility: {},
  selectedId: null,
  setSelected: () => {},
});

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

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  // Read once on mount to avoid hydration mismatches.
  const [active, setActive] = React.useState(false);
  const [data, setData] = React.useState<Record<string, Record<string, unknown>>>({});
  const [visibility, setVisibility] = React.useState<Record<string, boolean>>({});
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

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
          if (msg.payload.selectedId) setSelectedId(msg.payload.selectedId);
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
          // Wait for layout to be stable, then scroll. Using rAF ensures any
          // pending React re-renders triggered by INIT/PATCH have committed.
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
              // Some browsers (older Safari) don't support smooth-scroll options.
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

    // Send page height so the CMS can size the iframe to the actual content,
    // letting the CMS canvas scroll naturally without a nested iframe scrollbar.
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
    // Belt-and-braces: a few delayed retries catch images & async content
    // that grow the layout after first paint.
    const retries = [120, 400, 1200, 3000].map((ms) =>
      window.setTimeout(reportHeight, ms)
    );

    return () => {
      window.removeEventListener("message", onMessage);
      ro.disconnect();
      retries.forEach(clearTimeout);
    };
  }, [active]);

  const value = React.useMemo<PreviewContextValue>(
    () => ({
      active,
      data,
      visibility,
      selectedId,
      setSelected: (id) => setSelectedId(id),
    }),
    [active, data, visibility, selectedId]
  );

  return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>;
}

/**
 * Returns section data merged with the live overrides received from the CMS via postMessage.
 * In normal (non-preview) browsing, just returns the defaults verbatim — no hot-reload behavior.
 */
export function useSectionData<T extends object>(id: string, defaults: T): T {
  const { active, data } = React.useContext(PreviewContext);
  if (!active) return defaults;
  const override = (data[id] as Partial<T> | undefined) ?? null;
  if (!override) return defaults;
  return { ...defaults, ...override } as T;
}

/**
 * Returns true when the page is rendering inside the CMS preview iframe
 * (i.e. the URL has `?preview=true`). Components like fixed-position
 * overlays should hide themselves in preview to avoid weird stacking.
 */
export function useIsPreview(): boolean {
  return React.useContext(PreviewContext).active;
}

/**
 * Returns whether a section should currently render. Defaults to `true`.
 * In preview mode, the CMS can toggle visibility live.
 */
export function useSectionVisible(id: string, fallback = true): boolean {
  const { active, visibility } = React.useContext(PreviewContext);
  if (!active) return fallback;
  return visibility[id] ?? fallback;
}

/**
 * Wraps a section so that, in preview mode, it:
 *  - is anchored by `data-preview-section="<id>"`
 *  - shows a hover/selected outline matching the CMS selection
 *  - reports clicks back to the CMS so selecting in the canvas updates the inspector
 *
 * In normal (non-preview) browsing, this is a passthrough — no styles, no listeners.
 */
export function PreviewSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { active, selectedId, setSelected } = React.useContext(PreviewContext);

  const selected = active && selectedId === id;

  // Always render the wrapper so scroll targets and ids exist outside preview
  // mode too. Interactive behavior (click handlers, outline) is gated on `active`.
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
