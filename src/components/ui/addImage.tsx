import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function AddImageComponent() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={"mt-2 grid grid-cols-1"}>
      <div className={"flex flex-col items-start justify-center space-x-2"}>
        <label className={"text-md ml-2.5 text-gray-700"}>Nome:</label>
        <input
          type={"text"}
          placeholder={"Nome da imagem"}
          className={
            "placeholder:text-gray-6'00 block w-72 truncate rounded-lg border border-gray-400 bg-gray-100 p-2.5 text-sm text-gray-600"
          }
        />

        <label className={"text-md mt-2 ml-2.5 text-gray-700"}>Tipo da imagem:</label>
        <input
          type={"text"}
          placeholder={"Digite o tipo da imagem"}
          className={
            "placeholder:text-gray-6'00 block w-72 truncate rounded-lg border border-gray-400 bg-gray-100 p-2.5 text-sm text-gray-600"
          }
        />

        <label className={"text-md mt-2 ml-2.5 text-gray-700"}>Tipo da imagem:</label>
        <div
          className={
            "flex h-40 w-full items-center justify-center overflow-auto rounded-lg border border-gray-400 bg-gray-100"
          }
        >
          <div className={"flex flex-col items-center justify-center space-x-2"}>
            <FontAwesomeIcon icon={faImage} size={"3x"} />
            <label className={"text-md cursor-pointer text-blue-400"}>
              Clique para adicionar a Imagem :
              <input type={"file"} accept={"image/*"} className={"sr-only"} />
            </label>
          </div>
        </div>
        <div className={"flex items-center"}>
          <button type={"submit"}>Enviar</button>
        </div>
      </div>
    </form>
  );
}
