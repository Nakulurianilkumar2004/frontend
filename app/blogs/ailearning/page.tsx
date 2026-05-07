import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

/* ================= SEO ================= */
export const metadata = {
    title:
        "AI Learning Guide for Beginners | Python, ML, DL & Generative AI | NexalyTech",
    description:
        "Complete AI learning roadmap by NexalyTech. Learn Python, Machine Learning, Deep Learning, and Generative AI step-by-step with real-world guidance.",
    keywords: [
        "AI learning guide",
        "learn AI for beginners",
        "Python machine learning roadmap",
        "deep learning tutorial",
        "generative AI guide",
        "NexalyTech AI course",
    ],
    alternates: {
        canonical: "https://www.nexalytech.com/blogs/ai-learning-guide",
    },
    openGraph: {
        title: "AI Learning Guide | NexalyTech",
        description:
            "Start learning AI from basics to advanced with NexalyTech.",
        url: "https://www.nexalytech.com/blogs/ai-learning-guide",
        siteName: "NexalyTech",
        images: [
            {
                url: "/course2.png",
                width: 1200,
                height: 630,
                alt: "AI Learning Roadmap",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Learning Guide | NexalyTech",
        description:
            "Step-by-step AI roadmap covering Python, ML, DL, and Generative AI.",
        images: ["/course2.png"],
    },
};

export default function AILearningGuidePage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 py-14">

            {/* ================= BACK ================= */}
            <div className="max-w-6xl mx-auto mb-6">
                <Link href="/">
                    <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-lg">
                        ← Back to Home
                    </Button>
                </Link>
            </div>

            {/* ================= INTRO ================= */}
            <section className="max-w-3xl mx-auto text-center">
                {/* ✅ SEO H1 */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    AI Learning Guide for Beginners – Python, ML, DL & Generative AI
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    This NexalyTech guide helps you start Artificial Intelligence from basics
                    and move step-by-step into Machine Learning, Deep Learning, and Generative AI.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-4xl mx-auto mt-10 flex justify-center">
                <Image
                    src="/course2.png"
                    alt="AI learning roadmap for beginners including Python machine learning and deep learning"
                    width={700}
                    height={450}
                    priority
                    loading="eager"
                    className="rounded-3xl shadow-xl w-full h-auto"
                />
            </section>

            {/* ================= STEPS ================= */}
            <section className="max-w-5xl mx-auto mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Step-by-Step AI Learning Roadmap
                </h2>

                <div className="mt-10 grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-blue-600">
                            Learn Python for AI
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Start with Python basics including variables, loops, and functions.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-purple-600">
                            Machine Learning Fundamentals
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Learn regression, classification, and model training techniques.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-indigo-600">
                            Deep Learning Concepts
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Understand neural networks and deep learning architectures.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-green-600">
                            Generative AI & Tools
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Work with ChatGPT, APIs, and AI automation tools.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    AI Learning FAQs
                </h2>

                <Accordion type="single" collapsible className="mt-6">
                    <AccordionItem value="1">
                        <AccordionTrigger>Can I learn AI without coding?</AccordionTrigger>
                        <AccordionContent>
                            Yes, start with Python basics and gradually learn AI.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>How long to learn AI?</AccordionTrigger>
                        <AccordionContent>
                            You can learn basics in 1–3 months with consistent practice.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>Do I need math?</AccordionTrigger>
                        <AccordionContent>
                            Basic algebra and statistics help, but you can start without deep math.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>Can I build AI projects?</AccordionTrigger>
                        <AccordionContent>
                            Yes, once you understand fundamentals, you can build real-world projects.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-xl">

                <h2 className="text-2xl md:text-3xl font-bold">
                    Start Learning AI with NexalyTech
                </h2>

                <p className="mt-4 text-blue-100">
                    Get structured guidance and hands-on projects to master AI faster.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

                    <Link href="/services/contact">
                        <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Contact Us
                        </Button>
                    </Link>

                    <Link href="/">
                        <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-5 text-lg">
                            Back to Home
                        </Button>
                    </Link>

                </div>
            </section>

            {/* ✅ STRUCTURED DATA (VERY IMPORTANT FOR SEO) */}
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
                                    text: "You can learn basics in 1–3 months with consistent practice.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </main>
    );
}