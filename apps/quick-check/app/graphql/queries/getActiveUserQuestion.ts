import { DateTime } from "luxon";
import { first } from "remeda";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_ACTIVE_USER_QUESTION = graphql(/* GraphQL */ `
  query GetActiveUserQuestion($id: uuid!, $today: date!) {
    user_question(
      where: {
        id: { _eq: $id }
        active_on: { _lte: $today }
        retired_on: { _is_null: true }
      }
    ) {
      ...BaseUserQuestion
    }
  }
`);

export async function getActiveUserQuestion(
  this: WithApolloClient,
  id: string,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  const today = getToday(now);

  try {
    const { data } = await this.client.query({
      query: GET_ACTIVE_USER_QUESTION,
      variables: { id, today },
      fetchPolicy: "no-cache",
    });

    return first(data?.user_question ?? []) ?? null;
  } catch (error) {
    logError({ error, log: "getActiveUserQuestion" });
    return null;
  }
}
