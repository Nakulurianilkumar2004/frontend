import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

/* ================= SEO ================= */
export const metadata: Metadata = {
    metadataBase: new URL("https://www.nexalytech.com"),

    title:
        "Tech Career Roadmap for Students | AI, Full Stack & Data Science Guide | NexalyTech",

    description:
        "Complete tech career roadmap for students in AI, Full Stack Development, and Data Science. Learn skills, build projects, and become job-ready with NexalyTech mentorship.",

    keywords: [
        "tech career roadmap",
        "AI career guide for students",
        "full stack developer roadmap",
        "data science career path",
        "student career guidance India",
        "how to become software developer",
        "learn AI and ML roadmap",
        "NexalyTech career mentorship",
    ],

    alternates: {
        canonical: "https://www.nexalytech.com/blogs/career",
    },

    openGraph: {
        title:
            "Tech Career Roadmap for Students | AI, Full Stack & Data Science",
        description:
            "Step-by-step roadmap for students to start careers in AI, Full Stack Development, and Data Science with practical skills and projects.",
        url: "https://www.nexalytech.com/blogs/career",
        siteName: "NexalyTech",
        images: [
            {
                url: "/minor1.png",
                width: 1200,
                height: 630,
                alt: "Tech career roadmap for AI and full stack students",
            },
        ],
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Tech Career Roadmap | AI & Full Stack Guide",
        description:
            "Learn how to start a successful tech career in AI, Full Stack, and Data Science.",
        images: ["/minor1.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tech Career Roadmap for Students",
    description:
        "Complete roadmap for students in AI, Full Stack Development, and Data Science with career guidance and project-based learning.",
    author: {
        "@type": "Organization",
        name: "NexalyTech",
    },
    publisher: {
        "@type": "Organization",
        name: "NexalyTech",
        logo: {
            "@type": "ImageObject",
            url: "https://www.nexalytech.com/logo.png",
        },
    },
    mainEntityOfPage: "https://www.nexalytech.com/blogs/career",
};

/* ================= PAGE ================= */
export default function CareerBlogPage() {
    return (
        <main className="w-full min-h-screen bg-white">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* BACK */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-black"
                >
                    ← Back to Blogs
                </Link>
            </div>

            {/* ================= HERO (H1 SEO) ================= */}
            <section className="max-w-3xl mx-auto text-center px-6 py-10">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Tech Career Roadmap for Students
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Discover a complete step-by-step roadmap to start your career in{" "}
                    <strong>Artificial Intelligence</strong>,{" "}
                    <strong>Full Stack Development</strong>, and{" "}
                    <strong>Data Science</strong>. Learn industry skills, build projects, and become job-ready with expert guidance.
                </p>
            </section>

            {/* IMAGE */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/minor1.png"
                        alt="Tech career roadmap AI full stack data science guide"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= ROADMAP (H2 SEO) ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Step-by-Step Tech Career Roadmap
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Learn programming fundamentals (Python, JavaScript)",
                        "Choose specialization: AI, Full Stack, or Data Science",
                        "Build real-world projects and case studies",
                        "Create GitHub portfolio and resume",
                        "Practice coding interviews and DSA",
                        "Apply for internships and job opportunities",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✔</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SUPPORT SECTION ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    How NexalyTech Supports Your Career Growth
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Personalized mentorship programs",
                        "Real-world project development",
                        "Resume & portfolio building support",
                        "Interview preparation guidance",
                        "Industry-level skill training",
                        "Career planning assistance",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="text-blue-600 mt-1">✔</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            How do I start a career in AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            Start with Python, then move into Machine Learning, Deep Learning, and build real-world AI projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Which career is better: AI or Full Stack?
                        </AccordionTrigger>
                        <AccordionContent>
                            AI is best for data-driven careers, while Full Stack is ideal for web development roles.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Are projects important for getting a job?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, projects prove practical skills and significantly improve hiring chances.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Can beginners enter tech without experience?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, beginners can start by learning fundamentals and building projects step-by-step.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-20 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">

                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start Your Tech Career Today
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Get expert guidance, build real-world projects, and become job-ready in AI, Full Stack, or Data Science.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Get Career Guidance
                        </Button>
                    </Link>

                </div>
            </section>

        </main>
    );
}