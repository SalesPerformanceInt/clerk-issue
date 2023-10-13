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
  createUserAnswer,
  enrollUser,
  generateNewToken,
  resetUser,
  toggleUserSMSEnabled,
  updateNextQuestionId,
  updateUser,
  updateUserEnrollment,
  updateUserEnrollmentsRanks,
  updateUserQuestion,
} from "~/graphql/mutations";
import {
  getActiveUserQuestion,
  getAllUsers,
  getLinkToken,
  getRankeableEnrollments,
  getUser,
  getUserActiveQuestionsData,
  getUserDashboard,
  getUserEmailData,
  getUserEnrollment,
  getUserNextQuestion,
  getUserQuestion,
  getUserQuestionLearningRecord,
  getUserTheme,
  getUserWeeklyStreak,
} from "~/graphql/queries";

import { HASURA_API_URL } from "~/utils/envs.server";

import { getHasuraJWT, getJWTHeader } from "./jwt";

/**
 * Generic Apollo Client Helpers
 */

type GraphQLHeaders = Record<string, string>;

const getClient = (headers: GraphQLHeaders) => {
  const httpLink = new HttpLink({ uri: HASURA_API_URL });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({ headers });

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

/**
 * Generic Apollo Client Declaration
 */

export interface WithApolloClient {
  client: ApolloClient<NormalizedCacheObject>;
}

export class GraphQLClient implements WithApolloClient {
  client: WithApolloClient["client"];

  getLinkToken = getLinkToken;
  getUser = getUser;
  createLearningRecord = createLearningRecord;
  getUserQuestionLearningRecord = getUserQuestionLearningRecord;
  updateNextQuestionId = updateNextQuestionId;
  resetUser = resetUser;
  getAllUsers = getAllUsers;
  generateNewToken = generateNewToken;
  toggleUserSMSEnabled = toggleUserSMSEnabled;
  createUser = createUser;
  getUserTheme = getUserTheme;
  enrollUser = enrollUser;
  getUserNextQuestion = getUserNextQuestion;
  updateUserQuestion = updateUserQuestion;
  getUserQuestion = getUserQuestion;
  getUserDashboard = getUserDashboard;
  getUserActiveQuestionsData = getUserActiveQuestionsData;
  getUserEmailData = getUserEmailData;
  createUserAnswer = createUserAnswer;
  getActiveUserQuestion = getActiveUserQuestion;
  updateUserEnrollment = updateUserEnrollment;
  getRankeableEnrollments = getRankeableEnrollments;
  updateUser = updateUser;
  getUserEnrollment = getUserEnrollment;
  updateUserEnrollmentsRanks = updateUserEnrollmentsRanks;
  getUserWeeklyStreak = getUserWeeklyStreak;

  constructor(headers: GraphQLHeaders) {
    this.client = getClient(headers);
  }
}

/**
 * Unauthenticated Apollo Client
 */

export const getUnauthenticatedApolloClient = async (token?: string) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "unauthenticated",
    "x-hasura-allowed-roles": ["unauthenticated"],
    "x-hasura-token-id": token,
  });

  return new GraphQLClient(getJWTHeader(jwt));
};
