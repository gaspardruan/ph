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
