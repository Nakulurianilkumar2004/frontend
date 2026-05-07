import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

/* ================= SEO ================= */
export const metadata = {
    metadataBase: new URL("https://www.nexalytech.com"),
    title: "Freelancing Guide for Clients | AI, Full Stack & SEO Development - NexalyTech",
    description:
        "Learn how NexalyTech delivers freelancing projects using AI, Full Stack development, and SEO optimization. Complete guide from idea to deployment.",
    keywords: [
        "freelancing services",
        "AI development",
        "full stack development",
        "SEO optimization",
        "project development guide",
        "hire developers India",
    ],
    alternates: {
        canonical: "/blogs/freelancing-guide",
    },
    openGraph: {
        title: "Freelancing Project Guide | NexalyTech",
        description:
            "Step-by-step freelancing project development process using AI, Full Stack & SEO.",
        url: "https://www.nexalytech.com/blogs/freelancing-guide",
        siteName: "NexalyTech",
        images: [
            {
                url: "/freelancing2.png",
                width: 1200,
                height: 630,
                alt: "Freelancing project workflow",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelancing Guide | NexalyTech",
        description:
            "Complete freelancing development process using AI & Full Stack.",
        images: ["/freelancing2.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Freelancing Project Development Guide",
    description:
        "Step-by-step guide explaining how NexalyTech builds freelancing projects using AI, Full Stack and SEO.",
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
export default function FreelanceGuidePage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 py-14">

            {/* SEO JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ================= HEADER ================= */}
            <header className="max-w-6xl mx-auto mb-8">
                <Link href="/">
                    <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-lg">
                        ← Back to Home
                    </Button>
                </Link>
            </header>

            {/* ================= HERO ================= */}
            <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Freelancing Project Development Guide
                </h1>

                <p className="mt-5 text-gray-600 text-lg">
                    Discover how NexalyTech transforms your ideas into scalable,
                    AI-powered, and SEO-optimized digital products using modern
                    full stack technologies.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto mt-12">
                <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/freelancing2.png"
                        alt="Freelancing project workflow and development process"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1000px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="max-w-5xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Our Freelancing Development Process
                </h2>

                <div className="mt-12 grid md:grid-cols-2 gap-8">

                    {[
                        {
                            title: "1. Requirement Analysis",
                            color: "text-blue-600",
                            desc: "We deeply understand your idea, goals, and business requirements.",
                        },
                        {
                            title: "2. Planning & Strategy",
                            color: "text-purple-600",
                            desc: "We design architecture and choose the best tech stack.",
                        },
                        {
                            title: "3. Development",
                            color: "text-indigo-600",
                            desc: "We build scalable applications using modern frameworks and AI.",
                        },
                        {
                            title: "4. Testing & SEO Optimization",
                            color: "text-green-600",
                            desc: "We optimize performance, speed, and search engine visibility.",
                        },
                        {
                            title: "5. Delivery & Support",
                            color: "text-orange-600",
                            desc: "We deliver your product and provide continuous support.",
                        },
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <h3 className={`font-semibold text-lg ${step.color}`}>
                                {step.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{step.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto mt-20">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Do you develop custom freelancing projects?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, all our projects are fully customized based on client needs.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Which technologies do you use?
                        </AccordionTrigger>
                        <AccordionContent>
                            We use React, Next.js, Node.js, and AI tools for development.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Do you provide SEO services?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we ensure websites are optimized for Google ranking and performance.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Do you offer post-delivery support?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide maintenance and support after delivery.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto mt-24">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">

                    <h2 className="text-2xl md:text-3xl font-bold">
                        Ready to Build Your Project?
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-xl mx-auto">
                        Turn your idea into a real-world product with our expert
                        AI and full stack development team.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

                        <Link href="/services/contact">
                            <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg shadow-md hover:scale-105 transition">
                                Start Your Project
                            </Button>
                        </Link>

                        <Link href="/">
                            <Button className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-5 text-lg">
                                Back to Home
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
}