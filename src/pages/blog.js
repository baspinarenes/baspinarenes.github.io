/* eslint-disable react/no-unescaped-entities */
import { Link, graphql } from "gatsby";
import * as React from "react";
import Seo from "../components/seo";

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes;
  // TODO: posta views ekle

  const allPostByCategories = {};

  posts.forEach(post => {
    if (!allPostByCategories[post.frontmatter.category]) {
      allPostByCategories[post.frontmatter.category] = [];
    }

    allPostByCategories[post.frontmatter.category].push(post);
  });

  const sortCategoryByName = (a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  };

  return (
    <div className="blog">
      <Seo title="Blog" />
      <header>
        <h1 itemProp="headline">Blog</h1>
        <p>
          İlk yazımı Mayıs 2020 de yazmıştım. Ancak blog belir bir süre
          inaktiflikten kırıldı. Bazılarına göre Github'ın şifresini unutmuştum
          bazılarına göre de üşengeçlik girdabındaydım. Ama şimdi daha güzel
          döndüm. Yazılarda resmiliğin sıkıcılığından uzak hafif trol olacak.
          Teknik yazılarda birlikte sorgulayarak ilerleyeceğiz. Okuduğunuzda
          kafanızda oluşacak soruları öngörerek cevaplamaya da çalışacağım.
          Diğer yazılarda da ... aman her neyse bir şeyler yapmaya çalışacağız
          işte.
        </p>
      </header>
      <section>
        <h2>Yazılar</h2>
        {Object.entries(allPostByCategories)
          .sort(sortCategoryByName)
          .map(([category, posts]) => (
            <div className="post-category" key={category}>
              <h3>{category}</h3>
              <div className="posts">
                {posts.map(post => (
                  <article className="post" key={post.id}>
                    <header className="post-header">
                      <h4 className="post-name">
                        <Link to={`/blog${post.fields.slug}`}>
                          {post.frontmatter.title}
                        </Link>
                      </h4>
                      <p className="post-date">{post.frontmatter.date}</p>
                    </header>
                    <p className="post-desc">{post.frontmatter.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Blog;

export const blogQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY", locale: "tr")
          title
          description
          category
        }
      }
    }
  }
`;
