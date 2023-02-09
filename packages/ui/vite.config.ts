import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["./src/**/*"],
    }),
  ],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
    },
  },
});
