import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Lora,
  Poppins,
  Nunito_Sans,
  La_Belle_Aurore,
} from "next/font/google";
import { site } from "@/content";
import "./globals.css";


const serifOriginal = Cormorant_Garamond({
  subsets: ["latin"], weight: ["400", "500", "600"],
  variable: "--font-serif-original", display: "swap",
});
const serifMaya = Lora({
  subsets: ["latin"], weight: ["400", "500", "600"],
  variable: "--font-serif-maya", display: "swap",
});
const sansOriginal = Poppins({
  subsets: ["latin"], weight: ["300", "400", "500"],
  variable: "--font-sans-original", display: "swap",
});
const sansMaya = Nunito_Sans({
  subsets: ["latin"], weight: ["300", "400", "600"],
  variable: "--font-sans-maya", display: "swap",
});
const script = La_Belle_Aurore({
  subsets: ["latin"], weight: "400",
  variable: "--font-script", display: "swap",
});

// SEO metadata comes from the active content file.
export function generateMetadata(): Metadata {
  return {
    title: site.seo.title,
    description: site.seo.description,
    keywords: site.seo.keywords,
    openGraph: { title: site.seo.title, description: site.seo.description, type: "website" },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={site.theme}
      className={`${serifOriginal.variable} ${serifMaya.variable} ${sansOriginal.variable} ${sansMaya.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}