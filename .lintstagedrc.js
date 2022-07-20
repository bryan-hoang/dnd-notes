const typeCheckCommand = () => 'pnpm run type-check --if-present';
const eslintCommand = 'pnpm run lint --fix';
const prettierCommand = 'pnpm run format --write';
const markdownlintCommand = 'pnpm run markdownlint --fix';

const micromatchFileExtension = (...fileExtensions) =>
  `*.(${fileExtensions.join('|')})`;

module.exports = {
  [micromatchFileExtension('ts', 'tsx')]: [typeCheckCommand],
  [micromatchFileExtension('ts', 'tsx', 'js')]: [eslintCommand],
  [micromatchFileExtension('md')]: [markdownlintCommand],
  [micromatchFileExtension('md', 'json', 'svg', 'yaml', 'yml')]: [
    prettierCommand,
  ],
};
