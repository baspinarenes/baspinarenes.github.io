import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";

const useHandleRouteChange = () => {
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
};

export default useHandleRouteChange;
