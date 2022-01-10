import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Repo from "./repo";
import useRepository from "../../hooks/useRepository";

const PopularRepos = () => {
  const { myGithub, repositories } = useRepository();

  return repositories ? (
    <div className="popular-repos">
      <h2>Popüler Repolarım</h2>
      <div className="repos">
        {repositories.slice(0, 3).map(repo => (
          <Repo
            key={repo.id}
            starCount={repo.stargazerCount}
            name={repo.name}
            desc={repo.description}
            url={repo.url}
            contributing={repo.contributing}
          />
        ))}
      </div>

      {repositories.length >= 3 && (
        <a href={myGithub} className="read-more">
          Tüm repolarımı gör <ArrowNarrowRightIcon />
        </a>
      )}
    </div>
  ) : null;
};

export default PopularRepos;
