"use client";

import ImageCardProps from "@/types/imageCardProps";

export function DownloadButton({ src, title }: ImageCardProps) {
  const download = async () => {
    if (!src) {
      alert("Desculpe, ocorreu um erro ao baixar a imagem.");
      return;
    }

    const confirmation = window.confirm("Você realmente deseja baixar essa imagem?");
    if (!confirmation) {
      alert("Download cancelado.");
      return;
    }

    try {
      const imageName = (title as string) || "Image";

      const response = await fetch(src, { mode: "cors" });
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      alert("Erro ao baixar a imagem.");
      console.error(error);
    }
  };

  return (
    <div className="mt-2">
      <button
        onClick={download}
        className={
          "focus:shadow-outline text-md rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:outline-none"
        }
      >
        Baixar
      </button>
    </div>
  );
}
