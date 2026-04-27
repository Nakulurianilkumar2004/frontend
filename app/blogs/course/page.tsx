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
        "1 Month AI Course | Learn Python, Machine Learning, Deep Learning & Generative AI",
    description:
        "Join our 1-month AI course and master Python, Machine Learning, Deep Learning, and Generative AI with hands-on projects and real-world guidance.",
};

/* ================= PAGE ================= */
export default function CourseBlogPage() {
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
                    Learn AI from Scratch in 1 Month
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Kickstart your journey into Artificial Intelligence with our
                    structured 1-month course. Learn Python, Machine Learning,
                    Deep Learning, and Generative AI with real-world examples,
                    guided mentorship, and hands-on projects.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/course1.png"
                        alt="AI course learning"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= COURSE HIGHLIGHTS ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    What You Will Learn
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Python programming from basics",
                        "Core Machine Learning concepts",
                        "Deep Learning fundamentals",
                        "Generative AI tools & applications",
                        "Hands-on real-world projects",
                        "Industry-level guidance & mentorship",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 h-5 w-5" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CURRICULUM ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Course Curriculum (4 Weeks Plan)
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">

                    <div className="p-5 border rounded-xl">
                        <h3 className="font-semibold text-lg">Week 1</h3>
                        <p className="text-gray-600 mt-2">
                            Python basics, data structures, and programming fundamentals.
                        </p>
                    </div>

                    <div className="p-5 border rounded-xl">
                        <h3 className="font-semibold text-lg">Week 2</h3>
                        <p className="text-gray-600 mt-2">
                            Machine Learning concepts, algorithms, and model building.
                        </p>
                    </div>

                    <div className="p-5 border rounded-xl">
                        <h3 className="font-semibold text-lg">Week 3</h3>
                        <p className="text-gray-600 mt-2">
                            Deep Learning basics, neural networks, and practical use cases.
                        </p>
                    </div>

                    <div className="p-5 border rounded-xl">
                        <h3 className="font-semibold text-lg">Week 4</h3>
                        <p className="text-gray-600 mt-2">
                            Generative AI, project development, and real-world applications.
                        </p>
                    </div>

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
                            Is this course beginner-friendly?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we start from Python basics and gradually move into
                            advanced AI topics step-by-step.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Do I need prior coding experience?
                        </AccordionTrigger>
                        <AccordionContent>
                            No prior experience is required. This course is designed
                            for beginners as well as students.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Will I build projects during the course?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, you will work on real-world AI projects to gain
                            practical experience and build your portfolio.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Will I get mentorship support?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide continuous mentorship and guidance
                            throughout the course duration.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-20 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start Your AI Journey Today
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Build in-demand AI skills and stand out in your career.
                        Join our 1-month course and start building real-world projects today.
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