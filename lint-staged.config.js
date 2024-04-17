const typeCheckCommand = () => "pnpm run typecheck";
const eslintCommand = "pnpm run check";
const markdownlintCommand = "pnpm run markdownlint --fix";

function micromatchFileExtension(...fileExtensions) {
	return `*.(${fileExtensions.join("|")})`;
}

export default {
	[micromatchFileExtension("ts", "tsx")]: [typeCheckCommand],
	[micromatchFileExtension("ts", "tsx", "js")]: [eslintCommand],
	[micromatchFileExtension("md")]: [markdownlintCommand],
};
