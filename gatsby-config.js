module.exports = {
  siteMetadata: {
    title: `Researching Education`,
    subTitle: 'Discussing practice and research in learning',
    description: ``,
    author: `@MagneticMule`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // Base URL of Wordpress site
        baseUrl: 'lsri.info/researchingeducation',
        protocol: 'https',
        // we are not hosting this on wordpress.com
        hostingWPCOM: false,
        // we are using the Advanced Custom Fields plugin
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://lsri.info/researchingeducation',
          replacementUrl: 'https://researchingeducation.com',
        },
        // how many pagrs are retreived on each API request
        perPage: 100,
        // Number of requests sent at once
        concurrentRequests: 10,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://lsri.info/researchingeducation',
          replacementUrl: 'https://researchingeducation.com',
        },
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          '**/*/*/categories',
          '**/*/*/posts',
          '**/*/*/pages',
          '**/*/*/media',
          '**/*/*/tags',
          '**/*/*/taxonomies',
          '**/*/*/users',
          '**/*/*/menus',
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
};
