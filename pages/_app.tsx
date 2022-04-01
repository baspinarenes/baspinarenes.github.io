import { useMemo, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import PageLayout from "../components/templates/PageLayout";
import { HamburgerMenuContextProvider } from "../contexts/hamburger-menu";
import { useHandleRouteChange } from "../hooks";
import * as gtag from "../utils/gtag";
import "../styles/globals.scss";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);

  useHandleRouteChange();

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
      </PageLayout>
    </HamburgerMenuContextProvider>
  );
};

export default MyApp;
