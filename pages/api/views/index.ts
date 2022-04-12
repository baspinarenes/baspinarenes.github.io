import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/firebase";

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const ref = await db.ref("pageViews");
    const response = await ref.get();
    const postViews = response.val().blog;

    const posts = Object.entries(postViews).map(([key, val]) => {
      const categoryPostsPairs = Object.entries(val as any);
      const categoryPostsPairsFlat = categoryPostsPairs.map((x) => [key, ...x]);

      return categoryPostsPairsFlat;
    });

    const postsFlat = posts.flat();
    const sortedPosts = postsFlat.sort((a: any, b: any) => b[2] - a[2]);

    return res.status(200).json({ posts: sortedPosts });
  }
};
