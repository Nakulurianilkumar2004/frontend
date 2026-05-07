import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexalytech.com"),

  title: {
    default: "NexalyTech",
    template: "%s | NexalyTech",
  },

  description:
    "NexalyTech offers AI training, freelancing opportunities, research paper guidance, and support for minor & major academic projects.",

  keywords: [
    "NexalyTech",
    "AI courses",
    "freelancing opportunities",
    "research paper writing",
    "minor projects",
    "major projects",
    "student academic support",
    "AI training India"
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NexalyTech",
    description:
      "AI Training, Freelancing Opportunities, Research Guidance & Academic Project Support.",
    url: "https://www.nexalytech.com",
    siteName: "NexalyTech",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexalyTech",
    description:
      "AI Training, Freelancing, Research Guidance & Academic Projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jakarta.variable} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}