import { env } from "@/env";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export const revalidate = 31536000;

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/", "/static/"],
    },
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
};

export default robots;
