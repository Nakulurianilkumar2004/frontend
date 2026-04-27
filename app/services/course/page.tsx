import Image from "next/image";
import Navbar from "@/components/Navbar"; // ✅ IMPORT YOUR NAVBAR
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

/* ================= SEO ================= */
export const metadata = {
    title: "1 Month AI Course | Python, ML, DL, GenAI",
    description:
        "Learn Python, Machine Learning, Deep Learning, and Generative AI from basics in a 1-month intensive course with real-world guidance.",
};

export default function CoursePage() {
    return (
        <>
            {/* ================= NAVBAR ================= */}
            <Navbar />

            {/* ================= MAIN ================= */}
            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 pt-24 pb-14">
                {/* 👆 pt-24 FIXES NAVBAR OVERLAP */}

                {/* ================= HERO ================= */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            1 Month AI Course <br />
                            <span className="text-blue-600">
                                Python • ML • DL • GenAI
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            Master Artificial Intelligence from basics in just one month.
                            Learn Python, Machine Learning, Deep Learning, and Generative AI
                            with hands-on guidance and real-world projects.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/course1.png"
                            alt="AI learning collaboration"
                            width={520}
                            height={420}
                            priority
                            className="rounded-3xl shadow-2xl"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </section>

                {/* ================= COURSE MODULES ================= */}
                <section className="max-w-6xl mx-auto mt-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What You Will Learn
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A complete roadmap to become industry-ready in AI technologies.
                    </p>

                    <div className="mt-12 grid md:grid-cols-4 gap-6">

                        <Card className="rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border-0">
                            <CardContent className="p-6 text-center">
                                <Code2 className="mx-auto w-10 h-10 text-blue-600" />
                                <h3 className="mt-4 font-semibold">Python</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Learn Python fundamentals for AI development.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border-0">
                            <CardContent className="p-6 text-center">
                                <Brain className="mx-auto w-10 h-10 text-purple-600" />
                                <h3 className="mt-4 font-semibold">Machine Learning</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Build predictive models and ML algorithms.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border-0">
                            <CardContent className="p-6 text-center">
                                <Database className="mx-auto w-10 h-10 text-green-600" />
                                <h3 className="mt-4 font-semibold">Deep Learning</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Understand neural networks and advanced AI models.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border-0">
                            <CardContent className="p-6 text-center">
                                <Sparkles className="mx-auto w-10 h-10 text-pink-600" />
                                <h3 className="mt-4 font-semibold">Generative AI</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Work with ChatGPT, AI tools, and automation.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* ================= FEATURE ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center">
                        <Image
                            src="/course2.png"
                            alt="AI technologies overview"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Hands-On Learning Experience
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Gain practical experience by working on real-world projects and
                            understanding how AI technologies are used in industry.
                        </p>
                    </div>
                </section>

                {/* ================= ROADMAP ================= */}
                <section className="max-w-6xl mx-auto mt-28 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Learning Roadmap
                    </h2>

                    <div className="mt-12 grid md:grid-cols-4 gap-6 text-left">

                        {[
                            ["Week 1", "Python fundamentals and programming basics.", "blue"],
                            ["Week 2", "Machine Learning concepts and model building.", "purple"],
                            ["Week 3", "Deep Learning and neural networks.", "green"],
                            ["Week 4", "Generative AI tools and real-world applications.", "pink"],
                        ].map(([title, desc, color], i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                                <h3 className={`font-semibold text-${color}-600`}>{title}</h3>
                                <p className="mt-2 text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <div className="flex justify-center">
                        <Image
                            src="/course3.png"
                            alt="AI course training"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Start Your AI Journey
                        </h2>

                        <p className="mt-5 text-blue-100">
                            Join our 1-month intensive AI course and build strong foundations
                            in Python, Machine Learning, Deep Learning, and Generative AI.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}