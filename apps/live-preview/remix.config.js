const path = require("node:path");
const glob = require("glob");

const packages = glob
  .sync("packages/**/package.json", {
    cwd: path.join(__dirname, "..", ".."),
    ignore: ["**/node_modules/**"],
    absolute: true,
  })
  .map((pkg) => path.dirname(pkg));

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  assetsBuildDirectory: "public/build",

  serverBuildPath: "api/index.js",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",

  serverDependenciesToBundle: ["accelerate-learner-ui"],
  clientDependenciesToBundle: ["accelerate-learner-ui"],

  future: {
    unstable_tailwind: true,
  },

  watchPaths: packages,
};
