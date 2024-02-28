"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { MoveLeft, MoveRight } from "lucide-react";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col relative top-0 w-full -z-10">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full">
        <h1 className="my-10 font-black text-[32px] text-center">
          Saksikan Keindahan Alam dan Budaya Pulau Dewata
        </h1>
        <CldVideoPlayer
          width="1080"
          height="720"
          src="visit_bali/maorkcii6nwslm69msho"
          className="object-contain rounded"
          id="video-player"
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="text-[40px] font-bold">
              Eksplorasi Keajaiban Alam Bali
            </h4>
            <p className="text-xl max-w-[500px] text-abu-abu">
              Jelajahi pantai-pantai berpasir putih yang memikat, dan merasakan
              deburan ombak yang menenangkan. Dari hutan hujan hingga
              gunung-gunung yang megah, setiap sudut Bali menawarkan pengalaman
              alam yang tak terlupakan.
            </p>
            <Link
              className="text-white font-bold text-sm py-2.5 px-5 bg-black w-fit rounded drop-shadow-lg hover:bg-hover-btn transition-colors
          ease-in-out duration-300 mt-4 flex items-center justify-between gap-4"
              href="/visit-bali"
            >
              Explore Now
              <MoveRight size={24} />
            </Link>
          </div>
          <CldImage
            width={720}
            height={340}
            src="visit_bali/ejddpoeydajciibzwcmb"
            alt="Bali"
            className="rounded object-contain"
          />
        </div>
        <div className="flex items-center justify-between mt-36">
          <CldImage
            width={720}
            height={340}
            src="visit_bali/uipjyiscoqhaqpdia1ug"
            alt="Bali"
            className="rounded object-contain"
          />
          <div className="flex flex-col gap-4">
            <h4 className="text-[40px] font-bold">
              Warisan Budaya yang Mendalam
            </h4>
            <p className="text-xl max-w-[500px] text-abu-abu">
              Menyelami kekayaan warisan budaya Bali dengan mengunjungi
              pura-pura yang megah, menikmati pertunjukan tari tradisional, dan
              merasakan kehidupan sehari-hari yang penuh dengan spiritualitas
              dan keindahan.
            </p>
            <Link
              className="text-white font-bold text-sm py-2.5 px-5 bg-black w-fit rounded drop-shadow-lg hover:bg-hover-btn transition-colors
          ease-in-out duration-300 mt-4 flex items-center justify-between gap-4"
              href="/visit-bali"
            >
              <MoveLeft size={24} />
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
