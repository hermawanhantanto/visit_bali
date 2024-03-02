import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeAgo } from "@/lib/utils";
import React from "react";
import ParseHTML from "../ParseHTML";

interface Props {
  komentar: {
    komentar: string;
    penulis: {
      name: string;
      picture: string;
    };
    createdAt: Date;
  };
}

const KomentarCard = ({ komentar }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="size-5">
            <AvatarImage src={komentar.penulis.picture} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <p className="font-semibold text-xs">{komentar.penulis.name}</p>
        </div>
        <p className="text-xs font-semibold text-abu-abu">
          {timeAgo(komentar.createdAt)}
        </p>
      </div>
      <div className="text-abu-abu mt-4 text-sm">
        <ParseHTML data={komentar.komentar} />
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default KomentarCard;
