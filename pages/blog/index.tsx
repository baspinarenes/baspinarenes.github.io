import type { NextPage } from "next";
import BlogCategory from "components/elements/Content/Blog/BlogCategory";
import { Meta } from "components/elements/common";
import { siteData } from "../../constants";
import { PostCategory } from "../../models/post";
import { getBlogPageData } from "../../utils/post";

const Blog: NextPage<BlogProps> = (props: BlogProps) => {
  const { postCategories } = props;

  return (
    <div>
      <Meta />
      <h1 className="mb-10 font-bold text-4xl sm:text-5xl text-center sm:text-left dark:text-white">
        {siteData.page.blog.title}
      </h1>
      <p className="text-justify sm:text-left mb-10 text-gray-600 dark:text-gray-400">
        {siteData.page.blog.description}
      </p>
      <div className="flex flex-col gap-8">
        {postCategories.map((category: PostCategory) => (
          <BlogCategory
            key={category.name}
            categoryName={category.name}
            categoryBeautifiedName={category.beautifiedName}
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
