import axios from "axios";
import { TIMEOUT_FOR_ACCEPTABLE_READED } from "constants/post";
import { useEffect } from "react";

const useUpdatePostViewCount = (categoryName: string, postName: string) => {
  useEffect(() => {
    const slug = `blog/${categoryName}/${postName}`;
    let postViewTimeout: ReturnType<typeof setTimeout>;

    if (process.env.NODE_ENV !== "development") {
      postViewTimeout = setTimeout(() => {
        axios.post(`/api/views/${slug}`);
      }, TIMEOUT_FOR_ACCEPTABLE_READED);
    }

    return () => {
      clearTimeout(postViewTimeout);
    };
  }, [categoryName, postName]);
};

export default useUpdatePostViewCount;
