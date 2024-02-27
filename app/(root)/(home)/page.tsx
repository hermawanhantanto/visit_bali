"use client";
import Header from "@/components/shared/Header";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Home() {
  return (
    <main className="flex flex-col absolute top-0 w-full -z-10">
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <h1 className="my-10 font-black text-[32px] text-center">
          Saksikan Keindahan Alam dan Budaya Pulau Dewata
        </h1>
        <div className="mt-10 max-w-[1080px]">
          <CldVideoPlayer
            width="1080"
            height="720"
            src="visit_bali/maorkcii6nwslm69msho"
          />
        </div>
      </div>
    </main>
  );
}
