import type { NextPage } from "next";
import CardList from "components/elements/Content/Home/CardList";
import ProfileCard from "components/elements/Content/Home/ProfileCard";
import Meta from "components/elements/Meta";
import { getRepositories } from "./api/github";

const Home: NextPage = (props: any) => {
  const { repositories } = props;

  return (
    <div className="flex flex-col gap-20">
      <Meta />
      <ProfileCard />
      {repositories?.length > 0 && (
        <CardList type="repository" data={repositories} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const repositories = await getRepositories();

  return {
    props: {
      repositories,
    },
  };
}

export default Home;
