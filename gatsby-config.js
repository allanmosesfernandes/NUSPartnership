/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Nottingham Student Partnership",
    description:
      " The Nottingham Students Partnership is a joint venture between the University of Nottingham Students’ Union and Nottingham Trent Students' Union to represent the interests of students in the City of Nottingham",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "DM Sans",
            file: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap",
          },
          {
            name: "Space Grotesk",
            file: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap",
          },
          // Add more fonts here if needed
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://nottinghamstudentspartnership.co.uk/graphql",
      },
    },
  ],
};
