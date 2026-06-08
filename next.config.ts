import type { NextConfig } from "next";

// Standard SSR/ISR build — required for CMS-driven dynamic routes (e.g. the
// `[slug]` content-page route, where new pages appear at runtime and would
// not be known to a static-export `generateStaticParams()`).
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // All CMS-uploaded media is served from Cloudinary.
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
