import { create } from "zustand";

export interface BearState {
  bears: Readonly<number>;
  increase: (by: number) => void;
  reset: () => void;
}

const bearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set(({ bears }) => ({ bears: bears + by })),
  reset: () => set({ bears: 0 }),
}));

export default bearStore;
