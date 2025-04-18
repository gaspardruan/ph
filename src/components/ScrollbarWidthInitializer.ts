"use client";

import { useEffect } from "react";

export const ScrollbarWidthInitializer = () => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const className = "scrollbar-width-applied";
    const style = document.createElement("style");
    style.innerHTML = `
    .${className} {
      --scrollbar-width: ${scrollbarWidth}px;
    }
  `;
    document.head.appendChild(style);
    document.documentElement.classList.add(className);
  }, []);

  return null;
};
