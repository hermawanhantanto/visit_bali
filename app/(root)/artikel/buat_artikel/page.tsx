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
    <div className="lg:max-w-[1440px] lg:mx-auto lg:pt-36 pt-24 lg:p-8 p-5">
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
