import { contentStack } from "~/contentstack.server";
import { DateTime } from "luxon";

import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_NOTIFICATION_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetNotificationEnrollments($today: date!) {
    user_enrollment(where: { start_date: { _eq: $today } }) {
      ...NotificationUserEnrollment
    }
  }
`);

export async function getNotificationEnrollments(
  this: WithApolloClient,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  const today = getToday(now);

  try {
    const { data } = await this.client.query({
      query: GET_NOTIFICATION_ENROLLMENTS,
      variables: { today },
      fetchPolicy: "no-cache",
    });

    const enrollments = data?.user_enrollment.filter(
      ({ created_at }) => DateTime.fromISO(created_at).toISODate()! < today,
    );

    return enrollments;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
