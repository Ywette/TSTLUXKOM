import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./stylings/layout.css";
import { Header } from "@/components/Header";
import SatelliteScene from "@/components/SatelliteScene";
import OrbitCircles from '@/components/ui/OrbitCircles';
// import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased`}
        style={{
          color: 'var(--text-on-dark)',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <OrbitCircles />
        <SatelliteScene />
        <div className="sticky-header">
          <Header />
        </div>
        
        <main className="main-content">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
