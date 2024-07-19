import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import HeaderComponent from "@/components/Header/HeaderComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital innovation",
  description: "Tecnologi Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center">
        <HeaderComponent />
        <main>{children}</main>
        <hr className="border-none h-1 bg-lime-600 mt-5 mb-5" />
        <Footer />
      </body>
    </html>
  );
}
