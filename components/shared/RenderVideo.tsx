"use client";
import { CldVideoPlayer } from "next-cloudinary";

const RenderVideo = () => {
  return (
    <CldVideoPlayer
      width="1080"
      height="720"
      src="visit_bali/maorkcii6nwslm69msho"
      className="object-contain rounded max-sm:max-w-full"
      autoPlay="always"
      id="video-player"
    />
  );
};

export default RenderVideo;
