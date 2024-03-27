import { getContentStackClient } from "~/contentstack.server";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql";

export const GET_ENROLLMENT_SKILL_QUESTIONS = graphql(/* GraphQL */ `
  query GetEnrollmentSkillQuestions($enrollmentId: uuid!, $skillId: String) {
    user_enrollment_by_pk(id: $enrollmentId) {
      user_questions(where: { taxonomy_id: { _eq: $skillId } }) {
        id
        question_id
        taxonomy_id
        ...UserQuestionFirstLastAnswer
        user_answers {
          correct
          id
          created_at
        }
      }
      user {
        language_preference
      }
    }
  }
`);

export async function getEnrollmentSkillQuestions(
  this: GraphQLClient,
  enrollmentId: string,
  skillId: string,
  _proxyData: GQLProxyData,
) {
  try {
    const { data } = await this.query({
      query: GET_ENROLLMENT_SKILL_QUESTIONS,
      variables: { enrollmentId, skillId },
      fetchPolicy: "no-cache",
    });

    const enrollment = data?.user_enrollment_by_pk;

    if (!enrollment) return null;

    const language = enrollment.user.language_preference;
    const contentStack = getContentStackClient(language);

    const skill_taxonomy = await contentStack.getTaxonomy(skillId);

    const user_questions = await Promise.all(
      enrollment.user_questions.map(async (user_question) => {
        const questionData = await contentStack.getQuestionItem(
          user_question.question_id,
        );

        return {
          ...user_question,
          questionData,
          taxonomy: skill_taxonomy,
          taxonomy_name: skill_taxonomy?.display_name ?? "",
        };
      }),
    );

    return user_questions;
  } catch (error) {
    logError({ error, log: "getEnrollmentSkillQuestions" });
    return null;
  }
}

export type EnrollmentSkillDashboardQuestions = NonNullable<
  Awaited<ReturnType<typeof getEnrollmentSkillQuestions>>
>;
