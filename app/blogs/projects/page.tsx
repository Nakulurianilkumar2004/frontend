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

/* ================= SEO ================= */
export const metadata = {
    metadataBase: new URL("https://www.nexalytech.com"),

    title:
        "Minor & Major Project Guidance for Students | AI, ML & Full Stack Projects | NexalyTech",

    description:
        "Get expert guidance for minor and major student projects in AI, Machine Learning, Full Stack Development, Data Analytics, and Generative AI. End-to-end project support from idea selection to final submission.",

    keywords: [
        "minor project guidance for students",
        "major project help engineering students",
        "AI project ideas for students",
        "machine learning projects for final year",
        "full stack development projects",
        "data analytics student projects",
        "generative AI project ideas",
        "final year project help India",
    ],

    openGraph: {
        title:
            "Student Project Guidance | AI, ML & Full Stack Projects - NexalyTech",
        description:
            "Build industry-ready academic projects with expert mentorship in AI, ML, Full Stack, and Data Analytics.",
        url: "https://www.nexalytech.com/blogs/projects",
        siteName: "NexalyTech",
        images: [
            {
                url: "/minor1.png",
                width: 1200,
                height: 630,
                alt: "Student Project Guidance Services",
            },
        ],
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Student Project Guidance | NexalyTech",
        description:
            "Complete guidance for AI, ML, Full Stack, and Data Analytics student projects.",
        images: ["/minor1.png"],
    },
};

/* ================= STRUCTURED DATA ================= */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Minor & Major Project Guidance for Students",
    description:
        "Expert academic project guidance in AI, ML, Full Stack Development, and Data Analytics.",
    author: {
        "@type": "Organization",
        name: "NexalyTech",
    },
    publisher: {
        "@type": "Organization",
        name: "NexalyTech",
    },
};

/* ================= DATA ================= */
const features = [
    "Project idea selection based on latest industry trends",
    "End-to-end full stack development guidance",
    "AI/ML model development and integration",
    "Professional documentation (IEEE format reports)",
    "PPT preparation and viva support",
    "Debugging, testing, and project optimization",
];

const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & SQL",
    "Python Programming",
    "Machine Learning",
    "Deep Learning",
    "Data Analytics",
    "Generative AI",
];

/* ================= PAGE ================= */
export default function ProjectsBlogPage() {
    return (
        <main className="w-full min-h-screen bg-white">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ================= NAV ================= */}
            <nav className="max-w-6xl mx-auto px-6 pt-10">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-black transition"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blogs
                </Link>
            </nav>

            {/* ================= HERO ================= */}
            <header className="max-w-3xl mx-auto text-center px-6 py-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Minor & Major Project Guidance for Students
                </h1>

                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Get complete support for <strong>AI, Machine Learning, Full Stack Development</strong>,
                    and <strong>Data Analytics projects</strong>. We help students build
                    <strong> industry-ready academic projects</strong> from idea to final submission.
                </p>
            </header>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/minor1.png"
                        alt="Student minor and major project development guidance"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= SEO CONTENT BLOCK ================= */}
            <section className="max-w-4xl mx-auto px-6 py-10 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Build Industry-Ready Academic Projects with Expert Guidance
                </h2>

                <p className="text-sm leading-7">
                    NexalyTech provides professional minor and major project guidance
                    for engineering and computer science students. We focus on helping
                    students build real-world, industry-relevant projects in domains
                    such as Artificial Intelligence, Machine Learning, Full Stack
                    Development, Data Analytics, and Generative AI.
                </p>

                <p className="text-sm leading-7 mt-4">
                    Our mentorship covers everything from idea selection, system design,
                    development, debugging, documentation, and final presentation,
                    ensuring your project is academically strong and industry-ready.
                </p>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    What We Help You With
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 h-5 w-5 shrink-0" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= TECHNOLOGIES ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Technologies & Domains Covered
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-full text-sm text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto px-6 mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">
                    <AccordionItem value="1">
                        <AccordionTrigger>
                            Do you help in selecting project topics?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we help you choose the best project topic based on current industry trends and academic requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            Do you support AI and ML projects?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we specialize in AI, Machine Learning, Deep Learning, and Generative AI project development.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Do you provide full project guidance?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide end-to-end support including development, documentation, and final submission.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Is this suitable for beginners?
                        </AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We guide beginners step-by-step through the entire project lifecycle.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-20 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start Your Project Today
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Get expert mentorship and build a high-quality project that improves your academic and career profile.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg shadow-md hover:scale-105 transition">
                            Get Guidance
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}