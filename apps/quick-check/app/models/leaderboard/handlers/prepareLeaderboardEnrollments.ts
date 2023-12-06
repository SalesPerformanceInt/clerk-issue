import type { EnrollmentData, RankeableEnrollment } from "~/graphql";

import type { LeaderboardEnrollment } from "../leaderboard.types";

/**
 * Leaderboard Enrollments Helpers
 */

const ITEM_LIMIT = 5;

const isLeaderboardEnrollment = (
  enrollment: RankeableEnrollment,
): enrollment is LeaderboardEnrollment => !!enrollment.rank;

const sliceEnrollments = (
  enrollments: LeaderboardEnrollment[],
  userEnrollmentIndex: number,
) => {
  const LAST_THRESHOLD = enrollments.length - ITEM_LIMIT;

  if (userEnrollmentIndex < ITEM_LIMIT) return enrollments.slice(0, ITEM_LIMIT);
  if (userEnrollmentIndex >= LAST_THRESHOLD)
    return enrollments.slice(-ITEM_LIMIT);

  return enrollments.slice(
    userEnrollmentIndex - 2,
    userEnrollmentIndex + (ITEM_LIMIT - 2),
  );
};

/**
 * Prepare Leaderboard Enrollments
 */

export const prepareLeaderboardEnrollments = (
  enrollments: RankeableEnrollment[],
  userEnrollment: EnrollmentData,
) => {
  if (!enrollments.length) return null;

  const filteredEnrollments = enrollments.filter(isLeaderboardEnrollment);

  const userEnrollmentIndex = filteredEnrollments.findIndex(
    (enrollment) => enrollment.user_id === userEnrollment.user_id,
  );

  if (filteredEnrollments.length <= ITEM_LIMIT) return filteredEnrollments;
  if (!userEnrollment.rank || userEnrollmentIndex === -1) return null;

  const leaderboardEnrollments = sliceEnrollments(
    filteredEnrollments,
    userEnrollmentIndex,
  );

  return leaderboardEnrollments;
};
