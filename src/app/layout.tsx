import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aprameya Rangashayana - Portfolio",
  description: "Pre Final-year B.E. Information Science and Engineering student with expertise in web development, machine learning, and data-driven solutions.",
  keywords: ["Portfolio", "Web Development", "Machine Learning", "Data Science", "React", "Python", "TypeScript"],
  authors: [{ name: "Aprameya Rangashayana" }],
  openGraph: {
    title: "Aprameya Rangashayana - Portfolio",
    description: "Pre Final-year B.E. Information Science and Engineering student with expertise in web development, machine learning, and data-driven solutions.",
    siteName: "Aprameya Rangashayana Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprameya Rangashayana - Portfolio",
    description: "Pre Final-year B.E. Information Science and Engineering student with expertise in web development, machine learning, and data-driven solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
