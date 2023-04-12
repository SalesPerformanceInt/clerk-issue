import type { CodegenConfig } from "@graphql-codegen/cli";

import { CS_DELIVERY_TOKEN, SCHEMA_URL } from "./src/config/env";

const config: CodegenConfig = {
  schema: [
    {
      [SCHEMA_URL]: {
        headers: {
          access_token: CS_DELIVERY_TOKEN,
        },
      },
    },
  ],
  documents: ["./src/**/*.ts"],
  generates: {
    "./src/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
    "./src/generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
