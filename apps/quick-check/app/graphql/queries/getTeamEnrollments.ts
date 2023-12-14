import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

export const GET_TEAM_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetTeamEnrollments(
    $enrollmentIds: [uuid!]!
    $accountSubdomain: String!
  ) {
    user_enrollment(
      where: {
        id: { _in: $enrollmentIds }
        user: { tenant_id: { _eq: $accountSubdomain } }
      }
    ) {
      ...UserEnrollmentWithCounts
      user_questions_aggregate {
        aggregate {
          max {
            last_answered_on
          }
        }
      }
    }
  }
`);

export async function getTeamEnrollments(
  this: WithApolloClient,
  enrollmentIds: string[],
  accountSubdomain: string,
  _proxyData: GQLProxyData,
) {
  try {
    const { data } = await this.client.query({
      query: GET_TEAM_ENROLLMENTS,
      variables: { enrollmentIds, accountSubdomain },
      fetchPolicy: "no-cache",
    });

    return data?.user_enrollment.map((enrollment) => ({
      userId: enrollment.user_id,
      enrollmentId: enrollment.id,
      lastResponse:
        enrollment.user_questions_aggregate.aggregate?.max?.last_answered_on ??
        null,
      totalQuestions: enrollment.total.aggregate?.count ?? 0,
      questionsRetired: enrollment.retired.aggregate?.count ?? 0,
      questionsAttempted: enrollment.attempted.aggregate?.count ?? 0,
    }));
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type TeamEnrollmentsData = NonNullable<
  Awaited<ReturnType<typeof getTeamEnrollments>>
>;
