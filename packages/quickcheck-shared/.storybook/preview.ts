import { Preview } from "@storybook/react"

import i18n from "./i18next"

export const parameters: Preview = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  globals: {
    locale: "en-us",
    locales: {
      "en-us": "US English",
    },
  },
  parameters: {
    i18n,
  },
}
