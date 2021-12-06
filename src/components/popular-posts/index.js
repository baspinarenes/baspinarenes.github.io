import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Post from "./post";
import { Link } from "gatsby";
import usePost from "../../hooks/usePost";

const PopularPosts = () => {
  const { posts } = usePost();

  // TODO: featured post ozelligi ekle

  return posts ? (
    <div className="popular-posts">
      <h2>Son Yazılarım</h2>
      <div className="posts">
        {posts.slice(0, 3).map(post => (
          <Post
            key={post.id}
            views={0}
            name={post.frontmatter.title}
            desc={post.frontmatter.description}
            slug={post.fields.slug}
            isTranslate={post.frontmatter.isTranslate}
          />
        ))}
      </div>
      {posts.length >= 3 && (
        <Link to="/blog" className="read-more">
          Tüm yazılarımı gör <ArrowNarrowRightIcon />
        </Link>
      )}
    </div>
  ) : null;
};

export default PopularPosts;
