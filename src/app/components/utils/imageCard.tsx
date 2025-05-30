export const ImageCard = ({ image }: any) => {
  return (
    <div
      className={
        "card relative rounded-sm bg-white shadow-md transition-transform duration-300 " +
        "ease-in-out hover:-translate-y-1 hover:shadow-lg"
      }
    >
      <img
        className={"h-56 w-full rounded-t-md object-cover"}
        src={"/money-trees.jpg"}
      />
      <div className={"card-body p-4"}>
        <h5 className={"text-md mb-2 font-semibold text-gray-500"}>
          {" "}
          Nome da imagem{" "}
        </h5>
        <p className={"mb-4 text-sm text-gray-700"}> Descrição da imagem </p>
        <p className={"mb-4 text-sm text-gray-500"}> Data da imagem </p>
      </div>
    </div>
  );
};
