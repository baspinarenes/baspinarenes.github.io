import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author {
              name
              summary
              title
            }
            description
            siteUrl
            social {
              github
              twitter
            }
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
