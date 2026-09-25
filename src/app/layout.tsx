import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T. Aravindhan | Full Stack Developer & AI Engineer",
  description: "Cinematic portfolio of T. Aravindhan, a Senior Full Stack Developer building modern digital products across web, AI and connected systems.",
  openGraph: {
    title: "T. Aravindhan | Full Stack Developer",
    description: "I build digital products, not just websites.",
    url: "https://aravindhan.dev",
    siteName: "T. Aravindhan Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F6F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="antialiased selection:bg-accent selection:text-white">
        <CustomCursor />
        <Preloader />
        <Navbar />
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
