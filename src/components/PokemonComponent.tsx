"use client";

import { pokemonList } from "@/lib/pokemon";
import Link from "next/link";
import { useEffect, useState } from "react";

// 目次コンポーネント
const TableOfContents = ({ generations }: { generations: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-12 overflow-hidden">
      <button
        className="w-full text-left flex items-center justify-between px-6 py-3"
        onClick={toggleOpen}
      >
        <h2 className="text-xl font-bold text-gray-700">目次</h2>
        <svg
          className={`w-6 h-6 text-gray-700 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <ul
        className={`list-disc list-inside space-y-2 ${
          isOpen ? "block" : "hidden"
        } px-6 pb-4`}
      >
        {generations.map((generation, index) => (
          <li key={index}>
            <Link
              href={`#generation-${index + 1}`}
              className="text-blue-600 hover:underline"
            >
              {generation}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ポケモンリストの各アイテムコンポーネント
const PokemonItem = ({ name }: { name: string }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      {name}
    </li>
  );
};

// 各世代のポケモンリストコンポーネント
const PokemonGenerationList = ({
  generation,
  index,
  pokemonNames,
  filterQuery,
}: {
  generation: string;
  index: number;
  pokemonNames: string[];
  filterQuery: string;
}) => {
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    setIsFiltered(filterQuery !== "");
  }, [filterQuery]);

  const filteredPokemonNames = pokemonNames.filter((name) => {
    const normalizedQuery = filterQuery.toLowerCase().replace(/\s+/g, "");
    const normalizedName = name.toLowerCase().replace(/\s+/g, "");

    // filterQueryが空の場合はすべてのポケモンを表示
    if (normalizedQuery === "") {
      return true;
    }

    const queryChars = normalizedQuery.split("");
    return queryChars.every((char) => normalizedName.includes(char));
  });

  // フィルタリングされたポケモンがいない、かつ、filterQuery が空でない場合のみ null を返す
  if (filteredPokemonNames.length === 0 && filterQuery !== "") {
    return null;
  }

  return (
    <div id={`generation-${index + 1}`} className="scroll-mt-6">
      <div className="space-y-1">
        <h2
          className={`text-2xl font-bold text-gray-800 ${
            isFiltered ? "text-sm" : ""
          }`}
        >
          {generation}
        </h2>

        {/* 最初の世代以外にメッセージを表示 */}
        {index !== 0 && !isFiltered && (
          <p className="text-xs text-gray-500">
            これまでのバージョンで出てきたポケモンを含みます
          </p>
        )}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none mt-4">
        {filteredPokemonNames.map((name, i) => (
          <PokemonItem key={i} name={name} />
        ))}
      </ul>
    </div>
  );
};

// Floating Action Button
const FAB = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 btn btn-circle bg-blue-500 hover:bg-blue-700 text-white border-none shadow-lg z-30"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

// メインコンポーネント
export default function PokemonComponent() {
  const generations = Object.keys(pokemonList);
  const [filterQuery, setFilterQuery] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };

  return (
    <>
      <TableOfContents generations={generations} />

      {/* フィルタリング用の入力欄 */}
      <div className="my-8">
        <input
          type="text"
          placeholder="ポケモン名でフィルタリング..."
          value={filterQuery}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
        />
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">カタカナでポケモン名を検索</p>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          filterQuery !== "" ? "space-y-6" : "space-y-12"
        }`}
      >
        {generations.map((generation, index) => (
          <PokemonGenerationList
            key={index}
            generation={generation}
            index={index}
            pokemonNames={pokemonList[generation]}
            filterQuery={filterQuery}
          />
        ))}
      </div>
      <FAB />
    </>
  );
}
