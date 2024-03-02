import Pagination from "@/components/shared/Pagination";
import ParseHTML from "@/components/shared/ParseHTML";
import RenderGambar from "@/components/shared/RenderGambar";
import Upvote from "@/components/shared/Upvote";
import Voting from "@/components/shared/Voting";
import KomentarCard from "@/components/shared/cards/KomentarCard";
import KomentarForm from "@/components/shared/forms/KomentarForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getArtikelById } from "@/lib/action/artikel.action";
import { getUserByClerkId } from "@/lib/action/user.action";
import { timeAgo } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { Eye } from "lucide-react";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    page: string;
  };
}

const ArtikePageById = async ({ params, searchParams }: Props) => {
  const result = await getArtikelById(
    params.id,
    Number(searchParams.page) || 1
  );
  const { userId } = auth();
  let mongoUser;
  if (userId) {
    mongoUser = await getUserByClerkId(userId);
  }

  if (!result) {
    return notFound();
  }

  return (
    <section className="pt-40 pl-8 max-w-[800px] mx-auto">
      <div className="flex w-full justify-between mb-4">
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage src={result.artikel.penulis.picture} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <p className="text-xs font-bold text-abu-abu">
            {result.artikel.penulis.name}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Upvote
            hasUpvoted={result.artikel.likes.includes(mongoUser._id)}
            artikelId={JSON.stringify(result.artikel._id)}
            userId={JSON.stringify(mongoUser._id)}
            likes={result.artikel.likes.length}
          />
          <div className="flex items-center gap-2">
            <Eye size={20} />
            <p className="text-xs font-bold text-abu-abu">
              {result.artikel.views}
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-[40px]">{result.artikel.judul}</h2>
      <div className="mt-4 text-abu-abu leading-8 text-xl">
        <ParseHTML data={result.artikel.deskripsi} />
      </div>

      <RenderGambar
        url={result.artikel.gambar}
        className="rounded object-contain mt-6"
        width={800}
        height={400}
        id={String(result.artikel._id)}
      />
      <div className="mt-4 flex justify-end w-full">
        <p className="text-abu-abu text-xs">
          {timeAgo(result.artikel.createdAt)}
        </p>
      </div>

      <div className="flex flex-col mt-2">
        <h4 className="font-bold text-[20px]">Komentar</h4>
        <div className="flex flex-col gap-6 my-10">
          {result.artikel.komentar.map((komentar: any) => (
            <KomentarCard key={komentar._id} komentar={komentar} />
          ))}
        </div>
        <KomentarForm
          artikelId={JSON.stringify(result.artikel._id)}
          userId={JSON.stringify(mongoUser._id)}
          isiArtikel={result.artikel.deskripsi}
        />
      </div>
      <div className="flex justify-center w-full mt-20">
        <Pagination
          countItem={5}
          totalItem={result.countKomentar}
          page={Number(searchParams.page) || 1}
        />
      </div>
    </section>
  );
};

export default ArtikePageById;
