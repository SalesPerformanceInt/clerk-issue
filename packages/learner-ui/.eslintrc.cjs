/* eslint-disable no-undef */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "../../.eslintrc.js",
  ],
  plugins: ["react", "react-hooks", "storybook"],
};
