"use client";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [text, setText] = useState<string>("");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [delta, setDelta] = useState<number>(Math.floor(Math.random() * 300));
  const periode = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const fullText = "Bali Menanti";
    const updateText = isDeleted
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleted) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleted && updateText === fullText) {
      setDelta(periode);
      setIsDeleted(true);
    }

    if (isDeleted && text === "") {
      setIsDeleted(false);
      setDelta(100);
    }
  };

  return (
    <header className="flex w-full h-screen bg-main-hero bg-cover bg-center bg-no-repeat justify-center items-center max-sm:px-3">
      <div className="max-w-[1440px] flex flex-col gap-2 text-center">
        <h1 className="text-white sm:text-[61px] text-[30px] font-black drop-shadow-lg animate-text-bounce-slow">
          <span className="border-r-white drop-shadow-lg border-r-4">
            {text}
          </span>
        </h1>
        <p className="sm:max-w-[600px] text-white drop-shadow-lg font-bold leading-7 sm:text-xl text-sm">
          Jelajahi keindahan alam dan budaya yang memukau. Dapatkan pengalaman
          liburan yang tak terlupakan di Bali.
        </p>
      </div>
    </header>
  );
};

export default Header;
