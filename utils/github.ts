import { ignoredRepositoryNames } from "constants/repository";
import siteData from "constants/site-data";
import { MappedRepository } from "models/github";
import { Octokit } from "octokit";

const mapRepository = (rawRepository: any): MappedRepository => {
  const {
    name,
    html_url: htmlUrl,
    description,
    homepage,
    stargazers_count: starCount,
    forks_count: forkCount,
    fork,
  } = rawRepository;

  return {
    name,
    htmlUrl,
    description,
    homepage,
    starCount,
    forkCount,
    fork,
  };
};

const sortRepositoriesByForked = (
  previousRepo: MappedRepository,
  currentRepo: MappedRepository
): number => {
  if (previousRepo.fork) {
    return -1;
  }

  if (currentRepo.fork) {
    return 1;
  }

  return 0;
};

const filterByIgnoredRepoNames = (repo: MappedRepository) =>
  !ignoredRepositoryNames.includes(repo.name);

const sortRepositoriesByPopularity = (
  previousRepo: MappedRepository,
  currentRepo: MappedRepository
) =>
  Number(currentRepo.starCount + currentRepo.forkCount) -
  Number(previousRepo.starCount + previousRepo.forkCount);

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

export {
  mapRepository,
  sortRepositoriesByForked,
  sortRepositoriesByPopularity,
  filterByIgnoredRepoNames,
};
