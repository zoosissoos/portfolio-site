// const resolveConfig = require("tailwindcss/resolveConfig");
// const tailwindConfig = require("./tailwind.config.js");
//
// const fullConfig = resolveConfig(tailwindConfig);

module.exports = {

  siteMetadata: {
    title: `DBL Web Development`,
    description: `Daniel Brian Lewis Web Development`,
    author: `@daniellewis`,
    tags: ["portfolio", "web developer", "developer", "responsive websites"],
    gitHubLink: "https://github.com/zoosissoos",
    linkedInLink: "https://www.linkedin.com/in/danielbrianlewis/",
    emailAddress: "danielbrianlewis@gmail.com",
    resumeLink: "https://docs.google.com/document/d/1HIkkh0lenuQCuJ6y68oUjk9zSSeb0WANjV1cLaORtFk/edit?usp=sharing"
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-site`,
        start_url: `/`,
        // background_color: fullConfig.theme.colors.white,
        // theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-32x32.png`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
  ],
};
