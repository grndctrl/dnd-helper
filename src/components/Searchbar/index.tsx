"use client";

import { debounce } from "lodash";

import { ChangeEvent, useState } from "react";
import Results from "./Results";

type SearchbarProps = {};

export default function Searchbar({}: SearchbarProps) {
  const [query, setQuery] = useState<string>("");

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setQuery(value);
  };

  return (
    <div className="relative w-full my-4 font-serif text-2xl font-medium rounded-xl bg-stone-100">
      <input
        className="relative text-[32px] h-[64px] border-4 border-transparent focus:border-fuchsia-700 leading-none w-full px-4 rounded-xl text-stone-700 bg-stone-200 outline-none"
        type="text"
        value={query}
        onChange={handleChange}
      />
      <div className="absolute mt-[64px] w-full top-0 left-0">
        <Results setQuery={() => setQuery("")} query={query} />
      </div>
    </div>
  );
}
