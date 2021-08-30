const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const projectURL = 'https://github.com/bryan-hoang/dnd-notes/';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'D&D Notes',
  url: 'https://dnd.bryanhoang.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  // Usually your GitHub org/user name.
  organizationName: 'bryan-hoang',
  // Usually your repo name.
  projectName: 'dnd-notes',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'D&D Notes',
      logo: {
        alt: 'D&D Notes Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: projectURL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Notes',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: projectURL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bryan Hoang. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `${projectURL}edit/main/`,
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en-CA',
    locales: ['en-CA'],
  },
};
