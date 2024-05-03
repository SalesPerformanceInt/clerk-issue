import { DateTime } from "luxon";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";
import { SURVEY_ID } from "~/utils/envs.server";
import { capturePosthogEvent } from "~/utils/posthog";

export const GET_SURVEY_ELIGIBILITY = graphql(/* GraphQL */ `
  query GetSurveyEligibility($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      __typename
      user_id
      user_enrollments {
        id
        start_date
        expiration_date
      }
      product_surveys_aggregate {
        aggregate {
          count
        }
      }
      survey_dismissed
    }
  }
`);

export async function getSurveyEligibility(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const today = getToday(now);

    const result = await this.query({
      query: GET_SURVEY_ELIGIBILITY,
      variables: {
        userId,
      },
      fetchPolicy: "no-cache",
    });

    const data = result.data?.user_by_pk;

    if (!data) return false;

    if (data.product_surveys_aggregate.aggregate?.count !== 0) return false;

    if (
      data.survey_dismissed &&
      today <
        DateTime.fromISO(data.survey_dismissed).plus({ days: 2 }).toISODate()!
    )
      return false;

    const eligible = data.user_enrollments.some(
      ({ start_date, expiration_date }) => {
        if (!expiration_date) return false;
        const startDate = DateTime.fromISO(start_date);
        const expirationDate = DateTime.fromISO(expiration_date);

        const { days: enrollmentDays } = expirationDate
          .diff(startDate, ["days"])
          .toObject();
        const { days: elapsedDays } = DateTime.fromISO(today)
          .diff(startDate, ["days"])
          .toObject();

        if (!enrollmentDays || !elapsedDays) return false;

        return elapsedDays > 0.75 * enrollmentDays;
      },
    );

    if (eligible) {
      await capturePosthogEvent({
        distinctId: userId,
        event: "survey shown",
        properties: {
          $survey_id: SURVEY_ID,
        },
      });
    }

    return eligible;
  } catch (error) {
    logError({ error, log: "getSurveyEligibility" });
    return false;
  }
}
