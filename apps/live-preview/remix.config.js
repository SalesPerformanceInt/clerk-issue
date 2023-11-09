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

  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  serverBuildPath: "api/index.js",
  devServerPort: 4001,

  tailwind: true,
  future: {
    // v2_errorBoundary: true,
    // v2_meta: true,
    // v2_normalizeFormMethod: true,
    // v2_routeConvention: true,
    unstable_tailwind: true,
  },

  serverDependenciesToBundle: [/.*/],

  watchPaths: [...packages],
};
