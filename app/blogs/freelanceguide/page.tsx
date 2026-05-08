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
        "Freelancing Project Guide | AI, Full Stack & SEO Development Process | NexalyTech",

    description:
        "Step-by-step freelancing project development guide using AI, Full Stack development, and SEO optimization. Learn how NexalyTech builds scalable digital solutions from idea to deployment.",

    keywords: [
        "freelancing project guide",
        "AI development process",
        "full stack project workflow",
        "SEO optimized web development",
        "Next.js development process",
        "software development lifecycle",
        "project deployment guide",
    ],

    alternates: {
        canonical: "https://www.nexalytech.com/blogs/freelancing-guide",
    },

    openGraph: {
        title: "Freelancing Project Development Guide | NexalyTech",
        description:
            "Learn the complete step-by-step process of building AI-powered, SEO-optimized full stack applications.",
        url: "https://www.nexalytech.com/blogs/freelancing-guide",
        siteName: "NexalyTech",
        images: [
            {
                url: "/freelancing2.png",
                width: 1200,
                height: 630,
                alt: "Freelancing project development workflow",
            },
        ],
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Freelancing Project Guide | NexalyTech",
        description:
            "Complete development workflow for AI + Full Stack + SEO projects.",
        images: ["/freelancing2.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Freelancing Project Development Guide",
    description:
        "Step-by-step guide explaining how NexalyTech builds freelancing projects using AI, Full Stack development and SEO optimization.",
    author: {
        "@type": "Organization",
        name: "NexalyTech",
    },
    publisher: {
        "@type": "Organization",
        name: "NexalyTech",
    },
    mainEntityOfPage: "https://www.nexalytech.com/blogs/freelancing-guide",
};

/* ================= PAGE ================= */
export default function FreelanceGuidePage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ================= HEADER ================= */}
            <header className="max-w-6xl mx-auto px-6 pt-6">
                <Link href="/">
                    <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-lg">
                        ← Back to Home
                    </Button>
                </Link>
            </header>

            {/* ================= HERO (SEO H1) ================= */}
            <section className="max-w-3xl mx-auto text-center px-6 py-12">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Freelancing Project Development Guide
                </h1>

                <p className="mt-5 text-gray-600 text-lg">
                    Learn how modern digital products are built using{" "}
                    <strong>AI integration</strong>,{" "}
                    <strong>Full Stack Development</strong>, and{" "}
                    <strong>SEO optimization techniques</strong> from idea to production.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/freelancing2.png"
                        alt="Freelancing development workflow AI full stack SEO process"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1000px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= PROCESS (H2 SEO SECTION) ================= */}
            <section className="max-w-5xl mx-auto mt-20 px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Freelancing Development Process (Step-by-Step)
                </h2>

                <div className="mt-12 grid md:grid-cols-2 gap-8">

                    {[
                        {
                            title: "Requirement Analysis",
                            desc: "Understanding client goals, business needs, and project scope.",
                        },
                        {
                            title: "System Design",
                            desc: "Planning architecture, UI/UX design, and technology stack selection.",
                        },
                        {
                            title: "Development Phase",
                            desc: "Building scalable applications using React, Next.js, Node.js, and AI tools.",
                        },
                        {
                            title: "Testing & SEO Optimization",
                            desc: "Performance tuning, bug fixing, and search engine optimization.",
                        },
                        {
                            title: "Deployment & Delivery",
                            desc: "Launching project on production with full optimization.",
                        },
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <h3 className="font-semibold text-lg text-blue-600">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{step.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto mt-20 px-6">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            What technologies do you use?
                        </AccordionTrigger>
                        <AccordionContent>
                            We use Next.js, React, Node.js, and AI-based tools for modern development.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Do you build SEO optimized websites?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, every project is optimized for Google ranking and performance.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Do you support full project development?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we handle complete lifecycle from idea to deployment.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto mt-24 px-6 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">

                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start Your Freelancing Project Today
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-xl mx-auto">
                        Build scalable AI-powered and SEO-optimized applications with expert guidance.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Contact Us
                        </Button>
                    </Link>

                </div>
            </section>

        </main>
    );
}