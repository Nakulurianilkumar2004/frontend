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
    "AI training India",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.nexalytech.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "NexalyTech",
    description:
      "AI Training, Freelancing Opportunities, Research Guidance & Academic Project Support.",
    url: "https://www.nexalytech.com",
    siteName: "NexalyTech",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NexalyTech Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NexalyTech",
    description:
      "AI Training, Freelancing, Research Guidance & Academic Projects.",
    images: ["/logo.png"],
  },

  other: {
    "google-site-verification": "",
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
        {/* SEO STRUCTURED DATA (IMPORTANT FOR GOOGLE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexalyTech",
              url: "https://www.nexalytech.com",
              logo: "https://www.nexalytech.com/logo.png",
              sameAs: [
                "https://www.youtube.com/@nexalytech",
                "https://github.com/nexalytech",
                "https://www.instagram.com/nexalytech/",
                "https://x.com/nexalytech",
                "https://www.linkedin.com/company/nexalytech/",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}