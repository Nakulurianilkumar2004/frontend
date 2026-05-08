import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Newsletter from "@/components/Newsletter";

/* ================= SEO ================= */
export const metadata: Metadata = {
    title: "Blogs on AI, Freelancing & Development | NexalyTech",
    description:
        "Explore NexalyTech blogs on AI development, freelancing, research guidance, and project development. Learn practical, real-world tech skills with hands-on insights.",
    keywords: [
        "NexalyTech blogs",
        "AI blogs India",
        "freelancing development guide",
        "research paper writing guide",
        "student project ideas",
        "machine learning tutorials",
        "Next.js development blogs",
    ],
    alternates: {
        canonical: "https://www.nexalytech.com/blogs",
    },
    openGraph: {
        title: "NexalyTech Blogs | AI, Freelancing & Development",
        description:
            "Learn AI, freelancing, and software development with real-world practical blogs from NexalyTech.",
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
            "Explore AI, freelancing, research, and project development blogs with practical insights.",
        images: ["/blog1.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NexalyTech Blogs",
    url: "https://www.nexalytech.com/blogs",
    description:
        "Technical blogs on AI, freelancing, research guidance, and project development for students and developers.",
};

/* ================= DATA ================= */
const blogCategories = [
    {
        id: "freelancing",
        title: "Freelancing Development",
        desc: "Learn how to build real-world client projects using full-stack development, AI tools, and modern web technologies for freelancing success.",
        href: "/blogs/freelancing",
        image: "/blog1.png",
        readTime: "5 min read",
    },
    {
        id: "research",
        title: "Research Paper Guidance",
        desc: "Step-by-step guidance for writing research papers, structuring content, and successfully publishing in academic journals.",
        href: "/blogs/research",
        image: "/blog2.png",
        readTime: "6 min read",
    },
    {
        id: "projects",
        title: "Project Development Guidance",
        desc: "Build industry-level academic and real-world projects with proper architecture, implementation, and documentation.",
        href: "/blogs/projects",
        image: "/blog4.png",
        readTime: "7 min read",
    },
    {
        id: "course",
        title: "AI Course & Learning",
        desc: "Master Artificial Intelligence, Machine Learning, and Deep Learning with structured learning and practical implementation.",
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
                    <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-black">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    NexalyTech Blogs on AI, Freelancing & Development
                </h1>

                <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                    Explore practical blogs on AI development, freelancing strategies,
                    research paper writing, and real-world project building designed to
                    help students and developers grow their technical skills.
                </p>
            </div>
        </section>
    );
}

/* ================= SEO CONTENT BLOCK ================= */
function SeoContent() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-10 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Learn Practical Technology Skills with NexalyTech Blogs
            </h2>

            <p className="text-sm leading-7">
                NexalyTech blogs are designed to provide practical, hands-on knowledge
                in the fields of Artificial Intelligence, freelancing development,
                academic research writing, and real-world project building. Whether
                you are a student, beginner developer, or aspiring freelancer, our
                content helps you understand how to apply technology in real-world
                scenarios instead of just theoretical learning.
            </p>

            <p className="text-sm leading-7 mt-4">
                We focus on project-based learning, industry-relevant skills, and
                step-by-step guides that help you build a strong foundation in
                modern technologies like Next.js, AI tools, and full-stack development.
            </p>
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

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <HeroSection />

            {/* SEO CONTENT */}
            <SeoContent />

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