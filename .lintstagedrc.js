const typeCheckCommand = () => 'npm run type-check --if-present';
const eslintCommand = 'npm run lint -- --fix';
const prettierCommand = 'npm run format -- --write';
const markdownlintCommand = 'npm run markdownlint -- --fix';

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
