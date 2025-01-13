/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/me',
  siteMetadata: {
    tba: `توما هاشم بوتيني`,
    tbu: 'Тома Хашем Ботіні',
    siteUrl: `https://amleth.github.io/me`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "kb",
        "path": `${__dirname}/__kb__/`,
      },
      __key: "kb"
    },
  ]
};