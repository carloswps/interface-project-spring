import Template from "@/app/components/template";
import { ImageCard } from "@/app/components/utils/imageCard";

export default function GalleryPage() {
  return (
    <Template>
      <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700">
        Gallery Page
      </h1>
      <section className={"grid grid-cols-3 gap-6"}>
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
        <ImageCard
          src={"/money-trees.jpg"}
          dataUpload={new Date()}
          title={"Um titulo de teste"}
          description={"SAUDADES DELA"}
        />
      </section>
    </Template>
  );
}
