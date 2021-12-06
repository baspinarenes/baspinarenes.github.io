import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Repo = ({ starCount, name, desc, url, contributing }) => {
  return (
    <a className="repo" href={url}>
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-yellow-500 m-0">
          {contributing ? "CONTRIBUTER" : "OWNER"}
        </p>
        <div className="repo-star">
          <StarIcon />
          <span>{starCount}</span>
        </div>
      </div>
      <h4 className="repo-name">{name}</h4>
      <p className="repo-desc">{desc}</p>
    </a>
  );
};

export default Repo;
