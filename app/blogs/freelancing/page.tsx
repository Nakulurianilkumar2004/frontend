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
    metadataBase: new URL("https://www.nexalytech.com"),
    title: "Freelancing Development Services | NexalyTech",
    description:
        "Professional freelancing development services including Full Stack development, AI solutions, and SEO optimization for scalable business applications.",
    keywords: [
        "freelancing services",
        "full stack development",
        "AI development",
        "SEO optimization",
        "Next.js development",
        "hire developers India",
    ],
    alternates: {
        canonical: "/blogs/freelancing-services",
    },
    openGraph: {
        title: "Freelancing Development Services | NexalyTech",
        description:
            "Build scalable AI-powered and SEO-optimized applications with expert freelancing services.",
        url: "https://www.nexalytech.com/blogs/freelancing-services",
        siteName: "NexalyTech",
        images: [
            {
                url: "/freelancing1.png",
                width: 1200,
                height: 630,
                alt: "Freelancing services",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelancing Services | NexalyTech",
        description:
            "AI, Full Stack, and SEO freelancing solutions for modern businesses.",
        images: ["/freelancing1.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Freelancing Development Services",
    description:
        "Full stack, AI, and SEO freelancing services for custom project development.",
    author: {
        "@type": "Organization",
        name: "NexalyTech",
    },
    publisher: {
        "@type": "Organization",
        name: "NexalyTech",
    },
};

/* ================= PAGE ================= */
export default function FreelancingBlogPage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ================= HEADER ================= */}
            <header className="max-w-6xl mx-auto px-6 pt-6">
                <Link href="/blogs">
                    <Button variant="ghost" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
                    </Button>
                </Link>
            </header>

            {/* ================= HERO ================= */}
            <section className="max-w-4xl mx-auto text-center px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Freelancing Development Services
                </h1>

                <p className="mt-5 text-lg text-gray-600">
                    We deliver <strong>custom client-based solutions</strong> using
                    <strong> Full Stack Development</strong>, <strong>AI integrations</strong>,
                    and <strong>SEO optimization</strong> to help your business scale online.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/freelancing1.png"
                        alt="Freelancing full stack AI development services"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1000px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Our Freelancing Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {[
                        "Full Stack Web Development",
                        "AI-Powered Applications",
                        "SEO Optimization",
                        "Custom Dashboards",
                        "SaaS Platforms",
                        "API Integrations",
                    ].map((service, i) => (
                        <article
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h3 className="font-semibold text-lg text-blue-600">
                                {service}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                Scalable, high-performance solutions using modern tech like Next.js, React, and AI tools.
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-4xl mx-auto px-6 pb-20">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-8 space-y-3">

                    <AccordionItem value="1">
                        <AccordionTrigger>
                            What services do you provide?
                        </AccordionTrigger>
                        <AccordionContent>
                            We offer full stack development, AI applications, SEO optimization, and custom solutions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            Do you build custom projects?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, all projects are tailored to your business requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Do you integrate AI features?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, including chatbots, automation systems, and AI-driven applications.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Is SEO included?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we optimize for speed, performance, and Google ranking.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="5">
                        <AccordionTrigger>
                            Do you provide support?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we offer maintenance and post-delivery support.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">

                    <h2 className="text-3xl font-bold">
                        Start Your Project Today
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-xl mx-auto">
                        Build scalable, AI-powered, and SEO-optimized solutions
                        tailored for your business growth.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg shadow-md hover:scale-105 transition">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}