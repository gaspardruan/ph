import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Nunito, Rubik } from "next/font/google";

import { Header } from "@/components/header";
import { ThemeInitializer } from "@/components/ThemeInitalizer";
import { Footer } from "@/components/Footer";

import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/nord.css";
import "./globals.css";
import clsx from "clsx";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
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
    <html
      className={clsx(
        nunito.variable,
        inter.variable,
        rubik.variable,
        jetbrainsMono.variable
      )}
    >
      <body
        className={clsx(
          "min-h-screen flex flex-col",
          "text-nord-neutral dark:text-nord-neutral-dark",
          "bg-[#fdfcff] dark:bg-[#1b1c1d]"
        )}
      >
        <ThemeInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
