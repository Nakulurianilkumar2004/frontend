import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";

/* ================= SEO ================= */
export const metadata: Metadata = {
    metadataBase: new URL("https://www.nexalytech.com"),

    title:
        "Research Paper Writing, Formatting & Publication Support | NexalyTech",

    description:
        "Get expert research paper guidance including writing, plagiarism reduction, AI content refinement, IEEE/Springer formatting, and journal publication support for students and researchers.",

    keywords: [
        "research paper writing service",
        "IEEE paper formatting help",
        "Springer publication support",
        "plagiarism reduction service",
        "AI research paper writing",
        "journal publication guidance India",
        "final year research project help",
        "academic writing support",
    ],

    alternates: {
        canonical: "/blogs/research",
    },

    openGraph: {
        title: "Research Paper Guidance & Publication Support | NexalyTech",
        description:
            "Complete research paper support: writing, editing, plagiarism removal, formatting, and journal publication guidance.",
        url: "https://www.nexalytech.com/blogs/research",
        siteName: "NexalyTech",
        images: [
            {
                url: "/research1.png",
                width: 1200,
                height: 630,
                alt: "Research Paper Guidance Services",
            },
        ],
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Research Paper Support | NexalyTech",
        description:
            "End-to-end research paper writing, editing, and publication support.",
        images: ["/research1.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Research Paper Guidance & Publication Support",
    description:
        "Expert academic research paper writing, formatting, plagiarism reduction, and publication support.",
    author: {
        "@type": "Organization",
        name: "NexalyTech",
    },
    publisher: {
        "@type": "Organization",
        name: "NexalyTech",
    },
};

/* ================= DATA ================= */
const services = [
    "Topic Selection & Research Planning",
    "Research Paper Writing & Structuring",
    "Plagiarism Reduction & Editing",
    "AI Content Refinement",
    "IEEE / Springer Formatting",
    "Journal & Conference Submission Support",
];

/* ================= PAGE ================= */
export default function ResearchBlogPage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ================= NAV ================= */}
            <nav className="max-w-6xl mx-auto px-6 pt-6">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-black transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blogs
                </Link>
            </nav>

            {/* ================= HERO ================= */}
            <header className="max-w-4xl mx-auto text-center px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Research Paper Writing & Publication Support
                </h1>

                <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Get complete academic assistance for <strong>research paper writing</strong>,
                    <strong> plagiarism reduction</strong>, <strong>AI refinement</strong>,
                    and <strong>journal publication</strong> in IEEE, Springer, and Scopus-indexed journals.
                </p>
            </header>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/research1.png"
                        alt="Research paper writing and publication support service"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= SEO CONTENT BLOCK ================= */}
            <section className="max-w-4xl mx-auto px-6 py-10 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    End-to-End Research Paper Support for Students & Researchers
                </h2>

                <p className="text-sm leading-7">
                    NexalyTech provides professional research paper guidance designed for
                    engineering students, academic researchers, and professionals. Our
                    services include topic selection, research structuring, writing support,
                    plagiarism reduction, and formatting according to IEEE and Springer standards.
                </p>

                <p className="text-sm leading-7 mt-4">
                    We also help refine AI-generated drafts into high-quality academic content
                    and assist in journal submission processes to improve publication success rates.
                </p>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
                    What We Help You With
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {services.map((item, i) => (
                        <Card
                            key={i}
                            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-0"
                        >
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg text-blue-600">
                                    {item}
                                </h3>
                                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                    Professional academic support to ensure your research meets publication standards.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ================= CONTENT BOOST ================= */}
            <section className="max-w-4xl mx-auto px-6 pb-10 text-center">
                <p className="text-gray-600 leading-relaxed">
                    Our experts help you create <strong>plagiarism-free research papers</strong>,
                    improve AI-generated drafts, and ensure proper <strong>citations, formatting,
                        and journal submission readiness</strong> for academic success.
                </p>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-4xl mx-auto px-6 pb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-8">

                    <AccordionItem value="1">
                        <AccordionTrigger>
                            Do you help with complete research paper writing?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide full support from topic selection to final publication submission.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            Can you reduce plagiarism in research papers?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we refine and rewrite content to ensure originality and academic compliance.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Do you support IEEE and Springer formatting?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we format papers according to IEEE, Springer, and other journal guidelines.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Do you help with journal publication?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we guide submission to indexed journals including Scopus and IEEE.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start Your Research Publication Journey
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Get expert academic support and publish your research paper with confidence.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg shadow-md hover:scale-105 transition">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}