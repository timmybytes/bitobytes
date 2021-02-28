const siteMetadata = {
  title: `A Bit 'o Bytes Blog`,
  description: `A blog for learning (and breaking things) in public.`,
};

module.exports = {
  siteMetadata: {
    title: `A Bit 'o Bytes Blog`,
    description: `A blog for learning (and breaking things) in public.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
