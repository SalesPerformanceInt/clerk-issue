import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
  type NormalizedCacheObject,
} from "@apollo/client";

import {
  cleanTestTenants,
  createEvent,
  createEvents,
  createUserAnswer,
  deleteTenant,
  generateNewToken,
  resetUser,
  resetUserEnrollment,
  syncUserEnrollment,
  toggleUserDailyEmailEnabled,
  toggleUserShowLeaderboard,
  unenrollUser,
  updateNextQuestionId,
  updateUser,
  updateUserEnrollment,
  updateUserEnrollmentsRanks,
  updateUserQuestion,
  upsertUser,
} from "~/graphql/mutations";
import {
  getActiveUserQuestion,
  getAllUsers,
  getEnrollmentSkillDashboardData,
  getEnrollmentSkillQuestions,
  getLinkToken,
  getNotificationEnrollments,
  getRankeableEnrollments,
  getTeamEnrollments,
  getTenants,
  getTenantUsers,
  getUser,
  getUserAchievements,
  getUserActiveEnrollments,
  getUserActiveQuestionsData,
  getUserByEmail,
  getUserCompletedEnrollments,
  getUserDashboardData,
  getUserData,
  getUserEmailData,
  getUserEnrollment,
  getUserLanguage,
  getUserLastActiveToken,
  getUserNextQuestion,
  getUserQuestion,
  getUserQuestionAnswers,
  getUsersForDailyEmail,
  getUserTheme,
  getUserWeeklyStreak,
  getUserWeeklyStreakCalendar,
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
  getUserQuestionAnswers = getUserQuestionAnswers;
  updateNextQuestionId = updateNextQuestionId;
  resetUser = resetUser;
  getAllUsers = getAllUsers;
  generateNewToken = generateNewToken;
  toggleUserDailyEmailEnabled = toggleUserDailyEmailEnabled;
  getUserTheme = getUserTheme;
  syncUserEnrollment = syncUserEnrollment;
  getUserNextQuestion = getUserNextQuestion;
  updateUserQuestion = updateUserQuestion;
  getUserQuestion = getUserQuestion;
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
  upsertUser = upsertUser;
  getTenantUsers = getTenantUsers;
  getTenants = getTenants;
  getUserData = getUserData;
  unenrollUser = unenrollUser;
  getUsersForDailyEmail = getUsersForDailyEmail;
  getNotificationEnrollments = getNotificationEnrollments;
  getUserLastActiveToken = getUserLastActiveToken;
  getTeamEnrollments = getTeamEnrollments;
  cleanTestTenants = cleanTestTenants;
  getUserLanguage = getUserLanguage;
  deleteTenant = deleteTenant;
  getUserAchievements = getUserAchievements;
  getUserActiveEnrollments = getUserActiveEnrollments;
  getUserCompletedEnrollments = getUserCompletedEnrollments;
  getUserDashboardData = getUserDashboardData;
  getUserWeeklyStreakCalendar = getUserWeeklyStreakCalendar;
  getUserByEmail = getUserByEmail;
  toggleUserShowLeaderboard = toggleUserShowLeaderboard;
  createEvent = createEvent;
  createEvents = createEvents;
  getEnrollmentSkillDashboardData = getEnrollmentSkillDashboardData;
  getEnrollmentSkillQuestions = getEnrollmentSkillQuestions;
  resetUserEnrollment = resetUserEnrollment;

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
