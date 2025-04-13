"use client";

import { useEffect, useRef } from "react";
import { useSidebarStore } from "./useSidebarStore";
import { useParams, usePathname } from "next/navigation";
import { useEffectEvent } from "@/hooks/useEffectEvent";

export const useSidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const setScope = useSidebarStore((state) => state.setScope);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const params = useParams();
  const pathname = usePathname();
  const scope = params.scope;

  const handleClick = useEffectEvent((e: Event) => {
    const target = e.target as HTMLElement;
    if (isOpen) {
      if (
        sidebarRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      e.preventDefault();
      setIsOpen(false);
    }
    return;
  });

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  useEffect(() => {
    window.addEventListener("click", handleClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  // add padding right for three main elements when hiding scrollbar to prevent layout shift
  // header, main, footer
  // why don't add padding right to body? background colors are not same.
  useEffect(() => {
    // body
    document.body.classList.toggle("overflow-y-hidden", isOpen);

    // header
    const headerElement = document.querySelector("header");
    headerElement?.classList.toggle("pr-scrollbar-header", isOpen);

    // main
    const rootElement = document.getElementById("main");
    rootElement?.classList.toggle("pr-scrollbar", isOpen);

    // footer
    const footerElement = document.getElementById("footer");
    footerElement?.classList.toggle("pr-scrollbar", isOpen);

    if (!isOpen) {
      setScope(typeof scope === "string" ? scope : "");
    }
  }, [isOpen, setScope, scope]);

  return { buttonRef, sidebarRef };
};
