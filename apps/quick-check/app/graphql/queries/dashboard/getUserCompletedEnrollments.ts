import { getContentStackClient } from "~/contentstack.server";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_COMPLETED_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetUserCompletedEnrollments($userId: uuid!, $today: date!) {
    user_by_pk(user_id: $userId) {
      language_preference
      completed_user_enrollments: user_enrollments(
        where: {
          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }
          _or: [
            { expiration_date: { _is_null: false, _lte: $today } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: { _or: [{ retired_on: { _is_null: true } }] }
                }
              }
            }
          ]
        }
      ) {
        ...UserEnrollmentWithCounts
      }
    }
  }
`);

export async function getUserCompletedEnrollments(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const today = getToday(now);

    const result = await this.client.query({
      query: GET_USER_COMPLETED_ENROLLMENTS,
      variables: { userId, today },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

    const language = user_by_pk.language_preference;
    const contentStack = getContentStackClient(language);

    const completed_user_enrollments = await Promise.all(
      user_by_pk.completed_user_enrollments.map(async (enrollment) => {
        const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);

        return {
          ...enrollment,
          taxonomy,
        };
      }),
    );

    return completed_user_enrollments;
  } catch (error) {
    logError({ error, log: "getUserCompletedEnrollments" });
    return null;
  }
}

export type UserDashboardCompletedEnrollments = NonNullable<
  Awaited<ReturnType<typeof getUserCompletedEnrollments>>
>;
