import axios from "axios";
import { Meta } from "components/common";
import CardList from "components/Content/Home/CardList";
import ProfileCard from "components/Content/Home/ProfileCard";
import siteData from "constants/site-data";
import type { NextPage } from "next";
import { getRepositories } from "utils/github";
import { getPostForHome } from "utils/post";

const Home: NextPage = (props: any) => {
  const { repositories, postsWithViews } = props;

  return (
    <div className="flex flex-col gap-10">
      <Meta />
      <ProfileCard />
      {postsWithViews?.length > 0 && (
        <CardList type="post" data={postsWithViews} />
      )}
      {repositories?.length > 0 && (
        <CardList type="repository" data={repositories} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const repositories = await getRepositories();
  const postsWithViewsResponse = await axios.get(`${siteData.url}/api/views`);
  const postsWithViews = postsWithViewsResponse.data.posts;

  const postCategories = (
    await Promise.allSettled(getPostForHome(postsWithViews))
  )
    .map((x: any) => x.value)
    .filter((x) => x);

  return {
    props: {
      repositories,
      postsWithViews: postCategories,
    },
  };
}

export default Home;
