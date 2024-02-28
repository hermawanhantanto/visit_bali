"use client";
import { Badge } from "@/components/ui/badge";
import { IDestination } from "@/database/destination.model";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";

interface Props {
  destination: IDestination;
}

const DestinationCard = ({ destination }: Props) => {
  return (
    <div className="flex items-center gap-10">
      <CldImage
        width={540}
        height={340}
        src={destination.gambar}
        alt={destination.judul}
        className="rounded contain max-w-[540px] max-h-[340px]"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {destination.tags.map((tag: string) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="relative group inline-block">
          <Link
            className="text-[32px] font-bold group-hover:text-abu-abu transition-colors duration-300 max-w-[600px] line-clamp-1"
            href={`/destinasi/${destination._id}`}
          >
            {destination.judul}
          </Link>
          <div className="absolute bottom-0 left-0 w-full bg-abu-abu/50 h-0.5 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-50" />
        </div>
        <p className="max-w-[600px] max-h-[300px] line-clamp-3 text-abu-abu font-semibold">
          {destination.deskripsi}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
