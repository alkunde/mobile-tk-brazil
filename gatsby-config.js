// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Mobile TK Brazil',
    description: 'O melhor blog de programação do Brasil'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    }
  ]
}
