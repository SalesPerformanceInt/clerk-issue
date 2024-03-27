import { getContentStackClient } from "~/contentstack.server";

import { invariant, logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_ENROLLMENT_SKILL_DASHBOARD_DATA = graphql(/* GraphQL */ `
  query GetEnrollmentSkillDashboardData(
    $enrollmentId: uuid!
    $skillId: String
    $today: date!
  ) {
    user_enrollment_by_pk(id: $enrollmentId) {
      ...UserEnrollmentSkillWithCounts
      user {
        ...UserUnansweredQuestions
        first_name
        last_name
        tenant_id
        language_preference
      }
    }
  }
`);

export async function getEnrollmentSkillDashboardData(
  this: GraphQLClient,
  enrollmentId: string,
  skillId: string,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  const today = getToday(now);

  try {
    const { data } = await this.query({
      query: GET_ENROLLMENT_SKILL_DASHBOARD_DATA,
      variables: { enrollmentId, skillId, today },
      fetchPolicy: "no-cache",
    });

    const enrollment = data?.user_enrollment_by_pk;

    if (!enrollment) return null;

    const language = enrollment.user.language_preference;
    const contentStack = getContentStackClient(language);

    const enrollment_taxonomy = await contentStack.getTaxonomy(
      enrollment.taxonomy_id,
    );
    const skill_taxonomy = await contentStack.getTaxonomy(skillId);

    invariant(
      enrollment_taxonomy,
      "Enrollment Taxonomy not found in Contentstack",
    );
    invariant(skill_taxonomy, "Skill Taxonomy not found in Contentstack");

    return {
      ...enrollment,
      enrollment_taxonomy,
      skill_taxonomy,
      unanswered_questions:
        enrollment.user.unanswered_questions.aggregate?.count ?? 0,
    };
  } catch (error) {
    logError({ error, log: "getEnrollmentSkillDashboardData" });
    return null;
  }
}

export type EnrollmentSkillDashboardData = NonNullable<
  Awaited<ReturnType<typeof getEnrollmentSkillDashboardData>>
>;
