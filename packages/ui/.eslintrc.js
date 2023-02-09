/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "../../.eslintrc.js",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks", "storybook"],
};

module.exports = config;
