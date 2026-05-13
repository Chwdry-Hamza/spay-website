"use client";

import { useSectionData, useSectionBackground } from "@/preview/PreviewProvider";
import { pickTextColors } from "@/preview/useSectionTextColor";

type TitlePart = { text: string; color: string };
type Layout = "text-only" | "image-left" | "image-right";
type CustomSectionData = {
  layout: Layout;
  eyebrow: string;
  titleParts: TitlePart[];
  subtitle: string;
  imageUrl: string;
  ctaLabel: string;
  ctaUrl: string;
};

const CUSTOM_DEFAULTS: CustomSectionData = {
  layout: "text-only",
  eyebrow: "NEW SECTION",
  titleParts: [
    { text: "YOUR ", color: "#ffffff" },
    { text: "CUSTOM", color: "#46F1C5" },
    { text: " SECTION", color: "#ffffff" },
  ],
  subtitle:
    "Describe what this section is about. Edit copy, image and call-to-action from the inspector on the right.",
  imageUrl: "",
  ctaLabel: "",
  ctaUrl: "",
};

export default function CustomSection() {
  // useSectionData reads the active instanceId from SectionInstanceProvider
  // (set in DynamicPage), falling back to "customSection" for legacy callers.
  const data = useSectionData<CustomSectionData>("customSection", CUSTOM_DEFAULTS);
  const cmsBg = useSectionBackground("customSection");
  const t = pickTextColors(data, {
    eyebrow: "#46F1C5",
    subtitle: "#A6AABE",
    ctaText: "#001819",
    ctaBg: "#46F1C5",
  });

  const layout: Layout = data.layout ?? "text-only";
  const hasCta = Boolean(data.ctaLabel && data.ctaUrl);
  const hasImage = Boolean(data.imageUrl);
  const showImage = hasImage && layout !== "text-only";

  const textBlock = (
    <div className={layout === "text-only" ? "text-center max-w-3xl mx-auto" : ""}>
      {data.eyebrow && (
        <p
          className="text-xs md:text-sm font-bold tracking-[0.18em] uppercase mb-3"
          style={{ color: t.eyebrow }}
        >
          {data.eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6"
        style={{ fontFamily: "var(--font-space-grotesk)", whiteSpace: "pre-line" }}
      >
        {data.titleParts.map((p, i) => (
          <span key={i} style={{ color: p.color }}>{p.text}</span>
        ))}
      </h2>
      {data.subtitle && (
        <p
          className="text-sm md:text-base lg:text-lg leading-relaxed mb-6"
          style={{ color: t.subtitle }}
        >
          {data.subtitle}
        </p>
      )}
      {hasCta && (
        <a
          href={data.ctaUrl}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-wide transition-transform hover:scale-105"
          style={{ background: t.ctaBg, color: t.ctaText }}
        >
          {data.ctaLabel}
        </a>
      )}
    </div>
  );

  const imageBlock = showImage ? (
    <div className="w-full flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.imageUrl}
        alt=""
        className="max-w-full h-auto rounded-2xl object-cover"
        style={{ maxHeight: 480 }}
      />
    </div>
  ) : null;

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: cmsBg ?? "#090e1c" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
        {layout === "text-only" && textBlock}
        {layout === "image-left" && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {imageBlock}
            {textBlock}
          </div>
        )}
        {layout === "image-right" && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {textBlock}
            {imageBlock}
          </div>
        )}
      </div>
    </section>
  );
}
