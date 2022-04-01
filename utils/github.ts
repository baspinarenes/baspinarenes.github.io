import { ignoredRepositoryNames } from "../constants/repository";
import { MappedRepository } from "../models/github";

const mapRepositoryResult = (repositoryData: any): MappedRepository => {
  const {
    name,
    html_url: htmlUrl,
    description,
    homepage,
    stargazers_count: stargazersCount,
    forks_count: forksCount,
    fork,
  } = repositoryData;

  return {
    name,
    htmlUrl,
    description,
    homepage,
    stargazersCount,
    forksCount,
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
  Number(currentRepo.stargazersCount + currentRepo.forksCount) -
  Number(previousRepo.stargazersCount + previousRepo.forksCount);

export {
  mapRepositoryResult,
  sortRepositoriesByForked,
  sortRepositoriesByPopularity,
  filterByIgnoredRepoNames,
};
