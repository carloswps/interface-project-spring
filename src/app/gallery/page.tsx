"use client";

import Template from "@/components/template";
import { ImageCard } from "@/components/utils/imageCard";
import { ImageEntity } from "@/types/api/imageTypes";
import Loading from "@/components/utils/loading";
import ErrorComponent from "@/components/utils/errorComponent";
import Buttons from "@/components/ui/buttons";
import { useCallback, useEffect, useState } from "react";
import { fetchImages } from "@/api/services/fetchImages";

export default function GalleryPage() {
  const [images, setImages] = useState<ImageEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  const searchImages = useCallback(async (query: string, extension: string) => {
    setLoading(true);
    setError(null);
    try {
      const resultImages = await fetchImages(query, extension);
      setImages(resultImages);
    } catch (error) {
      setError("Failed to fetch images, Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    searchImages("", "");
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
          <Buttons onSearch={searchImages} />
          <section className={"grid grid-cols-3 gap-6"}>
            {images.map((image: ImageEntity) => (
              <ImageCard
                key={image.url}
                src={image.url}
                title={image.name}
                size={image.size}
                extension={image.extension}
                dataUpload={new Date(image.uploadDate)}
              />
            ))}
          </section>
        </>
      )}
    </Template>
  );
}
