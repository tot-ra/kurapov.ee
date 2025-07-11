import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Артём Курапов',
  tagline: 'Наблюдения и размышления о жизни, кибернетике, философии, науке и религии в современном обществе потребления и технологического прогресса современной Эстонии',
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://kurapov.ee',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tot-ra', // Usually your GitHub org/user name.
  projectName: 'kurapov.ee', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateTime: false,
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tot-ra/kurapov.ee/tree/main/',
        },
        blog: {

          blogSidebarCount: 20,
          showLastUpdateTime: false,
          blogSidebarTitle: 'Последние заметки',
          showReadingTime: true,
          postsPerPage: 30,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/tot-ra/kurapov.ee/tree/main/',


          tagsBasePath: '/tags',

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Артём Курапов',
      logo: {
        alt: 'Artjom Kurapov',
        src: 'img/artjom.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Об авторе',
        },
        {to: '/blog', label: 'Блог', position: 'left'},


        {
          href: 'https://github.com/tot-ra/kurapov.ee',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Media',
          items: [
            {
              label: 'Мысли в Twitter',
              href: 'https://twitter.com/tot_ra',
            },

            {
              label: 'Мысли в Telegram',
              href: 'https://t.me/+4kDpExZlraQ0NGZk',
            },

            {
              label: 'Мысли в Threads',
              href: 'https://www.threads.com/@tot_ra',
            },

            {
              label: 'Мысли в Bluesky',
              href: 'https://bsky.app/profile/tot-ra.bsky.social',
            },
            {
              label: 'Long videos on Youtube',
              href: 'https://www.youtube.com/user/artkurapov/',
            },
            {
              label: 'Streams on Twitch',
              href: 'https://www.twitch.tv/tot_ra/',
            },
            {
              label: 'Природа в Instagram',
              href: 'https://www.instagram.com/tot_ra/',
            },
            {
              label: 'Видео-мысли в TikTok',
              href: 'https://www.tiktok.com/@artkurapov',
            },
          ],
        },


        {
          title: 'Business',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kurapov/',
            },

            {
              label: 'GitHub',
              href: 'https://github.com/tot-ra',
            },

            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/158448/artjom-kurapov?tab=profile',
            },
            
            {
              label: 'Slideshare',
              href: 'https://www.slideshare.net/totra/presentations',
            },
            {
              label: 'Habr',
              href: 'https://habr.com/ru/users/tot_ra/posts/',
            },
            
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/artkurapov',
            },
            {
              label: 'ВКонтакте',
              href: 'https://vk.com/artkurapov',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/tot_ra/',
            },
            {
              label: 'LiveJournal',
              href: 'https://tot-ra.livejournal.com/',
            },
            
          ],
        },
        {
          title: 'Media',
          items: [
            {
              label: 'Music on Suno',
              href: 'https://suno.com/@tot_ra',
            },
            {
              label: 'Books on Goodreads',
              href: 'https://goodreads.com/tot_ra',
            },
            {
              label: 'Games on Steam',
              href: 'https://steamcommunity.com/id/tot_ra/',
            },
            {
              label: 'Music on Spotify',
              href: 'https://open.spotify.com/user/1176479585',
            },
            {
              label: 'Music on Soundcloud',
              href: 'https://soundcloud.com/tot_ra',
            },

            {
              label: '3D models on Thingiverse',
              href: 'https://www.thingiverse.com/tot_ra/designs',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },

    blog: {
      sidebar: {
        groupByYear: true,
      },
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
