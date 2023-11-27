import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Bryan Hoang's D&D Notes",
			description:
				'Notes I write whenever I have a computer in front of me during sessions :D',
			social: {
				github: 'https://github.com/bryan-hoang/dnd-notes',
			},
			favicon: '/img/favicon.ico',
			logo: {
				src: './src/assets/logo.png',
			},
			sidebar: [
				{
					label: 'Current Campaigns',
					autogenerate: { directory: 'current' },
				},
				{
					label: 'Previous Campaigns',
					autogenerate: { directory: 'previous', collapsed: true },
				},
			],
		}),
	],
});
