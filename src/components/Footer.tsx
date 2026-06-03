import { getPages, getPosts, getHomePage } from "@/lib/cms";
import { resolveHomeContent } from "@/lib/homeContent";
import { STATIC_ROUTES } from "@/lib/static-routes";
import { type FooterBlogLink } from "./FooterBlogsDropdown";
import FooterView, { type FooterLink } from "./FooterView";

/**
 * Dynamic footer extras shared by the server Footer and the homepage preview
 * bridge: CMS pages (auto-listed) + latest blog posts for the dropdown.
 */
export async function getFooterExtras(): Promise<{
  dynamicLinks: FooterLink[];
  latestBlogs: FooterBlogLink[];
}> {
  const staticSlugs = new Set(STATIC_ROUTES.map((r) => r.slug));

  // Fetch pages + posts in parallel (both are cached) so the footer doesn't add
  // two sequential round-trips to every page render.
  const [cmsPages, postsResult] = await Promise.all([
    getPages(),
    getPosts({ limit: 5 }).catch(() => null),
  ]);

  const dynamicLinks: FooterLink[] = cmsPages
    .filter((p) => p.slug && p.slug !== "/" && !staticSlugs.has(p.slug))
    .map((p) => ({ label: p.title, href: p.slug }));

  const latestBlogs: FooterBlogLink[] = (postsResult?.items ?? []).map((p) => ({
    title: p.title,
    slug: p.slug,
  }));

  return { dynamicLinks, latestBlogs };
}

export default async function Footer() {
  // Footer content is CMS-editable via the home page's `sections.footer`
  // (managed from the CMS homepage editor). Falls back to built-in defaults.
  const [homePage, extras] = await Promise.all([getHomePage(), getFooterExtras()]);
  const content = resolveHomeContent(homePage?.sections).footer;
  const { dynamicLinks, latestBlogs } = extras;
  const renderedLinks: FooterLink[] = [...content.links, ...dynamicLinks];

  return <FooterView content={content} renderedLinks={renderedLinks} latestBlogs={latestBlogs} />;
}
