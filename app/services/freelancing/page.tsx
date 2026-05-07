"use client";

import Head from "next/head";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Search } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function FreelancingPage() {
    return (
        <>
            {/* ================= SEO ================= */}
            <Head>
                <title>
                    Freelancing Services for AI, Full Stack & SEO | NexalyTech
                </title>

                <meta
                    name="description"
                    content="NexalyTech offers expert freelancing services in AI development, full stack web development, and SEO optimization. Build scalable, high-performance applications for your business."
                />

                <meta
                    name="keywords"
                    content="freelancing services India, AI development, full stack development, SEO services, web development company, hire developers India"
                />

                <meta name="robots" content="index, follow" />

                {/* Open Graph (for social + SEO boost) */}
                <meta property="og:title" content="Freelancing Services | NexalyTech" />
                <meta
                    property="og:description"
                    content="AI, Full Stack & SEO freelancing services for scalable digital solutions."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.nexalytech.com/services/freelancing"
                />

                {/* Canonical */}
                <link
                    rel="canonical"
                    href="https://www.nexalytech.com/services/freelancing"
                />
            </Head>

            <Navbar />

            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-24 px-6 md:px-12 py-12">

                {/* ================= HERO ================= */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Freelancing Services for AI, Full Stack & SEO Development
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            NexalyTech provides professional freelancing services including AI development,
                            full stack web applications, and SEO optimization. We build scalable,
                            high-performance, and production-ready solutions for startups,
                            businesses, and students.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/freelancing1.png"
                            alt="AI and Full Stack freelancing services"
                            width={520}
                            height={420}
                            priority
                            loading="eager"
                            className="rounded-3xl shadow-2xl w-full h-auto"
                        />
                    </motion.div>
                </section>

                {/* ================= SERVICES ================= */}
                <section className="max-w-6xl mx-auto mt-24 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        AI, Full Stack & SEO Freelancing Services
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Complete freelancing solutions including web development,
                        artificial intelligence, and search engine optimization.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <Code className="mx-auto w-12 h-12 text-blue-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Full Stack Development
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Build scalable web applications using React, Next.js,
                                    and modern backend technologies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <Brain className="mx-auto w-12 h-12 text-purple-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    AI Development Services
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    AI-powered automation, chatbots, and intelligent systems.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <Search className="mx-auto w-12 h-12 text-green-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    SEO Optimization Services
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Improve rankings, performance, and visibility on search engines.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* ================= PROCESS ================= */}
                <section className="max-w-6xl mx-auto mt-28 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Freelancing Development Process
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our structured workflow ensures high-quality project delivery
                        and client satisfaction.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold text-blue-600">
                                Requirement Analysis
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Understanding business needs, goals, and project requirements.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold text-purple-600">
                                Planning & Strategy
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Creating architecture and roadmap for efficient development.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold text-green-600">
                                Development & Delivery
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Building scalable and optimized applications.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/freelancing2.png"
                            alt="Freelancing client discussion"
                            width={480}
                            height={360}
                            loading="lazy"
                            className="rounded-2xl shadow-lg w-full h-auto"
                        />
                    </motion.div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Start Your Freelancing Project Today
                        </h2>

                        <p className="mt-5 text-blue-100 max-w-lg">
                            Work with NexalyTech to build scalable, AI-powered,
                            and SEO-optimized solutions for your business.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}