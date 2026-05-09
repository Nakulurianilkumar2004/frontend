"use client";

import React from "react";
import Image from "next/image";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

/* ================= TYPES ================= */
interface FAQItem {
    question: string;
    answer: string;
}

/* ================= SEO FRIENDLY FAQ DATA ================= */
const faqs: FAQItem[] = [
    {
        question: "What is NexalyTech?",
        answer:
            "NexalyTech is a technology-driven company focused on AI solutions, software development, internships, project guidance, and digital innovation for students, startups, and professionals.",
    },
    {
        question: "Does NexalyTech provide AI training for beginners?",
        answer:
            "Yes, NexalyTech offers beginner-friendly AI training with practical projects, hands-on implementation, and real-world learning experiences.",
    },
    {
        question: "Does NexalyTech offer internships?",
        answer:
            "Yes, NexalyTech provides internship opportunities in AI, web development, software engineering, and emerging technologies.",
    },
    {
        question: "What services does NexalyTech provide?",
        answer:
            "NexalyTech provides AI development, web development, freelancing services, research guidance, academic project support, and technical mentorship.",
    },
    {
        question: "Is NexalyTech a registered company?",
        answer:
            "Yes, NexalyTech is a Government of India registered MSME organization focused on technology and innovation.",
    },
    {
        question: "Does NexalyTech help with academic projects?",
        answer:
            "Yes, we provide complete support for minor projects, major projects, research papers, technical documentation, and project implementation.",
    },
];

/* ================= COMPONENT ================= */
const Faq: React.FC = () => {
    return (
        <>
            {/* ================= FAQ SCHEMA FOR GOOGLE ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer,
                            },
                        })),
                    }),
                }}
            />

            {/* ================= DIVIDER ================= */}
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <hr className="border-t border-gray-200" />
            </div>

            {/* ================= SECTION ================= */}
            <section
                className="py-16 md:py-24 bg-blue-50/40 px-5 md:px-8"
                id="faq"
            >
                <div className="max-w-6xl mx-auto">

                    {/* ================= HEADING ================= */}
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            Frequently Asked Questions About NexalyTech
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                            Learn more about NexalyTech services, AI training,
                            internships, project guidance, freelancing solutions,
                            and technology support for students and professionals.
                        </p>

                    </div>

                    {/* ================= GRID ================= */}
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* ================= IMAGE ================= */}
                        <div className="w-full md:w-1/2 flex justify-center">

                            <div className="relative w-[280px] h-[220px] md:w-[420px] md:h-[320px] group">

                                <Image
                                    src="/question.png"
                                    alt="NexalyTech FAQ and career guidance illustration"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500"
                                />

                            </div>

                        </div>

                        {/* ================= FAQ ACCORDION ================= */}
                        <div className="w-full md:w-1/2">

                            <Accordion
                                type="single"
                                collapsible
                                className="w-full space-y-4"
                            >

                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border border-gray-200 bg-white rounded-2xl px-5 py-2 shadow-sm"
                                    >

                                        {/* ================= QUESTION ================= */}
                                        <AccordionTrigger className="font-heading text-lg md:text-xl font-semibold text-gray-900 leading-snug hover:no-underline text-left">
                                            {faq.question}
                                        </AccordionTrigger>

                                        {/* ================= ANSWER ================= */}
                                        <AccordionContent className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed pt-2 pb-3">
                                            {faq.answer}
                                        </AccordionContent>

                                    </AccordionItem>
                                ))}

                            </Accordion>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;