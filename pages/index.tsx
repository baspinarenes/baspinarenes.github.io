import type { NextPage } from "next";
import CardList from "components/Content/Home/CardList";
import ProfileCard from "components/Content/Home/ProfileCard";
import { Meta } from "components/common";
import { getRepositories } from "utils/github";

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
