import type { EnrollmentData, RankeableEnrollment } from "~/graphql";

import type { LeaderboardEnrollment } from "../leaderboard.types";

/**
 * Leaderboard Enrollments Helpers
 */

const ITEM_LIMIT = 5;

const filterEnrollmentsByRank = (enrollments: RankeableEnrollment[]) => {
  return enrollments.filter(
    (enrollment) => enrollment.rank,
  ) as LeaderboardEnrollment[];
};

const sliceEnrollments = (
  enrollments: LeaderboardEnrollment[],
  userEnrollmentIndex: number,
) => {
  const LAST_ITEMS = ITEM_LIMIT - 1;
  const LAST_THRESHOLD = enrollments.length - LAST_ITEMS - 1;

  if (userEnrollmentIndex < ITEM_LIMIT) return enrollments.slice(1, ITEM_LIMIT);
  if (userEnrollmentIndex >= LAST_THRESHOLD)
    return enrollments.slice(-LAST_ITEMS);

  return enrollments.slice(userEnrollmentIndex - 1, userEnrollmentIndex + 3);
};

/**
 * Prepare Leaderboard Enrollments
 */

export const prepareLeaderboardEnrollments = (
  enrollments: RankeableEnrollment[],
  userEnrollment: EnrollmentData,
) => {
  if (!enrollments.length) return null;

  const filteredEnrollments = filterEnrollmentsByRank(enrollments);

  const userEnrollmentIndex = filteredEnrollments.findIndex(
    (enrollment) => enrollment.user_id === userEnrollment.user_id,
  );

  if (filteredEnrollments.length <= ITEM_LIMIT) return filteredEnrollments;
  if (!userEnrollment.rank || userEnrollmentIndex === -1) return null;

  const firstEnrollment = filteredEnrollments.at(0)!;
  const leaderboardEnrollments = sliceEnrollments(
    filteredEnrollments,
    userEnrollmentIndex,
  );

  return [firstEnrollment, ...leaderboardEnrollments];
};
