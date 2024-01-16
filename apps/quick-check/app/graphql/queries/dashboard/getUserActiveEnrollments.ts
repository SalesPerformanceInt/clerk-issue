import { getContentStackClient } from "~/contentstack.server";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_ACTIVE_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetUserActiveEnrollments($userId: uuid!, $today: date!) {
    user_by_pk(user_id: $userId) {
      language_preference
      active_user_enrollments: user_enrollments(
        where: {
          _and: [
            {
              _or: [
                { expiration_date: { _is_null: true } }
                { expiration_date: { _gte: $today } }
              ]
            }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _gt: 0 }
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

export async function getUserActiveEnrollments(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const today = getToday(now);

    const result = await this.client.query({
      query: GET_USER_ACTIVE_ENROLLMENTS,
      variables: { userId, today },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

    const language = user_by_pk.language_preference;
    const contentStack = getContentStackClient(language);

    const active_user_enrollments = await Promise.all(
      user_by_pk.active_user_enrollments.map(async (enrollment) => {
        const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);
        return {
          ...enrollment,
          taxonomy,
        };
      }),
    );

    return active_user_enrollments;
  } catch (error) {
    logError({ error, log: "getUserActiveEnrollments" });
    return null;
  }
}

export type UserDashboardActiveEnrollments = NonNullable<
  Awaited<ReturnType<typeof getUserActiveEnrollments>>
>;
