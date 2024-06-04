import type { TaxonomyRankedEnrollment, User_Enrollment_Updates } from "~/graphql"

import { prepareRankedEnrollments } from "./prepareRankedEnrollments"

/**
 * Prepare RankedEnrollments UpdateSet
 */

export const prepareRankedEnrollmentsUpdateSet = (enrollments: TaxonomyRankedEnrollment[]) => {
  const rankedEnrollments = prepareRankedEnrollments(enrollments)

  const rankedEnrollmentsSet = rankedEnrollments.map(
    (enrollment): User_Enrollment_Updates => ({
      where: { id: { _eq: enrollment.id } },
      _set: { rank: enrollment.rank },
    }),
  )

  return rankedEnrollmentsSet
}
