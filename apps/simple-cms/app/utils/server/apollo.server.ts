import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const contentStackEndpoint = `https://graphql.contentstack.com/stacks/${ENV.CS_API_KEY}?environment=${ENV.CS_ENV}`;
const httpLink = new HttpLink({ uri: contentStackEndpoint });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      access_token: ENV.CS_DELIVERY_TOKEN,
    },
  });

  return forward(operation);
});

export const graphQLClient = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
