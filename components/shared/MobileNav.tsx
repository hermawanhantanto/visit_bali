"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { topBar } from "@/constant";
import { SignInButton, SignOutButton, SignedOut } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const { sessionId } = useAuth();
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="absolute top-0 z-50 m-10 max-lg:block hidden"
      >
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[300px] flex flex-col gap-10 p-5"
      >
        <SheetHeader>
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Visit Bali"
              width={200}
              height={50}
              className="object-contain"
            />
          </Link>
        </SheetHeader>
        {topBar.map((item: any) => (
          <Link
            className={`rounded py-3 px-6 text-abu-abu font-semibold text-lg transition-colors ease-in-out duration-300 ${
              pathname === item.path ? "bg-abu-abu text-white" : ""
            }`}
            key={item.path}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
        {sessionId ? (
          <SignOutButton signOutOptions={{ sessionId }}>
            <p className="text-red-500 text-lg px-6 py-3 cursor-pointer">
              Sign out
            </p>
          </SignOutButton>
        ) : (
          <SignInButton>
            <p className="text-green-500 text-lg px-6 py-3 cursor-pointer">
              Sign In
            </p>
          </SignInButton>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
