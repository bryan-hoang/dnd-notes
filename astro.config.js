import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Bryan Hoang's D&D Notes",
			description:
				"Notes I write whenever I have a computer in front of me during sessions :D",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/bryan-hoang/dnd-notes",
				},
			],
			favicon: "/img/favicon.ico",
			logo: {
				src: "./src/assets/logo.png",
			},
			sidebar: [
				{
					label: "Current Campaigns",
					autogenerate: { directory: "current" },
				},
				{
					label: "Previous Campaigns",
					autogenerate: { directory: "previous", collapsed: true },
				},
			],
			components: {
				Head: "./src/components/Head.astro",
			},
		}),
	],
	site: "https://dnd.bryanhoang.dev",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		routing: {
			redirectToDefaultLocale: true,
		},
	},
});
