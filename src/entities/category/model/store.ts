import { create } from "zustand";

type Store = {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

export const useStore = create<Store>((set) => ({
  sortBy: "",
  setSortBy: (sortBy) => set({ sortBy }),
}));
