import ImageClass from "@/types/api/imageTypes";

class ImageService {
  baseUrl = process.env["BASE_URL "];

  async getImages(): Promise<ImageClass[]> {
    const response = await fetch(`${this.baseUrl}/images`);
    return response.json();
  }
}

export const useImageService = () => new ImageService();
