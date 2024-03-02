import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeAgo } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { date } from "zod";
import Voting from "../Voting";

interface Props {
  artikel: {
    _id: string;
    judul: string;
    penulis: {
      name: string;
      picture: string;
    };
    views: number;
    likes: [];
    createdAt: Date;
    komentar: [];
  };
}

const ArtikelCard = ({ artikel }: Props) => {
  return (
    <Link
      className="flex items-start rounded-xl shadow p-5 max-w-[700px] border-abu-abu border border-opacity-5 flex-col hover:-translate-y-5 transition duration-300 ease-in-out"
      href={`/artikel/${artikel._id}`}
    >
      <span className="text-xs text-abu-abu mb-2">
        {timeAgo(artikel.createdAt)}
      </span>

      <h4 className="text-abu-abu font-bold line-clamp-1 text-xl">
        {artikel.judul}
      </h4>

      <div className="flex justify-between mt-4 w-full">
        <div className="flex items-center gap-2">
          <Avatar className="size-5">
            <AvatarImage src={artikel.penulis.picture} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <p className="font-semibold sm:text-sm text-xs">
            {artikel.penulis.name}
          </p>
        </div>
        <Voting
          likes={artikel.likes.length}
          views={artikel.views}
          comments={artikel.komentar.length}
        />
      </div>
    </Link>
  );
};

export default ArtikelCard;
