import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date().toISOString();
	return [
		{
			url: `${siteConfig.url}/`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${siteConfig.url}/about`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${siteConfig.url}/contact`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];
}


