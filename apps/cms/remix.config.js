const path = require("node:path");
const glob = require("glob");

const packages = glob
  .sync("packages/**/package.json", {
    cwd: path.join(__dirname, "..", ".."),
    ignore: ["**/node_modules/**"],
    absolute: true,
  })
  .map((pkg) => path.dirname(pkg));

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle: ["accelerate-cms-ui"],
  clientDependenciesToBundle: ["accelerate-cms-ui"],
  watchPaths() {
    return packages;
  },
};
