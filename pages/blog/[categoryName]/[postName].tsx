import Head from "next/head";
import Image from "next/image";
import readingTime from "reading-time";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import CustomImage from "components/elements/mdx/CustomImage";
import { siteData } from "../../../constants";
import { PostPageStaticProps } from "../../../models/common";
import { PostData } from "../../../models/post";
import { getAllPostNames, getPostData } from "../../../utils/post";

const Post = (props: PostProps) => {
  const { postData } = props;
  const { contentHtml, date, summary, title } = postData;
  const readTime = Math.round(readingTime(contentHtml).minutes);

  const PostContentComponent = useMemo(
    () => getMDXComponent(contentHtml),
    [contentHtml]
  );

  return (
    <div>
      <Head>
        <title>
          {title} | {siteData.title}
        </title>
      </Head>
      <h1 className="mb-5 font-bold text-4xl sm:text-5xl text-center sm:text-left break-words">
        {title}
      </h1>

      <p className="text-justify sm:text-left mb-5">{summary}</p>
      <div className="flex gap-3 mb-15 items-center">
        <Image
          src="/images/icon.webp"
          height={24}
          width={24}
          alt="Author image"
        />
        <div className="text-sm">
          {siteData.author.name} • {date} • {readTime} dakikacık
        </div>
      </div>
      <PostContentComponent
        components={{
          CustomImage,
        }}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostNames();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PostPageStaticProps) {
  const postData = await getPostData(params.categoryName, params.postName);

  return {
    props: {
      postData,
    },
  };
}

interface PostProps {
  postData: PostData;
}

export default Post;
