import React, { useContext } from "react";
import { HamburgerMenuContext } from "../../contexts/hamburger-menu";
import { Footer, Header } from "../elements";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  const { isOpenHamburgerMenu } = useContext(HamburgerMenuContext);

  return (
    <div
      className={`p-5 flex flex-col mx-auto w-full max-w-3xl text-gray-600 gap-14 ${
        isOpenHamburgerMenu ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
