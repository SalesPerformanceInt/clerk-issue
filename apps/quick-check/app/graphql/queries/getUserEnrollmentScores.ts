import { groupBy, pipe } from "remeda";
import { contentStack } from "~/contentstack.server";

import {
  graphql,
  type GetUserEnrollmentScoresQuery,
  type WithApolloClient,
} from "~/graphql";

/**
 * GraphQL
 */

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
      order_by: { score: desc }
    ) {
      id
      user_id
      score
      rank
      taxonomy_id
    }
  }
`);

/**
 * Utils
 */

const prepareTaxonomyEnrollments = (
  enrollments: GetUserEnrollmentScoresQuery["user_enrollment"],
) => pipe(enrollments, groupEnrollmentsByTaxonomy, mapEnrollmentsWithTaxonomy);

const groupEnrollmentsByTaxonomy = (
  enrollments: GetUserEnrollmentScoresQuery["user_enrollment"],
) => groupBy(enrollments, (enrollment) => enrollment.taxonomy_id);

const mapEnrollmentsWithTaxonomy = async (
  groupedEnrollments: ReturnType<typeof groupEnrollmentsByTaxonomy>,
) =>
  await Promise.all(
    Object.entries(groupedEnrollments).map(
      async ([taxonomyId, enrollments]) => {
        const taxonomy = (await contentStack.getTaxonomy(taxonomyId)) || {
          uid: taxonomyId,
          display_name: taxonomyId,
        };

        return {
          taxonomy,
          enrollments,
        };
      },
    ),
  );

/**
 * GetUserEnrollmentScores
 */

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

    const taxonomyEnrollments = await prepareTaxonomyEnrollments(
      data.user_enrollment,
    );

    return {
      currentUserEnrollments: data.user_by_pk.user_enrollments,
      enrollmentsScores: groupBy(
        data.user_enrollment,
        (enrollment) => enrollment.taxonomy_id,
      ),
      taxonomyEnrollments,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type EnrollmentsRanking = NonNullable<
  Awaited<ReturnType<typeof getUserEnrollmentScores>>
>;
