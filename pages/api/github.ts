import { Octokit } from "octokit";
import { siteData } from "../../constants";
import {
  filterByIgnoredRepoNames,
  mapRepositoryResult,
  sortRepositoriesByForked,
  sortRepositoriesByPopularity,
} from "../../utils/github";

export default async (req: any, res: any) => {
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

  return res.status(200).json({
    repositories: mappedRepositoryResult,
  });
};
