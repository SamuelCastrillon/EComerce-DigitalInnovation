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
      <body className="flex flex-col items-center justify-between w-screen h-screen font-sans text-gray-600 bg-gray-200">
        <HeaderComponent />
        <main>{children}</main>
        <hr className="w-full h-[2px] mt-10 border-none bg-lime-600" />
        <FooterRendering>
          <Footer />
        </FooterRendering>
      </body>
    </html>
  );
}
