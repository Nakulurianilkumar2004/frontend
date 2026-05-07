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
            className="relative overflow-hidden py-16 md:py-24"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/60 to-white" />

            <div className="mx-auto max-w-6xl px-5 md:px-8">
                {/* Heading */}
                <div className="mb-12 text-center md:mb-16">
                    <h2
                        id="services-heading"
                        className="text-3xl font-bold text-gray-900 md:text-4xl"
                    >
                        Our Services
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm md:text-base">
                        Explore premium services designed for students, researchers, and
                        professionals to grow faster.
                    </p>
                </div>

                {/* Services */}
                <div className="flex flex-col divide-y divide-gray-200/70">
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className={`flex flex-col items-center gap-8 py-10 md:flex-row md:gap-14 md:py-14 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="group relative h-[200px] w-[280px] overflow-hidden rounded-3xl shadow-xl md:h-[250px] md:w-[360px]">
                                    <Image
                                        src={service.img}
                                        alt={`${service.title} illustration`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                        quality={75}
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="mx-auto mt-4 max-w-lg text-gray-600 leading-relaxed md:mx-0 md:text-lg">
                                    {service.desc}
                                </p>

                                <Link href={service.link}>
                                    <Button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm shadow-md transition hover:scale-105 hover:bg-blue-700 md:text-base">
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