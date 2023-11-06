/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	root: true,
	reportUnusedDisableDirectives: true,
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: ['xo', 'prettier'],
	rules: {},
	overrides: [
		{
			files: ['.eslintrc.{js,cjs}'],
			env: {
				node: true,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			extends: ['xo-typescript', 'prettier'],
			rules: {
				'@typescript-eslint/triple-slash-reference': ['off'],
			},
		},
	],
};
