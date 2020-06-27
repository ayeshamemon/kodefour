require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Marhaba International",
    description: "Tours and Travels",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
};
