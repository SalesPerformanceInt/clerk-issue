import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const HASURA_GRAPHQL_ADMIN_SECRET =
  process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? "";
const HASURA_API_URL = `${process.env.HASURA_GRAPHQL_ENDPOINT}/v1/graphql`;

const config: CodegenConfig = {
  schema: [
    {
      [HASURA_API_URL]: {
        headers: {
          "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET,
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
          uuid: "../scalars#Uuid",
          jsonb: "../scalars#Jsonb",
          timestamptz: "../scalars#TimestampTZ",
          timestamp: "../scalars#TimestampTZ",
          numeric: "../scalars#Numeric",
          date: "../scalars#ISODate",
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
