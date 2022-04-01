import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useMemo, useState } from "react";
import PageLayout from "../components/templates/PageLayout";
import { HamburgerMenuContextProvider } from "../contexts/hamburger-menu";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);

  const contextData = useMemo(
    () => ({ isOpenHamburgerMenu, setIsOpenHamburgerMenu }),
    [isOpenHamburgerMenu]
  );

  return (
    <HamburgerMenuContextProvider value={contextData}>
      <PageLayout>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </PageLayout>
    </HamburgerMenuContextProvider>
  );
};

export default MyApp;
