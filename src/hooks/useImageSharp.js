import { useStaticQuery, graphql } from "gatsby";

const useImageSharp = src => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 630) {
            originalImg
            originalName
          }
        }
      }
    }
  `);

  const imageSource = allImageSharp.nodes.find(node =>
    src.includes(node.fluid.originalName)
  ).fluid.originalImg;

  return imageSource;
};

export default useImageSharp;
