import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";



const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="relative w-full sm:min-h-full">
      <div className="sm:max-w-[1440px] mx-auto relative">
        <MobileNav />
        <Navbar />
      </div>
      {children}
      <div className="w-full mt-12 border-t border-abu-abu border-opacity-10 py-5">
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
