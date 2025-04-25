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

  useEffect(() => {
    // body
    document.body.classList.toggle("overflow-y-hidden", isOpen);

    if (!isOpen) {
      setScope(typeof scope === "string" ? scope : "");
    }
  }, [isOpen, setScope, scope]);

  return { buttonRef, sidebarRef };
};
