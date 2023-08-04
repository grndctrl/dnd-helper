"use client";

import { useAppStore } from "@/store/app";

export type SpellType = {
  index: number;
  name: string;
  desc: string[];
  page: string;
  range: string;
  components: ("V" | "S" | "M" | "F" | "DF" | "XP")[];
  material: string;
  ritual: false;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  school: {
    name: string;
    url: string;
  };
  classes: {
    name: string;
    url: string;
  }[];
  subclasses: {
    name: string;
    url: string;
  }[];
  url: string;
};

type SpellProps = {};

export default function SpellCard({}: SpellProps) {
  const spell = useAppStore((state) => state.spell);

  return (
    <div className="p-2 rounded-xl bg-stone-800">
      <div className="flex items-center justify-between px-4 py-2 overflow-hidden font-serif rounded-lg rounded-b-none bg-fuchsia-700 text-fuchsia-300">
        <div className="text-2xl">{spell?.name}</div>
        <div>
          {spell?.components.map((component) => (
            <span
              key={component}
              className="text-xs font-mono px-2 py-1 bg-fuchsia-950 rounded-full text-fuchsia-100 ml-[0.5em]"
            >
              {component}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 mt-2 overflow-hidden font-serif text-lg bg-stone-200 text-emerald-900">
        <div className="mb-4">
          {spell?.desc.map((desc, index) => (
            <p className="mb-[1em]" key={index}>
              {desc}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4 text-md text-stone-600 bg-stone-300">
        <table>
          <tr className="align-top">
            <td className="pr-4 italic">range</td>
            <td className="">{spell?.range}</td>
          </tr>
          {spell?.material && (
            <tr className="align-top">
              <td className="pr-4 italic">material</td>
              <td className="">{spell.material}</td>
            </tr>
          )}
        </table>
      </div>
      <div className="px-4 rounded-b-lg text-md text-stone-600 bg-stone-300">
        <div className="flex justify-center text-white ">
          <div className="relative px-4 py-2 font-mono text-sm bg-stone-800">
            <div className="absolute inset-0 bg-stone-300 rounded-br-xl"> </div>
          </div>
          <div className="px-4 py-2 font-mono text-sm rounded-tl-lg bg-stone-800">{spell?.duration}</div>
          <div className="px-4 py-2 font-mono text-sm rounded-tr-lg bg-stone-800">{spell?.casting_time}</div>
          <div className="relative px-4 py-2 font-mono text-sm bg-stone-800">
            <div className="absolute inset-0 rounded-bl-xl bg-stone-300"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
