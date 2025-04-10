import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface State {
  count: number;
  double: number;
}

interface Actions {
  actions: {
    increase: () => void;
    decrease: () => void;
    resetState: (keys?: Array<keyof State>) => void;
  };
}

const initialState: State = {
  count: 1,
  double: 2,
};

export const useCountStore = create(
  subscribeWithSelector(
    immer(
      combine(initialState, (set) => ({
        actions: {
          increase: () =>
            set((state) => {
              state.count += 1;
            }),
          decrease: () =>
            set((state) => {
              state.count -= 1;
            }),
        },
      }))
    )
  )
);

useCountStore.subscribe(
  (state) => state.count,
  (count) => {
    console.log(useCountStore.getState().double);
    useCountStore.setState(() => ({ double: count * 2 }));
  }
);
