import { useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "components/templates/PageLayout";
import { ThemeContextProvider } from "contexts/theme";
import { changeTailwindTheme } from "utils/theme";
import { HamburgerMenuContextProvider } from "contexts/hamburger-menu";
import * as gtag from "../utils/gtag";
import "../styles/globals.scss";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const cachedTheme =
    typeof window !== "undefined" &&
    String(localStorage.getItem("color-theme"));
  const [theme, setTheme] = useState<string>(cachedTheme || "light");
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

  useEffect(() => {
    changeTailwindTheme(theme);
  }, []);

  const themeContextData = useMemo(() => ({ theme, setTheme }), [theme]);

  const hamburgerMenuContextData = useMemo(
    () => ({ isOpenHamburgerMenu, setIsOpenHamburgerMenu }),
    [isOpenHamburgerMenu]
  );

  return (
    <ThemeContextProvider value={themeContextData}>
      <HamburgerMenuContextProvider value={hamburgerMenuContextData}>
        <PageLayout>
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </PageLayout>
      </HamburgerMenuContextProvider>
    </ThemeContextProvider>
  );
};

export default MyApp;
