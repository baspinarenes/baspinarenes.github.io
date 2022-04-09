// referance: https://codebycorey.com/blog/page-views-nextjs-supabase
import { NextApiRequest, NextApiResponse } from "next";
import { SupabaseAdmin } from "utils/supabase-admin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug },
  } = req;

  const customizedSlug = typeof slug === "string" ? slug : slug.join("/");

  if (req.method === "POST") {
    // Call our stored procedure with the page_slug set by the request params slug
    await SupabaseAdmin.rpc("increment_page_view", {
      page_slug: customizedSlug,
    });

    return res.status(200).json({
      message: `Successfully incremented page: ${customizedSlug}`,
    });
  }

  if (req.method === "GET") {
    // Query the pages table in the database where slug equals the request params slug.
    const { data } = await SupabaseAdmin.from("pages")
      .select("view_count")
      .filter("slug", "eq", customizedSlug);

    if (data) {
      return res.status(200).json({
        views: data[0]?.view_count || null,
      });
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
};
