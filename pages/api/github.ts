import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { siteData } from "../../constants";
import {
  filterByIgnoredRepoNames,
  mapRepositoryResult,
  sortRepositoriesByForked,
  sortRepositoriesByPopularity,
} from "../../utils/github";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const repositories = getRepositories();

  return res.status(200).json({ repositories });
};

export const getRepositories = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const repositoryResult = await octokit.rest.repos.listForUser({
    username: siteData.socials.github,
  });

  const mappedRepositoryResult = repositoryResult.data
    .map(mapRepositoryResult)
    .filter(filterByIgnoredRepoNames)
    .sort(sortRepositoriesByPopularity)
    .sort(sortRepositoriesByForked);

  return mappedRepositoryResult;
};
