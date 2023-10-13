import invariant from "tiny-invariant";

import {
  User_Enrollment_Updates,
  getAdminApolloClientFromRequest,
} from "~/graphql";

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

export const rankAllEnrollments = (enrollments: EnrollmentScore[]) => {
  let rank = DEFAULT_ENROLLMENT_RANKING;
  let previousScore = DEFAULT_ENROLLMENT_SCORE;

  const rankedEnrollments = enrollments.map((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1;
    previousScore = enrollment.score;

    const rankedEnrollmentSet: User_Enrollment_Updates = {
      where: { id: { _eq: enrollment.id } },
      _set: { rank },
    };

    const leaderboardEnrollment = normalizeLeaderboardEnrollment(
      enrollment,
      rank,
    );

    return {
      rankedEnrollmentSet,
      leaderboardEnrollment,
    };
  });

  return rankedEnrollments;
};

const rankUntilUserEnrollment = async (
  request: Request,
  enrollments: EnrollmentScore[],
  userId: string,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  let rank = DEFAULT_ENROLLMENT_RANKING;
  let previousScore = DEFAULT_ENROLLMENT_SCORE;

  const userEnrollment = enrollments.find((enrollment, enrollmentIndex) => {
    rank = enrollment.score === previousScore ? rank : enrollmentIndex + 1;
    previousScore = enrollment.score;

    // TODO: Avoid per-enrollment mutation, move to per UserAnswer
    if (rank !== enrollment.rank) {
      adminApolloClient.updateUserEnrollment(enrollment.id, { set: { rank } });
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
  request: Request,
  taxonomyEnrollments: EnrollmentsByTaxonomy[],
  userId: string,
) => {
  const userRankedEnrollments = taxonomyEnrollments.map(
    async ({ taxonomy, enrollments }): Promise<LeaderboardUserEnrollment> => {
      const userRankedEnrollment = await rankUntilUserEnrollment(
        request,
        enrollments,
        userId,
      );

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
