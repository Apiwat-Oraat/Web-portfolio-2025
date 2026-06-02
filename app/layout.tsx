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

import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Aphiwat On-at — Software Developer Portfolio",
    template: "%s | Aphiwat On-at",
  },
  description: "Student developer at KMUTNB building modern web experiences with Next.js, React, and full-stack technologies.",
  openGraph: {
    title: "Aphiwat On-at — Software Developer Portfolio",
    description: "Student developer building modern web experiences.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#DBEAFE" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
