import * as React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  const post = data.mdx;
  const { siteMetadata } = data.site;

  // TODO: posta views ekle

  return (
    <div className="blog-post">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 className="title" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <div className="summary">
            <div className="summary-left">
              <StaticImage
                className="avatar"
                src="../images/icon.png"
                alt="Profile photo"
                placeholder="dominantColor"
              />
              {`${siteMetadata.author.name} • ${post.frontmatter.date} • ${post.timeToRead}dk`}
            </div>
            {/* <div className="summary-right">{`${post.timeToRead}dk • 101,600 views`}</div>  */}
          </div>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </div>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY", locale: "tr")
        description
        category
      }
    }
  }
`;
