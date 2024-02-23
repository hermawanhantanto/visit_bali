import { topBar } from "@/constant";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between absolute w-full">
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Visit Bali"
          width={120}
          height={20}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-10">
        {topBar.map((item: any) => (
          <Link
            href={item.path}
            key={item.path}
            className="font-medium hover:text-abu-abu text-sm group hover:underline ease-out duration-300 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <UserButton
          afterSignOutUrl="/sign-up"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
        <Link
          href="/search"
          className="rounded-full items-center flex justify-center bg-black text-white p-2 hover:bg-hover-btn transition-colors ease-out duration-300"
        >
          <Search size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
