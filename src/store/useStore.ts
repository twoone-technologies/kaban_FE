// src/store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,

  increment: () => set((state: { count: number; }) => ({ count: state.count + 1 })),
  decrement: () => set((state: { count: number; }) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;
