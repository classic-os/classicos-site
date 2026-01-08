import type { MetadataRoute } from "next";

function siteUrl() {
    return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://classicos.org").replace(
        /\/$/,
        ""
    );
}

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteUrl();
    const lastModified = new Date();

    // Add routes as you create pages.
    // Keep these canonical and stable for SEO + AI summaries.
    const routes = ["/", "/docs", "/about", "/privacy", "/terms"];

    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.6,
    }));
}
