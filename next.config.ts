import createMDX from "@next/mdx";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withNextVideo } from "next-video/process";

// Configure basePath/assetPrefix for GitHub Pages when building for production.
// The workflow sets NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH to the repository name.
const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH || "";
const computedBasePath = isProd && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    useCache: true,
  },
  eslint: {
    // Avoid failing builds due to lint warnings/errors; CI can run lint separately
    ignoreDuringBuilds: true,
  },
  // Export a fully static site suitable for GitHub Pages
  output: "export",
  // Ensure Next.js image optimizations are disabled for static hosting
  images: {
    unoptimized: true,
  },
  // Use directory-style URLs for better static hosting compatibility
  trailingSlash: true,
  // Prefix assets and routes when served under /<repo-name>/
  ...(computedBasePath
    ? {
        basePath: computedBasePath,
        assetPrefix: computedBasePath,
      }
    : {}),
};

const withMDX = createMDX({});
const withNextIntl = createNextIntlPlugin();

export default withMDX(withNextVideo(withNextIntl(nextConfig)));
