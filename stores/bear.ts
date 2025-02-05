import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface BearState {
  bears: Readonly<number>;
  increase: (by: number) => void;
  reset: () => void;
}

const bearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increase: (by) => set(({ bears }) => ({ bears: bears + by })),
      reset: () => set({ bears: 0 }),
    }),
    {
      name: "bearStore",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default bearStore;
