// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plouffe Scripts',
  tagline: 'Documentation for plouffe Scripts',
  url: 'https://plouffelul.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/plouffe.ico',

  organizationName: 'plouffelul', // Usually your GitHub org/user name.
  projectName: 'plouffelul.github.io', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/plouffelul/plouffelul.github.io/tree/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Plouffe Scripts',
        logo: {
          alt: 'Plouffe logo',
          src: 'img/plouffe.png',
        },
        items: [
          {
            href: 'https://github.com/PlouffeLuL',
            position: 'left',
            label: 'Github'
          },
          {
            href: 'https://plouffe.tebex.io',
            position: 'left',
            label: 'Tebex'
          },
          {
            href: 'https://discord.gg/xJVCY9AvvW',
            position: 'left',
            label: 'Discord'
          }, 
          {
            href: 'https://www.twitch.tv/plouffelul',
            position: 'left',
            label: 'Twitch'
          },
          {
            href: 'https://www.youtube.com/channel/UCeok97XakwymEu3gz-Ziwgw',
            position: 'left',
            label: 'Youtube'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Plouffelul Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua']
      },
    }),
};


module.exports = config;
