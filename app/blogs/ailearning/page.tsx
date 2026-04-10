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
    title: "AI Learning Guide for Beginners | Python, ML, DL & Generative AI",
    description:
        "Complete AI learning roadmap for beginners. Learn Python, Machine Learning, Deep Learning, and Generative AI step-by-step with practical guidance.",
};

export default function AILearningGuidePage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 py-14">

            {/* ================= BACK TO HOME ================= */}
            <div className="max-w-6xl mx-auto mb-6">
                <Link href="/">
                    <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-lg">
                        ← Back to Home
                    </Button>
                </Link>
            </div>

            {/* ================= INTRO ================= */}
            <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    AI Learning Guide for Beginners 🤖
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Artificial Intelligence is transforming every industry. This guide helps
                    you start from basics and move step-by-step into advanced AI concepts
                    including Machine Learning, Deep Learning, and Generative AI.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-4xl mx-auto mt-10 flex justify-center">
                <Image
                    src="/course2.png"
                    alt="AI learning roadmap"
                    width={700}
                    height={450}
                    className="rounded-3xl shadow-xl"
                    style={{ width: "100%", height: "auto" }}
                />
            </section>

            {/* ================= LEARNING STEPS ================= */}
            <section className="max-w-5xl mx-auto mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Step-by-Step AI Learning Path
                </h2>

                <div className="mt-10 grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-blue-600">
                            1. Learn Python Basics
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Start with Python programming including variables, loops, functions,
                            and basic problem solving.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-purple-600">
                            2. Understand Machine Learning
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Learn core ML concepts like regression, classification, and model training.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-indigo-600">
                            3. Explore Deep Learning
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Study neural networks, CNNs, and how deep learning powers AI systems.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-green-600">
                            4. Learn Generative AI
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Work with modern tools like ChatGPT, AI APIs, and build smart applications.
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

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Can I learn AI without coding experience?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, you can start from Python basics and gradually move into AI concepts.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            How long does it take to learn AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            With consistent learning, you can build strong basics in 1–3 months.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Do I need mathematics for AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            Basic math like algebra and statistics is helpful, but you can start without deep knowledge.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Can I build projects after learning AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, you can build real-world AI projects once you understand the fundamentals.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-xl">

                <h2 className="text-2xl md:text-3xl font-bold">
                    Start Learning AI Today 🚀
                </h2>

                <p className="mt-4 text-blue-100">
                    Join our AI course and get step-by-step guidance from basics to advanced concepts.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

                    <Link href="/services/contact">
                        <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Contact Us
                        </Button>
                    </Link>

                    {/* BACK HOME BUTTON (BOTTOM) */}
                    <Link href="/">
                        <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-5 text-lg">
                            Back to Home
                        </Button>
                    </Link>

                </div>
            </section>

        </main>
    );
}