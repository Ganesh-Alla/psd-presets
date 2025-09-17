import type { Metadata } from "next";

export const siteConfig = {
	name: "Cinetone",
	domain: "cinetone.in",
	url: "https://cinetone.in",
	description:
		"Premium presets, bundles and LUTs for Adobe Lightroom and Photoshop. Create stunning cinematic looks for your photos and videos.",
	keywords: [
		"Adobe Lightroom Presets",
		"Adobe Photoshop LUTs",
		"Cinematic Presets",
		"Film Presets",
		"Photography Presets",
		"Premium Presets",
		"Preset Bundles",
		"Color Grading",
		"Photo Editing",
		"Professional Presets",
		"Wedding Presets",
		"Portrait Presets",
		"Landscape Presets",
		"Moody Presets",
		"Bright and Airy Presets"
	],
	author: {
		name: "Cinetone Team",
		url: "https://cinetone.in/about",
	},
};

export const defaultMetadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: "%s · cinetone",
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
	creator: siteConfig.author.name,
	publisher: siteConfig.author.name,
	applicationName: "cinetone",
	generator: "Next.js",
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: "cinetone",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@cinetone",
	},
	category: "technology",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: siteConfig.url,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export function buildPageMetadata(
	page: Partial<Metadata> & { title?: string; description?: string; urlPath?: string }
): Metadata {
	const { title, description, urlPath, ...rest } = page;
	const absoluteUrl = urlPath ? new URL(urlPath, siteConfig.url).toString() : siteConfig.url;
	return {
		...defaultMetadata,
		...rest,
		title: title
			? { default: `${title} · cinetone`, template: "%s · cinetone" }
			: defaultMetadata.title,
		description: description || defaultMetadata.description,
		openGraph: {
			...defaultMetadata.openGraph,
			title: title || (defaultMetadata.title as { default: string })?.default || siteConfig.name,
			description: description || siteConfig.description,
			url: absoluteUrl,
		},
		twitter: {
			...defaultMetadata.twitter,
			title: title || siteConfig.name,
			description: description || siteConfig.description,
		},
		alternates: {
			...defaultMetadata.alternates,
			canonical: absoluteUrl,
		},
	};
}


