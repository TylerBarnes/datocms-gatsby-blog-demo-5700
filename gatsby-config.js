require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Gatsby Blog Demo",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
        previewMode: process.env.GATSBY_IS_PREVIEW,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
