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
  const LAST_ITEMS = ITEM_LIMIT - 1;
  const LAST_THRESHOLD = enrollments.length - LAST_ITEMS;

  if (userEnrollmentIndex < ITEM_LIMIT) return enrollments.slice(1, ITEM_LIMIT);
  if (userEnrollmentIndex >= LAST_THRESHOLD)
    return enrollments.slice(-LAST_ITEMS);

  return enrollments.slice(
    userEnrollmentIndex - 1,
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

  const firstEnrollment = filteredEnrollments.at(0)!;
  const userEnrollmentIndex = filteredEnrollments.findIndex(
    (enrollment) => enrollment.user_id === userEnrollment.user_id,
  );

  if (filteredEnrollments.length <= ITEM_LIMIT) return filteredEnrollments;
  if (!firstEnrollment || !userEnrollment.rank || userEnrollmentIndex === -1)
    return null;

  const leaderboardEnrollments = sliceEnrollments(
    filteredEnrollments,
    userEnrollmentIndex,
  );

  return [firstEnrollment, ...leaderboardEnrollments];
};
