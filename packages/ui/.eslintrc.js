/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "../../.eslintrc.js",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks", "storybook"],
};
