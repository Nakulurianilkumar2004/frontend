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
        "Career Tips for Students | AI, Full Stack & Tech Career Roadmap",
    description:
        "Discover the best career roadmap for students in AI, Full Stack Development, and Data Science. Learn skills, build projects, and grow your tech career with expert guidance.",
};

/* ================= PAGE ================= */
export default function CareerBlogPage() {
    return (
        <main className="w-full min-h-screen bg-white">

            {/* ================= BACK ================= */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-black"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                </Link>
            </div>

            {/* ================= HERO ================= */}
            <section className="max-w-3xl mx-auto text-center px-6 py-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Career Tips for Students in Tech 🚀
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Confused about your tech career? Whether you're aiming for AI,
                    Full Stack Development, or Data Science, the right roadmap,
                    skills, and projects can make all the difference.
                    Learn how to start, grow, and succeed in the tech industry.
                </p>
            </section>

            {/* ================= IMAGE ================= */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/minor1.png"
                        alt="Career guidance for students"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* ================= ROADMAP ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    Step-by-Step Career Roadmap
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Learn fundamentals (programming, logic building)",
                        "Choose your domain (AI, Full Stack, Data Science)",
                        "Build real-world projects",
                        "Create a strong portfolio (GitHub + resume)",
                        "Practice interviews and problem-solving",
                        "Apply for internships & jobs",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 h-5 w-5" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WHAT WE HELP ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    How We Help You Grow
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {[
                        "Personalized career guidance",
                        "Project-based learning approach",
                        "Mentorship from industry experts",
                        "Resume & portfolio building",
                        "Interview preparation",
                        "Real-world skill development",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-blue-600 mt-1 h-5 w-5" />
                            <p className="text-gray-700">{item}</p>
                        </div>
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
                            How do I start my career in AI?
                        </AccordionTrigger>
                        <AccordionContent>
                            Start with Python basics, then move into Machine Learning,
                            Deep Learning, and explore Generative AI tools.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Which is better: AI or Full Stack?
                        </AccordionTrigger>
                        <AccordionContent>
                            Both are great career options. Choose AI if you love data
                            and intelligence systems, or Full Stack if you enjoy building applications.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Are projects important for jobs?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, projects are crucial. They demonstrate your practical skills
                            and significantly improve your chances of getting hired.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Can beginners enter tech without experience?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, by learning fundamentals, building projects, and following
                            a structured roadmap, beginners can successfully enter tech.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </section>

            {/* ================= CTA ================= */}
            <section className="max-w-5xl mx-auto px-6 mt-20 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Need Career Guidance? 🎯
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Get expert mentorship, build real-world skills, and start your
                        journey towards a successful tech career today.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-5 text-lg">
                            Get Career Guidance
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}