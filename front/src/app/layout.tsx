import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterRendering from "@/components/Footer/FooterRendering/FooterRendering";
import GlobalContext from "@/components/Context/GlobalContext";

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
      <GlobalContext>
        <body className="flex flex-col items-center min-w-[375px] w-full h-auto font-sans text-gray-600 bg-gray-200 ">
          <HeaderComponent />
          <main className="relative flex flex-col items-center ">{children}</main>
          <FooterRendering>
            <Footer />
          </FooterRendering>
        </body>
      </GlobalContext>
    </html>
  );
}
