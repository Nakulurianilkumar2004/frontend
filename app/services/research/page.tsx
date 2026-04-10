import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ShieldCheck, UploadCloud } from "lucide-react";
import Navbar from "@/components/Navbar"; // ✅ ADD THIS

/* ================= SEO ================= */
export const metadata = {
    title: "Research Paper Guidance | Zolentha",
    description:
        "Expert guidance for research paper writing, plagiarism removal, AI content refinement, and journal/conference publication support.",
};

export default function ResearchPage() {
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
                            Research Paper Guidance <br />
                            <span className="text-blue-600">From Idea to Publication</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            We guide students and professionals through every stage of research
                            paper development — from idea validation to publication in reputed
                            journals and conferences.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/research1.png"
                            alt="Research collaboration"
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
                        Our Research Services
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Complete support to ensure your research paper meets academic and publication standards.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <FileText className="mx-auto w-12 h-12 text-blue-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Research Writing
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Structured research paper writing including abstract,
                                    methodology, results, and conclusion.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <ShieldCheck className="mx-auto w-12 h-12 text-green-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Plagiarism & AI Removal
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Reduce plagiarism and refine AI-generated content to meet journal standards.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl shadow-md hover:shadow-2xl transition border-0">
                            <CardContent className="p-8 text-center">
                                <UploadCloud className="mx-auto w-12 h-12 text-purple-600" />
                                <h3 className="mt-5 text-xl font-semibold">
                                    Paper Submission
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Guidance for submitting papers to IEEE, Springer, and other conferences/journals.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* ================= FEATURE SECTION ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center">
                        <Image
                            src="/research2.png"
                            alt="Plagiarism check"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Ensure Quality & Originality
                        </h2>

                        <p className="mt-5 text-gray-600">
                            We ensure your paper is free from plagiarism and meets academic
                            integrity standards. Our experts refine content to make it
                            publication-ready.
                        </p>
                    </div>
                </section>

                {/* ================= FINAL SECTION ================= */}
                <section className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 md:p-14 rounded-3xl shadow-xl">

                    <div className="flex justify-center">
                        <Image
                            src="/research3.png"
                            alt="Conference presentation"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Publish with Confidence 🚀
                        </h2>

                        <p className="mt-5 text-blue-100">
                            From research idea to final submission, we guide you at every step
                            to achieve successful publication in top journals and conferences.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}