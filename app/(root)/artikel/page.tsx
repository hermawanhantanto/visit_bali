import ArtikelFilters from "@/components/shared/filters/ArtikelFilters";
import Link from "next/link";

const ArtikelPage = () => {
  return (
    <section className="max-w-[1440px] pt-36 pl-8 mx-auto">
      <h2 className="text-[40px] font-black">Artikel</h2>
      <p className="text-abu-abu max-w-[700px] text-[20px] leading-8">
        Setiap artikel adalah sumber inspirasi untuk petualangan Anda
        selanjutnya. Mari temukan cerita-cerita yang membuat hati berdebar,
        merencanakan perjalanan yang berarti, dan merayakan keindahan Pulau Bali
        ini melalui mata dan kata.
      </p>
      <div className="flex items-center justify-between mt-10">
        <ArtikelFilters />
        <Link
          href="/artikel/buat_artikel"
          className="bg-abu-abu text-white hover:bg-abu-abu/50 font-semibold rounded py-2.5 px-6 transition-colors ease-in-out duration-300 "
        >
          Buat Artikel
        </Link>
      </div>
    </section>
  );
};

export default ArtikelPage;
