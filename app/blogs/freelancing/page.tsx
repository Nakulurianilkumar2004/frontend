import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";

/* ================= SEO ================= */
export const metadata: Metadata = {
    title: "Freelancing Development Services | Zolentha",
    description:
        "Professional freelancing development services including full stack development, AI solutions, and SEO optimization tailored for client projects.",
    keywords: [
        "freelancing services",
        "full stack development",
        "AI project development",
        "SEO optimization services",
        "custom web development",
        "Next.js freelancing",
    ],
};

/* ================= PAGE ================= */
export default function FreelancingBlogPage() {
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
                    Freelancing Development Services 🚀
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    We deliver <strong>custom client-based projects</strong> using
                    <strong> Full Stack Development</strong>,
                    <strong> AI integrations</strong>, and
                    <strong> SEO optimization</strong> to help your business grow online.
                </p>
            </section>

            {/* IMAGE */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/freelancing1.png"
                        alt="Freelancing services"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                        loading="eager" // ✅ FIX
                    />
                </div>
            </section>

            {/* SERVICES */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    What We Offer
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {[
                        "Full Stack Development",
                        "AI-Powered Applications",
                        "SEO Optimization",
                        "Custom Dashboards",
                        "SaaS Platforms",
                        "API Integrations",
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="font-semibold text-lg text-blue-600">
                                {service}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                High-quality scalable solutions built using modern technologies like React, Next.js, and AI tools.
                            </p>
                        </div>
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
                        <AccordionTrigger>What services do you provide?</AccordionTrigger>
                        <AccordionContent>
                            We offer full stack web development, AI-based applications, SEO optimization, and custom client solutions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>Do you build custom client projects?</AccordionTrigger>
                        <AccordionContent>
                            Yes, every project is tailored based on your business needs and requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>Do you provide AI integrations?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we integrate AI features like chatbots, automation, and intelligent systems.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>Is SEO included in your services?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we ensure SEO-friendly structure, fast performance, and optimized content.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="5">
                        <AccordionTrigger>Do you provide post-delivery support?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide ongoing support, updates, and maintenance.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="6">
                        <AccordionTrigger>What technologies do you use?</AccordionTrigger>
                        <AccordionContent>
                            We use React, Next.js, Node.js, databases, and modern AI frameworks.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* CTA */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-xl">
                    <h2 className="text-3xl font-bold">Start Your Project Today 🚀</h2>
                    <p className="mt-3 text-blue-100">
                        Get a powerful, scalable, and SEO-optimized solution built for your needs.
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