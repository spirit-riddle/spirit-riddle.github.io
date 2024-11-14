module.exports = {
  siteMetadata: {
    title: `Spirit Riddle`,
    description: `Great Prompting.`,
    author: `@spirit_riddle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-NKZN8BZHQV"], // Replace with your GA Measurement ID
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    // other plugins
  ],
};
