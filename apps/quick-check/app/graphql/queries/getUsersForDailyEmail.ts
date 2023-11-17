import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

export const GET_USER_FOR_DAILY_EMAIL = graphql(/* GraphQL */ `
  query GetUsersForDailyEmail {
    user(where: { sms_enabled: { _eq: true } }) {
      user_id
    }
  }
`);

export async function getUsersForDailyEmail(
  this: WithApolloClient,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.client.query({
      query: GET_USER_FOR_DAILY_EMAIL,
      fetchPolicy: "network-only",
    });

    return result?.data?.user;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
