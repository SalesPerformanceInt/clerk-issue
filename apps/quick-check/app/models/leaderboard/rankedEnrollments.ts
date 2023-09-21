import invariant from "tiny-invariant";

import { getAdminApolloClient } from "~/graphql";

import type {
  EnrollmentScore,
  EnrollmentsByTaxonomy,
  LeaderboardUserEnrollment,
} from "./leaderboard.types";

export const DEFAULT_ENROLLMENT_RANKING = 1;
export const DEFAULT_ENROLLMENT_SCORE = 0;

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
  let rank = DEFAULT_ENROLLMENT_RANKING;
  let previousScore = DEFAULT_ENROLLMENT_SCORE;

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
  const adminApolloClient = getAdminApolloClient();

  let rank = DEFAULT_ENROLLMENT_RANKING;
  let previousScore = DEFAULT_ENROLLMENT_SCORE;

  const userEnrollment = enrollments.find((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1;
    previousScore = enrollment.score;

    if (rank !== enrollment.rank) {
      adminApolloClient.updateUserEnrollment(enrollment.id, { rank });
    }

    return enrollment.user_id === userId;
  });

  if (!userEnrollment) return null;

  const userRankedEnrollment = normalizeLeaderboardEnrollment(
    userEnrollment,
    rank,
  );

  return userRankedEnrollment;
};

/**
 * Single User Ranked Enrollments
 */

export const getUserRankedEnrollments = (
  taxonomyEnrollments: EnrollmentsByTaxonomy[],
  userId: string,
) => {
  const userRankedEnrollments = taxonomyEnrollments.map(
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

  return userRankedEnrollments;
};
