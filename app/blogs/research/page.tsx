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
    title: "Research Paper Guidance | Writing, Plagiarism Removal & Publication",
    description:
        "Expert research paper guidance including writing, plagiarism reduction, AI content refinement, and journal or conference publication support.",
    keywords: [
        "research paper writing",
        "plagiarism removal",
        "IEEE paper format",
        "Springer publication",
        "AI content refinement",
        "research guidance",
    ],
};

export default function ResearchBlogPage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

            {/* BACK BUTTON */}
            <div className="max-w-6xl mx-auto px-6 pt-6">
                <Link href="/blogs">
                    <Button variant="ghost" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
                    </Button>
                </Link>
            </div>

            {/* HERO */}
            <section className="max-w-4xl mx-auto text-center px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Research Paper Guidance & Publication Support 📄
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Get complete support for <strong>research paper writing</strong>,
                    <strong> plagiarism reduction</strong>,
                    <strong> AI content refinement</strong>, and
                    <strong> journal/conference publication</strong>.
                </p>
            </section>

            {/* IMAGE */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/research1.png"
                        alt="Research paper guidance"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* SERVICES */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    What We Help You With
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {[
                        "Topic Selection & Research",
                        "Paper Writing & Structuring",
                        "Plagiarism Reduction",
                        "AI Content Refinement",
                        "Formatting (IEEE / Springer)",
                        "Journal & Conference Submission",
                    ].map((item, i) => (
                        <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg text-blue-600">
                                    {item}
                                </h3>
                                <p className="mt-2 text-gray-600 text-sm">
                                    We ensure high-quality academic standards and publication-ready research papers.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mx-auto px-6 pb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-8 space-y-3">

                    <AccordionItem value="1">
                        <AccordionTrigger>Do you help in writing complete research papers?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide end-to-end support including topic selection, writing, formatting, and final submission.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>Can you reduce plagiarism?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we rewrite and optimize content to meet acceptable plagiarism levels with proper citations.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>Do you refine AI-generated content?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we convert AI-generated content into human-like academic writing suitable for publication.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>Do you assist in IEEE or Springer publications?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we guide you through formatting and submission for IEEE, Springer, and other journals.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="5">
                        <AccordionTrigger>How long does it take?</AccordionTrigger>
                        <AccordionContent>
                            Timelines vary, but most research papers take 1–3 weeks depending on complexity.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* CTA */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-xl">
                    <h2 className="text-3xl font-bold">Get Your Paper Published </h2>
                    <p className="mt-3 text-blue-100">
                        From idea to publication, we help you create high-quality research papers ready for submission.
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
