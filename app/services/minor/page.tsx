import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Database, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";

/* ================= SEO ================= */
export const metadata = {
    title:
        "Final Year Minor & Major Project Guidance for Students | NexalyTech",
    description:
        "Get expert guidance for final year minor and major projects in Full Stack, Data Analytics, AI/ML, and Generative AI. NexalyTech provides complete support from idea selection to project submission.",
    keywords: [
        "final year projects for CSE",
        "minor project guidance",
        "major project help",
        "AI ML projects for students",
        "full stack projects with source code",
        "data analytics projects",
        "generative AI student projects",
        "engineering project guidance India"
    ],
    alternates: {
        canonical: "https://www.nexalytech.com/services/projects",
    },
    openGraph: {
        title: "Project Guidance for Students | NexalyTech",
        description:
            "Complete support for final year projects in AI, Full Stack, and Data Analytics.",
        url: "https://www.nexalytech.com/services/projects",
        siteName: "NexalyTech",
        type: "website",
    },
};

/* ================= PAGE ================= */
export default function ProjectsPage() {
    return (
        <>
            <Navbar />

            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-24 px-6 md:px-12 py-14">

                {/* ================= SCHEMA ================= */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Final Year Project Guidance",
                            provider: {
                                "@type": "Organization",
                                name: "NexalyTech",
                                url: "https://www.nexalytech.com",
                            },
                            description:
                                "Minor and major project guidance for students in AI, Full Stack, and Data Analytics.",
                        }),
                    }}
                />

                {/* ================= HERO ================= */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Final Year Minor & Major Project Guidance for Students <br />
                            <span className="text-blue-600">
                                Full Stack • AI/ML • Data Analytics
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            NexalyTech helps students build high-quality academic projects with
                            complete support from idea selection to final submission. Work on
                            real-world, industry-level projects with expert mentorship.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/minor1.png"
                            alt="Final year project development guidance by NexalyTech"
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
                        Project Domains: Full Stack, AI/ML & Data Analytics
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Choose from multiple high-demand domains for your final year projects
                        based on your academic requirements and career goals.
                    </p>

                    <div className="mt-12 grid md:grid-cols-4 gap-6">

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Code2 className="mx-auto w-10 h-10 text-blue-600" />
                                <h3 className="mt-4 font-semibold">Full Stack Projects</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Build complete web applications using frontend and backend technologies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <LineChart className="mx-auto w-10 h-10 text-green-600" />
                                <h3 className="mt-4 font-semibold">Data Analytics Projects</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Work on data analysis, visualization, and real-world insights.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Brain className="mx-auto w-10 h-10 text-purple-600" />
                                <h3 className="mt-4 font-semibold">AI / ML Projects</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Develop machine learning models and intelligent systems.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-xl transition border-0">
                            <CardContent className="p-6 text-center">
                                <Database className="mx-auto w-10 h-10 text-pink-600" />
                                <h3 className="mt-4 font-semibold">Generative AI Projects</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Build chatbots, automation tools, and AI-powered applications.
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
                            alt="Student project mentorship and guidance"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Personalized Project Mentorship
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Get one-on-one mentorship, regular guidance, and technical support
                            to successfully complete your academic projects with confidence.
                        </p>
                    </div>
                </section>

                {/* ================= PROCESS ================= */}
                <section className="max-w-6xl mx-auto mt-28 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Final Year Project Development Process
                    </h2>

                    <div className="mt-12 grid md:grid-cols-4 gap-6 text-left">

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-blue-600">1. Topic Selection</h3>
                            <p className="mt-2 text-gray-600">
                                Choose the best project idea based on your domain and interest.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-purple-600">2. Planning</h3>
                            <p className="mt-2 text-gray-600">
                                Define tools, architecture, and development roadmap.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-green-600">3. Development</h3>
                            <p className="mt-2 text-gray-600">
                                Build your project step-by-step with expert guidance.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="font-semibold text-pink-600">4. Final Submission</h3>
                            <p className="mt-2 text-gray-600">
                                Complete documentation, PPT, and final submission support.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <div className="flex justify-center">
                        <Image
                            src="/minor3.png"
                            alt="Final year project presentation support"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Start Your Final Year Project Today
                        </h2>

                        <p className="mt-5 text-blue-100">
                            Get complete guidance from idea selection to submission with NexalyTech experts.
                            Build industry-ready projects and boost your career opportunities.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}