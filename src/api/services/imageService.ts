import ImageClass from "@/types/api/imageTypes";
import React from "react";

class ImageService {
  baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  async getImages(): Promise<ImageClass[]> {
    if (!this.baseUrl)
      throw new Error(
        "Base URL not found. Please, set the BASE_URL environment variable.",
      );
    try {
      const response = await fetch(`${this.baseUrl}/images`);
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error;
    }
  }
}

export const useImageService = () => {
  return React.useMemo(() => new ImageService(), []);
};
