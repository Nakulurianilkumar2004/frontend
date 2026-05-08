import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.nexalytech.com";

    return [
        // ================= HOME =================
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },

        // ================= BLOGS INDEX =================
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
        },

        // ================= BLOG PAGES =================
        {
            url: `${baseUrl}/blogs/career`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs/course`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs/freelancing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs/ai-learning-guide`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs/projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs/research`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs/ailearning`,
            lastModified: new Date(),
        },

        // ================= SERVICES =================
        {
            url: `${baseUrl}/services/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/course`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/freelancing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/minor`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/research`,
            lastModified: new Date(),
        },
    ];
}