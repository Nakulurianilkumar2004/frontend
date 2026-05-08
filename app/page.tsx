import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexalytech.com"),

  title:
    "NexalyTech | AI Courses, Freelancing, Full Stack & Project Guidance for Students",

  description:
    "NexalyTech provides AI training, freelancing opportunities, full stack development learning, research paper support, and complete academic project guidance for students in India.",

  keywords: [
    "NexalyTech",
    "AI training India",
    "freelancing for students",
    "full stack development course",
    "research paper writing help",
    "major project guidance",
    "minor project support",
    "final year projects India",
    "AI internship programs",
    "student tech learning platform",
  ],

  alternates: {
    canonical: "https://www.nexalytech.com",
  },

  openGraph: {
    title: "NexalyTech | AI, Freelancing & Project Guidance",
    description:
      "Learn AI, Full Stack Development, Freelancing & build real-world projects with NexalyTech.",
    url: "https://www.nexalytech.com",
    siteName: "NexalyTech",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NexalyTech - AI Courses & Freelancing Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NexalyTech | AI & Freelancing Platform",
    description:
      "AI Courses, Freelancing, Full Stack & Project Guidance for Students.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= ORGANIZATION SCHEMA (IMPORTANT FOR LOGO SEO) ================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexalyTech",
  url: "https://www.nexalytech.com",
  logo: "https://www.nexalytech.com/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/nexalytech/",
    "https://www.instagram.com/nexalytech/",
  ],
};

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

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