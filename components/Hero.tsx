"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-6 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Empowering Your Academic <br />
                        & Professional Journey
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-blue-100">
                        Accelerate your success with expert guidance in freelancing,
                        research, and AI learning.
                    </p>

                    <Link href="/services/contact">
                        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100 shadow-md hover:scale-105 transition">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-[260px] sm:w-[320px] md:w-[420px] 
                          h-[260px] sm:h-[320px] md:h-[420px]">

                        <Image
                            src="/hero1.png"
                            alt="Student working on laptop illustration"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover rounded-3xl shadow-2xl"
                        />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;