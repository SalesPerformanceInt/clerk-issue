const path = require("node:path");
const glob = require("glob");

const packages = glob
  .sync("packages/**/package.json", {
    cwd: path.join(__dirname, "..", ".."),
    ignore: ["**/node_modules/**", "**/.react-email/**"],
    absolute: true,
  })
  .map((pkg) => `${path.dirname(pkg)}/dist`);

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",

  postcss: true,

  dev: {
    port: 4011,
  },

  serverDependenciesToBundle: [/.*/],
  watchPaths: [...packages],
};
