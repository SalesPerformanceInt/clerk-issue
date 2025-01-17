/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["prettier", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        ecmaVersion: "latest",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "react/no-unescaped-entities": "off",
      },
    },
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "**/*.config.js",
    "**/*.config.cjs",
    "**/generated.d.ts",
  ],
};

module.exports = config;
