import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anastrix | AI Automation & Agentic AI",
  description:
    "Anastrix builds AI Agents, Intelligent Automation, Enterprise AI Platforms, and Modern Software Solutions.",
  keywords: [
    "AI",
    "Agentic AI",
    "Automation",
    "Next.js",
    "Artificial Intelligence",
    "Anastrix",
  ],
  authors: [{ name: "Muhammad Anas Khan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}