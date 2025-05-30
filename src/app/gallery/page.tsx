import Template from "@/app/components/template";
import { ImageCard } from "@/app/components/utils/imageCard";

export default function GalleryPage() {
  return (
    <Template>
      <h1 className="text-3xl">Teste de template</h1>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </Template>
  );
}
