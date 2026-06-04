import type { MetadataRoute } from "next";
import { LP_DEPLOY_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: LP_DEPLOY_URL,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "daily", 
      priority: 1.0,
    },
  ];
}