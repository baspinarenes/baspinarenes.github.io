// @ts-nocheck

import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/firebase";

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug },
  } = req;

  const pretifiedSlug: string =
    typeof slug === "string" ? slug : slug.join("/");

  if (req.method === "POST") {
    const ref = db.ref("pageViews").child(pretifiedSlug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      viewCount: snapshot.val(),
    });
  }

  if (req.method === "GET") {
    const snapshot = await db
      .ref("pageViews")
      .child(pretifiedSlug)
      .once("value");
    const views = snapshot.val();

    return res.status(200).json({ viewCount: views });
  }
};
