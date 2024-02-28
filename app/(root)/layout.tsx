import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative w-full min-h-full">
      <div className="max-w-[1440px] mx-auto relative">
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
