import { topBar } from "@/constant";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full absolute top-0 z-20 max-lg:hidden px-5">
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Visit Bali"
          width={150}
          height={50}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-10">
        {topBar.map((item: any) => (
          <Link
            href={item.path}
            key={item.path}
            className="text-lg px-5 text-abu-abu hover:text-abu-abu/50 font-bold"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <UserButton
          afterSignOutUrl="/sign-up"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
