import { invariant } from "quickcheck-shared"

import { getAdminApolloClientFromRequest } from "~/graphql"

/**
 * Get Enrollment Dashboard
 */

type GetEnrollmentDashboardProps = {
  request: Request
  enrollmentId: string
}

export const getEnrollmentDashboard = async ({ request, enrollmentId }: GetEnrollmentDashboardProps) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request)

  const enrollmentDashboardData = await adminApolloClient.getEnrollmentDashboardData(enrollmentId)
  invariant(enrollmentDashboardData, "EnrollmentDashboard Data not found")

  const enrollmentDashboardRankedEnrollments = adminApolloClient.getTaxonomyRankedEnrollments(
    [enrollmentDashboardData.taxonomy_id],
    { tenantId: enrollmentDashboardData.user.tenant_id },
  )
  const enrollmentDashboardQuestions = adminApolloClient.getEnrollmentQuestions(enrollmentId)

  return {
    enrollmentDashboardData,
    enrollmentDashboardRankedEnrollments,
    enrollmentDashboardQuestions,
  }
}

/**
 * Enrollment Dashboard Type
 */

export type EnrollmentDashboard = NonNullable<Awaited<ReturnType<typeof getEnrollmentDashboard>>>
