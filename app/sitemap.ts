import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.nexalytech.com/',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nexalytech.com/blogs',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nexalytech.com/services/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nexalytech.com/services/course',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nexalytech.com/services/freelancing',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nexalytech.com/services/minor',
            lastModified: new Date(),
        },
        {
            url: 'https://www.nexalytech.com/services/research',
            lastModified: new Date(),
        },
    ]
}