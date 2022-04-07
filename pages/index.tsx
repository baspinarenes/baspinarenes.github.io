import type { NextPage } from "next";
import Head from "next/head";
import CardList from "components/elements/Content/Home/CardList";
import ProfileCard from "components/elements/Content/Home/ProfileCard";
import { siteData } from "../constants";
import { getRepositories } from "./api/github";

const Home: NextPage = (props: any) => {
  const { repositories } = props;

  return (
    <div className="flex flex-col gap-20">
      <Head>
        <title>Anasayfa | {siteData.title}</title>
      </Head>
      <ProfileCard />
      {repositories && <CardList type="repository" data={repositories} />}
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
