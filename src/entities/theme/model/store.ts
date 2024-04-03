import { create } from "zustand";

import { Theme } from "../index";

type Store = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useStore = create<Store>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme: theme }),
}));
