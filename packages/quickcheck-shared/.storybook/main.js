import { resolve as _resolve } from "path";

import { mergeConfig } from "vite";

export const stories = [
  "../src/**/*.stories.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx)",
];

export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/addon-viewport",
  "storybook-react-i18next",
];

export const framework = {
  name: "@storybook/react-vite",
  options: {},
};

export const features = {
  storyStoreV7: true,
  interactionsDebugger: true,
};

export async function viteFinal(config) {
  return mergeConfig(config, {
    plugins: [],
    resolve: {
      alias: [
        {
          find: "~",
          replacement: _resolve(__dirname, "../src"),
        },
      ],
    },
    build: {},
  });
}
