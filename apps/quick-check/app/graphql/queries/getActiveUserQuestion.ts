import { DateTime } from "luxon";
import { first } from "remeda";

import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

export const GET_ACTIVE_USER_QUESTION = graphql(/* GraphQL */ `
  query GetActiveUserQuestion($id: uuid!, $endOfDay: timestamptz) {
    user_question(
      where: {
        id: { _eq: $id }
        active_on: { _lte: $endOfDay }
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

  const endOfDay = DateTime.fromISO(now).endOf("day").toISO();

  try {
    const { data } = await this.client.query({
      query: GET_ACTIVE_USER_QUESTION,
      variables: { id, endOfDay },
      fetchPolicy: "no-cache",
    });

    return first(data?.user_question ?? []) ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
