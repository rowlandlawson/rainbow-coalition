import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rainbow Coalition · Akuku-Toru Voter Guide",
  description:
    "Know every candidate on your Akuku-Toru ballot — from President to State Assembly — before you step into the polling unit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen bg-[#faf7f2] text-[#1d1416] font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
