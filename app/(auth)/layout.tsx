import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat bg-login-hero">
      {children}
    </section>
  );
};

export default Layout;
