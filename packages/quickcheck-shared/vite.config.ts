import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import * as packageJson from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["./src/**/*"],
    }),
  ],
  resolve: {
    alias: [{ find: "~qcs", replacement: resolve(__dirname, "src") }],
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
  test: {
    environment: "happy-dom",
  },
});
