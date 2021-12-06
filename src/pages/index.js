import * as React from "react";
import Seo from "../components/seo";
import Biography from "../components/biography";
import PopularRepos from "../components/popular-repos";
import PopularPosts from "../components/popular-posts";

const Home = () => {
  return (
    <div className="home">
      <Seo title="Anasayfa" />
      <Biography />
      <PopularRepos />
      <PopularPosts />
    </div>
  );
};

export default Home;
