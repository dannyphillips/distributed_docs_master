module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `distributed_docs_service_1`,
        remote: `https://github.com/dannyphillips/distributed_docs_service_1.git`,
        patterns: [`*`],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `distributed_docs_service_2`,
        remote: `https://github.com/dannyphillips/distributed_docs_service_2.git`,
        patterns: [`*`],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-theme-docsite`,
  ],
};
