import { getContentStackClient } from "~/contentstack.server";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_ENROLLMENT = graphql(/* GraphQL */ `
  query GetUserEnrollment($id: uuid!, $today: date!) {
    user_enrollment_by_pk(id: $id) {
      ...UserEnrollmentWithCounts
      user_questions {
        id
        taxonomy_id
        retired_on
        ...UserQuestionFirstLastAnswer
      }
      user {
        ...UserUnansweredQuestions
        first_name
        last_name
        tenant_id
        language_preference
        show_leaderboard
      }
    }
  }
`);

export async function getUserEnrollment(
  this: WithApolloClient,
  id: string,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  const today = getToday(now);

  try {
    const { data } = await this.client.query({
      query: GET_USER_ENROLLMENT,
      variables: { id, today },
      fetchPolicy: "no-cache",
    });

    const enrollment = data?.user_enrollment_by_pk;

    if (!enrollment) return null;

    const language = enrollment.user.language_preference;
    const contentStack = getContentStackClient(language);

    const user_questions = await Promise.all(
      enrollment.user_questions.map(async (user_question) => {
        const taxonomy = await contentStack.getTaxonomy(
          user_question.taxonomy_id,
        );
        return {
          ...user_question,
          taxonomy,
          taxonomy_name: taxonomy?.display_name ?? "",
        };
      }),
    );

    const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);
    const expired =
      !!enrollment.expiration_date && today >= enrollment.expiration_date;

    return {
      ...enrollment,
      user_questions,
      taxonomy,
      expired,
      unanswered_questions:
        enrollment.user.unanswered_questions.aggregate?.count ?? 0,
    };
  } catch (error) {
    logError({ error, log: "getUserEnrollment" });
    return null;
  }
}

export type EnrollmentData = NonNullable<
  Awaited<ReturnType<typeof getUserEnrollment>>
>;
