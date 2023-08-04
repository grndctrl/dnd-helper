"use client";

import Fuse from "fuse.js";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import spellData from "dnd5-srd/spells.json";
import featuresData from "dnd5-srd/features.json";
import { LevelSpellcasting } from "dnd5e";
import { useAppStore } from "@/store/app";
import { SpellType } from "../SpellCard";

type ResultsProps = {
  query: string;
  setQuery: () => void;
};

export default function Results({ query, setQuery }: ResultsProps) {
  const setSpell = useAppStore((state) => state.setSpell);
  const [result, setResult] = useState<Fuse.FuseResult<SpellType>[]>([]);

  useEffect(() => {
    const fuse = new Fuse<SpellType>(spellData as any, { keys: ["name"] });
    const currResult = fuse.search(query);

    setResult(currResult);
  }, [query]);

  if (result.length === 0) return null;

  return (
    <div className="py-4 mt-4 text-stone-300 bg-stone-900 rounded-xl">
      <div className="-my-4">
        {result.slice(0, 5).map(({ item }) => {
          return (
            <div
              onClick={() => {
                setSpell(item);
                setQuery();
              }}
              className="px-4 py-2 -my-2 text-lg font-normal rounded-xl hover:text-fuchsia-100 hover:bg-fuchsia-600"
              key={item.index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
