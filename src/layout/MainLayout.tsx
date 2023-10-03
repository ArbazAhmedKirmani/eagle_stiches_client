import { ReactNode } from "react";

import HeaderSection from "@/components/layout/header/HeaderSection";
import FooterSection from "@/components/layout/Footer/FooterSection";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderSection />
      <main>{children}</main>
      <FooterSection />
    </>
  );
};

export default MainLayout;
