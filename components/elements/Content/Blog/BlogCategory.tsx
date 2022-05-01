import { Post } from "models/post";
import BlogPost from "./BlogPost";

const BlogCategory = (props: BlogCategoryProps) => {
  const { posts, categoryBeautifiedName } = props;

  return (
    <div>
      <h3 className="mb-3">{categoryBeautifiedName}</h3>
      <div className="flex flex-col">
        {posts.map((post) => (
          <BlogPost
            key={post.name}
            title={post.title}
            summary={post.summary}
            slug={post.slug}
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
