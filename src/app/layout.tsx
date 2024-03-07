import { ReactNode } from "react";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title:
    "UK Sponsorship License Application | Expert Assistance For Business Growth",
  description:
    "Discover quality UK sponsor license support with our expert team of lawyers. Low fee, quick turn-around. Book your free consultation!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4K5LQRK8GG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4K5LQRK8GG');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
