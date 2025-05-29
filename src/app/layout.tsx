import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import ScrollProgress from "@/components/common/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Firas Al Kharusi - Full Stack Developer",
  description: "Full Stack Developer & IT Applications Specialist with expertise in React, Node.js, TypeScript, and cloud technologies. Currently leading IT solutions delivery at Vodafone Oman.",
  keywords: ["Firas Al Kharusi", "Full Stack Developer", "React", "Node.js", "TypeScript", "Software Engineer", "Oman", "Vodafone"],
  authors: [{ name: "Firas Al Kharusi" }],
  creator: "Firas Al Kharusi",
  openGraph: {
    title: "Firas Al Kharusi - Full Stack Developer",
    description: "Full Stack Developer & IT Applications Specialist with expertise in modern web technologies",
    url: "https://www.firasb.com",
    siteName: "Firas Al Kharusi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firas Al Kharusi - Full Stack Developer",
    description: "Full Stack Developer & IT Applications Specialist with expertise in modern web technologies",
    creator: "@BinBader98",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <ScrollProgress />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}