import { create } from 'zustand';

export const useStore = create((set) => ({
  pokeData: [],
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  type: 'shiny',
  increasePokedata: (results) =>
    set((state) => ({ pokeData: [...state.pokeData, ...results] })),
  removeAllPokeData: () => set({ pokeData: [] }),
  updateLoadMore: (next) => set({ next: next }),
  setType: (newType) => {
    set({ type: newType });
  },
}));
