import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto relative ">
        <Navbar />
      </div>
      {children}
    </main>
  );
};

export default Layout;
