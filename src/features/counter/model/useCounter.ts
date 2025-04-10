import { useCountStore } from "./countStore";

export const useCountState = () => useCountStore((state) => state.count);
export const useCountActions = () => useCountStore((state) => state.actions);
