/* @ds-bundle: {"format":3,"namespace":"BMWMDesignSystem_11b6a4","components":[{"name":"FeaturePhotoCard","sourcePath":"components/cards/FeaturePhotoCard.jsx"},{"name":"ModelCard","sourcePath":"components/cards/ModelCard.jsx"},{"name":"PhotoSlot","sourcePath":"components/cards/PhotoSlot.jsx"},{"name":"SpecCell","sourcePath":"components/cards/SpecCell.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BmwMLogo","sourcePath":"components/core/BmwMLogo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MStripeDivider","sourcePath":"components/core/MStripeDivider.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"CategoryTabs","sourcePath":"components/forms/CategoryTabs.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"}],"sourceHashes":{"components/cards/FeaturePhotoCard.jsx":"5c379a558202","components/cards/ModelCard.jsx":"3f193713d404","components/cards/PhotoSlot.jsx":"8cc0f2a74bda","components/cards/SpecCell.jsx":"4679e58a87be","components/core/Badge.jsx":"feb1c3b7eb9a","components/core/BmwMLogo.jsx":"73b27a4d2104","components/core/Button.jsx":"1ddd520b1f1d","components/core/IconButton.jsx":"846267a34f89","components/core/MStripeDivider.jsx":"587fee22f907","components/core/TextLink.jsx":"d47cdd8e8ae3","components/forms/CategoryTabs.jsx":"9ec7b4a689eb","components/forms/TextInput.jsx":"de71dcbddaa7","ui_kits/marketing/CtaBand.jsx":"342bc077cfef","ui_kits/marketing/Footer.jsx":"de876bba4399","ui_kits/marketing/HeroBand.jsx":"4158b50c0eca","ui_kits/marketing/MagazineBand.jsx":"852f8576834a","ui_kits/marketing/ModelsBand.jsx":"db702d5095b0","ui_kits/marketing/Overlays.jsx":"93a59c54f89c","ui_kits/marketing/SpecBand.jsx":"fe13719b25c8","ui_kits/marketing/TopNav.jsx":"a8cdcd6f0d54"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BMWMDesignSystem_11b6a4 = window.BMWMDesignSystem_11b6a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/PhotoSlot.jsx
try { (() => {
/**
 * Placeholder for full-bleed automotive photography (no licensed imagery was
 * provided with this system). Renders a sharp-cornered dark block at a chosen
 * aspect ratio with a subtle label marking where a real BMW M photo belongs.
 *
 * Pass `src` to use a real image instead — then this becomes a plain edge-to-edge
 * <img> with 0px corners and object-fit: cover.
 */
function PhotoSlot({
  src,
  alt = "",
  ratio = "16/9",
  // "16/9" | "21/9" | "16/10" | "4/5" | "1/1" | any CSS aspect-ratio
  label = "BMW M PHOTOGRAPHY",
  caption,
  rounded = false,
  style = {}
}) {
  const frame = {
    position: "relative",
    width: "100%",
    aspectRatio: ratio,
    overflow: "hidden",
    borderRadius: rounded ? "var(--radius-full, 9999px)" : "var(--radius-none, 0px)",
    background: "repeating-linear-gradient(135deg, #141414 0 2px, #0f0f0f 2px 14px)",
    ...style
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...frame
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      color: "var(--color-muted, #7e7e7e)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "44px",
      height: "4px",
      background: "var(--m-stripe)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 12px/1.3 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-label, 1.5px)",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 11px/1.4 var(--font-body, sans-serif)"
    }
  }, ratio.replace("/", ":"))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: "var(--space-lg, 24px)",
      bottom: "var(--space-lg, 24px)",
      font: "400 12px/1.4 var(--font-body, sans-serif)",
      letterSpacing: "var(--tracking-caption, 0.5px)",
      color: "var(--color-on-dark, #fff)",
      textShadow: "0 1px 8px rgba(0,0,0,0.6)"
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PhotoSlot.jsx", error: String((e && e.message) || e) }); }

