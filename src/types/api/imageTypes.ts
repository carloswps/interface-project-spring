export interface ImageData {
  id?: string;
  name: string;
  uploadDate: Date | string;
  size?: number;
  url?: string;
  extension: string;
  tag?: string;
  imageEntity: Array<{
    id?: string;
    name: string;
    uploadDate: Date | string;
    size?: number;
    url?: string;
    extension: string;
    tags?: string;
  }>;
}

export interface ImageEntity {
  id?: string;
  name: string;
  tag?: string;
  uploadDate: Date | string;
  size?: number;
  url?: string;
  extension: string;
}

class ImageClass implements ImageData {
  name: string;
  uploadDate: Date;
  size?: number;
  url?: string;
  extension: string;
  imageEntity: ImageEntity[];

  constructor(data: ImageData) {
    if (!data) {
      throw new Error("Image data is required.");
    }

    this.name = data.name;
    this.uploadDate = new Date(data.uploadDate);
    this.size = data.size;
    this.url = data.url;
    this.extension = data.extension;
    this.imageEntity = data.imageEntity.map((imgEntity) => ({
      id: imgEntity.id,
      name: imgEntity.name,
      uploadDate: new Date(imgEntity.uploadDate),
      size: imgEntity.size,
      url: imgEntity.url,
      extension: imgEntity.extension,
      tag: imgEntity.tags,
    }));
  }

  createImage(dataArray: ImageData[]): ImageClass[] {
    return dataArray.map((data: ImageData) => new ImageClass(data));
  }
}

export default ImageClass;
