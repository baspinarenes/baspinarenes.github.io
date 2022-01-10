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
    }
  `);

  return {
    myGithub: data.site.siteMetadata.social.github,
    repositories: [
      {
        id: "missing-semester-tr.github.io",
        name: "missing-semester-tr.github.io",
        url: "https://github.com/missing-semester-tr/missing-semester-tr.github.io",
        description: "Turkish version of The CS Missing Semester 📚",
        stargazerCount: 99,
        contributing: true,
      },
      {
        id: "awesome-frontend-resources",
        name: "awesome-frontend-resources",
        url: "https://github.com/baspinarenes/awesome-frontend-resources",
        description: "A list of awesome Frontend resources.",
        stargazerCount: 15,
        contributing: false,
      },
      {
        id: "spider-solitaire",
        name: "spider-solitaire",
        url: "https://github.com/baspinarenes/spider-solitaire",
        description: "Legendary spider solitaire game with Windows XP theme",
        stargazerCount: 1,
        contributing: false,
      },
    ],
  };
};

export default useRepository;
