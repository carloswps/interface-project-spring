"use client";

import React, { useCallback, useState } from "react";
import Loading from "@/app/components/utils/loading";
import SearchProps from "@/types/actionButtons/SeachProps";

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        setIsSearching(true);
        await onSearch();
      } finally {
        setIsSearching(false);
      }
    },
    [onSearch],
  );
  return (
    <form onSubmit={handleSubmit} className={"flex-center align-center mb-4 flex justify-center"}>
      <div className={"flex-center align-center mb-4 flex justify-center"}>
        <div className={"flex-center align-center flex items-center space-x-2"}>
          <input
            type={"search"}
            placeholder={"Digite o nome da imagem..."}
            className={
              "block w-full truncate rounded-lg border border-gray-400 bg-gray-100 p-2.5 text-sm text-gray-900 placeholder:text-gray-400"
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className={
              "rounded-lg border border-gray-400 bg-gray-100 px-5 py-2.5 text-sm text-gray-900 transition-colors outline-none"
            }
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
          >
            <option value="">Todos os formatos</option>
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="gif">GIF</option>
          </select>
          <button
            type="submit"
            disabled={isSearching}
            className={
              "inline-flex max-w-28 items-center rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600"
            }
          >
            {isSearching ? <Loading /> : "Buscar"}
          </button>
          <button
            type="submit"
            className={
              "inline-flex max-w-22 items-center rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600"
            }
          >
            <span className={"truncate"}> Adicionar Imagem</span>
          </button>
        </div>
      </div>
    </form>
  );
}
