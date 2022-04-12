import axios from "axios";
import { useEffect, useState } from "react";

const usePostViewCount = (slug: string, shouldApiUpdate = true) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios(`/api/views/${slug}`);

      setViews(data?.viewCount);

      if (process.env.NODE_ENV !== "development" && shouldApiUpdate) {
        axios.post(`/api/views/${slug}`);
      }
    })();
  }, []);

  return views;
};

export default usePostViewCount;
