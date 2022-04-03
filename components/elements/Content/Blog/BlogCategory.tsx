import React from "react";
import { Post } from "../../../../models/post";
import BlogPost from "./BlogPost";

const BlogCategory = (props: BlogCategoryProps) => {
  const { categoryName, posts } = props;

  return (
    <div>
      <h2 className="mb-3 font-bold text-2xl sm:text-3xl">{`#${categoryName}`}</h2>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <BlogPost
            key={post.name}
            name={post.name}
            title={post.title}
            summary={post.summary}
            date={post.date}
            category={categoryName}
          />
        ))}
      </div>
    </div>
  );
};

interface BlogCategoryProps {
  categoryName: string;
  posts: Post[];
}

export default BlogCategory;
