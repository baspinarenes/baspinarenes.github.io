import type { NextPage } from "next";
import CardList from "components/Content/Home/CardList";
import ProfileCard from "components/Content/Home/ProfileCard";
import { Meta } from "components/common";
import { getRepositories } from "utils/github";
// import axios from "axios";
// import siteData from "constants/site-data";
// import { getPostForHome } from "utils/post";

const Home: NextPage = (props: any) => {
  const { repositories, postsWithViews } = props;

  return (
    <div className="flex flex-col gap-20">
      <Meta />
      <ProfileCard />
      {repositories?.length > 0 && (
        <CardList type="repository" data={repositories} />
      )}
      {postsWithViews?.length > 0 && (
        <CardList type="post" data={postsWithViews} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const repositories = await getRepositories();
  // const postsWithViewsResponse = await axios(`${siteData.url}/api/views`);
  // console.log("SADSADSA", postsWithViewsResponse);

  // const postsWithViews = postsWithViewsResponse.data.posts;
  // console.log("SADSADSA", postsWithViews);

  // const postCategories = (
  //   await Promise.allSettled(getPostForHome(postsWithViews))
  // )
  //   .map((x: any) => x.value)
  //   .filter((x) => x);

  return {
    props: {
      repositories,
      postsWithViews: [],
    },
  };
}

export default Home;
