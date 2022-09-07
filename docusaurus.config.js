const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

const projectURL = 'https://github.com/bryan-hoang/dnd-notes/';

/** @type {import('@docusaurus/types').Config} */
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
	trailingSlash: false,
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			respectPrefersColorScheme: true,
			docs: {
				sidebar: {
					hideable: true,
				},
			},
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
		}),
	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: `${projectURL}edit/main/`,
					remarkPlugins: [remarkMath],
					rehypePlugins: [rehypeKatex],
					routeBasePath: '/',
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	i18n: {
		defaultLocale: 'en-CA',
		locales: ['en-CA'],
	},
	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
			integrity:
				'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
			crossorigin: 'anonymous',
		},
	],
};
