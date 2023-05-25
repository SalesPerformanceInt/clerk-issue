import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
  type NormalizedCacheObject,
} from "@apollo/client";
import { createLearningRecord } from "~/graphql/mutations/createLearningRecord";
import { resetUser } from "~/graphql/mutations/resetUser";
import { updateNextQuestionId } from "~/graphql/mutations/updateNextQuestionId";
import { getLinkToken } from "~/graphql/queries/getLinkToken";
import { getUser } from "~/graphql/queries/getUser";

import { HASURA_API_URL, HASURA_AUTH_TOKEN } from "~/utils/server/envs.server";

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
  });
};

export class GraphQLClient {
  client: ApolloClient<NormalizedCacheObject>;
  getLinkToken = getLinkToken;
  getUser = getUser;
  createLearningRecord = createLearningRecord;
  updateNextQuestionId = updateNextQuestionId;
  resetUser = resetUser;

  constructor() {
    this.client = getClient();
  }
}

export const apolloClient = new GraphQLClient();
