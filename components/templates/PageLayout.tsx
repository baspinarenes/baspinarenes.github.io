import React from "react";
import { Footer, Header } from "../elements";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  return (
    <div className="p-3 sm:p-5 flex flex-col mx-auto w-full max-w-4xl">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
