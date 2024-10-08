import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salon24 - Best makeup and beauty salon in Bahadurgarh Patiala",
  description:
    "Experience top-notch unisex beauty and makeup services at Salon24 in Bahadurgarh, Patiala. Our skilled professionals offer haircuts, facials, bridal makeup, and more. Visit today in the best makeup and beauty salon in Bahadurgarh, Patiala",
  keywords:
    "Salon24, unisex beauty services, makeup services, Patiala, haircuts, facials, bridal makeup, Salon in Bahadurgarh, Salon in Patiala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Salon24 - Best makeup and beauty salon in Bahadurgarh Patiala"
        />
        <meta
          property="og:description"
          content="Experience top-notch unisex beauty and makeup services at Salon24 in Bahadurgarh, Patiala. Our skilled professionals offer haircuts, facials, bridal makeup, and more. Visit today in the best makeup and beauty salon in Bahadurgarh, Patiala"
        />
        <meta
          property="og:image"
          content="https://thesalon24.com/seo/og-image.jpg"
        />
        <meta property="og:url" content="https://thesalon24.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Salon24" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-LL28ERGVTT" />
    </html>
  );
}
