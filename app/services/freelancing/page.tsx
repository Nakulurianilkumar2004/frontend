"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Search } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // ✅ IMPORT

export default function FreelancingClient() {
    return (
        <>
            {/* ✅ NAVBAR */}
            <Navbar />

            {/* ✅ MAIN WITH TOP PADDING */}
            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-24 px-6 md:px-12 py-12">

                {/* ================= HERO SECTION ================= */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Freelancing Project Development <br />
                            <span className="text-blue-600">AI • Full Stack • SEO</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            We collaborate closely with clients to understand their needs and
                            deliver high-quality, scalable, and performance-driven applications
                            using modern technologies and AI-powered solutions.
                        </p>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/freelancing1.png"
                            alt="Freelancing development services illustration"
                            width={520}
                            height={420}
                            priority
                            className="rounded-3xl shadow-2xl"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </motion.div>
                </section>

                {/* ================= SERVICES ================= */}
                <section className="max-w-6xl mx-auto mt-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Core Services
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We provide complete development solutions tailored to your business needs.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <Code className="mx-auto w-12 h-12 text-blue-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Full Stack Development
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    End-to-end web applications using modern frameworks and scalable architecture.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <Brain className="mx-auto w-12 h-12 text-purple-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    AI-Based Solutions
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Smart applications with AI integration including automation and intelligent systems.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <Search className="mx-auto w-12 h-12 text-green-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    SEO Optimization
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Improve visibility with optimized performance and search engine strategies.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* ================= PROCESS SECTION ================= */}
                <section className="max-w-6xl mx-auto mt-28 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        How We Work
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our process ensures clear communication, proper planning, and high-quality delivery.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-blue-600">
                                1. Requirement Understanding
                            </h3>
                            <p className="mt-3 text-gray-600">
                                We carefully analyze and understand the client’s requirements,
                                goals, and project expectations.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-purple-600">
                                2. Research & Planning
                            </h3>
                            <p className="mt-3 text-gray-600">
                                We perform detailed research and create a structured plan
                                to ensure the best solution approach.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-green-600">
                                3. Development & Communication
                            </h3>
                            <p className="mt-3 text-gray-600">
                                We build the project with continuous updates and communication
                                to ensure alignment with client expectations.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= CTA SECTION ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/freelancing2.png"
                            alt="Client discussion"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </motion.div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Let’s Work Together
                        </h2>

                        <p className="mt-5 text-blue-100 max-w-lg">
                            Share your project idea and we will help you build a powerful,
                            scalable, and production-ready solution.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}