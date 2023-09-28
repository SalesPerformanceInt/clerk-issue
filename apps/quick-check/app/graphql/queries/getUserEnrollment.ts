import { contentStack } from "~/contentstack.server";

import { graphql, type WithApolloClient } from "~/graphql";

export const GET_USER_ENROLLMENT = graphql(/* GraphQL */ `
  query GetUserEnrollment($id: uuid!) {
    user_enrollment_by_pk(id: $id) {
      ...UserEnrollmentWithCounts
      user_questions {
        id
        taxonomy_id
        first_answer: user_answers(limit: 1, order_by: { created_at: asc }) {
          correct
          id
          created_at
        }
        current_answer: user_answers(limit: 1, order_by: { created_at: desc }) {
          correct
          id
          created_at
        }
        user_answers_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`);

export async function getUserEnrollment(this: WithApolloClient, id: string) {
  try {
    const { data } = await this.client.query({
      query: GET_USER_ENROLLMENT,
      variables: { id },
      fetchPolicy: "no-cache",
    });

    const enrollment = data?.user_enrollment_by_pk;

    if (!enrollment) return null;

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

    return {
      ...enrollment,
      user_questions,
      taxonomy,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type EnrollmentData = NonNullable<
  Awaited<ReturnType<typeof getUserEnrollment>>
>;