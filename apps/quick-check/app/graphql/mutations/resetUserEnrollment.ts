import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

export const RESET_USER_ENROLLMENT = graphql(/* GraphQL */ `
  mutation ResetUserEnrollment($enrollmentId: uuid!) {
    update_user_enrollment_by_pk(
      pk_columns: { id: $enrollmentId }
      _set: { rank: null, score: 0 }
    ) {
      id
      taxonomy_id
      rank
      score
    }
    delete_user_question(
      where: { user_enrollment_id: { _eq: $enrollmentId } }
    ) {
      affected_rows
    }
  }
`);

export async function resetUserEnrollment(
  this: WithApolloClient,
  enrollmentId: string,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.client.mutate({
      mutation: RESET_USER_ENROLLMENT,
      variables: { enrollmentId },
    });

    return result.data?.update_user_enrollment_by_pk ?? null;
  } catch (error) {
    logError({ error, log: "resetUserEnrollment" });
    return null;
  }
}
