import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

export const GET_USER_QUESTION = graphql(/* GraphQL */ `
  query GetUserQuestion($id: uuid!) {
    user_question_by_pk(id: $id) {
      ...BaseUserQuestion
    }
  }
`);

export async function getUserQuestion(
  this: WithApolloClient,
  id: string,
  _proxyData?: GQLProxyData,
) {
  try {
    const { data } = await this.client.query({
      query: GET_USER_QUESTION,
      variables: { id },
      fetchPolicy: "no-cache",
    });

    return data?.user_question_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
