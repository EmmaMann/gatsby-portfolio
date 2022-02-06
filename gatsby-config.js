module.exports = {
    siteMetadata: {
        title: `Emma Mann | Web Developer`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: process.env.GATSBY_SANITY_PROJECT_ID || "684kufwg",
                dataset: "production",
                // To enable preview of drafts, copy .env-example into .env,
                // and add a token with read permissions
                token: process.env.SANITY_TOKEN,
                watchMode: true,
                overlayDrafts: true,
            },
        },
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
