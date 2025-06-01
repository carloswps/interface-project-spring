interface ImageData {
  name: string;
  description?: string;
  uploadDate: Date;
  size?: number;
  url?: string;
  extension: string;
}

class ImageClass implements ImageData {
  name: string;
  description?: string;
  uploadDate: Date;
  size?: number;
  url?: string;
  extension: string;

  constructor(data: ImageData) {
    this.name = data.name;
    this.description = data.description;
    this.uploadDate = data.uploadDate;
    this.size = data.size;
    this.url = data.url;
    this.extension = data.extension;
  }
}

export default ImageClass;
