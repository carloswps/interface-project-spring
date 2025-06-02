"use client";

import Template from "@/app/components/template";
import { ImageCard } from "@/app/components/utils/imageCard";
import { useImageService } from "@/api/services/imageService";
import { useEffect, useState } from "react";
import ImageClass, { ImageEntity } from "@/types/api/imageTypes";

export default function GalleryPage() {
  const userImager = useImageService();
  const [images, setImages] = useState<ImageClass[]>([]);

  const searchImages = async () => {
    const resultImages = await userImager.getImages();
    setImages(resultImages);
    console.log(resultImages);
  };

  useEffect(() => {
    searchImages();
  }, []);

  return (
    <Template>
      <button
        className={
          "h-auto w-auto cursor-pointer rounded-full bg-gray-700 p-2 text-3xl"
        }
        onClick={searchImages}
      >
        Teste
      </button>
      <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700">
        Gallery Page
      </h1>
      <section className={"grid grid-cols-3 gap-6"}>
        {images.map((image: ImageEntity) => (
          <ImageCard
            src={image.url}
            title={image.name}
            tags={image.description}
            dataUpload={new Date(image.uploadDate)}
          />
        ))}
      </section>
    </Template>
  );
}
