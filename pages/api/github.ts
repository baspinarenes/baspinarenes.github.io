import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { mapRepository } from "utils/github";
import { siteData } from "../../constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const repositories = getRepositories();

  return res.status(200).json({ repositories });
};

export const getRepositories = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const contributerRepositories = await octokit.request(
    "GET /repos/missing-semester-tr/missing-semester-tr.github.io"
  );

  const repositoryResult = await octokit.request("GET /search/repositories", {
    q: `user:${siteData.socials.github}`,
    sort: "stars",
    order: "desc",
    per_page: 3,
  });

  const repositories = [
    contributerRepositories.data,
    ...repositoryResult.data.items,
  ];

  return repositories.map(mapRepository);
};
