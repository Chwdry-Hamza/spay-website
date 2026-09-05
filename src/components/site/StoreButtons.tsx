import type { CSSProperties } from "react";
import { externalLinkProps } from "@/lib/site/externalLink";

/**
 * The App Store / Google Play button pair.
 *
 * The design uses it at two sizes — the large footer pair and the slightly
 * tighter one in the About hero — so the two live here rather than being
 * spelled out twice.
 */

export type StoreLink = { eyebrow: string; name: string; href: string };

const APPLE_PATH =
  "M16.6 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.7.7 1.1 0 1.9-1.1 2.6-2.1.8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.9-2.2-3.6zM14.6 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z";

const PLAY_PATH =
  "M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9-9.7-9-9.7zm10.2 8.4l2.7-2.9-9.3-5.2c-.3-.2-.6-.2-.9-.2l7.5 8.3zm0 2.6l-7.5 8.3c.3 0 .6-.1.9-.2l9.3-5.2-2.7-2.9zm1.1-1.3l3.1 3.3 2.6-1.5c.7-.4 1-.9 1-1.5s-.4-1.1-1-1.5l-2.6-1.5-3.1 3.3z";

type Size = "md" | "lg";

const SIZES: Record<Size, {
  glyph: number;
  button: CSSProperties;
  eyebrow: CSSProperties;
  name: CSSProperties;
}> = {
  // About hero
  md: {
    glyph: 24,
    button: { gap: "14px", padding: "16px 32px" },
    eyebrow: { fontSize: "11px" },
    name: { fontSize: "19px" },
  },
  // Footer
  lg: {
    glyph: 26,
    button: { gap: "16px", padding: "18px 40px", minWidth: "250px" },
    eyebrow: { fontSize: "12px" },
    name: { fontSize: "21px" },
  },
};

const BUTTON: CSSProperties = {
  background: "#118EA3",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  borderRadius: "999px",
  transition: "background .22s ease",
};

const EYEBROW: CSSProperties = {
  letterSpacing: "1.6px",
  textTransform: "uppercase",
  opacity: ".88",
};

const NAME: CSSProperties = { fontWeight: "600", letterSpacing: "-0.2px" };

function StoreButton({
  store,
  path,
  size,
  cmsPath,
}: {
  store: StoreLink;
  path: string;
  size: Size;
  /** Content path of this store entry, for CMS inline editing. */
  cmsPath?: string;
}) {
  const s = SIZES[size];
  return (
    <a
      className="dc-h3"
      href={store.href}
      {...externalLinkProps(store.href)}
      data-cms-href={cmsPath && `${cmsPath}.href`}
      style={{ ...BUTTON, ...s.button }}
    >
      <svg viewBox="0 0 24 24" width={s.glyph} height={s.glyph} fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
      <span style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ ...EYEBROW, ...s.eyebrow }} data-cms-field={cmsPath && `${cmsPath}.eyebrow`}>
          {store.eyebrow}
        </span>
        <span style={{ ...NAME, ...s.name }} data-cms-field={cmsPath && `${cmsPath}.name`}>
          {store.name}
        </span>
      </span>
    </a>
  );
}

export default function StorePair({
  appStore,
  playStore,
  size,
  cmsPath,
}: {
  appStore: StoreLink;
  playStore: StoreLink;
  size: Size;
  /** Content path of the object holding `appStore` / `playStore`. */
  cmsPath?: string;
}) {
  return (
    <>
      <StoreButton
        store={appStore}
        path={APPLE_PATH}
        size={size}
        cmsPath={cmsPath && `${cmsPath}.appStore`}
      />
      <StoreButton
        store={playStore}
        path={PLAY_PATH}
        size={size}
        cmsPath={cmsPath && `${cmsPath}.playStore`}
      />
    </>
  );
}
