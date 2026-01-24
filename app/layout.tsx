import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Marc - Product Manager | SaaS & AI Product Development",
  description: "Product Manager at Treatwell specializing in SaaS and AI product development. Building innovative solutions with modern tools and technologies.",
  keywords: ["Product Manager", "SaaS", "AI", "Product Development", "Treatwell"],
  authors: [{ name: "Marc" }],
  openGraph: {
    title: "Marc - Product Manager | SaaS & AI Product Development",
    description: "Product Manager at Treatwell specializing in SaaS and AI product development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc - Product Manager",
    description: "Product Manager at Treatwell specializing in SaaS and AI product development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
