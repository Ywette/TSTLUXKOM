import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
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
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-on-dark)'
        }}
      >
        <Header />
        {children}
       {/* <Footer /> */}
      </body>
    </html>
  );
}
