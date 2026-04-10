"use client";

import { useState } from "react";

export default function Newsletter() {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMsg("🚀 Newsletter launching soon!");
    };

    return (
        <section className="border-t bg-gray-50">
            <div className="max-w-xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Stay Updated
                </h2>

                <p className="mt-2 text-gray-600 text-sm">
                    We’re building our newsletter. Coming soon.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex gap-2 flex-col sm:flex-row justify-center"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        disabled
                        className="border px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                    />

                    <button
                        type="submit"
                        className="bg-gray-900 text-white px-5 py-2 rounded-md cursor-not-allowed"
                    >
                        Coming Soon
                    </button>
                </form>

                {msg && <p className="mt-4 text-sm text-gray-500">{msg}</p>}
            </div>
        </section>
    );
}