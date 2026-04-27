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
    title: "Freelancing Guide for Clients | Full Stack, AI & SEO Project Development",
    description:
        "Complete freelancing guide to understand how we develop client-based projects using Full Stack, AI, and SEO solutions from idea to deployment.",
};

export default function FreelanceGuidePage() {
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
                    Freelancing Project Development Guide
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Want to build a project based on your idea? This guide explains how we
                    work with clients to design, develop, and deliver high-quality
                    Full Stack, AI-powered, and SEO-optimized solutions.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-4xl mx-auto mt-10 flex justify-center">
                <Image
                    src="/freelancing2.png"
                    alt="Freelancing project workflow"
                    width={700}
                    height={450}
                    className="rounded-3xl shadow-xl"
                    style={{ width: "100%", height: "auto" }}
                />
            </section>

            {/* ================= PROCESS STEPS ================= */}
            <section className="max-w-5xl mx-auto mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    How We Work with Clients
                </h2>

                <div className="mt-10 grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-blue-600">
                            1. Understanding Requirements
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We start by understanding your idea, goals, and business needs
                            to define the project scope clearly.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-purple-600">
                            2. Research & Planning
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We analyze the best technologies and create a structured plan
                            for development and execution.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-indigo-600">
                            3. Development Phase
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Our team builds your project using modern tools like React,
                            Next.js, Node.js, and AI integrations.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-green-600">
                            4. Testing & Optimization
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We ensure performance, SEO optimization, and smooth user
                            experience before final delivery.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <h3 className="font-semibold text-lg text-orange-600">
                            5. Delivery & Support
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We deliver the final product and provide ongoing support
                            and maintenance if required.
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
                            Do you develop custom projects?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, all projects are developed based on client requirements and goals.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            What technologies do you use?
                        </AccordionTrigger>
                        <AccordionContent>
                            We use modern technologies like React, Next.js, Node.js, and AI tools.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Do you provide SEO optimization?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we optimize websites for performance, speed, and search engine rankings.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Will I get support after project delivery?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide post-delivery support and maintenance services.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-xl">

                <h2 className="text-2xl md:text-3xl font-bold">
                    Ready to Build Your Project?
                </h2>

                <p className="mt-4 text-blue-100">
                    Let’s turn your idea into a real product with our expert development team.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

                    <Link href="/services/contact">
                        <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Contact Us
                        </Button>
                    </Link>

                    {/* BACK TO HOME BUTTON (BOTTOM) */}
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