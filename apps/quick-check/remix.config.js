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

  devServerPort: 4011,

  tailwind: true,
  postcss: true,

  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },

  serverDependenciesToBundle: [/.*/],

  watchPaths: [...packages],
};
