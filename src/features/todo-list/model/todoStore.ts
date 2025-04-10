import { create } from "zustand";

export type Filter = "all" | "completed" | "pending";

interface TodoStore {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),
}));