// components/cards/SpecCell.jsx
try { (() => {
/**
 * Technical spec cell for model-detail pages — 0–100 time, top speed, power,
 * weight. surface-soft background, 0px radius, 24px padding. A big display-sm
 * value on top, an uppercase label below. Pass carbon for the carbon-gray
 * technical-spec treatment.
 */
function SpecCell({
  value,
  unit,
  label,
  carbon = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm, 12px)",
      padding: "var(--space-lg, 24px)",
      background: carbon ? "var(--color-carbon-gray, #2b2b2b)" : "var(--color-surface-soft, #0d0d0d)",
      backgroundImage: carbon ? "repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 5px)" : "none",
      border: "1px solid var(--color-hairline-strong, #262626)",
      borderRadius: "var(--radius-none, 0px)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 32px/1.15 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-display, -0.5px)",
      color: "var(--color-on-dark, #fff)",
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 16px/1 var(--font-body, sans-serif)",
      color: "var(--color-body, #bbb)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 14px/1.3 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-label, 1.5px)",
      textTransform: "uppercase",
      color: "var(--color-muted, #7e7e7e)"
    }
  }, label));
}
Object.assign(__ds_scope, { SpecCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SpecCell.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Small uppercase letterspaced label — category tags on cards, model badges.
 * Text-only by default (the brand voice); pass tone="m" for a tricolor accent
 * bar on the left (use only for genuine M-identity badges, never as decoration).
 */
function Badge({
  children,
  tone = "default",
  style = {}
}) {
  const isM = tone === "m";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      font: "700 14px/1.3 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-label, 1.5px)",
      textTransform: "uppercase",
      color: isM ? "var(--color-on-dark, #fff)" : "var(--color-body, #bbb)",
      ...style
    }
  }, isM && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "20px",
      height: "4px",
      background: "var(--m-stripe)",
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BMW M primary button. Flat, rectangular (0px radius), uppercase letterspaced
 * label. The rectangular silhouette IS the brand — never rounded.
 *
 * Variants:
 *  - "primary"  : transparent/canvas bg, white label, 1px white outline (default)
 *  - "outline"  : transparent bg + white outline — for use over photography
 *  - "on-light" : black fill, white label — for rare light-surface contexts
 */
function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled = false,
  type = "button",
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    height: "48px",
    padding: "0 var(--space-lg, 24px)",
    minWidth: "0",
    font: "700 14px/1 var(--font-display, sans-serif)",
    letterSpacing: "var(--tracking-label, 1.5px)",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "var(--radius-none, 0px)",
    border: "1px solid var(--color-on-dark, #fff)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background-color .18s ease, color .18s ease",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased"
  };
  const variants = {
    primary: {
      background: "transparent",
      color: "var(--color-on-dark, #fff)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-on-dark, #fff)"
    },
    "on-light": {
      background: "var(--color-canvas, #000)",
      color: "var(--color-on-dark, #fff)",
      border: "1px solid var(--color-canvas, #000)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "on-light" ? {
    background: "#1a1a1a",
    borderColor: "#1a1a1a"
  } : {
    background: "var(--color-on-dark, #fff)",
    color: "var(--color-canvas, #000)"
  } : null;
  const props = {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    },
    ...rest
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button — the only non-rectangular button shape in the system.
 * Used for carousel arrows, share, favourite, chatbot launcher. 48×48,
 * surface-card background, white icon, radius-full.
 *
 * Pass an SVG / glyph as children (e.g. a Lucide icon).
 */
function IconButton({
  children,
  label,
  onClick,
  size = 48,
  variant = "solid",
  // "solid" = surface-card fill | "ghost" = transparent + hairline
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "var(--radius-full, 9999px)",
    color: "var(--color-on-dark, #fff)",
    cursor: "pointer",
    transition: "background-color .18s ease, border-color .18s ease",
    boxSizing: "border-box",
    padding: 0
  };
  const variants = {
    solid: {
      background: hover ? "var(--color-surface-elevated, #262626)" : "var(--color-surface-card, #1a1a1a)",
      border: "none"
    },
    ghost: {
      background: hover ? "var(--color-surface-card, #1a1a1a)" : "transparent",
      border: "1px solid var(--color-hairline, #3c3c3c)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MStripeDivider.jsx
try { (() => {
/**
 * The M tricolor stripe — M Blue Light → M Blue Dark → M Red. The system's only
 * true decorative element. Use as a 4px divider on motorsport chrome, between
 * brand-identity sections, and as the logo-mark accent. NEVER a button or fill.
 *
 * orientation "horizontal" (default) | "vertical"
 */
function MStripeDivider({
  height = 4,
  width = "100%",
  orientation = "horizontal",
  style = {}
}) {
  const isH = orientation === "horizontal";
  const gradient = isH ? "var(--m-stripe)" : "linear-gradient(180deg, var(--color-m-blue-light) 0%, var(--color-m-blue-light) 33.33%, var(--color-m-blue-dark) 33.33%, var(--color-m-blue-dark) 66.66%, var(--color-m-red) 66.66%, var(--color-m-red) 100%)";
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    "aria-hidden": "true",
    style: {
      background: gradient,
      width: isH ? width : `${height}px`,
      height: isH ? `${height}px` : width,
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { MStripeDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MStripeDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/BmwMLogo.jsx
try { (() => {
/**
 * The BMW M logo-mark used in lieu of the trademarked roundel: the M tricolor
 * flag + "BMW M" wordmark. Replace with the real roundel SVG when available.
 */
function BmwMLogo({
  size = 20,
  wordmark = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      height: `${size}px`,
      width: `${size * 0.75}px`,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MStripeDivider, {
    orientation: "vertical",
    width: `${size}px`,
    height: size * 0.75
  })), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `700 ${size}px/1 var(--font-display, sans-serif)`,
      letterSpacing: "0.5px",
      color: "var(--color-on-dark, #fff)"
    }
  }, "BMW\xA0M"));
}
Object.assign(__ds_scope, { BmwMLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BmwMLogo.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline uppercase letterspaced link — "VIEW ALL MODELS →", "READ MORE →".
 * White on dark, no underline. The chevron → follows most labels.
 */
function TextLink({
  children,
  href = "#",
  onClick,
  arrow = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      font: "700 14px/1.3 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-label, 1.5px)",
      textTransform: "uppercase",
      textDecoration: "none",
      color: hover ? "var(--color-body, #bbb)" : "var(--color-on-dark, #fff)",
      transition: "color .18s ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? "translateX(4px)" : "translateX(0)",
      transition: "transform .18s ease"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeaturePhotoCard.jsx
try { (() => {
/**
 * Editorial card for 3-up grids ("MORE FROM BMW M MAGAZINE"). surface-card
 * background, 0px radius, 24px padding. 16:9 photo on top, then a category tag,
 * a title-lg headline, and a short body description.
 */
function FeaturePhotoCard({
  category,
  title,
  description,
  href = "#",
  linkLabel = "Read more",
  imageSrc,
  ratio = "16/9",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      background: "var(--color-surface-card, #1a1a1a)",
      borderRadius: "var(--radius-none, 0px)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoSlot, {
    src: imageSrc,
    ratio: ratio,
    label: category || "BMW M"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm, 12px)",
      padding: "var(--space-lg, 24px)"
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "700 24px/1.3 var(--font-display, sans-serif)",
      color: "var(--color-on-dark, #fff)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 16px/1.5 var(--font-body, sans-serif)",
      color: "var(--color-body, #bbb)"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xs, 8px)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href
  }, linkLabel))));
}
Object.assign(__ds_scope, { FeaturePhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeaturePhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ModelCard.jsx
try { (() => {
/**
 * Model card for "MORE NEW M MODELS" grids. No card surface — just a 16:10 photo
 * on black, then the model name in display-md (40/700), a short specs line, and
 * an "EXPLORE THIS MODEL →" link.
 */
function ModelCard({
  name,
  specs,
  href = "#",
  linkLabel = "Explore this model",
  imageSrc,
  ratio = "16/10",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--color-canvas, #000)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      textDecoration: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoSlot, {
    src: imageSrc,
    ratio: ratio,
    label: name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm, 12px)",
      paddingTop: "var(--space-lg, 24px)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "700 40px/1.1 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-display, -0.5px)",
      textTransform: "uppercase",
      color: "var(--color-on-dark, #fff)"
    }
  }, name), specs && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 14px/1.5 var(--font-body, sans-serif)",
      color: "var(--color-body, #bbb)"
    }
  }, specs), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xs, 8px)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href
  }, linkLabel))));
}
Object.assign(__ds_scope, { ModelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ModelCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/CategoryTabs.jsx
try { (() => {
/**
 * Category selector tabs — "ALL · MAGAZINE · MODELS · LIFESTYLE · MOTORSPORT".
 * Text-only uppercase labels. The active tab brightens from body to white and
 * gains a 2px white underline. No background fill, no rounded corners.
 *
 * tabs: string[]  |  active: string  |  onChange(tab)
 */
function CategoryTabs({
  tabs = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-xl, 40px)",
      borderBottom: "1px solid var(--color-hairline, #3c3c3c)",
      ...style
    }
  }, tabs.map(tab => {
    const isActive = tab === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(tab),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        padding: "0 0 var(--space-sm, 12px)",
        marginBottom: "-1px",
        cursor: "pointer",
        font: "700 14px/1.3 var(--font-display, sans-serif)",
        letterSpacing: "var(--tracking-label, 1.5px)",
        textTransform: "uppercase",
        color: isActive ? "var(--color-on-dark, #fff)" : "var(--color-body, #bbb)",
        transition: "color .15s ease"
      }
    }, tab, isActive && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "2px",
        background: "var(--color-on-dark, #fff)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input on dark surfaces. surface-card background, white text, 0px radius,
 * 1px hairline border, 48px tall. Focus thickens the border to white.
 */
function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  label,
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: "48px",
      padding: "0 var(--space-md, 16px)",
      background: "var(--color-surface-card, #1a1a1a)",
      color: "var(--color-on-dark, #fff)",
      font: "300 16px/1.5 var(--font-body, sans-serif)",
      border: `1px solid ${focus ? "var(--color-on-dark, #fff)" : "var(--color-hairline, #3c3c3c)"}`,
      borderRadius: "var(--radius-none, 0px)",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color .15s ease",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest));
  if (!label) return input;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "8px",
      font: "700 14px/1.3 var(--font-display, sans-serif)",
      letterSpacing: "var(--tracking-label, 1.5px)",
      textTransform: "uppercase",
      color: "var(--color-body, #bbb)"
    }
  }, label), input);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CtaBand.jsx
try { (() => {
// BMW M marketing — pre-footer "Drive an M" CTA band, full-bleed photo + centered head.
function CtaBand() {
  const {
    Button
  } = window.BMWMDesignSystem_11b6a4;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "24/9",
      minHeight: "320px",
      background: "repeating-linear-gradient(60deg, #141414 0 2px, #0d0d0d 2px 16px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-lg)",
      textAlign: "center",
      padding: "80px var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-display-md)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, "Drive an M."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-md)",
      color: "var(--color-body-strong)",
      maxWidth: "440px"
    }
  }, "Book a test drive at your nearest BMW M Centre and feel it for yourself."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Book a test drive"))));
}
window.CtaBand = CtaBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
// BMW M marketing — footer. 4-column link list, never inverts. M stripe at top.
function Footer() {
  const {
    MStripeDivider,
    BmwMLogo
  } = window.BMWMDesignSystem_11b6a4;
  const cols = [{
    h: "BMW M Models",
    links: ["M5", "M4", "M3", "XM", "All models"]
  }, {
    h: "BMW M Lifestyle",
    links: ["M Collection", "Clothing", "Accessories", "Miniatures"]
  }, {
    h: "Owners",
    links: ["My BMW", "Service", "Fastlane", "Track training"]
  }, {
    h: "Company",
    links: ["About BMW M", "Motorsport", "Careers", "Press"]
  }];
  const linkStyle = {
    font: "300 14px/1.5 var(--font-body)",
    color: "var(--color-body)",
    textDecoration: "none",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-xxl) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-grid-4",
    style: {
      gap: "var(--space-xl)",
      marginBottom: "var(--space-xxl)"
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 14px/1.3 var(--font-display)",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "var(--space-xxs)"
    }
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: linkStyle
  }, l))))), /*#__PURE__*/React.createElement(MStripeDivider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-md)",
      paddingTop: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(BmwMLogo, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      letterSpacing: "var(--tracking-caption)",
      color: "var(--color-muted)"
    }
  }, "\xA9 2026 BMW M GmbH \xB7 Legal \xB7 Privacy \xB7 Cookies \xB7 EN"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HeroBand.jsx
