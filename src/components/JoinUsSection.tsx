import FallbackImg from "./FallbackImg";
import { HOME_CONTENT_DEFAULTS, type HomeContent } from "@/lib/homeContent";
import GetAppLink from './GetAppLink';

export default function JoinUsSection({
  content = HOME_CONTENT_DEFAULTS.joinUs,
}: {
  content?: HomeContent["joinUs"];
}) {
  const data = content;
  const t = {
    eyebrow: "#A6AABE",
    subtitle: "#A6AABE",
    ctaText: "#0a2a23",
    ctaBg: "#04babf",
  };
  return (
    <section
      className="relative pt-16 md:pt-32 pb-24 md:pb-48 overflow-hidden"
      style={{ background: "#090e1c" }}
    >
      {/* Photo Grid Background */}
      <div
        className="absolute inset-y-0 left-0 right-0 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-4 gap-1"
        style={{ backgroundColor: "#090e1c" }}
      >
        {data.photoGrid.map((src, i) => (
          <div
            key={i}
            className="h-64 rounded-lg overflow-hidden relative"
            data-cms-field={`joinUs.photoGrid.${i}`}
            data-cms-type="image"
          >
            <FallbackImg
              src={src}
              fallbackSrc={HOME_CONTENT_DEFAULTS.joinUs.photoGrid[i]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
            />
          </div>
        ))}
      </div>


      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center py-24">
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-4 sm:mb-6 md:mb-8"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            color: t.eyebrow,
            letterSpacing: "6px",
          }}
          data-cms-field="joinUs.eyebrow"
        >
          {data.eyebrow}
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {data.titleParts.map((p, i) => (
            <span
              key={i}
              style={{ color: p.color }}
              data-cms-field={`joinUs.titleParts.${i}.text`}
              data-cms-multiline
            >{p.text}</span>
          ))}
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            color: t.subtitle,
          }}
          data-cms-field="joinUs.subtitle"
        >
          {data.subtitle}
        </p>
        <GetAppLink
          appleHref={data.ctaUrl}
          data-cms-field="joinUs.ctaLabel"
          data-cms-href="joinUs.ctaUrl"
          className="inline-block font-semibold px-6 py-2.5 rounded-xl text-sm transition-all hover:opacity-90"
          style={{
            background: t.ctaBg,
            color: t.ctaText,
          }}
        >
          {data.ctaLabel}
        </GetAppLink>
      </div>
    </section>
  );
}
