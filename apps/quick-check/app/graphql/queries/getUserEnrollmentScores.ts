import { groupBy } from "remeda";

import { graphql, type WithApolloClient } from "~/graphql";

export const GET_USER_ENROLLMENT_SCORES = graphql(/* GraphQL */ `
  query GetUserEnrollmentScores(
    $userId: uuid!
    $taxonomyIds: [String!]
    $tenantId: String
  ) {
    user_by_pk(user_id: $userId) {
      user_enrollments(where: { taxonomy_id: { _in: $taxonomyIds } }) {
        id
      }
    }
    user_enrollment(
      where: {
        taxonomy_id: { _in: $taxonomyIds }
        user: { tenant_id: { _eq: $tenantId } }
      }
    ) {
      id
      score
      taxonomy_id
    }
  }
`);

export async function getUserEnrollmentScores(
  this: WithApolloClient,
  userId: string,
  taxonomyIds?: string[],
  tenantId?: string,
) {
  if (!taxonomyIds) return null;

  try {
    const { data } = await this.client.query({
      query: GET_USER_ENROLLMENT_SCORES,
      variables: { userId, taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return {
      currentUserEnrollments: data.user_by_pk.user_enrollments,
      enrollmentsScores: groupBy(
        data.user_enrollment,
        (enrollment) => enrollment.taxonomy_id,
      ),
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type EnrollmentsRanking = NonNullable<
  Awaited<ReturnType<typeof getUserEnrollmentScores>>
>;
