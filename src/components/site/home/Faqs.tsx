import type { HomeContent } from "@/lib/site/home";
import { externalLinkProps } from "@/lib/site/externalLink";

/**
 * The FAQ accordion.
 *
 * `data-faq`, `data-faq-q`, `data-faq-a` and `data-faq-i` are the hooks
 * SiteMotion drives — it opens the first item on mount, animates the answer's
 * height and rotates the chevron. The answers render collapsed only once that
 * runs, so every answer stays in the HTML and remains crawlable.
 */
export default function Faqs({ content }: { content: HomeContent["faqs"] }) {
  return (
    <section id="faqs" style={{ marginTop: "128px", background: "#a2d9d4" }}>
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "104px 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "64px",
          alignItems: "start",
        }}
      >
        <div
          data-reveal="left"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(38px, 4.4vw, 64px)",
              lineHeight: "1.02",
              fontWeight: "600",
              letterSpacing: "-2.2px",
              textTransform: "uppercase",
              color: "#000000",
              textWrap: "balance",
            }}
            data-cms-field="home.faqs.title"
          >
            {content.title}
          </h2>
        </div>

        <div data-reveal="right" style={{ display: "flex", flexDirection: "column" }}>
          {content.items.map((item, i) => (
            <div
              key={item.q}
              data-faq=""
              style={{
                borderTop: "1px solid #7cc4bf",
                // The last item closes the list off.
                ...(i === content.items.length - 1
                  ? { borderBottom: "1px solid #7cc4bf" }
                  : null),
              }}
            >
              <button
                data-faq-q=""
                type="button"
                style={{
                  width: "100%",
                  background: "none",
                  border: "0",
                  padding: "26px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    letterSpacing: "0.3px",
                    textTransform: "uppercase",
                    color: "#0b1620",
                  }}
                  data-cms-field={`home.faqs.items.${i}.q`}
                >
                  {item.q}
                </span>
                <span
                  data-faq-i=""
                  style={{
                    flex: "none",
                    width: "30px",
                    height: "30px",
                    border: "1px solid #118EA3",
                    borderRadius: "999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#118EA3",
                    transition: "transform .28s ease",
                  }}
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div data-faq-a="" style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0",
                    padding: "0 60px 28px 0",
                    fontSize: "17px",
                    lineHeight: "1.75",
                    color: "#1d4a52",
                    textWrap: "pretty",
                  }}
                  // A plain answer is tagged whole. The one that carries an
                  // inline link cannot be — the editor saves a tagged element's
                  // full text, child elements included, so that would swallow
                  // the link into the answer string. Its three parts get their
                  // own spans below instead, which leaves all three editable
                  // and the link intact.
                  data-cms-field={item.linkLabel ? undefined : `home.faqs.items.${i}.a`}
                >
                  {item.linkLabel ? (
                    <>
                      <span data-cms-field={`home.faqs.items.${i}.a`}>{item.a}</span>
                      <a
                        href={item.linkHref}
                        {...externalLinkProps(item.linkHref)}
                        data-cms-href={`home.faqs.items.${i}.linkHref`}
                      >
                        <span data-cms-field={`home.faqs.items.${i}.linkLabel`}>
                          {item.linkLabel}
                        </span>
                      </a>
                      <span data-cms-field={`home.faqs.items.${i}.textAfter`}>
                        {item.textAfter}
                      </span>
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
