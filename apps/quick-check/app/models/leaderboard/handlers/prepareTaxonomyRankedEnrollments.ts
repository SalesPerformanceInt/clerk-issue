import { User_Enrollment_Updates } from "~/graphql";

import type { EnrollmentScore } from "../leaderboard.types";

const DEFAULT_ENROLLMENT_RANKING = 1;
const DEFAULT_ENROLLMENT_SCORE = 0;

/**
 * Prepare Taxonomy Ranked Enrollments
 */

export const prepareTaxonomyRankedEnrollments = (
  enrollments: EnrollmentScore[],
) => {
  let rank = DEFAULT_ENROLLMENT_RANKING;
  let previousScore = DEFAULT_ENROLLMENT_SCORE;

  const rankedEnrollments = enrollments.map((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1;
    previousScore = enrollment.score;

    const rankedEnrollmentSet: User_Enrollment_Updates = {
      where: { id: { _eq: enrollment.id } },
      _set: { rank },
    };

    return rankedEnrollmentSet;
  });

  return rankedEnrollments;
};
