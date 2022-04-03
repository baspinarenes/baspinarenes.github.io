import { useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "components/templates/PageLayout";
import { HamburgerMenuContextProvider } from "../contexts/hamburger-menu";
import * as gtag from "../utils/gtag";
import "../styles/globals.scss";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
