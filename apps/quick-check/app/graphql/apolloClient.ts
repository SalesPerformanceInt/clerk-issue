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
import {
  getAdminDataFromFromSession,
  getUserDataFromFromSession,
} from "~/session.server";

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
  getTaxonomyEnrollments,
  getUser,
  getUserActiveQuestionsData,
  getUserDashboard,
  getUserEmailData,
  getUserNextQuestion,
  getUserQuestion,
  getUserQuestionLearningRecord,
  getUserTheme,
} from "~/graphql/queries";

import {
  HASURA_API_URL,
  HASURA_AUTH_TOKEN,
  HASURA_SECRET_KEY,
} from "~/utils/envs.server";

/**
 * GraphQL Proxy Optional Data
 */

export type GQLProxyData = {
  now?: string;
  userId?: string;
  tenantId?: string;
};

export type GQLAdminProxyData = Omit<GQLProxyData, "now">;

declare global {
  interface ProxyConstructor {
    new <TSource extends object, TTarget extends object>(
      target: TSource,
      handler: ProxyHandler<TSource>,
    ): TTarget;
  }
}

type RemoveLastParam<Fn> = Fn extends (...args: infer Args) => infer Res
  ? (...args: Args extends [...infer Rest, unknown?] ? Rest : Args) => Res
  : never;

type RemoveProxyData<Fn> = {
  [K in keyof Fn]: Fn[K] extends (...args: infer Args) => infer Res
    ? RemoveLastParam<Fn[K]>
    : Fn[K];
};

/**
 * Hasura JWT Helpers
 */

const secretKey = new TextEncoder().encode(HASURA_SECRET_KEY);

const getJWTHeader = (jwt: string) => ({ Authorization: `Bearer ${jwt}` });

const getHasuraJWT = async (claims: Record<string, unknown>) =>
  new SignJWT({
    "https://hasura.io/jwt/claims": claims,
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secretKey);

/**
 * Generic GraphQL Client
 */

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
  getTaxonomyEnrollments = getTaxonomyEnrollments;
  updateUser = updateUser;

  constructor(headers: GraphQLHeaders) {
    this.client = getClient(headers);
  }
}

export const getUnauthenticatedApolloClient = async (token?: string) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "unauthenticated",
    "x-hasura-allowed-roles": ["unauthenticated"],
    "x-hasura-token-id": token,
  });

  return new GraphQLClient(getJWTHeader(jwt));
};

/**
 * Admin Apollo Client
 */

export class AdminGraphQLClient extends GraphQLClient {
  constructor(
    jwt: string,
    public now: string,
  ) {
    super(getJWTHeader(jwt));
  }
}

const isProxyData = (data: unknown): data is GQLAdminProxyData => {
  if (typeof data !== "object" || data === null) return false;

  return "userId" in data;
};

export const getAdminApolloClient = async (now: string) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "admin",
    "x-hasura-allowed-roles": ["admin"],
    "x-hasura-admin-secret": HASURA_AUTH_TOKEN,
  });

  const adminApolloClient = new AdminGraphQLClient(jwt, now);

  return new Proxy<AdminGraphQLClient>(adminApolloClient, {
    get(target, key) {
      const callable = Reflect.get(target, key);

      if (typeof callable !== "function") return callable;

      return (...args: unknown[]) => {
        const lastArg = args.at(-1);

        const [newArgs, proxyData] = isProxyData(lastArg)
          ? [args.slice(0, -1), { ...lastArg, now }]
          : [args, { now }];

        return callable.call(target, ...newArgs, proxyData);
      };
    },
  });
};

export const getAdminApolloClientFromRequest = async (request: Request) => {
  const [now] = await getAdminDataFromFromSession(request);

  return getAdminApolloClient(now);
};

/**
 * User Apollo Client
 */

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
  // getUserActiveQuestionsData = () =>
  //   getUserActiveQuestionsData.call(this, this.userId);
  getUserEmailData = () => getUserEmailData.call(this, this.userId);
  getTaxonomyEnrollments = (taxonomyIds: string[]) =>
    getTaxonomyEnrollments.call(this, taxonomyIds, this.tenantId);
  updateUser = (set: User_Set_Input) => updateUser.call(this, set, this.userId);

  constructor(
    jwt: string,
    public userId: string,
    public tenantId: string,
    public now: string,
  ) {
    super(getJWTHeader(jwt));
  }
}

export const getUserApolloClient = async (
  userId: string,
  tenantId: string,
  now: string,
) => {
  const jwt = await getHasuraJWT({
    "x-hasura-default-role": "user",
    "x-hasura-allowed-roles": ["user"],
    "x-hasura-user-id": userId,
    "x-hasura-tenant-id": tenantId,
  });

  const userApolloClient = new UserGraphQLClient(jwt, userId, tenantId, now);

  return new Proxy<UserGraphQLClient, RemoveProxyData<UserGraphQLClient>>(
    userApolloClient,
    {
      get(target, key) {
        const proxyData: GQLProxyData = { userId, tenantId, now };

        const callable = Reflect.get(target, key);

        if (typeof callable !== "function") return callable;

        return (...args: unknown[]) =>
          callable.call(target, ...args, proxyData);
      },
    },
  );
};

export const getUserApolloClientFromRequest = async (request: Request) => {
  const [userId, tenantId, now] = await getUserDataFromFromSession(request);

  invariant(userId, "Missing User ID");
  invariant(tenantId, "Missing Tenant ID");

  return getUserApolloClient(userId, tenantId, now);
};

export const getOptionalUserApolloClientFromRequest = async (
  request: Request,
) => {
  const [userId, tenantId, now] = await getUserDataFromFromSession(request);

  if (userId && tenantId) return getUserApolloClient(userId, tenantId, now);

  return null;
};
