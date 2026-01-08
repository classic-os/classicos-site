import type { MetadataRoute } from "next";

function siteUrl() {
    return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://classicos.org").replace(
        /\/$/,
        ""
    );
}

export default function robots(): MetadataRoute.Robots {
    const base = siteUrl();

    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${base}/sitemap.xml`,
    };
}
