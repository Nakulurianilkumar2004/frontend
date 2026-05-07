import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "NexalyTech | AI Courses, Freelancing & Project Guidance",

  description:
    "NexalyTech helps students with AI training, freelancing opportunities, research paper writing, and complete support for minor & major academic projects.",

  keywords: [
    "NexalyTech",
    "AI training India",
    "freelancing for students",
    "research paper writing help",
    "major project guidance",
    "minor project support",
    "final year projects",
    "AI internship programs"
  ],

  alternates: {
    canonical: "https://www.nexalytech.com",
  },

  openGraph: {
    title: "NexalyTech",
    description:
      "AI Courses, Freelancing Opportunities & Academic Project Guidance for Students.",
    url: "https://www.nexalytech.com",
    siteName: "NexalyTech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexalyTech",
    description:
      "AI Training, Freelancing & Research Guidance for Students.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}