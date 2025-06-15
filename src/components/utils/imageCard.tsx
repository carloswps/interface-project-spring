import ImageCardProps from "@/types/imageCardProps";
import { DownloadButton } from "@/components/ui/downloadButton";

export const ImageCard = ({ title, size, dataUpload, src, extension }: ImageCardProps) => {
  return (
    <div
      className={
        "card relative mb-2 overflow-hidden rounded-md bg-white shadow-sm transition-transform duration-250 " +
        "ease-in-out hover:-translate-y-1 hover:shadow-lg"
      }
    >
      <img
        className={"h-58 w-full rounded-t-md object-cover object-center"}
        src={src}
        alt={"Imagem teste"}
      />
      <div className={"card-body p-4"}>
        <h5 className={"mb-2 text-lg font-semibold text-gray-700"}>Nome da imagem: {title}</h5>
        <p className={"text-md mb-1 text-gray-500"}>Tamanho da imagem: {size}</p>
        <p className={"text-md mb-1 text-gray-500"}>Formato da imagem: {extension} </p>
        <p className={"text-md mb-1 text-gray-500"}>
          Data de upload:{" "}
          {dataUpload ? dataUpload.toLocaleDateString("pt-BR") : "Data não informada"}
        </p>
        <DownloadButton src={src} title={title} />
      </div>
    </div>
  );
};
