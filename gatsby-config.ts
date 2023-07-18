import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  trailingSlash: `never`,
  siteMetadata: {
    title: "portfolio",
    siteUrl: "https://www.yourdomain.tld",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      // necessary to import css module
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};

export default config;
