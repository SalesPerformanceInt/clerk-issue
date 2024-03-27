import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type GraphQLClient,
  type User_Enrollment_Updates,
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
  this: GraphQLClient,
  enrollmentsUpdates: User_Enrollment_Updates[],
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.mutate({
      mutation: UPDATE_USER_ENROLLMENTS_RANKS,
      variables: { enrollmentsUpdates },
    });

    return result.data?.update_user_enrollment_many ?? null;
  } catch (error) {
    logError({ error, log: "updateUserEnrollmentsRanks" });
    return null;
  }
}
