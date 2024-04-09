import { logError } from "quickcheck-shared";

import {
  flattenUserActiveQuestionsData,
  graphql,
  type GQLProxyUserData,
  type GraphQLClient,
} from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_ACTIVE_QUESTIONS_DATA = graphql(/* GraphQL */ `
  query GetUserActiveQuestionsData($userId: uuid!, $today: date!) {
    user_by_pk(user_id: $userId) {
      first_name
      last_name
      ...UserActiveQuestionsData
    }
  }
`);

export async function getUserActiveQuestionsData(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  const today = getToday(now);

  try {
    const { data } = await this.query({
      query: GET_USER_ACTIVE_QUESTIONS_DATA,
      variables: { userId, today },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return {
      ...data.user_by_pk,
      ...flattenUserActiveQuestionsData(data.user_by_pk),
    };
  } catch (error) {
    logError({ error, log: "getUserActiveQuestionsData" });
    return null;
  }
}
