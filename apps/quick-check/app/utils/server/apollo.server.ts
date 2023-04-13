import { ContentStackGraphQLClient } from "contentstack-graphql";

export const CS_DELIVERY_TOKEN = process.env.CS_DELIVERY_TOKEN ?? "";
export const CS_API_KEY = process.env.CS_API_KEY ?? "";
export const CS_API_HOST = process.env.CS_API_HOST ?? "";
export const CS_ENV = process.env.CS_ENV ?? "";
export const SCHEMA_URL = `${CS_API_HOST}/stacks/${CS_API_KEY}?environment=${CS_ENV}`;

export const contentStackGraphQLClient = new ContentStackGraphQLClient(
  CS_DELIVERY_TOKEN,
  SCHEMA_URL,
);
