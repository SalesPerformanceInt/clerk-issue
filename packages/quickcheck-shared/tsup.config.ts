import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  dts: true,

  minify: env === "production",

  outDir: "dist",
  external: ["react"],

  format: ["cjs", "esm"],
  entry: ["src/index.tsx"],
  tsconfig: "tsconfig.build.json",
};
