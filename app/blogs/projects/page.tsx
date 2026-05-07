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
    title:
        "Minor & Major Project Guidance | AI, Full Stack & Data Analytics Projects | NexalyTech",
    description:
        "Get expert guidance for minor and major academic projects in AI, Machine Learning, Full Stack Development, Data Analytics, and Generative AI. End-to-end support from idea to final submission.",
    keywords: [
        "minor project guidance",
        "major project help",
        "AI projects for students",
        "full stack project ideas",
        "machine learning projects",
        "data analytics projects",
        "student project development",
        "generative AI projects",
    ],
    openGraph: {
        title:
            "Project Guidance for Students | AI, Full Stack & ML Projects - NexalyTech",
        description:
            "Build industry-ready academic projects with expert mentorship and real-world guidance.",
        url: "https://www.nexalytech.com/blogs/projects",
        siteName: "NexalyTech",
        images: [
            {
                url: "/minor1.png",
                width: 1200,
                height: 630,
                alt: "Project Guidance for Students",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Project Guidance | NexalyTech",
        description:
            "Get complete guidance for AI, Full Stack, and ML projects with real-world implementation.",
        images: ["/minor1.png"],
    },
};

/* ================= DATA ================= */
const features = [
    "Project idea selection based on latest trends",
    "Complete development guidance (frontend + backend)",
    "AI/ML model integration and training",
    "Documentation (IEEE format, reports)",
    "PPT preparation & viva support",
    "Debugging, testing, and optimization",
];

const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & SQL",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Analytics",
    "Generative AI",
];

/* ================= PAGE ================= */
export default function ProjectsBlogPage() {
    return (
        <main className="w-full min-h-screen bg-white">

            {/* ================= BACK ================= */}
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
                    Build <strong>industry-ready academic projects</strong> with expert mentorship.
                    We help students develop high-quality projects in{" "}
                    <strong>Full Stack Development, AI, Machine Learning, Data Analytics</strong>, and{" "}
                    <strong>Generative AI</strong> — from idea to final submission.
                </p>
            </header>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/minor1.png"
                        alt="Student project development and guidance in AI and full stack"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                    />
                </div>
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
                            Yes, we help you choose the best topic based on trends,
                            your domain, and academic requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            Which domains do you support?
                        </AccordionTrigger>
                        <AccordionContent>
                            We support Full Stack Development, AI/ML, Data Analytics,
                            and Generative AI projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>
                            Will you guide until final submission?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide complete end-to-end support including
                            development, documentation, and final delivery.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="4">
                        <AccordionTrigger>
                            Is this suitable for beginners?
                        </AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We provide step-by-step guidance for beginners.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="5">
                        <AccordionTrigger>
                            Do you provide real-world project ideas?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we focus on industry-level projects that improve
                            your portfolio and job opportunities.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-20 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Need Help with Your Project?
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Get expert mentorship and build a project that stands out
                        in your academic and professional journey.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg shadow-md hover:scale-105 transition">
                            Get Project Guidance
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}