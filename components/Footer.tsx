"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer
            className="bg-gray-900 text-gray-300 pt-14 pb-6"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div className="col-span-2 md:col-span-1">
                        <h2
                            id="footer-heading"
                            className="font-heading text-white text-xl font-semibold tracking-tight"
                        >
                            Sterobyte
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                            Helping students and professionals grow with freelancing, AI courses,
                            and real-world project guidance.
                        </p>
                    </div>

                    {/* SERVICES */}
                    <nav aria-label="Footer Services">
                        <h3 className="font-heading text-white font-medium mb-4 text-base">
                            Services
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services/freelancing" className="hover:text-white hover:underline transition">
                                    Freelancing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/course" className="hover:text-white hover:underline transition">
                                    AI Course
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/research" className="hover:text-white hover:underline transition">
                                    Research Papers
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/minor" className="hover:text-white hover:underline transition">
                                    Projects Guidance
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* RESOURCES */}
                    <nav aria-label="Footer Resources">
                        <h3 className="font-heading text-white font-medium mb-4 text-base">
                            Resources
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/blogs" className="hover:text-white hover:underline transition">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs/career" className="hover:text-white hover:underline transition">
                                    Career Tips
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs/ailearning" className="hover:text-white hover:underline transition">
                                    AI Learning
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs/freelanceguide" className="hover:text-white hover:underline transition">
                                    Freelance Guide
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* CONTACT */}
                    <div>
                        <h3 className="font-heading text-white font-medium mb-4 text-base">
                            Contact
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="tel:+919392832240"
                                    className="hover:text-white transition"
                                >
                                    📞 +91 9392832240
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:sterobyte@gmail.com"
                                    className="hover:text-white transition"
                                >
                                    ✉️ sterobyte@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* SOCIAL */}
                        <div className="flex gap-3 mt-5">

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our LinkedIn profile"
                                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
                            >
                                <FaLinkedinIn size={14} />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our Instagram profile"
                                className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition duration-300"
                            >
                                <FaInstagram size={14} />
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our GitHub profile"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300"
                            >
                                <FaGithub size={14} />
                            </a>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-12 text-center text-xs md:text-sm text-gray-500 border-t border-gray-800 pt-6">
                    © {new Date().getFullYear()} Sterobyte. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;