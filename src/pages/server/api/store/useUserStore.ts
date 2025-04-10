import { create } from "zustand";

type UserStore = {
  filters: string;
  setFilters: (filters: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  filters: "",
  setFilters: (filters: string) => set({ filters }),
}));
