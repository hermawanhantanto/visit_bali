import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] flex mx-auto ">
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
    </footer>
  );
};

export default Footer;
