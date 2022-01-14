import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { MDXProvider } from "@mdx-js/react";
import WarningBox from "../components/post-components/warning-box";
import LargeImage from "../components/post-components/large-image";
import CaptionedImage from "../components/post-components/captioned-image";
import TheEnd from "../components/post-components/the-end";
import Table from "../components/post-components/table";

const PageLayout = ({ children }) => {
  const [isShowHamburgerMenu, setIsShowHamburgerMenu] = useState(false);

  const components = { WarningBox, LargeImage, CaptionedImage, TheEnd, Table };

  return (
    <div
      className="page-wrapper"
      style={{
        height: isShowHamburgerMenu && "100vh",
        overflow: isShowHamburgerMenu && "hidden",
      }}
    >
      <Header
        isShowHamburgerMenu={isShowHamburgerMenu}
        setIsShowHamburgerMenu={setIsShowHamburgerMenu}
      />
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
