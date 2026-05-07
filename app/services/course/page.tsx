import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

/* ================= SEO ================= */
export const metadata = {
    title:
        "1 Month AI Course – Learn Python, Machine Learning, Deep Learning & Generative AI | NexalyTech",
    description:
        "Join NexalyTech’s 1-month AI course and learn Python, Machine Learning, Deep Learning, and Generative AI with hands-on projects and expert guidance.",
    keywords: [
        "AI course India",
        "1 month AI course",
        "learn machine learning",
        "deep learning course",
        "generative AI course",
        "python for AI",
        "AI training program"
    ],
    alternates: {
        canonical: "https://www.nexalytech.com/services/course",
    },
};

export default function CoursePage() {
    return (
        <>
            <Navbar />

            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 pt-24 pb-14">

                {/* HERO */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            1 Month AI Course – Python, Machine Learning & Generative AI
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            Learn Artificial Intelligence from scratch with NexalyTech.
                            Master Python, Machine Learning, Deep Learning, and Generative AI
                            through real-world projects and hands-on training.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/course1.png"
                            alt="AI course training with Python, Machine Learning and Generative AI"
                            width={520}
                            height={420}
                            priority
                            className="rounded-3xl shadow-2xl w-full h-auto"
                        />
                    </div>
                </section>

                {/* MODULES */}
                <section className="max-w-6xl mx-auto mt-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What You Will Learn in This AI Course
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A structured roadmap covering Python, Machine Learning,
                        Deep Learning, and Generative AI technologies.
                    </p>

                    <div className="mt-12 grid md:grid-cols-4 gap-6">

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Code2 className="mx-auto w-10 h-10 text-blue-600" />
                                <h3 className="mt-4 font-semibold">Python for AI</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Learn Python programming for AI development.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Brain className="mx-auto w-10 h-10 text-purple-600" />
                                <h3 className="mt-4 font-semibold">Machine Learning</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Build ML models and predictive systems.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Database className="mx-auto w-10 h-10 text-green-600" />
                                <h3 className="mt-4 font-semibold">Deep Learning</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Learn neural networks and advanced AI concepts.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Sparkles className="mx-auto w-10 h-10 text-pink-600" />
                                <h3 className="mt-4 font-semibold">Generative AI</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Work with ChatGPT, automation, and AI tools.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* FEATURE */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center">
                        <Image
                            src="/course2.png"
                            alt="Hands-on AI learning and machine learning projects"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg w-full h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Hands-On AI Project Experience
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Work on real-world AI projects and gain practical experience
                            in machine learning and generative AI applications.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <div className="flex justify-center">
                        <Image
                            src="/course3.png"
                            alt="AI course enrollment and training session"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg w-full h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Start Your AI Career Today
                        </h2>

                        <p className="mt-5 text-blue-100">
                            Join NexalyTech’s AI course and become industry-ready
                            with skills in Python, Machine Learning, and Generative AI.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}