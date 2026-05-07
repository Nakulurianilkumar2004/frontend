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
    title:
        "Research Paper Guidance & Publication Support | NexalyTech",
    description:
        "Get expert research paper guidance including writing, plagiarism reduction, AI content refinement, IEEE/Springer formatting, and journal publication support.",
    keywords: [
        "research paper writing",
        "plagiarism removal",
        "IEEE paper format",
        "Springer publication",
        "AI content refinement",
        "research guidance services",
        "journal publication help",
    ],
    openGraph: {
        title:
            "Research Paper Guidance & Publication | NexalyTech",
        description:
            "Complete support for writing, plagiarism removal, formatting, and publishing research papers.",
        url: "https://www.nexalytech.com/blogs/research",
        siteName: "NexalyTech",
        images: [
            {
                url: "/research1.png",
                width: 1200,
                height: 630,
                alt: "Research Paper Guidance",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Research Paper Support | NexalyTech",
        description:
            "End-to-end research paper guidance including writing and publication.",
        images: ["/research1.png"],
    },
};

/* ================= DATA ================= */
const services = [
    "Topic Selection & Research",
    "Paper Writing & Structuring",
    "Plagiarism Reduction",
    "AI Content Refinement",
    "Formatting (IEEE / Springer)",
    "Journal & Conference Submission",
];

/* ================= PAGE ================= */
export default function ResearchBlogPage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

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
                    Research Paper Guidance & Publication Support
                </h1>

                <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Get complete support for <strong>research paper writing</strong>,
                    <strong> plagiarism reduction</strong>,
                    <strong> AI content refinement</strong>, and
                    <strong> journal or conference publication</strong>.
                    We help you turn ideas into high-quality, publication-ready papers.
                </p>
            </header>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/research1.png"
                        alt="Research paper writing and publication support"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                    />
                </div>
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
                                    High-quality academic support ensuring your paper
                                    meets publication standards.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ================= CONTENT BOOST (SEO TEXT) ================= */}
            <section className="max-w-4xl mx-auto px-6 pb-10 text-center">
                <p className="text-gray-600 leading-relaxed">
                    Our research experts assist students and professionals in creating
                    <strong> plagiarism-free research papers</strong>, improving
                    <strong> AI-generated drafts</strong>, and ensuring proper
                    <strong> citations, formatting, and submission</strong>.
                    We specialize in <strong>IEEE, Springer, and Scopus-indexed journals</strong>.
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
                            Do you help in writing complete research papers?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide end-to-end support including topic selection,
                            writing, formatting, and submission.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            Can you reduce plagiarism?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we optimize and rewrite content with proper citations
                            to meet acceptable plagiarism levels.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Do you refine AI-generated content?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we convert AI-generated drafts into human-like,
                            academic-quality content suitable for publication.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Do you assist with IEEE or Springer publications?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we guide formatting and submission for IEEE,
                            Springer, and other indexed journals.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="5">
                        <AccordionTrigger>
                            How long does it take?
                        </AccordionTrigger>
                        <AccordionContent>
                            Most research papers take 1–3 weeks depending on complexity.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Ready to Publish Your Research Paper?
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Get expert support from idea to publication and submit
                        your paper with confidence.
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