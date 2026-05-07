import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Newsletter from "@/components/Newsletter";

/* ================= SEO ================= */
export const metadata: Metadata = {
    title: "Blogs on AI, Freelancing & Development | NexalyTech",
    description:
        "Explore NexalyTech blogs on AI development, freelancing, research guidance, and project development. Learn real-world skills with practical insights.",
    keywords: [
        "NexalyTech blogs",
        "AI blogs India",
        "freelancing development blogs",
        "research paper guidance",
        "project development tutorials",
        "machine learning blogs",
    ],
    alternates: {
        canonical: "https://www.nexalytech.com/blogs",
    },
    openGraph: {
        title: "NexalyTech Blogs | AI, Freelancing & Development",
        description:
            "Learn AI, freelancing, and development with real-world blogs from NexalyTech.",
        url: "https://www.nexalytech.com/blogs",
        siteName: "NexalyTech",
        images: [
            {
                url: "/blog1.png",
                width: 1200,
                height: 630,
                alt: "NexalyTech Blogs",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NexalyTech Blogs",
        description:
            "Explore AI, freelancing, and development blogs with practical insights.",
        images: ["/blog1.png"],
    },
};

/* ================= DATA ================= */
const blogCategories = [
    {
        id: "freelancing",
        title: "Freelancing Development",
        desc: "Learn how to build real-world client projects using full-stack and AI technologies.",
        href: "/blogs/freelancing",
        image: "/blog1.png",
        readTime: "5 min read",
    },
    {
        id: "research",
        title: "Research Guidance",
        desc: "Step-by-step guide to writing research papers and publishing successfully.",
        href: "/blogs/research",
        image: "/blog2.png",
        readTime: "6 min read",
    },
    {
        id: "projects",
        title: "Projects Guidance",
        desc: "Build academic and real-world projects with proper architecture and execution.",
        href: "/blogs/projects",
        image: "/blog4.png",
        readTime: "7 min read",
    },
    {
        id: "course",
        title: "AI Course",
        desc: "Learn Artificial Intelligence, Machine Learning, and Deep Learning concepts.",
        href: "/blogs/course",
        image: "/blog3.png",
        readTime: "8 min read",
    },
];

/* ================= HERO ================= */
function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white border-b">
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">

                <div className="flex justify-start mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-black"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                {/* ✅ SEO H1 */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    NexalyTech Blogs on AI, Freelancing & Development
                </h1>

                <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover high-quality blogs on AI development, freelancing,
                    research guidance, and project building. Learn practical skills
                    and grow your career with NexalyTech.
                </p>
            </div>
        </section>
    );
}

/* ================= BLOG CARD ================= */
function BlogCard({ cat, index }: any) {
    return (
        <article className="group border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition duration-300">

            <Link href={cat.href}>

                <div className="relative h-52 w-full overflow-hidden">
                    <Image
                        src={cat.image}
                        alt={`${cat.title} - NexalyTech blog`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="p-6">
                    <p className="text-xs text-gray-500">{cat.readTime}</p>

                    {/* ✅ H2 for SEO */}
                    <h2 className="text-xl font-semibold text-gray-900 mt-1">
                        {cat.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2">
                        {cat.desc}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:underline">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                </div>

            </Link>
        </article>
    );
}

/* ================= PAGE ================= */
export default function BlogsPage() {
    return (
        <main className="bg-white">

            <HeroSection />

            {/* Blog Grid */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Explore Blog Categories
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        {blogCategories.map((cat, index) => (
                            <BlogCard key={cat.id} cat={cat} index={index} />
                        ))}
                    </div>

                </div>
            </section>

            {/* Newsletter */}
            <section className="border-t">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <Newsletter />
                </div>
            </section>

        </main>
    );
}