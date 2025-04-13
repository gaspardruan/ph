"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";

export const ThemeInitializer = () => {
  const { darkMode, setDarkMode } = useThemeStore();

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => {
      const newColorScheme = !!e.matches;
      setDarkMode(newColorScheme);
    };

    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [setDarkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return null;
};
