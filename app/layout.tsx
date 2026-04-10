import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

// ✅ PRIMARY FONT (BODY) → preload ON
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// ✅ SECONDARY FONT (HEADINGS) → preload OFF
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Sterobyte",
    template: "%s | Sterobyte",
  },
  description:
    "Sterobyte helps students with freelancing opportunities, AI courses, research paper guidance, and academic project support.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // ✅ FIX: Apply Inter directly so preload is actually used
        className={`${inter.className} ${jakarta.variable} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}