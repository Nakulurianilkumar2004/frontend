"use client";

import { useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            await axios.post("https://company-backend-22x1.onrender.com/contact", form); // 🔥 change to your deployed URL later

            setSuccess("Message sent successfully 🚀");
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setSuccess("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-12 pt-24 pb-16">

            {/* ================= HEADER ================= */}
            <section className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                    Contact Us
                </h1>
                <p className="mt-4 text-gray-600">
                    Have a project idea or need guidance? Reach out to us anytime.
                </p>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-10">

                {/* ================= LEFT SIDE ================= */}
                <div className="space-y-6">

                    {/* WhatsApp Card */}
                    <Card className="rounded-3xl shadow-md hover:shadow-xl transition">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <MessageCircle className="text-green-600 w-8 h-8" />
                                <div>
                                    <h3 className="font-semibold text-lg">Chat on WhatsApp</h3>
                                    <p className="text-sm text-gray-600">
                                        Get instant response directly from us.
                                    </p>
                                </div>
                            </div>

                            <Button
                                className="mt-6 w-full bg-green-600 hover:bg-green-700"
                                onClick={() =>
                                    window.open(
                                        "https://wa.me/6305101934", // 🔥 replace with your number
                                        "_blank"
                                    )
                                }
                            >
                                Start Chat
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <Card className="rounded-3xl shadow-md">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="text-blue-600" />
                                <span className="text-gray-700">+91 98765 43210</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-purple-600" />
                                <span className="text-gray-700">youremail@gmail.com</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* ================= FORM ================= */}
                <Card className="rounded-3xl shadow-xl border-0">
                    <CardContent className="p-8">

                        <h2 className="text-2xl font-bold text-gray-900">
                            Send us a message
                        </h2>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                            <Input
                                placeholder="Your Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                placeholder="Your Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                placeholder="Phone Number"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                            />

                            <Textarea
                                placeholder="Your Message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />

                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>

                            {success && (
                                <p className="text-center text-sm text-green-600">
                                    {success}
                                </p>
                            )}
                        </form>

                    </CardContent>
                </Card>
            </section>
        </main>
    );
}