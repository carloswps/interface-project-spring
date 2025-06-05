"use client";

import Template from "@/app/components/template";
import { ImageCard } from "@/app/components/utils/imageCard";
import { ImageEntity } from "@/types/api/imageTypes";
import Loading from "@/app/components/utils/loading";
import ErrorComponent from "@/app/components/utils/errorComponent";
import Search from "@/app/components/ui/search";
import { useCallback, useEffect, useState } from "react";
import { fetchImages } from "@/api/services/fetchImages";

export default function GalleryPage() {
  const [images, setImages] = useState<ImageEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  const searchImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const resultImages = await fetchImages();
      setImages(resultImages);
    } catch (error) {
      setError("Failed to fetch images, Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    searchImages();
  }, [searchImages]);

  return (
    <Template>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <>
          <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700">Gallery Page</h1>
          <Search onSearch={searchImages} />
          <section className={"grid grid-cols-3 gap-6"}>
            {images.map((image: ImageEntity) => (
              <ImageCard
                key={image.id}
                src={image.url}
                title={image.name}
                size={image.size}
                dataUpload={new Date(image.uploadDate)}
              />
            ))}
          </section>
        </>
      )}
    </Template>
  );
}
