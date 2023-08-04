import Fuse from "fuse.js";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import spellData from "dnd5-srd/spells.json";
import featuresData from "dnd5-srd/features.json";
import { LevelSpellcasting } from "dnd5e";
import { useAppStore } from "@/store/app";
import { SpellType } from "../SpellCard";

// {
//   "index": "abjuration",
//   "name": "Abjuration",
//   "url": "/api/magic-schools/abjuration"
// },
// {
//   "index": "conjuration",
//   "name": "Conjuration",
//   "url": "/api/magic-schools/conjuration"
// },
// {
//   "index": "divination",
//   "name": "Divination",
//   "url": "/api/magic-schools/divination"
// },
// {
//   "index": "enchantment",
//   "name": "Enchantment",
//   "url": "/api/magic-schools/enchantment"
// },
// {
//   "index": "evocation",
//   "name": "Evocation",
//   "url": "/api/magic-schools/evocation"
// },
// {
//   "index": "illusion",
//   "name": "Illusion",
//   "url": "/api/magic-schools/illusion"
// },
// {
//   "index": "necromancy",
//   "name": "Necromancy",
//   "url": "/api/magic-schools/necromancy"
// },
// {
//   "index": "transmutation",
//   "name": "Transmutation",
//   "url": "/api/magic-schools/transmutation"
// }

function getColor({ name }: { name: string; url: string }) {
  switch (name) {
    case "Abjuration":
      return ["text-slate-900", "bg-slate-400"];
    case "Conjuration":
      return ["text-sky-900", "bg-sky-400"];
    case "Divination":
      return ["text-yellow-900", "bg-yellow-400"];
    case "Enchantment":
      return ["text-teal-900", "bg-teal-400"];
    case "Evocation":
      return ["text-red-900", "bg-red-400"];
    case "Illusion":
      return ["text-fuchsia-900", "bg-fuchsia-400"];
    case "Necromancy":
      return ["text-purple-900", "bg-purple-400"];
    case "Transmutation":
      return ["text-emerald-900", "bg-emerald-400"];
    default:
      return ["text-stone-900", "bg-stone-900"];
  }
}

function Spell({ spell }: { spell: SpellType }) {
  const { setSpell } = useAppStore();

  const colors = getColor(spell.school);

  return (
    <div
      onClick={() => {
        setSpell(spell);
      }}
      className={`px-8 py-2 w-auto text-lg font-serif cursor-pointer rounded-xl text-stone-700 bg-stone-300 border`}
      key={spell.index}
    >
      {spell.name}
    </div>
  );
}

export default function Results() {
  const { setSpell, searchQuery } = useAppStore();
  const [result, setResult] = useState<SpellType[]>([]);

  useEffect(() => {
    const fuse = new Fuse<SpellType>(spellData as SpellType[], { keys: ["name"] });
    const fuseResult = fuse.search(searchQuery);

    console.log("spellData", fuseResult);
    setResult(fuseResult.length > 0 ? fuseResult.map(({ item }) => item) : (spellData as SpellType[]));
  }, [searchQuery]);

  if (result.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {result.map((item) => (
        <Spell key={item.index} spell={item} />
      ))}
    </div>
  );
}
