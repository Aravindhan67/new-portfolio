import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "G-FXMPBKL7LB";

const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aravindhan-red.vercel.app'),
  title: {
    default: "T. Aravindhan | Full Stack Developer & AI Engineer",
    template: "%s | T. Aravindhan",
  },
  description: "Cinematic portfolio of T. Aravindhan, a passionate Full Stack Developer and AI enthusiast specializing in modern web applications, connected systems, and digital products.",
  keywords: [
    "T. Aravindhan", "Aravindhan", "Full Stack Developer", "Software Engineer", 
    "AI Engineer", "Next.js Developer", "React Developer", "Portfolio", 
    "Web Development", "India", "Freelance Developer", "TypeScript", 
    "Frontend Developer", "Backend Developer", "MERN Stack", "Cybersecurity",
    "Digital Products", "Creative Developer", "Tech Lead"
  ],
  authors: [{ name: "T. Aravindhan", url: "https://github.com/Aravindhan67" }],
  creator: "T. Aravindhan",
  publisher: "T. Aravindhan",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aravindhan-red.vercel.app",
    siteName: "T. Aravindhan Portfolio",
    title: "T. Aravindhan | Crafting Digital Experiences",
    description: "Explore the cinematic portfolio of T. Aravindhan. I build digital products, not just websites.",
    images: [
      {
        url: "/aravind.png", // Using the profile picture as the OG image
        width: 800,
        height: 600,
        alt: "T. Aravindhan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T. Aravindhan | Full Stack Developer",
    description: "Explore the cinematic portfolio of T. Aravindhan. I build digital products, not just websites.",
    images: ["/aravind.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F6F0" },
    { media: "(prefers-color-scheme: dark)", color: "#2A2826" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Advanced SEO Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aravindhan-red.vercel.app/#person",
        "name": "T. Aravindhan",
        "url": "https://aravindhan-red.vercel.app/",
        "image": "https://aravindhan-red.vercel.app/aravind.png",
        "jobTitle": "Senior Full Stack Developer & AI Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "JAC Medialand"
        },
        "alumniOf": "SRM Valliammai Engineering College",
        "sameAs": [
          "https://github.com/Aravindhan67",
          "https://www.linkedin.com/in/aravindhan-t-897554376",
          "https://www.instagram.com/aravindhan_67/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://aravindhan-red.vercel.app/#website",
        "url": "https://aravindhan-red.vercel.app/",
        "name": "T. Aravindhan | Full Stack Developer",
        "description": "Cinematic portfolio of T. Aravindhan, a passionate Full Stack Developer and AI enthusiast specializing in modern web applications.",
        "publisher": {
          "@id": "https://aravindhan-red.vercel.app/#person"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-accent selection:text-white">
        <CustomCursor />
        <Preloader />
        <Navbar />
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
