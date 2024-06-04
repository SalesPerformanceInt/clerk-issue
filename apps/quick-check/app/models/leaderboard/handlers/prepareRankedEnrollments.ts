import type { TaxonomyRankedEnrollment } from "~/graphql"

/**
 * Prepare RankedEnrollments
 */

export const prepareRankedEnrollments = (enrollments: TaxonomyRankedEnrollment[]) => {
  let rank = 1
  let previousScore = 0

  const rankedEnrollments = enrollments.map((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1
    previousScore = enrollment.score

    return { ...enrollment, rank }
  })

  return rankedEnrollments
}
