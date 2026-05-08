import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

/* ================= SEO ================= */
export const metadata: Metadata = {
    metadataBase: new URL("https://www.nexalytech.com"),

    title:
        "AI Learning Guide for Beginners | Python, Machine Learning, Deep Learning & Generative AI | NexalyTech",

    description:
        "Complete AI learning roadmap for beginners. Learn Python, Machine Learning, Deep Learning, and Generative AI step-by-step with real-world projects and expert guidance.",

    keywords: [
        "AI learning guide",
        "learn AI for beginners",
        "python machine learning roadmap",
        "deep learning tutorial",
        "generative AI guide",
        "AI roadmap step by step",
        "NexalyTech AI course",
    ],

    alternates: {
        canonical: "https://www.nexalytech.com/blogs/ai-learning-guide",
    },

    openGraph: {
        title: "AI Learning Guide for Beginners | NexalyTech",
        description:
            "Step-by-step roadmap to learn AI, Machine Learning, Deep Learning, and Generative AI from scratch.",
        url: "https://www.nexalytech.com/blogs/ai-learning-guide",
        siteName: "NexalyTech",
        images: [
            {
                url: "/course2.png",
                width: 1200,
                height: 630,
                alt: "AI learning roadmap for beginners",
            },
        ],
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "AI Learning Guide | Python, ML, DL & Generative AI",
        description:
            "Learn AI step-by-step from Python to Generative AI with practical projects.",
        images: ["/course2.png"],
    },
};

/* ================= PAGE ================= */
export default function AILearningGuidePage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 py-14">

            {/* BACK */}
            <div className="max-w-6xl mx-auto mb-6">
                <Link href="/">
                    <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-lg">
                        ← Back to Home
                    </Button>
                </Link>
            </div>

            {/* ================= HERO (H1 SEO) ================= */}
            <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    AI Learning Guide for Beginners
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Learn Artificial Intelligence from scratch with a structured roadmap covering{" "}
                    <strong>Python</strong>, <strong>Machine Learning</strong>,{" "}
                    <strong>Deep Learning</strong>, and <strong>Generative AI</strong>. Build real-world skills step-by-step with NexalyTech.
                </p>
            </section>

            {/* IMAGE */}
            <section className="max-w-4xl mx-auto mt-10 flex justify-center">
                <Image
                    src="/course2.png"
                    alt="AI learning roadmap Python machine learning deep learning generative AI"
                    width={700}
                    height={450}
                    priority
                    className="rounded-3xl shadow-xl w-full h-auto"
                />
            </section>

            {/* ================= ROADMAP (H2 SEO) ================= */}
            <section className="max-w-5xl mx-auto mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Step-by-Step AI Learning Roadmap
                </h2>

                <div className="mt-10 grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-blue-600">
                            Python for AI
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Learn Python fundamentals including variables, loops, functions, and data structures.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-purple-600">
                            Machine Learning Basics
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Understand regression, classification, and model training techniques.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-indigo-600">
                            Deep Learning
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Learn neural networks, CNNs, and advanced AI architectures.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-green-600">
                            Generative AI
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Work with ChatGPT, APIs, prompt engineering, and AI automation tools.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">

                    <AccordionItem value="1">
                        <AccordionTrigger>
                            Can I learn AI without coding?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, you can start with Python basics and gradually move into AI concepts.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            How long does it take to learn AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            You can learn the basics in 1–3 months with consistent practice.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Do I need strong math for AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            Basic algebra and statistics are enough to start learning AI.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Can I build AI projects as a beginner?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, after learning fundamentals, you can build real-world AI projects.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-xl">

                <h2 className="text-2xl md:text-3xl font-bold">
                    Start Your AI Journey Today
                </h2>

                <p className="mt-4 text-blue-100">
                    Learn AI step-by-step with structured guidance, projects, and mentorship from NexalyTech.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

                    <Link href="/services/contact">
                        <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Get Started
                        </Button>
                    </Link>

                    <Link href="/">
                        <Button className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-5 text-lg">
                            Back to Home
                        </Button>
                    </Link>

                </div>
            </section>

            {/* ================= FAQ SCHEMA (SEO RICH RESULTS) ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Can I learn AI without coding?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, you can start with Python basics and gradually learn AI concepts.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long does it take to learn AI?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can learn AI basics in 1–3 months with consistent practice.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do I need strong math for AI?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Basic algebra and statistics are enough to start learning AI.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I build AI projects as a beginner?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, beginners can build real-world AI projects after learning fundamentals.",
                                },
                            },
                        ],
                    }),
                }}
            />

        </main>
    );
}