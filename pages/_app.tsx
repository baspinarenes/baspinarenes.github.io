import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageLayout from "../components/templates/PageLayout";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default MyApp;
