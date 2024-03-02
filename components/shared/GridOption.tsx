"use client";
import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

interface Props {
  title: string;
  className?: string;
  image?: string;
}

const GridOption = ({ title, className, image }: Props) => {
  return (
    <div className={cn("relative grid-option h-full", className)}>
      <h2 className="text-lg font-bold">{title}</h2>

      {image && (
        <CldImage
          src={image}
          alt={title}
          fill={true}
          className="object-cover opacity-20 hover:opacity-90 rounded-md transition-colors ease-in-out duration-300 cursor-pointer"
        />
      )}
    </div>
  );
};

export default GridOption;
