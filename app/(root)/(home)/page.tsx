import CarouselContainer from "@/components/shared/CarouselContainer";
import Header from "@/components/shared/Header";
import RenderGambar from "@/components/shared/RenderGambar";
import RenderVideo from "@/components/shared/RenderVideo";
import { MoveLeft, MoveRight } from "lucide-react";
import "next-cloudinary/dist/cld-video-player.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col relative top-0 w-full">
      <div className="-z-10">
        <Header />
      </div>
      <div className="sm:max-w-[1440px] sm:mx-auto w-full max-xl:p-3 p-5">
        <h1 className="my-10 font-black sm:text-[32px] text-[20px] text-center">
          Saksikan Keindahan Alam dan Budaya Pulau Dewata
        </h1>
        <RenderVideo />
        <div className="flex items-center justify-between xl:flex-row flex-col max-xl:text-center">
          <div className="flex flex-col gap-4 max-xl:items-center">
            <h4 className="sm:text-[40px] text-[20px] font-bold">
              Eksplorasi Keajaiban Alam Bali
            </h4>
            <p className="sm:text-xl text-sm sm:max-w-[500px] text-abu-abu sm:leading-10 leading-6 max-xl:mb-10">
              Jelajahi pantai-pantai berpasir putih yang memikat, dan merasakan
              deburan ombak yang menenangkan. Dari hutan hujan hingga
              gunung-gunung yang megah, setiap sudut Bali menawarkan pengalaman
              alam yang tak terlupakan.
            </p>
            <Link
              className="text-white font-bold text-sm py-2.5 px-5 bg-black w-fit rounded drop-shadow-xl hover:bg-hover-btn transition-colors
          ease-in-out duration-300 mt-4 flex items-center justify-between gap-4 max-xl:hidden"
              href="/destinasi"
            >
              Explore Now
              <MoveRight size={24} />
            </Link>
          </div>
          <RenderGambar
            width={720}
            height={340}
            url="visit_bali/ejddpoeydajciibzwcmb"
            alt="Bali"
            className="rounded object-contain"
            id="image-1"
          />
        </div>
        <div className="flex items-center justify-between xl:flex-row flex-col max-xl:text-center xl:mt-36 mt-10">
          <RenderGambar
            width={720}
            height={340}
            url="visit_bali/uipjyiscoqhaqpdia1ug"
            alt="Bali"
            className="rounded object-contain"
            id="image-2"
          />
          <div className="flex flex-col gap-4 max-xl:items-center">
            <h4 className="sm:text-[40px] text-[20px] font-bold max-xl:mt-10">
              Warisan Budaya yang Mendalam
            </h4>
            <p className="sm:text-xl text-sm sm:max-w-[500px] text-abu-abu sm:leading-10 leading-6 ">
              Menyelami kekayaan warisan budaya Bali dengan mengunjungi
              pura-pura yang megah, menikmati pertunjukan tari tradisional, dan
              merasakan kehidupan sehari-hari yang penuh dengan spiritualitas
              dan keindahan.
            </p>
            <Link
              className="text-white font-bold text-sm py-2.5 px-5 bg-black w-fit rounded drop-shadow-xl hover:bg-hover-btn transition-colors
          ease-in-out duration-300 mt-4 flex items-center justify-between gap-4 max-xl:hidden"
              href="/aktivitas"
            >
              <MoveLeft size={24} />
              Explore Now
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 xl:mt-36 mt-10">
          <div className="flex items-center xl:justify-between justify-center">
            <h4 className="sm:text-[40px] text-[20px] font-bold">
              Destinasi Populer di Bali
            </h4>
            <Link
              href={"/destinasi"}
              className="flex items-center gap-2 py-2.5 px-6 border-2 border-abu-abu rounded border-opacity-30 hover:bg-abu-abu hover:text-white transition-colors ease-in-out duration-300 max-xl:hidden"
            >
              Lihat Semua
              <MoveRight size={16} />
            </Link>
          </div>
          <div className="xl:mt-12 mt-4">
            <CarouselContainer />
          </div>
        </div>
        <div className="flex items-center justify-between xl:flex-row flex-col max-xl:text-center xl:mt-36 mt-10">
          <div className="flex flex-col gap-4 max-xl:items-center">
            <h4 className="sm:text-[40px] text-[20px] font-bold max-w-[600px]">
              Rasakan Kehangatan Keramahan Lokal
            </h4>
            <p className="sm:text-xl text-sm max-w-[500px] text-abu-abu sm:leading-10 leading-6 max-xl:mb-10">
              Temui senyum ramah dan sapaan hangat saat Anda menjelajahi
              kampung-kampung tradisional dan menikmati hidangan lezat yang
              disiapkan dengan cinta. Ini bukan sekadar perjalanan, tetapi
              pengalaman yang membuat Anda merasa seperti di rumah.
            </p>
          </div>
          <RenderGambar
            width={720}
            height={340}
            url="visit_bali/mh9bs4xbwl0gn4ydbwfa"
            alt="Bali"
            className="rounded object-contain "
            id="image-3"
          />
        </div>
        <div className="flex items-center justify-between xl:flex-row flex-col max-xl:text-center xl:mt-36 mt-10">
          <RenderGambar
            width={720}
            height={340}
            url="visit_bali/ktiai5mf9qztq75vdv3c"
            alt="Bali"
            className="rounded object-contain"
            id="image-4"
          />
          <div className="flex flex-col gap-4 max-xl:items-center">
            <h4 className="sm:text-[40px] text-[20px] font-bold max-xl:mt-4">
              Rasakan Bali Melalui Lidah Anda
            </h4>
            <p className="sm:text-xl text-sm max-w-[500px] text-abu-abu sm:leading-10 leading-6">
              Sambutlah setiap hidangan sebagai perjalanan rasa yang membawa
              Anda lebih dekat dengan budaya dan tradisi Bali. Dari pasar
              tradisional hingga restoran mewah, pulau ini menawarkan pengalaman
              kuliner yang tak terlupakan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
