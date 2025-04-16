import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Header } from "@/components/header";
import { ScrollbarWidthInitializer } from "@/components/ScrollbarWidthInitializer";
import { ThemeInitializer } from "@/components/ThemeInitalizer";
import { Footer } from "@/components/Footer";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ruan Zhongqiu",
  description: "Ruan Zhongqiu's Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={nunito.variable}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
        />
      </head>
      <body className="flex flex-col text-gray-900 dark:text-gray-50">
        <ThemeInitializer />
        <ScrollbarWidthInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
