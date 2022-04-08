import { ignoredRepositoryNames } from "../constants/repository";
import { MappedRepository } from "../models/github";

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

export {
  mapRepository,
  sortRepositoriesByForked,
  sortRepositoriesByPopularity,
  filterByIgnoredRepoNames,
};
