"use client";

import React, { useCallback, useState } from "react";
import Loading from "@/components/utils/loading";
import SearchProps from "@/types/actionButtons/SeachProps";
import Link from "next/link";

export default function Buttons({ onSearch }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [extension, setExtension] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        setIsSearching(true);
        await onSearch(query, extension);
      } finally {
        setIsSearching(false);
      }
    },
    [onSearch, query, extension],
  );

  return (
    <form onSubmit={handleSubmit} className={"flex-center align-center mb-4 flex justify-center"}>
      <div className={"flex-center align-center mb-4 flex justify-center"}>
        <div className={"flex-center align-center flex items-center space-x-2"}>
          <input
            type={"search"}
            placeholder={"Digite o nome da imagem..."}
            className={
              "block w-full truncate rounded-lg border border-gray-400 bg-gray-100 p-2.5 text-sm text-gray-900 placeholder:text-gray-600"
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className={
              "rounded-lg border border-gray-400 bg-gray-100 px-5 py-2.5 text-sm text-gray-900 transition-colors outline-none"
            }
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
          >
            <option value="">Todos os formatos</option>
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="gif">GIF</option>
          </select>

          <button
            type="submit"
            disabled={isSearching}
            className={
              "group inline-flex max-w-28 cursor-pointer items-center rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600"
            }
          >
            {isSearching ? <Loading /> : "Buscar"}
          </button>

          <div className={"group: relative"}>
            <Link href={"/forms"}>
              <button
                type="submit"
                onMouseEnter={() => setShowMessage(true)}
                onMouseLeave={() => setShowMessage(false)}
                className={
                  "inline-flex max-w-22 cursor-pointer items-center rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600"
                }
              >
                <span className={"truncate"}>Adicionar Imagem</span>
              </button>

              {showMessage && (
                <p
                  className={
                    "absolute bottom-full left-1/2 mb-1 -translate-x-1/2 rounded bg-gray-500 px-3 py-1 text-sm text-white opacity-50 transition-opacity duration-200"
                  }
                >
                  Você deseja adicionar novas imagens?
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
