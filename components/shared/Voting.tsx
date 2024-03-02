import { Eye, ThumbsUp, MessageCircle } from "lucide-react";
import Image from "next/image";

interface Props {
  likes: number;
  views: number;
  comments: number;
}

const Voting = ({ likes, views, comments }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <Image
          width={12}
          height={12}
          src="/assets/icons/upvote.svg"
          alt="upvote"
          className="object-contain"
        />
        <p className="text-xs font-bold text-abu-abu">{likes}</p>
      </div>
      <div className="flex items-center gap-1">
        <Eye size={12} />
        <p className="text-xs font-bold text-abu-abu">{views}</p>
      </div>
      <div className="flex items-center gap-1">
        <MessageCircle size={12} />
        <p className="text-xs font-bold text-abu-abu">{comments}</p>
      </div>
    </div>
  );
};

export default Voting;
