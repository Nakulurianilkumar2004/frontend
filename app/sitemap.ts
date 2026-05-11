import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.nexalytech.com";

    // All important indexable pages
    const routes = [
        // ================= MAIN =================
        "/",
        "/blogs",

        // ================= BLOGS =================
        "/blogs/career",
        "/blogs/course",
        "/blogs/freelancing",
        "/blogs/freelanceguide",
        "/blogs/aillearning",
        "/blogs/projects",
        "/blogs/research",

        // ================= SERVICES =================
        "/services/contact",
        "/services/course",
        "/services/freelancing",
        "/services/minor",
        "/services/research",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date("2026-05-11"),
        changeFrequency: "weekly",
        priority:
            route === "/"
                ? 1.0
                : route.startsWith("/services")
                    ? 0.9
                    : route === "/blogs"
                        ? 0.8
                        : 0.7,
    }));
}