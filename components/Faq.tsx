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

/* ================= DATA ================= */
const faqs: FAQItem[] = [
    {
        question: "What freelancing opportunities do you provide?",
        answer:
            "We offer real-world freelance projects, mentorship, and guidance to help you start earning and build a strong portfolio.",
    },
    {
        question: "How does your AI course help beginners?",
        answer:
            "Our AI course is designed for beginners with hands-on training, real projects, and industry-relevant skills in just one month.",
    },
    {
        question: "Do you help with research paper writing and publishing?",
        answer:
            "Yes, we guide you through writing, formatting, and publishing research papers in reputed journals and conferences.",
    },
    {
        question: "Can you assist with minor and major academic projects?",
        answer:
            "We provide end-to-end support for academic projects including idea selection, development, documentation, and presentation.",
    },
];

/* ================= COMPONENT ================= */
const Faq: React.FC = () => {
    return (
        <>
            {/* DIVIDER */}
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <hr className="border-t border-gray-200" />
            </div>

            {/* SECTION */}
            <section className="py-16 md:py-24 bg-blue-50/40 px-5 md:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* HEADING */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                            Ready to Boost Your Career?
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                            Join us today and get expert guidance tailored for freelancing, AI, and academic success.
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* IMAGE */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-[260px] h-[200px] md:w-[360px] md:h-[260px] group">
                                <Image
                                    src="/question.png"
                                    alt="Career guidance illustration"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="w-full md:w-1/2">
                            <Accordion type="single" collapsible className="w-full space-y-3">

                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-b border-gray-200/70 pb-3"
                                    >

                                        {/* QUESTION */}
                                        <AccordionTrigger className="font-heading text-lg md:text-xl font-semibold text-gray-900 leading-snug hover:no-underline">
                                            {faq.question}
                                        </AccordionTrigger>

                                        {/* ANSWER */}
                                        <AccordionContent className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mt-2">
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