import { getUserApolloClientFromRequest } from "~/graphql"

/**
 * Get Enrollment Skill Dashboard
 */

type GetEnrollmentSkillDashboardProps = {
  enrollmentId: string
  skillId: string
}

export const getEnrollmentSkillDashboard = async (
  request: Request,
  { enrollmentId, skillId }: GetEnrollmentSkillDashboardProps,
) => {
  const userApolloClient = await getUserApolloClientFromRequest(request)

  const enrollmentSkillDashboardData = await userApolloClient.getEnrollmentSkillDashboardData(enrollmentId, skillId)

  const enrollmentSkillDashboardQuestions = userApolloClient.getEnrollmentSkillQuestions(enrollmentId, skillId)

  return {
    enrollmentSkillDashboardData,
    enrollmentSkillDashboardQuestions,
  }
}

/**
 * Enrollment Skill Dashboard Type
 */

export type EnrollmentSkillDashboard = NonNullable<Awaited<ReturnType<typeof getEnrollmentSkillDashboard>>>
