"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="py-14 md:py-20 bg-gradient-to-b from-white to-blue-50"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center md:text-left">

                        {/* HEADING */}
                        <h2
                            id="contact-heading"
                            className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
                        >
                            Get in Touch
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                            Have questions about freelancing, AI courses, or project guidance?
                            We&apos;re here to help you grow your career with expert support.
                        </p>

                        {/* CONTACT INFO */}
                        <div className="mt-6 space-y-3 text-gray-700 text-sm md:text-base">

                            <a
                                href="tel:+919392832240"
                                className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-600 transition"
                            >
                                <FiPhone size={18} />
                                <span>+91 9392832240</span>
                            </a>

                            <a
                                href="mailto:sterobyte@gmail.com"
                                className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-600 transition"
                            >
                                <FiMail size={18} />
                                <span>sterobyte@gmail.com</span>
                            </a>

                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex justify-center md:justify-start gap-4 mt-6">

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our LinkedIn profile"
                                className="p-2.5 rounded-full bg-gray-100 hover:bg-blue-100 hover:scale-110 transition duration-300 shadow-sm hover:shadow-md"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our Instagram profile"
                                className="p-2.5 rounded-full bg-gray-100 hover:bg-pink-100 hover:scale-110 transition duration-300 shadow-sm hover:shadow-md"
                            >
                                <FaInstagram size={16} />
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our GitHub profile"
                                className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition duration-300 shadow-sm hover:shadow-md"
                            >
                                <FaGithub size={16} />
                            </a>

                        </div>

                        {/* CTA BUTTON */}


                        <div className="flex justify-center md:justify-start">
                            <Link href="/services/contact">
                                <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-md hover:scale-105 transition font-medium">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                        <div className="relative w-[240px] h-[190px] sm:w-[280px] sm:h-[220px] md:w-[340px] md:h-[260px] group">

                            <Image
                                src="/contact.png"
                                alt="sterobyte support team for freelancing and AI guidance"
                                fill
                                loading="lazy" // ✅ better for performance
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 340px"
                                className="object-cover rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;