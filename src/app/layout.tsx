import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Layout from '@/components/layout'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TST LUXKOM",
  description: "TST LUXKOM web page with basic information about consulting services in satcom field",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-on-dark)'
        }}
      >
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  );
}
