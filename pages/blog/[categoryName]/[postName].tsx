import Image from "next/image";
import readingTime from "reading-time";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import * as PostComponents from "components/elements/post-components";
import Meta from "components/elements/Meta";
import { useRouter } from "next/router";
import { siteData } from "../../../constants";
import { PostPageStaticProps } from "../../../models/common";
import { PostData } from "../../../models/post";
import { getAllPostNames, getPostData } from "../../../utils/post";

const Post = (props: PostProps) => {
  const { postData } = props;
  const { contentHtml, date, summary, title } = postData;
  const readTime = Math.round(readingTime(contentHtml).minutes);

  const {
    query: { categoryName, postName },
  } = useRouter();

  const PostContentComponent = useMemo(
    () => getMDXComponent(contentHtml),
    [contentHtml]
  );

  return (
    <div>
      <Meta
        title={title}
        description={summary}
        url={`/blog/${categoryName}/${postName}`}
      />
      <h1 className="mb-5 font-bold text-4xl sm:text-5xl text-center sm:text-left break-words">
        {title}
      </h1>
      <p className="mb-5">{summary}</p>
      <div className="flex gap-3 mb-8 items-center">
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
      <div className="mdx-container ">
        <PostContentComponent
          components={{
            ...PostComponents,
          }}
        />
      </div>
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
