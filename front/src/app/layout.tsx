import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterRendering from "@/components/Footer/FooterRendering/FooterRendering";

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
      <body className="flex flex-col items-center justify-between w-screen min-h-screen font-sans text-gray-600 bg-gray-200 max-h-fit">
        <HeaderComponent />
        <main className="flex flex-col items-center">{children}</main>
        <FooterRendering>
          <Footer />
        </FooterRendering>
      </body>
    </html>
  );
}
