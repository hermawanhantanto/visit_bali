import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-zinc-100">
      {children}
    </section>
  );
};

export default Layout;
