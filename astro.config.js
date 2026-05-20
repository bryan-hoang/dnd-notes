import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { createLogger } from "vite-plus";

const logger = createLogger();

// Suppress warnings related to `esbuildOptions` being used by Astro plugins.
// Vite+ uses Rolldown which doesn't support `esbuildOptions`, so these warnings
// are expected but noisy.
const originalWarn = logger.warn.bind(logger);
const originalInfo = logger.info.bind(logger);

logger.warn = (msg, options) => {
	if (
		msg.includes("optimizeDeps.esbuildOptions") ||
		msg.includes("transformWithEsbuild")
	) {
		return;
	}
	originalWarn(msg, options);
};

logger.info = (msg, options) => {
	if (
		msg.includes("optimizeDeps.esbuildOptions") ||
		msg.includes("transformWithEsbuild")
	) {
		return;
	}
	originalInfo(msg, options);
};

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	vite: {
		customLogger: logger,
		plugins: [
			{
				// Astro's dev-toolbar plugin adds an `esbuild` plugin to optimizeDeps.esbuildOptions.plugins.
				// Since Vite+ uses Rolldown instead of esbuild, this causes a "Not implemented" error
				// during the build's generateBundle phase when Vite+ tries to convert the esbuild plugin.
				// We remove esbuildOptions entirely to fix the build error.
				name: "remove-esbuild-options",
				config(config) {
					if (config.optimizeDeps?.esbuildOptions) {
						delete config.optimizeDeps.esbuildOptions;
					}
				},
			},
		],
	},
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
					items: [{ autogenerate: { directory: "current" } }],
				},
				{
					label: "Previous Campaigns",
					items: [{ autogenerate: { directory: "previous", collapsed: true } }],
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
			redirectToDefaultLocale: false,
		},
	},
});
