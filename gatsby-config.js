require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "KodeFour",
    description: "We design your imagination",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
};
