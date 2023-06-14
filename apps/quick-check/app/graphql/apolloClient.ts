import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
  type NormalizedCacheObject,
} from "@apollo/client";
import {
  createLearningRecord,
  createUser,
  generateNewToken,
  resetUser,
  toggleUserSMSEnabled,
  updateNextQuestionId,
} from "~/graphql/mutations";
import { getAllUsers, getLinkToken, getUser } from "~/graphql/queries";

import { HASURA_API_URL, HASURA_AUTH_TOKEN } from "~/utils/envs.server";

const getClient = () => {
  const httpLink = new HttpLink({ uri: HASURA_API_URL });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: { "x-hasura-admin-secret": HASURA_AUTH_TOKEN },
    });
    return forward(operation);
  });

  return new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      mutate: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });
};

export class GraphQLClient {
  client: ApolloClient<NormalizedCacheObject>;
  getLinkToken = getLinkToken;
  getUser = getUser;
  createLearningRecord = createLearningRecord;
  updateNextQuestionId = updateNextQuestionId;
  resetUser = resetUser;
  getAllUsers = getAllUsers;
  generateNewToken = generateNewToken;
  toggleUserSMSEnabled = toggleUserSMSEnabled;
  createUser = createUser;

  constructor() {
    this.client = getClient();
  }
}

export const apolloClient = new GraphQLClient();
