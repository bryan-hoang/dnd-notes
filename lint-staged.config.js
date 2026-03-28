const typeCheckCommand = () => "vp check";
const eslintCommand = "vp check";
const markdownlintCommand = "vp run markdownlint --fix";

function micromatchFileExtension(...fileExtensions) {
	return `*.(${fileExtensions.join("|")})`;
}

export default {
	[micromatchFileExtension("ts", "tsx")]: [typeCheckCommand],
	[micromatchFileExtension("ts", "tsx", "js")]: [eslintCommand],
	[micromatchFileExtension("md")]: [markdownlintCommand],
};
