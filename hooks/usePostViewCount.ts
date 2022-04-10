import axios from "axios";
import { useEffect, useState } from "react";

const usePostViewCount = (slug: string, isBlogPage = false) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    async function runViewsApiRequests() {
      const { data } = await axios(`/api/views/${slug}`);
      setViews(data?.viewCount);

      if (process.env.NODE_ENV !== "development" && !isBlogPage) {
        const registerView = () =>
          fetch(`/api/views/${slug}`, {
            method: "POST",
          });

        registerView();
      }
    }
    runViewsApiRequests();
  }, []);

  return views;
};

export default usePostViewCount;
