import React, { useContext } from "react";
import { HamburgerMenuContext } from "contexts/hamburger-menu";
import { Footer, Header } from "components/index";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  const { isOpenHamburgerMenu } = useContext(HamburgerMenuContext);

  return (
    <div
      className={`
        w-full max-w-3xl
        p-4 py-8 mx-auto
        flex flex-col gap-14
        ${isOpenHamburgerMenu ? "h-screen overflow-hidden" : ""}`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
