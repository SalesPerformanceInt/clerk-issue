import type { Expand } from "quickcheck-shared";

import { type GetUserEnrollmentScoresQuery } from "~/graphql";

/**
 * Enrollment Score
 */

export type EnrollmentScore =
  GetUserEnrollmentScoresQuery["user_enrollment"][number];

/**
 * Enrollments By Taxonomy
 */

type Taxonomy = {
  display_name: string;
  uid: string;
  title: string;
};

export type EnrollmentsByTaxonomyId = Record<string, EnrollmentScore[]>;
export type EnrollmentsByTaxonomy = {
  taxonomy: Taxonomy;
  enrollments: EnrollmentScore[];
};

/**
 * Leaderboard Enrollment
 */

export type LeaderboardUserEnrollment = {
  displayName: string;
  rank: number;
} & Expand<Omit<EnrollmentScore, "user_id" | "__typename" | "rank">>;
