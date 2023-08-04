import { SpellType } from "@/components/SpellCard";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppState = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  spell: SpellType | null;
  setSpell: (spell: SpellType | null) => void;
};

const useAppStore = create<AppState>()(
  devtools((set, get) => ({
    searchQuery: "",
    setSearchQuery: (searchQuery) => set(() => ({ searchQuery })),
    spell: null,
    setSpell: (spell) => set(() => ({ spell })),
  }))
);

export { useAppStore };
