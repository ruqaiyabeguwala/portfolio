"use client";

import { useEffect } from "react";
import { DEFAULT_LANG_CODE } from "@/constants/languages";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

export default function RootRedirect() {
  useEffect(() => {
    // Client-only redirect for static hosting (avoids router during prerender)
    // Respect basePath on GitHub Pages when set at build time
    const basePath = process.env.NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH
      ? `/${process.env.NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH}`
      : "";
    window.location.replace(`${basePath}/${DEFAULT_LANG_CODE}/`);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}