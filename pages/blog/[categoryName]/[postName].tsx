import Image from "next/image";
import readingTime from "reading-time";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import * as PostComponents from "components/post-components";
import { Icons, Meta } from "components/common";
import { useRouter } from "next/router";
import { siteData } from "constants/index";
import { PostPageStaticProps } from "models/common";
import { PostData } from "models/post";
import { getAllPostNames, getPostData } from "utils/post";
import useUpdatePostViewCount from "hooks/useUpdatePostViewCount";

const Post = (props: PostProps) => {
  const { postData } = props;
  const { contentHtml, date, summary, title, views } = postData;
  const readTime = Math.round(readingTime(contentHtml).minutes);

  const {
    query: { categoryName, postName },
  } = useRouter();

  useUpdatePostViewCount(categoryName as string, postName as string);

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
      <h1 className="mb-5 font-bold text-4xl sm:text-5xl sm:text-left break-words">
        {title}
      </h1>
      <div className="flex gap-3 mb-14 items-center">
        <Image
          src="/images/icon.webp"
          height={24}
          width={24}
          alt="Author image"
        />
        <div className="flex text-sm child-exclude-last:after:content-['•'] child-exclude-last:after:mx-1">
          <div>{siteData.author.name}</div>
          <div>{date}</div>
          <div>{readTime} dk</div>
          {views && (
            <div className="inline-flex gap-1">
              <span>{views}</span>{" "}
              <Image
                src={Icons.Views}
                alt="Views icon"
                height={12}
                width={12}
              />
            </div>
          )}
        </div>
      </div>
      <p className="mb-5">{summary}</p>
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
