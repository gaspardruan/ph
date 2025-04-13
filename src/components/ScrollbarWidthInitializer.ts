"use client";

import { useEffect } from "react";

export const ScrollbarWidthInitializer = () => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    console.log("Here");

    const className = "scrollbar-width-applied";
    const style = document.createElement("style");
    style.innerHTML = `
    .${className} {
      --scrollbar-width: ${scrollbarWidth}px;
    }
  `;
    document.head.appendChild(style);
    document.documentElement.classList.add(className);
  }, []); // 空依赖数组，确保只运行一次

  return null;
};
