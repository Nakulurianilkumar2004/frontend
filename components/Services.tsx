"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Service {
    title: string;
    desc: string;
    img: string;
    link: string;
}

const services: Service[] = [
    {
        title: "Freelancing Opportunities",
        desc: "Work remotely and build your career with real-world freelance projects.",
        img: "/s1.png",
        link: "/services/freelancing",
    },
    {
        title: "Research Paper Guidance",
        desc: "Get expert help in writing and publishing your academic research papers.",
        img: "/s2.png",
        link: "/services/research",
    },
    {
        title: "AI Course - 1 Month",
        desc: "Learn Artificial Intelligence fast with our intensive training program.",
        img: "/s3.png",
        link: "/services/course",
    },
    {
        title: "Minor & Major Projects Guidance",
        desc: "Mentorship and support for your academic projects.",
        img: "/s4.png",
        link: "/services/minor",
    },
];

const Services: React.FC = () => {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="relative py-16 md:py-24 overflow-hidden"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-gradient-to-b from-white via-blue-50/70 to-white" />
            </div>

            <div className="max-w-6xl mx-auto px-5 md:px-8">

                {/* TITLE */}
                <h2
                    id="services-heading"
                    className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16"
                >
                    Our Services
                </h2>

                {/* SERVICES LIST */}
                <div className="flex flex-col divide-y divide-gray-200/60">

                    {services.map((service, i) => (
                        <article
                            key={i}
                            className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } items-center py-10 md:py-14 px-2 md:px-4`}
                        >

                            {/* IMAGE */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative w-[240px] h-[180px] md:w-[340px] md:h-[240px] group">

                                    <Image
                                        src={service.img}
                                        alt={`${service.title} service illustration`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"

                                        // ✅ FINAL LCP FIX
                                        priority={i < 2}
                                        loading={i < 2 ? "eager" : "lazy"}

                                        quality={85}
                                        className="object-cover rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
                                    />

                                </div>
                            </div>

                            {/* TEXT */}
                            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">

                                <h3 className="font-heading text-xl md:text-2xl font-semibold text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                                    {service.desc}
                                </p>

                                <Link href={service.link}>
                                    <Button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm md:text-base rounded-lg shadow-sm hover:shadow-md transition hover:scale-105">
                                        Learn More
                                    </Button>
                                </Link>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;