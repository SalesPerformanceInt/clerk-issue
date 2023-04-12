import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { CS_DELIVERY_TOKEN, SCHEMA_URL } from "~/config/env";

const httpLink = new HttpLink({ uri: SCHEMA_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      access_token: CS_DELIVERY_TOKEN,
    },
  });

  return forward(operation);
});

export const graphQLClient = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
