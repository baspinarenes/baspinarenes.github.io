import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Biography = () => {
  const { author } = useSiteMetadata();

  return (
    <div className="biography">
      <div className="bio-content">
        <h1 className="author-name">{author.name}</h1>
        <h2 className="author-title">{author.title}</h2>
        <p className="author-summary">{author.summary}</p>
      </div>
      <StaticImage
        className="bio-avatar"
        src="../images/icon.png"
        alt="Profile photo"
        placeholder="none"
      />
    </div>
  );
};

export default Biography;
