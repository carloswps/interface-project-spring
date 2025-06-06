type ImageCardProps = {
  width?: number;
  title?: string;
  tags?: string;
  dataUpload?: Date;
  src: string | undefined;
  size?: number | undefined;
  extension?: "png" | "jpeg" | string;
};

export default ImageCardProps;
