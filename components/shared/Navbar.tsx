import { topBar } from "@/constant";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Visit Bali"
          width={120}
          height={50}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-10">
        {topBar.map((item: any) => (
          <Link
            href={item.path}
            key={item.path}
            className="text-[14px] font-bold px-5 text-[rgb(13,13,13)] "
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <Link
          href="/search"
          className="text-[rgb(13,13,13)] font-semibold text-[12px] drop-shadow-lg"
        >
          <Search />
        </Link>
        <UserButton
          afterSignOutUrl="/sign-up"
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
