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
        name: `repo-one`,
        remote: `https://github.com/dannyphillips/distributed_docs_service_1.git`,
        patterns: [`*`, `!*.md`],
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-two`,
        remote: `https://github.com/dannyphillips/distributed_docs_service_2.git`,
        patterns: [`*`, `!*.md`],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-theme-docsite`,
  ],
};
