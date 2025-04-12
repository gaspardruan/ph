"use client";
import { useShowHeader } from "@/hooks/useShowHeader";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "./desktop";

export const Header = () => {
  const show = useShowHeader();

  return (
    <header
      className={clsx(
        "flex justify-between items-center",
        "fixed w-full",
        "py-4 px-4 lg:px-10 xl:px-20",
        "backdrop-blur",
        "shadow shadow-nord-background dark:shadow-nord-background-dark",
        "bg-nord-background/80 dark:bg-nord-background-dark/80",
        "transition-transform duration-300",
        !show && "-translate-y-full"
      )}
    >
      <Link href="/" className="flex items-center gap-2 lg:gap-4">
        <Image
          alt="R logo"
          width={40}
          height={40}
          src="/R-white.png"
          className="hidden dark:inline"
        />
        <Image
          alt="R logo"
          width={40}
          height={40}
          src="/R-black.png"
          className="inline dark:hidden"
        />
        <span>Zhongqiu&rsquo;s Home</span>
      </Link>
      <DesktopNav />
    </header>
  );
};
