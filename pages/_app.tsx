import { useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import PageLayout from "components/PageLayout";
import { ThemeContextProvider } from "contexts/theme";
import { changeTailwindTheme, getInitialThemeValue } from "utils/theme";
import { HamburgerMenuContextProvider } from "contexts/hamburger-menu";
import useGtagPageView from "hooks/useGtagPageView";
import "../styles/globals.scss";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const [theme, setTheme] = useState<string>(getInitialThemeValue());
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] =
    useState<boolean>(false);

  useGtagPageView();
  useEffect(() => {
    changeTailwindTheme(theme);
  }, [theme]);

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
