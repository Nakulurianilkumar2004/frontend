import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

/* ================= SEO ================= */
export const metadata: Metadata = {
    metadataBase: new URL("https://www.nexalytech.com"),

    title:
        "1 Month AI Course in India | Learn Python, Machine Learning & Generative AI | NexalyTech",

    description:
        "Join NexalyTech's 1-month AI course in India and master Python, Machine Learning, Deep Learning, and Generative AI with real-world projects, hands-on training, and expert mentorship.",

    keywords: [
        "AI course in India",
        "1 month AI course",
        "learn machine learning online",
        "Python for AI beginners",
        "deep learning course",
        "generative AI training",
        "AI training with projects",
        "NexalyTech AI course",
    ],

    alternates: {
        canonical: "/blogs/course",
    },

    openGraph: {
        title: "1 Month AI Course | Python, ML & Generative AI Training",
        description:
            "Master AI in 1 month with hands-on projects, Python, ML, DL, and Generative AI training.",
        url: "https://www.nexalytech.com/blogs/course",
        siteName: "NexalyTech",
        images: [
            {
                url: "/course1.png",
                width: 1200,
                height: 630,
                alt: "AI Course Training Program",
            },
        ],
        locale: "en_IN",
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "1 Month AI Course | Learn AI Fast",
        description:
            "Learn Python, ML, DL, and Generative AI with real-world AI projects.",
        images: ["/course1.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "1 Month AI Course",
    description:
        "Complete AI training program covering Python, Machine Learning, Deep Learning, and Generative AI with hands-on projects.",
    provider: {
        "@type": "Organization",
        name: "NexalyTech",
    },
};

/* ================= PAGE ================= */
export default function CourseBlogPage() {
    return (
        <main className="w-full min-h-screen bg-white">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* BACK */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-black"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blogs
                </Link>
            </div>

            {/* HERO */}
            <section className="max-w-3xl mx-auto text-center px-6 py-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    1 Month AI Course in India
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Learn <strong>Artificial Intelligence from scratch</strong> with
                    Python, Machine Learning, Deep Learning, and Generative AI.
                    Build real-world AI projects and become job-ready in just 30 days.
                </p>
            </section>

            {/* IMAGE */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/course1.png"
                        alt="AI course Python machine learning deep learning training"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* SEO CONTENT BLOCK */}
            <section className="max-w-4xl mx-auto px-6 mt-10 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Learn AI with Practical Hands-On Training
                </h2>

                <p className="text-sm leading-7">
                    This 1-month AI course is designed for beginners and students who want
                    to enter the field of Artificial Intelligence. You will learn Python
                    programming, Machine Learning models, Deep Learning neural networks,
                    and Generative AI tools used in modern industries.
                </p>

                <p className="text-sm leading-7 mt-4">
                    The course includes real-world projects, coding practice, and mentorship
                    to help you build a strong AI portfolio and improve your career opportunities.
                </p>
            </section>

            {/* SKILLS */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Skills You Will Learn
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Python programming for AI and data science",
                        "Machine Learning algorithms and model building",
                        "Deep Learning and neural networks",
                        "Generative AI tools and applications",
                        "Real-world AI project development",
                        "Career mentorship and guidance",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 h-5 w-5" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    4-Week AI Course Curriculum
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        ["Week 1", "Python basics, logic building, and data structures"],
                        ["Week 2", "Machine Learning algorithms and model training"],
                        ["Week 3", "Deep Learning and neural networks"],
                        ["Week 4", "Generative AI and real-world AI projects"],
                    ].map(([title, desc], i) => (
                        <div key={i} className="p-5 border rounded-xl hover:shadow-md transition">
                            <h3 className="font-semibold text-lg">{title}</h3>
                            <p className="text-gray-600 mt-2">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">

                    <AccordionItem value="1">
                        <AccordionTrigger>
                            Is this AI course suitable for beginners?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we start from Python basics and move to advanced AI topics step by step.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            Do I need coding experience?
                        </AccordionTrigger>
                        <AccordionContent>
                            No, this course is fully beginner-friendly.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Will I build real projects?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, you will build multiple AI projects for your portfolio.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Is mentorship included?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide continuous mentorship and guidance.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* CTA */}
            <section className="max-w-5xl mx-auto px-6 mt-20 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start Your AI Career Today
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Learn AI, build projects, and become job-ready in just 1 month with expert guidance.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Enroll Now
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}