import Image from "next/image";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import * as PostComponents from "components/post-components";
import { Meta } from "components/common";
import { siteData } from "constants/index";
import { PostPageStaticProps } from "models/common";
import { PostData } from "models/post";
import { getAllPostNames, getPostData } from "utils/post";
import usePostViewCount from "hooks/usePostViewCount";

const Post = (props: PostProps) => {
  const { postData } = props;
  const { contentHtml, date, summary, title, slug, readTime } = postData;

  const views = usePostViewCount(slug);

  const PostContentComponent = useMemo(
    () => getMDXComponent(contentHtml),
    [contentHtml]
  );

  return (
    <div>
      <Meta title={title} description={summary} url={slug} />
      <h1 className="mb-4">{title}</h1>
      <div className="flex justify-between mb-10">
        <div className="flex items-center">
          <Image
            src="/images/icon.webp"
            height={24}
            width={24}
            alt="Author image"
          />
          <small className="ml-2 mr-1">{siteData.author.name} /</small>
          <small>{date}</small>
        </div>
        <div className="flex items-center">
          <small className="mr-1">{readTime} min read •</small>
          <small>{views > 0 ? views.toLocaleString() : "–––"} views</small>
        </div>
      </div>
      <p>{summary}</p>
      <div className="mdx-container">
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
