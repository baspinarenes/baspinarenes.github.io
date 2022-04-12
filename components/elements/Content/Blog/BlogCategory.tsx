import { Post } from "models/post";
import BlogPost from "./BlogPost";

const BlogCategory = (props: BlogCategoryProps) => {
  const { posts, categoryBeautifiedName } = props;

  return (
    <div>
      <h2 className="mb-3 font-bold text-2xl sm:text-3xl">
        {categoryBeautifiedName}
      </h2>
      <div className="flex flex-col">
        {posts.map((post) => (
          <BlogPost
            key={post.name}
            title={post.title}
            summary={post.summary}
            slug={post.slug}
            views={post.views}
          />
        ))}
      </div>
    </div>
  );
};

interface BlogCategoryProps {
  categoryBeautifiedName: string;
  posts: Post[];
}

export default BlogCategory;
