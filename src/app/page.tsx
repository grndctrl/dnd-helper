"use client";

import Results from "@/components/Results";
import Searchbar from "@/components/Searchbar";
import SpellCard from "@/components/SpellCard";
import { useAppStore } from "@/store/app";
import { MagnifyingGlass, Sparkle } from "@phosphor-icons/react";
import classNames from "classnames";
import { useState } from "react";

function Category() {
  const [isActive, toggleActive] = useState(false);
  const { setSearchQuery, searchQuery } = useAppStore();

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setSearchQuery(value);
  };

  return (
    <div className="fixed bottom-0 left-0 flex justify-center w-full">
      <div className={`flex transition-[width] ${isActive ? "w-3/4" : "w-1/2"}`}>
        <div className="flex flex-col flex-shrink w-full ">
          <div className="w-full h-4 rounded-t-full bg-stone-700"></div>
          <div className="flex justify-between flex-grow px-4 pb-4 bg-stone-700">
            <div className="flex items-center justify-start flex-shrink font-serif text-2xl text-stone-100">
              <Sparkle weight="fill" size={24} />
              <span className="ml-2">Spells</span>
            </div>
            <div className="flex items-center justify-end flex-grow font-serif text-stone-300">
              {/* button */}
              <div
                className={`relative flex ml-4 transition-[width] duration-300 items-center justify-between h-8 p-[3px] border rounded-md flat-shadow bg-stone-950 border-stone-950 text-stone-600 overflow-hidden ${
                  isActive ? "w-full" : "w-8"
                }`}
              >
                <input
                  className="h-6 w-full transition-[width] px-1 font-sans bg-transparent outline-none"
                  value={searchQuery}
                  onChange={handleChange}
                />
                <div className="absolute right-0 top-0   h-[30px] p-[3px] bg-stone-800 z-10">
                  <MagnifyingGlass size={24} onClick={() => toggleActive(!isActive)} />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen p-8 bg-stone-100 text-stone-700">
        <Results />
        <Category />
      </main>
    </>
  );
}
