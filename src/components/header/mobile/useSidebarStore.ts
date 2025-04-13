import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  scope: string;
  setIsOpen: (isOpen: boolean) => void;
  setScope: (scope: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  scope: "",
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  setScope: (scope: string) => set({ scope }),
}));