try { (() => {
// BMW M marketing — full-bleed hero band. Photo fills the frame; type sits over it.
function HeroBand() {
  const {
    Button,
    MStripeDivider
  } = window.BMWMDesignSystem_11b6a4;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "21/9",
      overflow: "hidden",
      background: "repeating-linear-gradient(120deg, #131313 0 2px, #0c0c0c 2px 16px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "56px",
      height: "5px",
      background: "var(--m-stripe)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-xxl)",
      bottom: "var(--space-xxl)",
      right: "var(--space-xxl)",
      maxWidth: "720px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(MStripeDivider, {
    width: 64
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-display-xl)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, "The ultimate", /*#__PURE__*/React.createElement("br", null), "driving machine."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-md)",
      color: "var(--color-body-strong)",
      maxWidth: "440px"
    }
  }, "The new BMW M5. Engineered without compromise \u2014 727 hp of M Hybrid performance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      flexWrap: "wrap",
      marginTop: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Explore the M5"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Build yours")))));
}
window.HeroBand = HeroBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HeroBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MagazineBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// BMW M marketing — "More from BMW M Magazine" with interactive category tabs.
function MagazineBand() {
  const {
    FeaturePhotoCard,
    CategoryTabs,
    TextLink
  } = window.BMWMDesignSystem_11b6a4;
  const [tab, setTab] = React.useState("All");
  const all = [{
    category: "Motorsport",
    title: "Inside the M4 GT3 garage",
    description: "How the works team preps for a 24-hour assault."
  }, {
    category: "Models",
    title: "Hybrid, the M way",
    description: "Why the M5 went electric without losing its edge."
  }, {
    category: "Lifestyle",
    title: "A weekend with the M4 CS",
    description: "Mountain passes, early starts, zero compromise."
  }, {
    category: "Magazine",
    title: "50 years of M",
    description: "Five decades from the 3.0 CSL to today."
  }, {
    category: "Motorsport",
    title: "DTM season preview",
    description: "The new grid, the rivalries, the calendar."
  }, {
    category: "Lifestyle",
    title: "M collection: track-day kit",
    description: "What to pack for your first circuit day."
  }];
  const shown = (tab === "All" ? all : all.filter(a => a.category === tab)).slice(0, 3);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)",
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 var(--space-lg)",
      font: "var(--type-display-lg)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, "More from BMW M Magazine."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(CategoryTabs, {
    tabs: ["All", "Magazine", "Models", "Lifestyle", "Motorsport"],
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-3"
  }, shown.map(a => /*#__PURE__*/React.createElement(FeaturePhotoCard, _extends({
    key: a.title
  }, a, {
    linkLabel: "Read more"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "Go to the magazine"))));
}
window.MagazineBand = MagazineBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MagazineBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ModelsBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// BMW M marketing — "More new M models" 3-up grid + section header.
function ModelsBand() {
  const {
    ModelCard,
    TextLink
  } = window.BMWMDesignSystem_11b6a4;
  const models = [{
    name: "BMW M5",
    specs: "727 hp · 0–100 in 3.5s · 305 km/h",
    ratio: "16/10"
  }, {
    name: "BMW M4 CS",
    specs: "550 hp · 0–100 in 3.4s · 302 km/h",
    ratio: "16/10"
  }, {
    name: "BMW XM",
    specs: "748 hp · 0–100 in 4.1s · 270 km/h",
    ratio: "16/10"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)",
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "var(--space-xl)",
      gap: "var(--space-lg)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-display-lg)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, "More new M models."), /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "View all models")), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-3"
  }, models.map(m => /*#__PURE__*/React.createElement(ModelCard, _extends({
    key: m.name
  }, m))))));
}
window.ModelsBand = ModelsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ModelsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Overlays.jsx
try { (() => {
// BMW M marketing — floating chatbot launcher + cookie consent + mobile menu overlay.
function Overlays({
  menuOpen,
  onCloseMenu
}) {
  const {
    Button,
    MStripeDivider,
    IconButton
  } = window.BMWMDesignSystem_11b6a4;
  const [cookie, setCookie] = React.useState(true);
  const [chatOpen, setChatOpen] = React.useState(false);
  const Close = () => /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, cookie && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-lg)",
      bottom: "var(--space-lg)",
      zIndex: 50,
      width: "320px",
      maxWidth: "calc(100vw - 32px)",
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 14px/1.3 var(--font-display)",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, "Cookies"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--color-body)"
    }
  }, "We use cookies to optimise this website and deliver BMW M content relevant to you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setCookie(false),
    style: {
      width: "100%"
    }
  }, "Accept all"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setCookie(false),
    style: {
      font: "700 14px/1.3 var(--font-display)",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "var(--color-body)",
      cursor: "pointer",
      textAlign: "center"
    }
  }, "Manage settings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "var(--space-lg)",
      bottom: "var(--space-lg)",
      zIndex: 50
    }
  }, chatOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px",
      maxWidth: "calc(100vw - 32px)",
      background: "var(--color-surface-card)",
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 18px/1.3 var(--font-display)",
      color: "#fff"
    }
  }, "BMW M Chatbot"), /*#__PURE__*/React.createElement("span", {
    onClick: () => setChatOpen(false),
    style: {
      color: "#fff",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Close, null))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--color-body)"
    }
  }, "Ask me anything about M models, configuration, or your nearest M Centre."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      width: "100%"
    }
  }, "Start chat")) : /*#__PURE__*/React.createElement(IconButton, {
    label: "Open BMW M chatbot",
    onClick: () => setChatOpen(true),
    size: 56
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  })))), menuOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--color-canvas)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(MStripeDivider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "var(--space-lg) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onCloseMenu,
    style: {
      color: "#fff",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Close, null))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      padding: "var(--space-lg) var(--space-xl)"
    }
  }, ["Models", "Topics", "Magazine", "Configurator", "Fastlane"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: onCloseMenu,
    style: {
      font: "var(--type-display-sm)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, l)))));
}
window.Overlays = Overlays;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SpecBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// BMW M marketing — technical spec band (the M5 by the numbers) over a dark strip.
function SpecBand() {
  const {
    SpecCell,
    MStripeDivider
  } = window.BMWMDesignSystem_11b6a4;
  const specs = [{
    value: "727",
    unit: "hp",
    label: "M Hybrid output"
  }, {
    value: "3.5",
    unit: "s",
    label: "0–100 km/h"
  }, {
    value: "305",
    unit: "km/h",
    label: "Top speed"
  }, {
    value: "1000",
    unit: "Nm",
    label: "Peak torque"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-soft)",
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(MStripeDivider, {
    width: 64
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "var(--space-lg) 0 var(--space-xl)",
      font: "var(--type-display-md)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, "The M5 by the numbers."), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-4",
    style: {
      gap: "1px",
      background: "var(--color-hairline-strong)"
    }
  }, specs.map(s => /*#__PURE__*/React.createElement(SpecCell, _extends({
    key: s.label
  }, s))))));
}
window.SpecBand = SpecBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SpecBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TopNav.jsx
try { (() => {
// BMW M marketing — Top navigation. Uses BmwMLogo + Lucide icons.
function TopNav({
  onMenu
}) {
  const {
    BmwMLogo
  } = window.BMWMDesignSystem_11b6a4;
  const links = ["Models", "Topics", "Magazine", "Configurator", "Fastlane"];
  const [active, setActive] = React.useState("Models");
  const navLink = label => ({
    font: "400 14px/1.4 var(--font-body)",
    letterSpacing: "0.5px",
    color: label === active ? "var(--color-on-dark)" : "var(--color-body)",
    textDecoration: "none",
    cursor: "pointer",
    paddingBottom: "4px",
    borderBottom: label === active ? "2px solid #fff" : "2px solid transparent",
    transition: "color .15s ease"
  });
  const Icon = ({
    d,
    points,
    circle
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d && /*#__PURE__*/React.createElement("path", {
    d: d
  }), circle, points);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      height: "64px",
      background: "var(--color-canvas)",
      borderBottom: "1px solid var(--color-hairline-strong)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-xl)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement(BmwMLogo, {
    size: 20
  }), /*#__PURE__*/React.createElement("nav", {
    className: "m-nav-desktop",
    style: {
      display: "flex",
      gap: "var(--space-xl)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: navLink(l),
    onClick: () => setActive(l)
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "m-nav-desktop",
    style: {
      font: "400 14px/1.4 var(--font-body)",
      color: "var(--color-body)",
      cursor: "pointer"
    }
  }, "EN"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    circle: /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }),
    points: /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    circle: /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    })
  })), /*#__PURE__*/React.createElement("span", {
    className: "m-nav-mobile",
    onClick: onMenu,
    style: {
      color: "#fff",
      cursor: "pointer",
      display: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    points: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    }))
  }))));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TopNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeaturePhotoCard = __ds_scope.FeaturePhotoCard;

__ds_ns.ModelCard = __ds_scope.ModelCard;

__ds_ns.PhotoSlot = __ds_scope.PhotoSlot;

__ds_ns.SpecCell = __ds_scope.SpecCell;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BmwMLogo = __ds_scope.BmwMLogo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MStripeDivider = __ds_scope.MStripeDivider;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

__ds_ns.TextInput = __ds_scope.TextInput;

})();
