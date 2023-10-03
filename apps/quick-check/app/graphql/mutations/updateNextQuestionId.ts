import {
  graphql,
  type GQLUserProxyData,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_NEXT_QUESTION_ID = graphql(/* GraphQL */ `
  mutation UpdateNextQuestionId($userId: uuid!, $nextUserQuestionId: uuid) {
    update_user_by_pk(
      pk_columns: { user_id: $userId }
      _set: { next_user_question_id: $nextUserQuestionId }
    ) {
      ...BaseUser
    }
  }
`);

export async function updateNextQuestionId(
  this: WithApolloClient,
  nextUserQuestionId: string | null,
  proxyData: GQLUserProxyData,
) {
  const { userId } = proxyData;

  try {
    const { data } = await this.client.mutate({
      mutation: UPDATE_NEXT_QUESTION_ID,
      variables: { userId, nextUserQuestionId },
    });

    return data?.update_user_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
