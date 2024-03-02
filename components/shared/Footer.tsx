import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] flex mx-auto sm:justify-between sm:flex-row flex-col px-5">
      <Link href="/" className="flex flex-col relative">
        <Image
          src="/assets/images/logo.png"
          alt="Visit Bali"
          width={200}
          height={50}
          className="object-contain"
        />
        <p className="bottom-8 left-10 absolute text-sm font-semibold">
          &copy; 2024 Business Bali
        </p>
      </Link>
      <div className="flex items-center gap-4 max-sm:p-10 ">
        <Image
          width={24}
          height={24}
          src="/assets/icons/instagram.svg"
          alt="instagram"
        />
        <Image
          width={24}
          height={24}
          src="/assets/icons/linkedin.svg"
          alt="instagram"
        />
        <Image
          width={24}
          height={24}
          src="/assets/icons/twitter.svg"
          alt="instagram"
        />
      </div>
    </footer>
  );
};

export default Footer;
