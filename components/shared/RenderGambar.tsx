"use client";
import { CldImage } from "next-cloudinary";

interface Props {
  url: string;
  className: string;
  width?: number;
  height?: number;
  alt?: string;
  id?: string;
}

const RenderGambar = ({ url, className, width, height, alt, id }: Props) => {
  return (
    <CldImage
      src={url}
      width={width || 1440}
      height={height || 720}
      alt={alt || "gambar"}
      id={id}
      className={className}
    />
  );
};

export default RenderGambar;
