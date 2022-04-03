import type { NextPage } from "next";
import Head from "next/head";
import BlogCategory from "components/elements/Content/Blog/BlogCategory";
import { siteData } from "../../constants";
import { PostCategory } from "../../models/post";
import { getBlogPageData } from "../../utils/post";

const Blog: NextPage<BlogProps> = (props: BlogProps) => {
  const { postCategories } = props;

  return (
    <div>
      <Head>
        <title>
          {siteData.page.blog.title} | {siteData.title}
        </title>
      </Head>
      <h1 className="mb-10 font-bold text-4xl sm:text-5xl text-center sm:text-left">
        {siteData.page.blog.title}
      </h1>
      <p className="text-justify sm:text-left mb-10">
        {siteData.page.blog.description}
      </p>
      <div className="flex flex-col gap-8">
        {postCategories.map((category: PostCategory) => (
          <BlogCategory
            key={category.name}
            categoryName={category.name}
            posts={category.posts}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const postCategories: PostCategory[] = getBlogPageData();

  return {
    props: {
      postCategories,
    },
  };
}

interface BlogProps {
  postCategories: PostCategory[];
}

export default Blog;
