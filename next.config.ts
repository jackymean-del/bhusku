import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export, served from Cloudflare Pages. /api/* is forwarded to
  // Railway by functions/api/[[path]].ts so the contact form reaches the same backend
  // the schedU sites use.
  output: "export",
};

export default nextConfig;
