import { useStaticQuery, graphql } from "gatsby";

const usePost = () => {
  const data = useStaticQuery(graphql`
    query PostQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
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
  `);

  return {
    posts: data.allMdx.nodes,
  };
};

export default usePost;
