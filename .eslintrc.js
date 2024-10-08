'use strict';

module.exports = {
	"extends": "./.eslintrc-no-types.json",
	"overrides": [
		{
			"files": ["./config/*.ts", "./data/**/*.ts", "./lib/*.ts", "./server/**/*.ts", "./server/**/*.tsx", "./sim/**/*.ts", "./tools/set-import/*.ts"],
			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaVersion": 11,
				"sourceType": "module",
				"tsconfigRootDir": __dirname,
				"project": ["./tsconfig.json"],
			},
			"extends": [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"./.eslintrc-no-types.json",
			],
			"rules": {
				// TODO investigate
				"@typescript-eslint/restrict-plus-operands": "off",
				// "@typescript-eslint/restrict-plus-operands": ["error", {"checkCompoundAssignments": true}],
				// "@typescript-eslint/switch-exhaustiveness-check": "error",

				// typescript-eslint defaults too strict
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"@typescript-eslint/restrict-template-expressions": "off",

				// probably bugs
				"@typescript-eslint/no-floating-promises": "error",
				"@typescript-eslint/no-for-in-array": "error",
				"@typescript-eslint/no-misused-promises": "error",
				"@typescript-eslint/no-throw-literal": "error",
				"@typescript-eslint/no-unnecessary-condition": "off", // sadly, we use not-null assertions so commonly that these are often necessary

				// syntax style (local syntactical, usually autofixable formatting decisions)
				"@typescript-eslint/no-unnecessary-qualifier": "off",
				"@typescript-eslint/no-unnecessary-type-arguments": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",
				"@typescript-eslint/prefer-regexp-exec": "error",
				"@typescript-eslint/prefer-string-starts-ends-with": "error",
			},
		},
	],
};
