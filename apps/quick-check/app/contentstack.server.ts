import { ContentStackGraphQLClient } from "contentstack-graphql";

import { CS_DELIVERY_TOKEN, SCHEMA_URL } from "~/utils/server/envs.server";

export const contentStack = new ContentStackGraphQLClient(
  CS_DELIVERY_TOKEN,
  SCHEMA_URL,
);
