import { graphql, type GraphQLClient } from "~/graphql";

export const UPDATE_NEXT_QUESTION_ID = graphql(/* GraphQL */ `
  mutation UpdateNextQuestionId($user_id: uuid!, $next_question_id: String) {
    update_user_by_pk(
      pk_columns: { user_id: $user_id }
      _set: { next_question_id: $next_question_id }
    ) {
      ...BaseUser
    }
  }
`);

export async function updateNextQuestionId(
  this: GraphQLClient,
  user_id: string,
  next_question_id?: string,
) {
  try {
    const { data } = await this.client.mutate({
      mutation: UPDATE_NEXT_QUESTION_ID,
      variables: { user_id, next_question_id },
    });

    return data?.update_user_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
