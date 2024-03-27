import { DateTime } from "luxon";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_NOTIFICATION_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetNotificationEnrollments($today: date!) {
    new_enrollments: user_enrollment(where: { start_date: { _eq: $today } }) {
      ...NotificationUserEnrollment
    }
    completed_enrollments: user_enrollment(
      where: {
        expiration_date: { _eq: $today }
        user_questions_aggregate: {
          count: {
            predicate: { _gt: 0 }
            filter: { retired_on: { _is_null: true } }
          }
        }
      }
    ) {
      ...NotificationUserEnrollment
    }
  }
`);

export async function getNotificationEnrollments(
  this: GraphQLClient,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  const today = getToday(now);

  try {
    const { data } = await this.query({
      query: GET_NOTIFICATION_ENROLLMENTS,
      variables: { today },
      fetchPolicy: "no-cache",
    });

    const newEnrollments = data?.new_enrollments.filter(
      ({ created_at }) => DateTime.fromISO(created_at).toISODate()! < today,
    );

    const completedEnrollments = data?.completed_enrollments;

    return {
      newEnrollments,
      completedEnrollments,
    };
  } catch (error) {
    logError({ error, log: "getNotificationEnrollments" });
    return {};
  }
}
