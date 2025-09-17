import type { Metadata } from "next";
import { Cormorant, Quicksand } from "next/font/google";
import Navbar from "@/components/header/navBar";
import Footer from "@/components/home/footer";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${quicksand.variable} font-mono antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
