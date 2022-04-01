import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import CardList from "../components/elements/Content/Home/CardList";
import ProfileCard from "../components/elements/Content/Home/ProfileCard";
import { siteData } from "../constants";

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data: githubData } = useSWR(`/api/github`, fetcher);

  return (
    <div className="flex flex-col gap-20">
      <Head>
        <title>Anasayfa | {siteData.title}</title>
      </Head>
      <ProfileCard />
      {githubData && (
        <CardList type="repository" data={githubData.repositories} />
      )}
    </div>
  );
};

export default Home;
