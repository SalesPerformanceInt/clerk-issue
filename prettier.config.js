/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
  tailwindConfig: "./packages/ui/tailwind.config.cjs",
  importOrder: [
    "^(react(.*)/(.*)$)|^(react(.*)$)",
    "^(@remix-run/(.*)$)|^(@remix-run$)",
    "^(accelerate-cms-ui/(.*)$)|^(accelerate-cms-ui$)",
    "<THIRD_PARTY_MODULES>",
    "^~/utils/(.*)$",
    "^~/components/(.*)$",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};

module.exports = config;
