import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";

const font = Inter({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Header />
        <main>{children}</main>
        <Locations className="mb-[-75px] sm:mb-[-90px] z-[7] relative" />
        <Footer />
      </body>
    </html>
  );
}
