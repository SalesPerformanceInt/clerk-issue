import {
  graphql,
  type GQLProxyData,
  type User_Enrollment_Updates,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER_ENROLLMENTS_RANKS = graphql(/* GraphQL */ `
  mutation UpdateUserEnrollmentsRanks(
    $enrollmentsUpdates: [user_enrollment_updates!]!
  ) {
    update_user_enrollment_many(updates: $enrollmentsUpdates) {
      returning {
        ...BaseUserEnrollment
      }
    }
  }
`);

export async function updateUserEnrollmentsRanks(
  this: WithApolloClient,
  enrollmentsUpdates: User_Enrollment_Updates[],
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER_ENROLLMENTS_RANKS,
      variables: { enrollmentsUpdates },
    });

    return result.data?.update_user_enrollment_many ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
