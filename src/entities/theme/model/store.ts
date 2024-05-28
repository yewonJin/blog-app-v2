import { create } from "zustand";

import { Theme } from "@/entities/theme";

type Store = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<Store>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme: theme }),
}));
