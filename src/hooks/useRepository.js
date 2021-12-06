import { useStaticQuery, graphql } from "gatsby";

const useRepository = () => {
  const data = useStaticQuery(graphql`
    query RepositoryQuery {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
      githubData {
        data {
          user {
            repositories {
              nodes {
                id
                name
                url
                description
                stargazerCount
              }
            }
          }
        }
      }
    }
  `);

  return {
    myGithub: data.site.siteMetadata.social.github,
    repositories: data.githubData.data.user.repositories.nodes,
  };
};

export default useRepository;
