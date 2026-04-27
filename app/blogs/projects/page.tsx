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
        "Minor & Major Project Guidance | Full Stack, AI, ML & Data Analytics Projects",
    description:
        "Get expert guidance for minor and major academic projects in Full Stack Development, AI/ML, Data Analytics, and Generative AI. Complete support from idea to final submission.",
};

/* ================= PAGE ================= */
export default function ProjectsBlogPage() {
    return (
        <main className="w-full min-h-screen bg-white">

            {/* ================= BACK ================= */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-black"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blogs
                </Link>
            </div>

            {/* ================= HERO ================= */}
            <section className="max-w-3xl mx-auto text-center px-6 py-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Minor & Major Project Guidance for Students 🎓
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Build industry-ready projects with expert guidance. We help students
                    develop high-quality academic projects in Full Stack Development,
                    Artificial Intelligence, Machine Learning, Data Analytics, and Generative AI.
                    From idea selection to final submission — we support you end-to-end.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/minor1.png"
                        alt="Student project development guidance"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        loading="eager"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= WHAT WE OFFER ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    What We Help You With
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Project idea selection based on latest trends",
                        "Complete development guidance (frontend + backend)",
                        "AI/ML model integration and training",
                        "Documentation (IEEE format, reports)",
                        "PPT preparation & viva support",
                        "Debugging, testing, and optimization",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 h-5 w-5" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= TECHNOLOGIES ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Technologies & Domains Covered
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {[
                        "React & Next.js",
                        "Node.js & Express",
                        "MongoDB & SQL",
                        "Python",
                        "Machine Learning",
                        "Deep Learning",
                        "Data Analytics",
                        "Generative AI",
                    ].map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="max-w-3xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="mt-6">

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Do you help in selecting project topics?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we help you choose the best project topic based on your domain,
                            current industry trends, and academic requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Which domains do you support?
                        </AccordionTrigger>
                        <AccordionContent>
                            We support Full Stack Development, Data Analytics, AI/ML,
                            and Generative AI-based projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Will you guide until final submission?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide end-to-end support including development,
                            documentation, PPT preparation, and final submission.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Is this suitable for beginners?
                        </AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We provide step-by-step guidance so even beginners
                            can successfully complete their projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Do you provide real-world project ideas?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we focus on real-world, industry-level projects that help
                            you build a strong portfolio and improve job opportunities.
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
                        Get expert mentorship and complete your minor or major project
                        with confidence. Build something that stands out in your academic
                        and professional journey.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Get Project Guidance
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}