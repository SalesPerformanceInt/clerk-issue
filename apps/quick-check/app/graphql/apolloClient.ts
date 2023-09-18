import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
  type NormalizedCacheObject,
} from "@apollo/client";
import { SignJWT } from "jose";
import invariant from "tiny-invariant";
import type { User_Set_Input } from "~/graphql";
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
  updateUserQuestion,
} from "~/graphql/mutations";
import {
  getActiveUserQuestion,
  getAllUsers,
  getLinkToken,
  getUser,
  getUserActiveQuestionsData,
  getUserDashboard,
  getUserEmailData,
  getUserNextQuestion,
  getUserQuestion,
  getUserQuestionLearningRecord,
  getUserTheme,
} from "~/graphql/queries";
import { getUserDataFromFromSession } from "~/session.server";

import {
  HASURA_API_URL,
  HASURA_AUTH_TOKEN,
  HASURA_SECRET_KEY,
} from "~/utils/envs.server";

type GraphQLHeaders = Record<string, string>;

const getClient = (headers: GraphQLHeaders) => {
  const httpLink = new HttpLink({ uri: HASURA_API_URL });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers,
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
  updateUser = updateUser;

  constructor(headers: GraphQLHeaders) {
    this.client = getClient(headers);
  }
}

export const getAdminApolloClient = () =>
  new GraphQLClient({ "x-hasura-admin-secret": HASURA_AUTH_TOKEN });

const getJWTHeader = (jwt: string) => ({ Authorization: `Bearer ${jwt}` });

export class UserGraphQLClient extends GraphQLClient {
  getUser = () => getUser.call(this, this.userId);
  resetUser = () => resetUser.call(this, this.userId);
  updateNextQuestionId = (nextQuestionId?: string | null) =>
    updateNextQuestionId.call(this, this.userId, nextQuestionId);
  getUserQuestionLearningRecord = (questionId: string) =>
    getUserQuestionLearningRecord.call(this, this.userId, questionId);
  getUserTheme = () => getUserTheme.call(this, this.userId);
  getUserNextQuestion = (now?: string) =>
    getUserNextQuestion.call(this, this.userId, now);
  getUserDashboard = () => getUserDashboard.call(this, this.userId);
  getUserActiveQuestionsData = () =>
    getUserActiveQuestionsData.call(this, this.userId);
  getUserEmailData = () => getUserEmailData.call(this, this.userId);
  updateUser = (set: User_Set_Input) => updateUser.call(this, set, this.userId);

  constructor(
    jwt: string,
    public userId: string,
  ) {
    super(getJWTHeader(jwt));
  }
}

const secretKey = new TextEncoder().encode(HASURA_SECRET_KEY);

const getHasuraJWT = async (claims: Record<string, unknown>) =>
  new SignJWT({
    "https://hasura.io/jwt/claims": claims,
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secretKey);

export const getUnauthenticatedApolloClient = async (token?: string) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "unauthenticated",
    "x-hasura-allowed-roles": ["unauthenticated"],
    "x-hasura-token-id": token,
  });

  return new GraphQLClient(getJWTHeader(jwt));
};

export const getUserApolloClient = async (userId: string, tenantId: string) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "user",
    "x-hasura-allowed-roles": ["user"],
    "x-hasura-user-id": userId,
    "x-hasura-tenant-id": tenantId,
  });

  return new UserGraphQLClient(jwt, userId);
};

export const getUserApolloClientFromRequest = async (request: Request) => {
  const [userId, tenantId] = await getUserDataFromFromSession(request);

  invariant(userId, "Missing User ID");
  invariant(tenantId, "Missing Tenant ID");

  return getUserApolloClient(userId, tenantId);
};

export const getOptionalUserApolloClientFromRequest = async (
  request: Request,
) => {
  const [userId, tenantId] = await getUserDataFromFromSession(request);

  if (userId && tenantId) return getUserApolloClient(userId, tenantId);

  return null;
};
