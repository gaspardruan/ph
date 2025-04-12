"use client";

import { useEffect } from "react";
import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode:
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches,
  setDarkMode: (darkMode) => set({ darkMode }),
  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));

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
