import type { NextConfig } from "next";

// NOTE: this app uses `output: "export"`, which produces a static bundle.
// Static export does NOT execute `headers()` — set CSP at the hosting layer
// (Vercel, CloudFront, Nginx) for production. In `next dev`, no
// X-Frame-Options is applied by default, so the CMS iframe works locally.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
