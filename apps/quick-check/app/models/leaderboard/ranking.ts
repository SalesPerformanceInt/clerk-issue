import invariant from "tiny-invariant";

import { ENROLLMENT_RANKING, ENROLLMENT_SCORE } from "~/utils/constants";

import type {
  EnrollmentScore,
  EnrollmentsByTaxonomy,
  LeaderboardUserEnrollment,
} from "./leaderboard.types";

/**
 * Normalize Enrollment
 */

const normalizeLeaderboardEnrollment = (
  enrollment: EnrollmentScore,
  rank: number,
) => ({
  id: enrollment.id,
  score: enrollment.score,
  taxonomy_id: enrollment.taxonomy_id,
  rank: rank,
});

/**
 * Rank Enrollments
 */

const rankAllEnrollments = (enrollments: EnrollmentScore[]) => {
  let rank = ENROLLMENT_RANKING;
  let previousScore = ENROLLMENT_SCORE;

  const rankedEnrollments = enrollments.map((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1;
    previousScore = enrollment.score;

    return normalizeLeaderboardEnrollment(enrollment, rank);
  });

  return rankedEnrollments;
};

const rankUntilUserEnrollment = (
  enrollments: EnrollmentScore[],
  userId: string,
) => {
  let rank = ENROLLMENT_RANKING;
  let previousScore = ENROLLMENT_SCORE;

  const rankedEnrollment = enrollments.find((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1;
    previousScore = enrollment.score;

    if (enrollment.user_id === userId)
      return normalizeLeaderboardEnrollment(enrollment, rank);
  });

  return rankedEnrollment;
};

/**
 * Single User Ranked Enrollments
 */

export const getUserRankedEnrollments = (
  taxonomyEnrollments: EnrollmentsByTaxonomy[],
  userId: string,
) => {
  const rankedEnrollmentsByTaxonomy = taxonomyEnrollments.map(
    ({ taxonomy, enrollments }): LeaderboardUserEnrollment => {
      const userRankedEnrollment = rankUntilUserEnrollment(enrollments, userId);

      invariant(
        userRankedEnrollment,
        `User Enrollment Ranking not possible: ${userId} - ${taxonomy.uid}`,
      );

      return {
        ...userRankedEnrollment,
        displayName: taxonomy.display_name,
      };
    },
  );

  return rankedEnrollmentsByTaxonomy;
};
