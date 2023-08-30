import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
import { UUIDResolver } from "graphql-scalars";

dotenv.config();

const HASURA_AUTH_TOKEN = process.env.HASURA_AUTH_TOKEN ?? "";
const HASURA_API_URL = process.env.HASURA_API_URL ?? "";

const config: CodegenConfig = {
  schema: [
    {
      [HASURA_API_URL]: {
        headers: {
          "x-hasura-admin-secret": HASURA_AUTH_TOKEN,
        },
      },
    },
  ],
  documents: ["./app/**/*.tsx", "./app/**/*.ts"],
  overwrite: true,
  generates: {
    "./app/graphql/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        scalars: {
          uuid: "../scalars#UUID",
          jsonb: "../scalars#JSONB",
          timestamptz: "../scalars#TimestampTZ",
          numeric: "../scalars#Numeric",
        },
        strictScalars: true,
      },
      // plugins: ["typescript-resolvers"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

module.exports = config;
