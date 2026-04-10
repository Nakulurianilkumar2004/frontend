"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50 bg-blue-700/95 backdrop-blur-md text-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

                {/* LOGO */}
                <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight">
                    Sterobyte
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">

                    <Link href="/" className="hover:text-gray-200 transition">
                        Home
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    <div className="relative group">
                        <button className="hover:text-gray-200 transition">
                            Services
                        </button>

                        {/* DROPDOWN */}
                        <div className="absolute left-0 mt-3 w-72 bg-white text-gray-900 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                            <Link href="/services/freelancing">
                                <div className="p-4 hover:bg-gray-100 rounded-t-xl cursor-pointer">
                                    <p className="font-medium">Freelancing</p>
                                    <p className="text-sm text-gray-500">Real-world client projects</p>
                                </div>
                            </Link>

                            <Link href="/services/research">
                                <div className="p-4 hover:bg-gray-100 cursor-pointer">
                                    <p className="font-medium">Research</p>
                                    <p className="text-sm text-gray-500">Paper writing & publishing</p>
                                </div>
                            </Link>

                            <Link href="/services/course">
                                <div className="p-4 hover:bg-gray-100 cursor-pointer">
                                    <p className="font-medium">AI Course</p>
                                    <p className="text-sm text-gray-500">Learn with real projects</p>
                                </div>
                            </Link>

                            <Link href="/services/minor">
                                <div className="p-4 hover:bg-gray-100 rounded-b-xl cursor-pointer">
                                    <p className="font-medium">Projects</p>
                                    <p className="text-sm text-gray-500">Minor & Major guidance</p>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <Link href="/services/contact" className="hover:text-gray-200 transition">
                        Contact
                    </Link>
                </nav>

                {/* DESKTOP BUTTON */}
                <div className="hidden md:block">
                    <Button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-2 text-sm md:text-base rounded-lg">
                        Get Started
                    </Button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`md:hidden bg-blue-600 px-5 overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] py-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col gap-3 text-base font-medium">

                    <Link
                        href="/"
                        className="py-2 border-b border-blue-500"
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>

                    {/* SERVICES ACCORDION */}
                    <button
                        className="py-2 border-b border-blue-500 text-left flex justify-between items-center"
                        onClick={() => setServicesOpen((prev) => !prev)}
                    >
                        Services
                        <span>{servicesOpen ? "−" : "+"}</span>
                    </button>

                    {servicesOpen && (
                        <div className="flex flex-col ml-4 text-sm text-gray-100 gap-2">

                            <Link href="/services/freelancing" onClick={() => setOpen(false)}>
                                Freelancing
                            </Link>

                            <Link href="/services/research" onClick={() => setOpen(false)}>
                                Research
                            </Link>

                            <Link href="/services/course" onClick={() => setOpen(false)}>
                                AI Course
                            </Link>

                            <Link href="/services/minor" onClick={() => setOpen(false)}>
                                Projects
                            </Link>

                        </div>
                    )}

                    <Link
                        href="/services/contact"
                        className="py-2"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>

                    {/* MOBILE BUTTON */}
                    <Button className="mt-3 bg-white text-blue-700 hover:bg-gray-100 w-full">
                        Get Started
                    </Button>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;