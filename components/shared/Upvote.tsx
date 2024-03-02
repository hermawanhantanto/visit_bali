"use client";
import { upvoteArtikel, viewArtikel } from "@/lib/action/artikel.action";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";

interface Props {
  hasUpvoted: boolean;
  artikelId: string;
  userId: string;
  likes: number;
}

const Upvote = ({ hasUpvoted, artikelId, userId, likes }: Props) => {
  const pathname = usePathname();
  const { toast } = useToast();
  const router = useRouter();

  const handleUpvote = async () => {
    await upvoteArtikel({
      artikelId: JSON.parse(artikelId),
      userId: JSON.parse(userId),
      path: pathname,
    });
    toast({
      title: hasUpvoted ? "Artikel diunvote" : "Artikel diupvote",
    });
  };

  useEffect(() => {
    viewArtikel({
      artikelId: JSON.parse(artikelId),
    });
  }, [router, pathname, artikelId, userId]);

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleUpvote}>
        {hasUpvoted ? (
          <Image
            width={20}
            height={20}
            src="/assets/icons/upvoteFill.svg"
            alt="upvote"
            className="object-contain"
          />
        ) : (
          <Image
            width={20}
            height={20}
            src="/assets/icons/upvote.svg"
            alt="upvote"
            className="object-contain"
          />
        )}
      </button>
      <p className="text-sm font-bold text-abu-abu">{likes}</p>
    </div>
  );
};

export default Upvote;
