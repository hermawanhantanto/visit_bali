import ArtikelForm from "@/components/shared/forms/ArtikelForm";
import { getUserByClerkId } from "@/lib/action/user.action";
import { auth } from "@clerk/nextjs";
const BuatArtikelPage = async () => {
  const { userId } = auth();
  let mongoUser;

  if (userId) {
    mongoUser = await getUserByClerkId(userId);
  }

  if (!mongoUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-[40px] font-black">
          User harus login terlebih dahulu!
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto pt-36 pl-8">
      <h2 className="text-[40px] font-black">Buat Artikel</h2>
      <p className="text-[20px] text-abu-abu max-w-[700px] leading-8">
        Bagikan cerita-cerita, pengalaman dan pengetahuan kalian yang inspiratif
        mengenai bali disini.
      </p>
      <div className="mt-10">
        <ArtikelForm mongoUser={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default BuatArtikelPage;
