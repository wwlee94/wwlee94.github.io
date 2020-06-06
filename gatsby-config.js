module.exports = {
  siteMetadata: {
    title: `Weekend.dev`,
    author: `Weekend.dev`,
    description: `스페셜리스트보다 제너럴리스트가 되고싶은
    백엔드 개발자입니다 :)`,
    siteUrl: `https://wwlee94.github.io`,
    email: `wwlee94@naver.com`,
    social: {
      github: `https://github.com/wwlee94`,
      notion: `https://www.notion.so/LEE-Woo-won-aa26875d3b4f40cdb4a75f86a77a0862`,
    },
    categories: [
      {
        name: `블로그`,
        slug: `blog`,
        color: `#ffa22b`,
        icon: `cactusYellow`,
        link: `/category/blog`,
      },
      {
        name: `알고리즘`,
        slug: `algorithm`,
        color: `#ffa22b`,
        icon: `algorithmIcon`,
        link: `/category/algorithm`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Weekend.dev | 기술 블로그`,
        short_name: `Weekend.dev`,
        start_url: `/`,
        background_color: `rgb(33, 36, 45)`,
        theme_color: `#0c9ee4`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 650,
              height: 365,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                simple: {
                  classes: 'simple',
                  title: 'optional',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
                alert: {
                  classes: 'alert',
                  title: 'optional',
                },
                notice: {
                  classes: 'notice',
                  title: 'optional',
                },
                imageSmall: {
                  classes: 'image-small',
                },
                imageMedium: {
                  classes: 'image-medium',
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
  ],
};
