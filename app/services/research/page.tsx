import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ShieldCheck, UploadCloud } from "lucide-react";
import Navbar from "@/components/Navbar";

/* ================= SEO ================= */
export const metadata = {
    title: "Research Paper Writing & Publication Guidance | NexalyTech",
    description:
        "Get expert research paper writing help, plagiarism removal, AI content refinement, and IEEE/Springer publication support. NexalyTech provides complete research guidance for students in India.",
    keywords: [
        "research paper writing help",
        "IEEE paper publication support",
        "Springer journal submission",
        "plagiarism removal service",
        "AI content humanization",
        "research guidance for students India",
        "final year research paper help"
    ],
    alternates: {
        canonical: "https://www.nexalytech.com/services/research",
    },
    openGraph: {
        title: "Research Paper Guidance | NexalyTech",
        description:
            "Complete research paper writing and publication support for students and professionals.",
        url: "https://www.nexalytech.com/services/research",
        siteName: "NexalyTech",
        type: "website",
    },
};

/* ================= PAGE ================= */
export default function ResearchPage() {
    return (
        <>
            <Navbar />

            <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-24 px-6 md:px-12 py-14">

                {/* ================= SCHEMA (SEO BOOST) ================= */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Research Paper Writing & Publication Guidance",
                            provider: {
                                "@type": "Organization",
                                name: "NexalyTech",
                                url: "https://www.nexalytech.com",
                            },
                            description:
                                "Research paper writing, plagiarism removal, and publication support for students.",
                        }),
                    }}
                />

                {/* ================= HERO ================= */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Research Paper Writing & Publication Guidance <br />
                            <span className="text-blue-600">
                                From Idea to IEEE & Springer Publication
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            NexalyTech helps students and professionals with complete research paper development,
                            including writing, plagiarism removal, AI content refinement, and publication in reputed
                            journals and conferences.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/research1.png"
                            alt="Research paper writing guidance by NexalyTech"
                            width={520}
                            height={420}
                            priority
                            className="rounded-3xl shadow-2xl"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </section>

                {/* ================= SERVICES ================= */}
                <section className="max-w-6xl mx-auto mt-24 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Research Paper Writing, Plagiarism Removal & Publication Services
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Complete research support to help you publish high-quality academic papers with confidence.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <FileText className="mx-auto w-12 h-12 text-blue-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Research Paper Writing
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Structured research paper writing including abstract, methodology,
                                    results, and conclusion for academic and IEEE standards.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <ShieldCheck className="mx-auto w-12 h-12 text-green-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Plagiarism & AI Content Removal
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Reduce plagiarism and humanize AI-generated content to meet strict journal guidelines.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <UploadCloud className="mx-auto w-12 h-12 text-purple-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    IEEE & Springer Submission
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    End-to-end support for submitting research papers to top journals and conferences.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* ================= FEATURE ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center">
                        <Image
                            src="/research2.png"
                            alt="Plagiarism checking and research paper quality improvement"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Ensure Quality, Originality & Acceptance
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Our experts ensure your research paper meets academic integrity standards,
                            improves readability, and increases chances of acceptance in reputed journals.
                        </p>
                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <div className="flex justify-center">
                        <Image
                            src="/research3.png"
                            alt="Research paper conference presentation support"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Start Your Research Paper Today
                        </h2>

                        <p className="mt-5 text-blue-100">
                            Get complete guidance from idea selection to final publication.
                            Work with NexalyTech experts and publish your research with confidence.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}