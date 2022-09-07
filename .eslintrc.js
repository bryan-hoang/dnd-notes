/* eslint sort-keys: "error" */

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	root: true,
	rules: {},
};
