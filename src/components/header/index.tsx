"use client";
import { useShowHeader } from "@/components/header/desktop/useShowHeader";
import clsx from "clsx";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";
import { Logo } from "../Logo";

export const Header = () => {
  const show = useShowHeader();

  return (
    <header
      className={clsx(
        "flex justify-between items-center",
        "fixed w-full z-1",
        "py-4 px-4 lg:px-10 xl:px-20",
        "backdrop-blur",
        "shadow shadow-nord-background dark:shadow-nord-background-dark",
        "bg-nord-background/80 dark:bg-nord-background-dark/80",
        "transition-transform duration-300",
        !show && "-translate-y-full"
      )}
    >
      <Logo />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};
