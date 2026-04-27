import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Database, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar"; // ✅ ADD THIS

/* ================= SEO ================= */
export const metadata = {
    title: "Minor & Major Project Guidance | Full Stack, AI, ML Projects",
    description:
        "Get expert guidance for minor and major projects in Full Stack, Data Analytics, AI/ML, and Generative AI. Complete support from idea to final submission.",
};

export default function ProjectsPage() {
    return (
        <>
            {/* ✅ NAVBAR */}
            <Navbar />

            {/* ✅ MAIN WITH TOP SPACING */}
            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-24 px-6 md:px-12 py-14">

                {/* ================= HERO ================= */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Minor & Major Project Guidance <br />
                            <span className="text-blue-600">
                                Full Stack • AI/ML • Data Analytics
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            We guide students in building high-quality academic projects with
                            complete support from idea selection to final submission. Our focus
                            is on real-world, industry-level project development.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/minor1.png"
                            alt="Project development teamwork"
                            width={520}
                            height={420}
                            priority
                            className="rounded-3xl shadow-2xl"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </section>

                {/* ================= DOMAINS ================= */}
                <section className="max-w-6xl mx-auto mt-24 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Project Domains We Cover
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Choose from multiple domains based on your academic requirements and career goals.
                    </p>

                    <div className="mt-12 grid md:grid-cols-4 gap-6">

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Code2 className="mx-auto w-10 h-10 text-blue-600" />
                                <h3 className="mt-4 font-semibold">Full Stack</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Web applications with frontend & backend integration.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <LineChart className="mx-auto w-10 h-10 text-green-600" />
                                <h3 className="mt-4 font-semibold">Data Analytics</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Data analysis, visualization, and insights.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Brain className="mx-auto w-10 h-10 text-purple-600" />
                                <h3 className="mt-4 font-semibold">AI / ML</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Machine learning models and intelligent systems.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Database className="mx-auto w-10 h-10 text-pink-600" />
                                <h3 className="mt-4 font-semibold">Generative AI</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Chatbots, automation, and AI-powered apps.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* ================= FEATURE ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center">
                        <Image
                            src="/minor2.png"
                            alt="Project mentoring"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Personalized Mentorship
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Our mentors guide you step-by-step with regular support,
                            helping you understand concepts and successfully complete your project.
                        </p>
                    </div>
                </section>

                {/* ================= PROCESS ================= */}
                <section className="max-w-6xl mx-auto mt-28 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Project Guidance Process
                    </h2>

                    <div className="mt-12 grid md:grid-cols-4 gap-6 text-left">

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-blue-600">1. Topic Selection</h3>
                            <p className="mt-2 text-gray-600">
                                Choose the right project idea based on your domain.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-purple-600">2. Planning</h3>
                            <p className="mt-2 text-gray-600">
                                Define architecture, tools, and project roadmap.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-green-600">3. Development</h3>
                            <p className="mt-2 text-gray-600">
                                Build the project with continuous guidance.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-pink-600">4. Final Submission</h3>
                            <p className="mt-2 text-gray-600">
                                Documentation, PPT, and submission support.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= FINAL SECTION ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <div className="flex justify-center">
                        <Image
                            src="/minor3.png"
                            alt="Project presentation"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Complete Guidance Until Submission
                        </h2>

                        <p className="mt-5 text-blue-100">
                            From idea to final submission, we ensure your project is
                            high-quality, well-documented, and ready for academic evaluation.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}