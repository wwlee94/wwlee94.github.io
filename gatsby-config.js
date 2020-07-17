module.exports = {
  siteMetadata: {
    title: `Blausee 기술 블로그`,
    author: `wwlee94`,
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
        icon: `blogIcon`,
        link: `/category/blog`,
      },
      {
        name: `알고리즘`,
        slug: `algorithm`,
        color: `#f7615f`,
        icon: `algorithmIcon`,
        link: `/category/algorithm`,
      },
      {
        name: `스프링`,
        slug: `spring`,
        color: `#C0D545`,
        icon: `springIcon`,
        link: `/category/spring`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blausee | 기술 블로그`,
        short_name: `Blausee`,
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
              maxWidth: 750,
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
            // Table of contents
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-header`, // 이 class명으로 하이라이트 코드를 구현할 예정이므로 반드시 넣자.
              maintainCase: false, // 이 부분은 반드시 false로 하자. url이 대소문자를 구분하기 때문에 링크가 작동하지 않을 수 있다.
              removeAccents: true,
              elements: [`h1`, `h2`, 'h3', `h4`, `h5`], // 링크를 추가할 Header 종류 선택
            },
          },
          {
            // 코드 하이라이트
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
              host: `https://wwlee94.github.io`,
              sitemap: `https://wwlee94.github.io/sitemap.xml`,
              policy: [{ userAgent: '*', allow: '/' }],
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
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
  ],
};
